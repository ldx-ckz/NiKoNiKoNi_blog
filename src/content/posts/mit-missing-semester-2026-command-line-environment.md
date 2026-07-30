---
title: MIT Missing Semester 2026 第二课：命令行环境
image: /assets/post-card/post-card-12.jpg
cardImagePosition: center 15%
published: 2026-07-30
updated: 2026-07-30
description: MIT Missing Semester 2026 第二课笔记，介绍 CLI 接口、环境变量、信号与作业控制、SSH、tmux、dotfiles、Shell 中的 AI 及配套实践。
tags:
  - Shell
  - SSH
  - tmux
  - CLI
category:
  - MIT Missing Semester
  - Tutorial
section: notes
author: nikonikoni
draft: false
---

# MIT Missing Semester 2026 第二课：命令行环境

命令行环境建立在一组可组合的约定之上。程序通过参数接收显式指令，通过标准流交换数据，通过环境变量接收运行背景，通过返回码报告结果，并通过信号响应异步事件。SSH、tmux 和 dotfiles 则把这一模型扩展到远程主机、长期会话和可复现配置。

## 命令行程序的五种接口

| 接口 | 传递内容 | 常见形式 |
|---|---|---|
| 参数 | 本次调用的显式字符串 | `ls -l folder/` |
| 流 | 连续字节或文本 | stdin、stdout、stderr |
| 环境变量 | 进程启动时附带的名字—值对 | `PATH`、`HOME`、`TZ` |
| 返回码 | 程序结束时的整数状态 | `0` 成功，非 `0` 失败 |
| 信号 | 操作系统层面的异步通知 | `SIGINT`、`SIGTERM` |

参数说明本次调用要处理什么，环境变量提供程序运行的背景，标准流传递主要数据，返回码传递状态，信号则处理程序运行期间发生的异步事件。

## 参数、选项与 glob

### 参数由程序解释

执行：

```bash
ls -l folder/
```

Shell 会找到并启动 `ls`，向它传递类似下面的参数：

```text
argv[0] = ls
argv[1] = -l
argv[2] = folder/
```

Shell 负责分词和展开，`ls` 自己决定 `-l` 和 `folder/` 的含义。同一个 `-a` 在不同程序中可以代表不同功能。

Shell 脚本中常见的特殊参数包括：

| 写法 | 含义 |
|---|---|
| `$0` | 脚本或命令名 |
| `$1`…`$9` | 第 1 到第 9 个位置参数 |
| `"$@"` | 保持参数边界地展开全部位置参数 |
| `$#` | 位置参数个数 |

转发脚本参数时通常应写：

```bash
some_command "$@"
```

### 选项是一种生态约定

常见形式：

- `-a`：单字母短选项；
- `--all`：长选项；
- `-la`：组合若干不带值的短选项；
- `-n 5`、`--color=auto`：选项携带值；
- `--help`、`--version`、`--verbose`：常见但并非强制支持。

`ls -la` 与 `ls -al` 对独立开关通常等价，但不能推导出所有程序的选项顺序都无关。某些程序会按顺序处理设置，后面的选项可能覆盖前面的选项。

特殊参数 `--` 通常表示停止解析选项，因此能安全处理以 `-` 开头的文件名：

```bash
touch -- -myfile
rm -- -myfile
```

也可以通过显式相对路径避免歧义：

```bash
rm ./-myfile
```

### glob 由 Shell 提前展开

```bash
rm *.py
```

若当前目录有 `main.py` 和 `utils.py`，Shell 通常先展开为：

```bash
rm main.py utils.py
```

`rm` 一般看不到原始的 `*.py`。常见模式：

| 模式 | 含义 |
|---|---|
| `*` | 零个或多个字符 |
| `?` | 恰好一个字符 |
| `{a,b,c}` | 花括号展开为多个词 |

```bash
touch folder/{a,b,c}.py
convert image.{png,jpg}
cp /project/{setup,build,deploy}.sh /newpath/
mv *{.py,.sh} folder/
```

glob 与正则表达式是两种不同的模式语言。递归 `**` 是否可用取决于 Shell 和配置；Bash 通常需要启用 `globstar`：

```bash
shopt -s globstar
printf '%s\n' **/*.py
```

涉及删除时，应先用无副作用命令检查 glob 的展开结果。

## 标准流、重定向与管道

### 管道具有流式和并发性质

```bash
cat myfile | grep -P '\d+' | uniq -c
```

Shell 会建立管道并启动各阶段，而不是等前一个程序完全结束才启动下一个。上游可以一边产生数据，下游一边消费数据。

默认情况下，`|` 只把前一个命令的 stdout 连接到后一个命令的 stdin：

```text
command A stdout ──> command B stdin
command A stderr ──> 终端或原有目的地
```

### 三个标准流

| 文件描述符 | 名称 | 默认用途 |
|---|---|---|
| `0` | stdin | 输入 |
| `1` | stdout | 正常输出 |
| `2` | stderr | 诊断与错误 |

```bash
echo "hello" > output.txt
echo "world" >> output.txt
ls missing 2> errors.txt
ls missing &> all-output.txt
grep "pattern" < input.txt
command > /dev/null 2>&1
```

重定向按从左到右处理：

```bash
command >all.log 2>&1
```

先将 stdout 指向文件，再让 stderr 复制 stdout 当前的目标，所以两者都进入文件。相反：

```bash
command 2>&1 >all.log
```

stderr 先复制原 stdout，之后只有 stdout 被改到文件。

许多工具把 `-` 约定为 stdin：

```bash
echo "hello" | grep "hello" -
```

该行为由具体程序定义，并非 Shell 强制。

## `fzf`：通用交互式筛选器

`fzf` 从 stdin 读取逐行候选列表，提供交互式模糊查找界面，并把确认的选择写到 stdout：

```bash
find . -type f | fzf
history | fzf
ps aux | fzf
fzf < notes.txt
```

它不必理解输入是文件名、历史命令还是进程；它处理的是一行一项的文本。单独执行：

```bash
history | fzf
```

只会输出选中项，不会自动执行。可以保存结果：

```bash
selected=$(history | fzf)
printf '%s\n' "$selected"
```

不应对不可信结果随意使用 `eval`。文件名可能包含换行符时，应使用支持 NUL 分隔的生产者和消费者，例如 `find -print0`、`fzf --read0 --print0` 与 `xargs -0`。

`grep` 是非交互式过滤器，输出全部匹配行；`fzf` 是交互式筛选器，默认输出用户确认的选择。

## 变量、环境与两种替换

### 赋值、读取和引号

```bash
foo=bar
echo "$foo"
echo '$foo'
```

- `foo=bar` 是赋值；
- `foo = bar` 会被解析为运行名为 `foo` 的命令；
- 单引号保持字面值；
- 双引号允许变量与命令替换，同时抑制词拆分和文件名展开；
- 变量展开通常应加双引号。

### 命令替换

```bash
files=$(ls)
printf '%s\n' "$files"
```

`$(command)` 捕获命令的 stdout，并把它作为字符串参与当前命令。Bash 会删除命令替换结果末尾的换行符，因此它不适合无损保存任意字节或文件名列表。

### 进程替换

```bash
diff <(ls src) <(ls docs)
```

`<(command)` 提供一个可读取的文件名；读取该文件即可获得命令的 stdout。Bash 通常通过 FIFO 或 `/dev/fd/N` 实现，不保证创建磁盘临时文件。

三种形式的差别：

```text
A | B      A 的 stdout 连接到 B 的 stdin
$(A)       A 的 stdout 变成字符串
<(A)       A 的 stdout 通过一个文件名式接口提供
```

`diff` 需要两个独立文件名，因此进程替换很合适：

```bash
diff <(sort file1.txt) <(sort file2.txt)
```

反向形式 `>(command)` 把写入文件式通道的数据交给命令的 stdin。进程替换是 Bash、zsh 等 Shell 的扩展，不属于严格 POSIX `sh`。

### Shell 变量与环境变量

```bash
name=Alice
bash -c 'echo "$name"'     # 子 Bash 通常看不到

export name
bash -c 'echo "$name"'     # 输出 Alice
```

普通 Shell 变量只存在于当前 Shell；带 export 属性的变量会复制给未来的子进程：

```text
父进程环境 ──复制──> 新子进程环境
```

子进程不能通过普通 `export` 反向修改父进程，已经运行的其他程序也不会自动获得新值。

只为单次命令设置环境：

```bash
TZ=Asia/Tokyo date
DEBUG=1 python app.py
LANG=C sort names.txt
```

持久导出：

```bash
export DEBUG=1
```

查看和删除：

```bash
printenv
printenv HOME
unset DEBUG
```

`DEBUG=` 表示变量存在但为空，`unset DEBUG` 表示变量不存在；程序可能区分两者。

### `PATH` 是有顺序的搜索目录列表

```bash
printf '%s\n' "$PATH" | tr ':' '\n'
command -v python
```

Shell 按顺序寻找第一个符合条件的命令。追加和前置有不同优先级：

```bash
export PATH="$PATH:$HOME/mybin"   # 优先级较低
export PATH="$HOME/mybin:$PATH"   # 优先级较高
```

加入的是包含可执行文件的目录，而不是文件本身。优先使用绝对路径或 `$HOME` 派生路径，避免相对条目在 `cd` 后指向不同位置。

直接修改只影响当前 Shell 及其未来子进程。持久化通常写入相应启动文件，例如交互式 Bash 常使用 `~/.bashrc`，zsh 常使用 `~/.zshrc`。Bash 实际读取哪个文件取决于 login/interactive 等启动模式。

```bash
source ~/.bashrc
hash -r
```

`source` 在当前 Shell 中重读配置；`hash -r` 清除 Bash 的命令位置缓存。

## 返回码与条件执行

Unix 约定 `0` 表示成功，非 `0` 表示失败：

```bash
command
status=$?
printf 'status=%d\n' "$status"
```

应在目标命令后立即保存 `$?`，因为后续命令会覆盖它。

```bash
grep -q "pattern" file.txt && echo "found"
grep -q "pattern" file.txt || echo "not found"
```

`&&` 与 `||` 根据退出状态短路。`if` 和 `while` 也执行命令并检查返回码：

```bash
if grep -q "pattern" file.txt; then
    echo "found"
fi

while IFS= read -r line; do
    printf '%s\n' "$line"
done < file.txt
```

不同非零码可能表达不同状态。例如工具可能区分“未找到匹配”和“执行错误”，应查阅具体手册。

## 信号与终端控制

### 常见信号

| 操作 | 常见信号 | 默认意图 |
|---|---|---|
| `Ctrl-C` | `SIGINT` | 中断前台任务 |
| `Ctrl-\` | `SIGQUIT` | 退出并可能产生 core dump |
| `Ctrl-Z` | `SIGTSTP` | 暂停前台任务 |
| `kill PID` | `SIGTERM` | 请求正常结束 |
| `kill -STOP PID` | `SIGSTOP` | 无条件暂停 |
| `kill -KILL PID` | `SIGKILL` | 无条件终止 |

终端驱动通常把特殊控制键转换为信号，并发送给终端的前台进程组。信号不是经 stdin 传入的普通文本。

多数信号允许进程使用默认动作、忽略或安装自定义处理器。`SIGKILL` 与 `SIGSTOP` 不能被捕获、阻塞或忽略。正常结束进程时应先尝试 `SIGTERM`，让程序完成清理；确实无响应时才考虑 `SIGKILL`。

`kill` 的准确含义是发送信号：

```bash
kill -TERM "$pid"
kill -INT "$pid"
kill -0 "$pid"
```

`kill -0` 不发送实际信号，而以返回码报告当前调用者能否向目标 PID 发信号。PID 复用和权限会限制它作为长期身份检查的可靠性。

### 自定义信号处理

```python
import signal
import time

def handler(signum, frame):
    print("\nreceived SIGINT; continuing")

signal.signal(signal.SIGINT, handler)

i = 0
while True:
    time.sleep(0.1)
    print(f"\r{i}", end="", flush=True)
    i += 1
```

这里是捕获 `SIGINT` 后执行处理器，不是完全忽略。完全忽略可使用 `signal.SIG_IGN`。若程序没有改变 `SIGQUIT` 的处理方式，`Ctrl-\` 仍可能触发默认终止动作。

## 作业控制

### 进程、作业、前台和后台

- 进程：操作系统正在运行的程序，以 PID 标识；
- 作业：当前 Shell 管理的一条命令或一组管道，以作业号标识；
- 前台：占用当前终端的前台进程组，可读取终端输入；
- 后台：Shell 不等待其结束，提示符可继续接收命令。

```bash
sleep 1000
sleep 1000 &
```

`&` 只表示异步执行，不保证进程脱离 Shell 或控制终端。后台程序仍可能向终端写输出；若尝试读取终端输入，通常会受到 `SIGTTIN` 并暂停。

### 暂停、继续和终止

```text
前台运行 --Ctrl-Z/SIGTSTP--> 暂停
暂停 --fg %1--> 前台继续
暂停 --bg %1--> 后台继续
```

```bash
jobs
jobs -l
fg %1
bg %1
kill %1
```

`%1` 是当前 Shell 的作业号，PID 是操作系统标识。另一个终端里的 `jobs` 通常看不到本 Shell 的作业。

`$!` 表示最近一个异步管道的 PID，通常是该管道最后一个命令：

```bash
long_command &
pid=$!
wait "$pid"
```

### `nohup`、`disown` 与持久任务

```bash
nohup python train.py >train.log 2>&1 &
```

- `nohup` 使命令忽略 `SIGHUP`；
- `&` 让 Shell 不等待；
- 显式重定向把输出保存到日志。

已经启动的 Bash 作业可使用：

```bash
disown %1
```

将其从当前 Shell 作业表移除。关闭终端后进程是否存活还取决于 Shell、会话、控制终端和程序的信号处理。需要保留完整交互界面时适合使用 tmux；需要重启策略、开机启动和正式服务管理时适合 systemd 等服务管理器。

### `trap` 与退出清理

```bash
#!/usr/bin/env bash

tmpdir=$(mktemp -d)

cleanup() {
    rm -rf -- "$tmpdir"
}

trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM
```

`EXIT` 是 Bash 的退出事件，不是操作系统信号。若只对 INT/TERM 安装 `cleanup`，默认终止动作会被替换，处理器返回后脚本不一定自动退出。把信号转换为 `exit`，再由唯一的 EXIT trap 清理，可降低重复清理风险。

清理函数只能作用于脚本自己创建并验证过的精确路径。

## SSH：远程命令、身份和数据传输

### 交互登录与远程执行

```bash
ssh alice@server.example
```

SSH 也可以非交互执行命令：

```bash
ssh alice@server.example ls | wc -l
ssh alice@server.example 'ls | wc -l'
```

第一条通常在远端运行 `ls`、在本地运行 `wc -l`；第二条把整个管道作为远程命令，因此两端都在远端执行。

本地 Shell、SSH 客户端和远端 Shell 可能依次解释引号、变量和特殊字符。编写远程命令时必须明确希望由哪一层展开。

Mosh 可改善网络切换、设备休眠和高延迟链路中的交互体验，但需要服务器支持和额外网络配置，也不能无条件替代 SSH 的全部能力。

### 两种不同的认证

SSH 连接包含两个不同问题：

1. 客户端验证服务器身份：确认连接的不是冒充主机。已知主机信息通常记录在 `~/.ssh/known_hosts`。
2. 服务器验证用户身份：确认客户端有权登录某个账户，可使用密码、公钥等方式。

首次连接显示新主机指纹时，应通过可信渠道核对。主机密钥意外变化可能来自服务器重装，也可能表示中间人风险。

### 公钥认证与密钥口令

```bash
ssh-keygen -a 100 -t ed25519 -f ~/.ssh/id_ed25519
```

通常生成：

```text
~/.ssh/id_ed25519       私钥，不得分享
~/.ssh/id_ed25519.pub   公钥，可部署到服务器
```

- `-t ed25519` 指定密钥类型；
- `-f` 指定私钥文件；
- `-a 100` 设置保存私钥时的 KDF 轮数，提高离线猜测私钥口令的成本。

私钥口令保护本地私钥文件，不等于远程账户密码。可用代理缓存解锁后的密钥：

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

```bash
ssh-keygen -y -f ~/.ssh/id_ed25519
```

会从私钥读取并向 stdout 输出对应公钥。添加或修改私钥口令使用：

```bash
ssh-keygen -p -f ~/.ssh/id_ed25519
```

### `authorized_keys`

远端账户的：

```text
~/.ssh/authorized_keys
```

通常每行授权一个公钥尝试登录该账户。不同远端用户有各自的授权文件。

优先使用：

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub alice@server.example
```

手工安装的完整数据流可写成：

```bash
cat ~/.ssh/id_ed25519.pub |
ssh alice@server.example \
  'umask 077; mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys'
```

左侧 `~` 属于本地用户，远程引号中的 `~` 属于远端账户。首次部署公钥仍需要账户密码、既有密钥或管理员协助。

### `scp` 与 `rsync`

```bash
scp report.pdf alice@server.example:~/
scp alice@server.example:~/report.pdf .
scp -r project alice@server.example:~/
```

`scp` 适合直接复制。反复同步目录更适合：

```bash
rsync -avP project/ alice@server.example:~/project/
```

- `-a`：归档模式，递归并尽量保留属性；
- `-v`：详细输出；
- `-P`：显示进度并保留未完成部分。

源路径末尾的 `/` 会改变语义：

```text
project     复制目录本身
project/    复制目录内容
```

使用可能删除目标文件的 `--delete` 前，应先预演：

```bash
rsync -avP --delete --dry-run project/ server.example:~/project/
```

### SSH 客户端配置和端口转发

```text
Host lab
    HostName 192.0.2.10
    User alice
    Port 22
    IdentityFile ~/.ssh/id_ed25519
    LocalForward 9999 localhost:8888

Host *.example.edu
    User alice

Host *
    ServerAliveInterval 60
```

配置后可统一使用别名：

```bash
ssh lab
scp report.pdf lab:~/
rsync -avP project/ lab:~/project/
```

`LocalForward 9999 localhost:8888` 让本地端口 `9999` 通过 SSH 连接到远端视角下的 `localhost:8888`。

只建立转发、不执行远程命令并进入后台：

```bash
ssh -N -f -L 9999:localhost:8888 lab
```

- `-N`：不执行远程命令；
- `-f`：认证后转入后台；
- `-L`：本地端口转发。

禁用 SSH 密码认证和 root 登录前，必须先在另一连接中验证密钥登录，并保留可恢复的管理通道。服务名称和重启命令因发行版而异。

## tmux：可分离和恢复的终端会话

### 对象层级

```text
tmux server
└── session
    ├── window
    │   ├── pane
    │   └── pane
    └── window
        └── pane
```

- session：可分离的工作区；
- window：类似标签页；
- pane：窗口中的矩形终端区域。

`<C-b> x` 表示先按 `Ctrl-b` 并松开，再按 `x`。默认 `Ctrl-b` 是 tmux 的前缀键。

### 会话

```bash
tmux
tmux new -s study
tmux ls
tmux attach -t study
tmux kill-session -t study
```

会话内按 `<C-b> d` 只分离客户端，程序继续在 tmux 服务器中运行。服务器重启、tmux server 结束或会话被删除后，会话不会继续存在。

### 窗口

| 快捷键 | 作用 |
|---|---|
| `<C-b> c` | 创建 window |
| `<C-b> 0`…`9` | 切换到编号 |
| `<C-b> p` / `n` | 前一个/后一个 |
| `<C-b> l` | 最近访问的 window |
| `<C-b> ,` | 重命名 |
| `<C-b> w` | 选择列表 |
| `<C-b> &` | 关闭当前 window |

### 窗格

| 快捷键 | 实际效果 |
|---|---|
| `<C-b> "` | 上下排列两个 pane |
| `<C-b> %` | 左右排列两个 pane |
| `<C-b> 方向键` | 按方向切换 |
| `<C-b> o` | 循环切换 |
| `<C-b> z` | 缩放/恢复当前 pane |
| `<C-b> Space` | 切换预设布局 |
| `<C-b> x` | 关闭当前 pane |
| `<C-b> [` | 进入 copy-mode |

“水平拆分”和“垂直拆分”的叫法存在歧义，直接记上下与左右结果更可靠。

copy-mode 的选择键取决于 `mode-keys` 与用户配置。vi 风格可设置：

```text
set -g mode-keys vi
```

常见流程是进入 copy-mode、移动、用 Space 开始选择、Enter 复制、`<C-b> ]` 粘贴，但应以实际配置为准。

### 长期任务方案对比

| 方式 | 适合场景 |
|---|---|
| `command &` | 当前 Shell 中短期后台执行 |
| `nohup command >log 2>&1 &` | 不需要交互，主要查看日志 |
| tmux | 以后要重新进入并继续交互 |
| systemd 等 | 需要开机启动、重启策略和正式服务管理 |

## Shell 定制与 dotfiles

### 常见配置文件

| 工具 | 配置 |
|---|---|
| Bash | `~/.bashrc`、`~/.bash_profile` |
| Git | `~/.gitconfig` |
| Vim | `~/.vimrc`、`~/.vim/` |
| SSH | `~/.ssh/config` |
| tmux | `~/.tmux.conf` |

文件名前导点是 Unix 生态隐藏配置文件的约定。Bash 读取哪个启动文件取决于 login/interactive 状态，不应把同一配置盲目复制到所有文件。

### 包管理器、现代工具和帮助系统

常见包管理器包括 Ubuntu/Debian 的 `apt`、Fedora 的 `dnf`、Arch 的 `pacman` 和 macOS 的 Homebrew。讲义介绍 `rg` 作为现代文本搜索工具，`fd` 作为更易用的文件查找工具。`tldr` 提供以示例为主的简化帮助，但复杂边界仍应查阅 man page 和官方文档。

下面的安装形式会立即执行网络响应：

```bash
curl -fsSL "$INSTALL_URL" | bash
```

更易审查的流程：

```bash
curl -fsSL "$INSTALL_URL" -o install.sh
less install.sh
bash install.sh
```

即使明确使用 `/bin/bash -c`，也不能消除供应链、内容变化和来源可信度风险。

### alias、函数和历史搜索

```bash
alias ll='ls -lh'
alias gs='git status'
alias dc='cd'
alias mv='mv -i'
alias la='ls -A'
alias lla='la -l'
```

```bash
alias ll
unalias la
\ls
```

alias 适合固定文本替换。需要参数与控制流时应使用函数：

```bash
mkcd() {
    mkdir -p -- "$1" && cd -- "$1"
}
```

大多数 Bash/Readline 环境可用 `Ctrl-R` 反向搜索历史。安装 fzf Shell 集成后，可以获得交互式模糊历史搜索。

### 用版本控制管理 dotfiles

推荐把配置存入单独仓库，再通过符号链接安装到实际位置：

```text
dotfiles/bashrc     --symlink--> ~/.bashrc
dotfiles/tmux.conf  --symlink--> ~/.tmux.conf
```

可靠的安装脚本应：

- 检测目标是否已有真实文件；
- 对原配置做可恢复备份；
- 保持幂等，重复运行不破坏状态；
- 在全新环境测试；
- 不提交私钥、令牌和主机特定秘密。

大型 Shell 框架提供插件管理和默认配置，但会增加启动成本与隐式行为。语法高亮、自动建议、补全、历史搜索和 prompt 主题可以按需单独安装；fish 则默认集成许多交互功能。

## Shell 中的 AI

AI 可以在 Shell 中以不同层次工作：

1. 命令生成：把自然语言翻译为候选命令；
2. 管道集成：把格式不一致的文本转为结构化输出；
3. 元 Shell 或代理：执行多步命令、文件编辑和检查。

生成结果应被视为待审查方案：

- 解释每个参数和作用域后再执行；
- 对删除、权限、远程主机、网络下载和密钥操作尤其谨慎；
- 先用 `--dry-run`、只读命令或测试目录预览；
- 不向未授权服务发送密钥、令牌、敏感日志或私人数据；
- 对规则明确的数据优先使用可复现的解析器、正则、`jq`、`awk` 或脚本；
- 模型处理非结构化文本后应抽样核验并保存来源。

## 终端模拟器

终端模拟器是承载 Shell 文本界面的图形程序，不等于 Shell 或 tmux。长期使用时可考虑：

- 字体和字形覆盖；
- 配色与对比度；
- 键盘快捷键冲突；
- tab/pane 支持；
- scrollback 大小；
- GPU 加速与资源占用。

tmux pane 位于一个终端连接内部；终端模拟器自身的分栏位于 GUI 层，两者可以同时存在。

## 综合实践模式

### 组合 `ls` 选项

列出隐藏项、使用长格式和易读大小、按最近修改时间排序并启用自动颜色：

```bash
ls -lath --color=auto
```

GNU `ls` 中，`-l` 表示长格式，`-a` 包含隐藏项，`-t` 按修改时间排序，`-h` 使用易读大小。颜色选项具有实现差异。

### 比较环境与导出声明

```bash
diff <(printenv | sort) <(export | sort)
```

`printenv` 输出环境条目；Bash `export` 无参数时输出 Shell 可重用的导出声明，因此格式和集合可能不同。

### 在当前 Shell 定义状态恢复函数

```bash
marco() {
    MARCO_DIR=$PWD
}

polo() {
    cd -- "$MARCO_DIR"
}
```

把函数写入文件后要用 `source` 加载，因为子进程不能改变父 Shell 的工作目录或变量。

### 重复运行直到失败

```bash
#!/usr/bin/env bash

count=0
: >stdout.log
: >stderr.log

while true; do
    count=$((count + 1))
    if ./rare-failure.sh >stdout.log 2>stderr.log; then
        continue
    fi

    status=$?
    printf 'failed after %d runs, status=%d\n' "$count" "$status"
    printf '%s\n' '--- stdout ---'
    cat stdout.log
    printf '%s\n' '--- stderr ---'
    cat stderr.log
    break
done
```

每轮覆盖日志只保留失败一轮；若需全部记录，应单独命名或追加并写入分隔信息。

### 等待后台进程

```bash
sleep 60 &
pid=$!
wait "$pid"
ls
```

`wait` 只等待当前 Shell 的子进程。对其他会话的 PID，可在受控练习中轮询：

```bash
pidwait() {
    local pid=$1
    while kill -0 "$pid" 2>/dev/null; do
        sleep 1
    done
}
```

这种实现受 PID 复用和权限影响，不适合替代正式进程管理。

查找并结束特定练习进程时，可以先检查匹配范围：

```bash
pgrep -af 'sleep 10000'
pkill -f 'sleep 10000'
```

`-f` 按完整命令行匹配，可能一次命中多个进程。应先核对 `pgrep -af` 输出；能够在启动时保存 `$!` 时，使用精确 PID 更可靠。

### 按修改时间列出文件

GNU 工具可使用：

```bash
find . -type f -printf '%T@ %p\0' |
    sort -z -nr |
    tr '\0' '\n'
```

它按最近修改到最早修改排序。机器处理时应保持 NUL 分隔，以免含换行的文件名产生歧义。

### 分析高频历史命令

```bash
history |
    awk '{$1=""; print substr($0, 2)}' |
    sort |
    uniq -c |
    sort -n |
    tail -n 10
```

结果可用于识别适合创建 alias 的高频固定命令。Bash 与 zsh 的 `history` 输出格式不同。

### 建立可复现的 dotfiles 流程

一个完整的最小流程包括：

```bash
mkdir -p "$HOME/dotfiles"
cd "$HOME/dotfiles"
git init
```

随后逐项完成：

1. 创建简单 alias，例如 `alias dc='cd'`；
2. 至少配置一个程序，例如通过 `PS1` 调整 Bash prompt；
3. 把配置文件纳入版本控制；
4. 编写保守、幂等的 `ln -s` 安装脚本；
5. 在全新虚拟机中测试安装；
6. 逐步迁移其余工具配置；
7. 扫描并移除密钥、令牌和主机特定秘密；
8. 确认提交内容后再发布到 GitHub。

### 建立最小 tmux 闭环

```bash
tmux new -s practice
# 在会话中创建 window、拆分 pane、运行命令
# 按 Ctrl-b，再按 d
tmux ls
tmux attach -t practice
```

可在 `~/.tmux.conf` 中加入一项明确配置：

```text
set -g mouse on
```

并重载：

```bash
tmux source-file ~/.tmux.conf
```

### 建立 SSH 密钥与端口转发

```bash
ssh-keygen -a 100 -t ed25519 -f ~/.ssh/id_ed25519
ssh-copy-id -i ~/.ssh/id_ed25519.pub lab
ssh -N -f -L 9999:localhost:8888 lab
```

若远端在端口 `8888` 运行服务，本地端口 `9999` 可通过 SSH 隧道访问。更改 SSH 服务端认证策略前，应先验证密钥连接并保留恢复通道。

一套端到端验证可在远端启动临时服务器：

```bash
python3 -m http.server 8888
```

客户端配置 `LocalForward 9999 localhost:8888` 后，从本地端口 `9999` 验证隧道。密钥登录确认成功后，才可考虑在服务端配置中设置：

```text
PasswordAuthentication no
PermitRootLogin no
```

修改前应保留现有管理连接，修改后先验证配置语法，再按发行版实际服务名重启 SSH 服务。还可以安装 Mosh，测试网络临时中断后的恢复能力。

### dotfiles 发布前检查

```bash
git status
git diff --cached
rg -n 'PRIVATE KEY|token|password|secret' .
```

配置仓库应逐项迁移、用符号链接安装、在全新环境测试，并在发布前扫描秘密。SSH 私钥、API token 和主机特定凭据不得进入公共仓库。

## 参考来源

- [MIT Missing Semester 2026：Command-line Environment](https://missing.csail.mit.edu/2026/command-line-environment/)
- [简体中文社区翻译：命令行环境](https://missing-semester-cn.github.io/2026/command-line-environment/)
- [课程官方视频](https://www.youtube.com/watch?v=ccBGsPedE9Q)
- [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [fzf 官方仓库与使用文档](https://github.com/junegunn/fzf)
- [tmux 官方 Getting Started](https://github.com/tmux/tmux/wiki/Getting-Started)
- [OpenSSH ssh(1) Manual](https://man.openbsd.org/ssh)
- [OpenSSH ssh-keygen(1) Manual](https://man.openbsd.org/ssh-keygen)
- [OpenSSH ssh_config(5) Manual](https://man.openbsd.org/ssh_config)
- [OpenSSH authorized_keys(5) Manual](https://man.openbsd.org/authorized_keys)
- [rsync 官方手册](https://download.samba.org/pub/rsync/rsync.1)
- [Linux signal(7) Manual](https://man7.org/linux/man-pages/man7/signal.7.html)
