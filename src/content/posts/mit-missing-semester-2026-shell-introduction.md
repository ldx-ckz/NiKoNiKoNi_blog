---
title: MIT Missing Semester 2026 第一课：Shell 入门
published: 2026-07-26
description: MIT Missing Semester 2026 第一课学习笔记，介绍 Shell、路径、文本工具、管道、重定向与 Bash 脚本基础。
tags: [Shell, Bash, CLI]
category: [MIT Missing Semester, Tutorial]
section: notes
author: nikonikoni
draft: false
---

# MIT Missing Semester 2026 第一课：Shell 入门

## Shell 的作用

现代计算机通常通过图形界面接收操作，但图形界面只能提供预先设计好的按钮和流程。Shell 提供了一种文本接口，可以运行程序、传入参数、连接输入与输出，并将重复操作组织成可复用的自动化流程。

Shell、终端和命令行程序是三个不同的概念：

| 概念 | 作用 | 常见例子 |
|---|---|---|
| 终端 | 显示文本输出并传递键盘输入 | Windows Terminal、Terminal.app |
| Shell | 解析命令、变量、管道和重定向 | Bash、Zsh、PowerShell |
| 命令行程序 | 执行具体任务 | `grep`、`find`、`python` |

以以下命令为例：

```bash
echo hello
```

Shell 首先解析命令，确定需要执行 `echo`，再把 `hello` 作为参数传给它。程序产生的标准输出随后由终端显示。

## 命令与参数

Shell 通常使用空白字符分隔命令和参数：

```bash
echo hello world
```

第一个单词是命令，后续单词是传入程序的参数。如果参数包含空格或特殊字符，需要使用引号或转义：

```bash
cd "My Photos"
cd My\ Photos
```

常见引号的行为不同：

- 单引号通常把内容按字面量处理；
- 双引号保留参数整体，同时允许变量与命令替换；
- `$'...'` 支持 `\n` 等 ANSI-C 转义。

引号不仅影响显示，还决定变量、通配符和特殊字符由 Shell 如何解释。处理文件名或用户输入时，正确引用变量能够避免参数被意外拆分。

## 使用帮助系统

命令行工具通常通过手册和帮助选项提供使用说明：

```bash
man date
date --help
```

`man` 适合查看完整手册，`--help` 通常提供较短的参数说明。面对陌生命令时，可以采用以下顺序：

1. 确认命令的参数结构；
2. 查找目标选项；
3. 在测试目录中使用小规模数据验证；
4. 确认行为后再处理真实文件。

这种方法比记忆固定命令更可靠，也能降低直接复制网络命令带来的风险。

## 工作目录与路径

每个 Shell 进程都有当前工作目录。许多程序在没有收到明确路径时，会对当前目录执行操作。

```bash
pwd
cd /
cd ~
cd ..
ls
```

这些命令和路径分别表示：

| 写法 | 含义 |
|---|---|
| `pwd` | 显示当前工作目录 |
| `/` | Unix 文件系统根目录 |
| `~` | 当前用户的 home 目录 |
| `.` | 当前目录 |
| `..` | 父目录 |
| `cd` | 切换当前 Shell 的工作目录 |
| `ls` | 列出目录内容 |

绝对路径从 `/` 开始，描述从文件系统根到目标的完整位置：

```text
/home/alice/project/data.txt
```

相对路径以当前工作目录为起点：

```text
project/data.txt
```

相对路径是否正确取决于当前工作目录。遇到文件不存在的问题时，应先检查 `pwd`、目录内容和文件名，而不是立即使用更高权限。

## PATH 与命令查找

输入不包含路径的命令时，Shell 会使用 `PATH` 环境变量查找可执行程序。

```bash
echo "$PATH"
which echo
```

`PATH` 包含一组按顺序排列的目录。Shell 从前到后搜索与命令同名的可执行文件，并运行首先找到的版本。

因此，即使程序已经安装，也可能因为以下原因出现 `command not found`：

- 安装目录不在 `PATH` 中；
- 环境变量修改尚未加载；
- 命令名称不正确；
- 当前 Shell 使用了不同的环境配置。

当系统中存在多个同名程序时，`which` 可以帮助确认实际运行的是哪个文件。也可以使用绝对路径绕过 `PATH`：

```bash
/bin/echo hello
```

## 常用文本工具

Unix 命令行环境强调使用功能相对单一的工具，并通过统一的文本接口组合它们。

| 工具 | 主要用途 |
|---|---|
| `cat` | 输出文件内容 |
| `sort` | 按行排序 |
| `uniq` | 合并相邻的重复行 |
| `head` | 查看文件开头 |
| `tail` | 查看文件结尾 |
| `grep` | 查找匹配的行 |
| `sed` | 流式转换或编辑文本 |
| `find` | 按条件递归查找文件 |
| `awk` | 按记录和字段处理文本 |

### sort 与 uniq

`uniq` 只会处理相邻的重复行，因此统计全部重复项时通常需要先排序：

```bash
sort names.txt | uniq -c
```

### grep

`grep` 根据模式查找匹配行：

```bash
grep "TODO" notes.txt
grep -r "TODO" .
```

模式通常可以使用正则表达式。递归搜索前应确认搜索目录，避免在过大的目录中执行不必要的扫描。

### sed

`sed` 可以执行文本替换：

```bash
sed 's/old/new/g' file.txt
```

加入 `-i` 后通常会直接修改原文件：

```bash
sed -i 's/old/new/g' file.txt
```

安全做法是先运行不带 `-i` 的版本，检查标准输出，再决定是否写回文件。

### find

`find` 可以按照名称、类型、大小和修改时间筛选文件：

```bash
find ~/Downloads -type f -name "*.zip" -mtime +30
```

复杂操作中可以通过 `-exec` 对匹配文件执行命令，但在加入修改或删除动作前，应先输出匹配结果以确认范围。

### awk

`awk` 适合处理具有规则字段结构的文本：

```bash
awk '{print $2}' data.txt
awk -F, '{print $2}' data.csv
```

第一条命令按空白分隔字段，第二条使用逗号作为分隔符。除字段提取外，`awk` 还可以过滤记录、计算统计值和重组输出。

## 标准输入、标准输出与标准错误

命令行程序通常使用三条标准流：

| 标准流 | 文件描述符 | 作用 |
|---|---:|---|
| stdin | 0 | 输入数据 |
| stdout | 1 | 正常结果 |
| stderr | 2 | 错误与诊断信息 |

默认情况下，stdin 来自键盘，stdout 和 stderr 显示在终端。Shell 可以把这些流连接到文件：

```bash
command < input.txt
command > output.txt
command >> output.txt
command 2> error.txt
command > all.txt 2>&1
```

其中：

- `<` 从文件读取标准输入；
- `>` 覆盖文件并写入标准输出；
- `>>` 追加标准输出；
- `2>` 单独重定向标准错误；
- `2>&1` 让标准错误指向当前标准输出的目标。

重定向会从左到右处理，因此调整顺序可能改变最终结果。对重要文件使用 `>` 前，应确认目标文件是否允许被覆盖。

## 管道与程序组合

管道符 `|` 把左侧程序的 stdout 连接到右侧程序的 stdin：

```bash
producer | transformer | consumer
```

例如：

```bash
printf 'pear\napple\npear\n' | sort | uniq -c | sort -nr
```

这个管道依次执行：

1. 产生多行文本；
2. 对文本排序，使相同内容相邻；
3. 统计每种内容的数量；
4. 按数字降序排列。

管道传递的是字节流，而不是文件本身。stderr 默认不会进入管道，除非显式重定向。

调试复杂管道时，适合从左向右逐步扩展：

```bash
producer
producer | filter
producer | filter | sort
producer | filter | sort | uniq -c
```

每增加一个步骤，都应先观察当前数据的格式和含义。

`tee` 可以在保留管道输出的同时把内容写入文件：

```bash
command | tee full.log | grep CRITICAL
```

完整输出进入 `full.log`，而终端只显示经过筛选的行。

## 退出状态与条件执行

Unix 程序通常使用退出状态报告执行结果：

- `0` 表示成功；
- 非零值表示失败。

上一条命令的退出状态保存在 `$?`：

```bash
command
echo "$?"
```

Shell 的条件控制主要依据退出状态，而不是命令输出的文字：

```bash
command1 && command2
command1 || command2
```

- `&&` 只在前一个命令成功时执行后一个命令；
- `||` 只在前一个命令失败时执行后一个命令。

## Bash 条件与循环

Bash 不只是交互式命令环境，也是一门脚本语言。

### 条件语句

```bash
if [ -f "$file" ]; then
    echo "file exists"
else
    echo "file does not exist"
fi
```

`test` 或 `[` 可以判断文件、字符串和数值条件。变量通常应放在双引号中，避免空值或空格导致参数结构发生变化。

### for 循环

```bash
for item in a b c; do
    echo "$item"
done
```

### while 循环

```bash
while command; do
    another_command
done
```

只要条件命令持续返回成功状态，`while` 就会继续执行。

### 命令替换

`$(...)` 会执行内部命令，并把 stdout 替换到原位置：

```bash
backup="notes_$(date +%Y-%m-%d).txt"
```

与旧式反引号相比，`$(...)` 更容易阅读并且支持嵌套。

## Shell 脚本执行

Shell 命令可以保存为 `.sh` 文件。脚本开头通常包含 shebang：

```bash
#!/usr/bin/env bash
```

shebang 指定直接执行文件时使用的解释器。

脚本可以显式交给 Bash：

```bash
bash script.sh
```

也可以增加执行权限后直接运行：

```bash
chmod +x script.sh
./script.sh
```

直接执行依赖正确的 shebang 和执行权限。

## 更严格的 Bash 模式

常见脚本会启用：

```bash
set -euo pipefail
```

这些选项的基本含义是：

- `-e`：未处理的命令失败时尽早退出；
- `-u`：使用未定义变量时报错；
- `pipefail`：管道中的关键命令失败时让整个管道报告失败。

严格模式可以减少静默错误，但不能代替测试和错误处理。ShellCheck 等静态分析工具可以发现许多常见的引用、条件和可移植性问题。

## Shell 的适用边界

Shell 适合：

- 组合现有命令；
- 批量处理文件；
- 编写构建、部署和环境初始化入口；
- 自动化短小、线性的系统任务。

当脚本需要复杂数据结构、大量错误处理、并发控制或系统化测试时，Python 等通用编程语言通常更容易维护。

Shell 的优势不在于替代所有编程语言，而在于用统一的输入输出模型，把已有工具高效组合成新的工作流。

## 参考来源

- [MIT Missing Semester 2026：Course Overview + Introduction to the Shell](https://missing.csail.mit.edu/2026/course-shell/)
- [MIT Missing Semester 2026 课程主页](https://missing.csail.mit.edu/)
- [简体中文社区翻译：课程概览 + Shell 入门](https://missing-semester-cn.github.io/2026/course-shell/)
- [YouTube：Lecture 1 — Course Overview + Introduction to the Shell](https://www.youtube.com/watch?v=MSgoeuMqUmU)
