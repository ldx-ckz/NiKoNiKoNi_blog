---
title: 从零搭建 Codex + Obsidian 人工智能学术知识库
published: 2026-07-25
description: 从零搭建一个本地优先、可追溯、可持续维护的人工智能学术知识库。
tags: [Codex, Obsidian, Knowledge Base, Tutorial]
category: Technical
author: nikonikoni
draft: false
---

# 从零搭建 Codex + Obsidian 人工智能学术知识库

> [!info] 适用环境与版本说明
> 本教程以 Windows 为主，也给出 macOS / Linux 的 Obsidian 安装入口。资料与产品状态核验于 2026-07-25。软件界面可能更新；下载和安全相关步骤以文末官方链接为准。

## 0. 最终会得到什么

完成后，你会拥有一个本地优先的 AI 学术知识库：

- 原始论文、网页和课程资料保留为不可随意改写的事实来源；
- Codex 把来源编译成文献笔记、概念页、主题综述和实体页；
- Obsidian 提供双向链接、反向链接、搜索、属性和关系图谱；
- 每个重要结论能够回到具体来源；
- 研究问题、实验、结论和成果不会只留在一次性聊天里；
- `AGENTS.md` 让新的 Codex 任务自动继承相同维护规则；
- `知识库首页.md` 和 `变更日志.md` 分别提供内容索引与演化历史。

其核心是持续维护一个可检查、可修改、会积累的 Markdown Wiki。

## 1. 设计来源：Karpathy 的 LLM Wiki

Andrej Karpathy 提出的模式有三层：

1. **Raw sources**：人工筛选的原始资料，是事实来源，LLM 只读；
2. **Wiki**：LLM 持续维护的结构化 Markdown 页面；
3. **Schema**：告诉 agent 目录、写作、摄取、查询和巡检规则的文档；Codex 对应 `AGENTS.md`。

他还建议三种核心操作：

- **Ingest**：加入一个来源，创建来源笔记并更新相关页面；
- **Query**：基于已积累的 Wiki 综合回答，好的回答可以写回；
- **Lint**：查找矛盾、过时结论、孤立页面、缺失链接和知识空白。

索引 `index.md` 负责按内容导航，`log.md` 负责按时间记录操作。本 vault 使用中文名称 [知识库首页](/resources/codex-obsidian-knowledge-base/知识库首页.md) 和 [变更日志](/resources/codex-obsidian-knowledge-base/变更日志.md) 实现相同职责。

> [!important]
> 关键价值不是让 LLM 写更多笔记，而是让知识“可积累、可追溯、可纠错”。原始资料、模型综合与研究者判断必须保持边界。

原始构想见 [Karpathy：LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)。

## 2. 安装 Obsidian

### 2.1 Windows

1. 打开 [Obsidian 官方下载页](https://obsidian.md/download)。
2. 在 Windows 下选择 **Universal** 安装程序。
3. 运行下载的安装文件并完成安装。
4. 从开始菜单打开 Obsidian。

不要从不明镜像下载。官方完整说明见 [Download and install Obsidian](https://obsidian.md/help/install)。

### 2.2 macOS

1. 从 [官方下载页](https://obsidian.md/download) 下载 macOS Universal 版本；
2. 打开安装镜像；
3. 把 Obsidian 拖到 Applications；
4. 从 Applications 打开。

### 2.3 Linux

官方提供 AppImage、Snap 等方式，Flatpak 可使用：

```bash
flatpak install flathub md.obsidian.Obsidian
flatpak run md.obsidian.Obsidian
```

不同发行版请直接参照 [Obsidian 官方安装文档](https://obsidian.md/help/install)，不要照搬其他系统的命令。

## 3. 安装并登录 Codex

### 3.1 Windows 桌面端

官方 Windows 应用支持 PowerShell、本地项目、文件预览、Git、技能和沙箱。两种安装方式任选其一：

- 打开 [Codex / ChatGPT Windows 官方文档](https://developers.openai.com/codex/app/windows)，点击官方 Microsoft Store 下载链接；
- 或在 PowerShell 运行官方给出的命令：

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
```

安装后：

1. 打开应用；
2. 使用 ChatGPT 账号登录；
3. 进入 Codex 工作界面；
4. 点击添加项目或使用 `Ctrl+O`；
5. 选择你的 Obsidian vault 根目录，而不是只选某个子文件夹。

官方快速开始说明见 [Codex Quickstart](https://developers.openai.com/codex/quickstart)。

### 3.2 安全设置

建议选择 **Ask for approval** / 需要时请求批准，并把工作目录限制在 vault 内。不要为了省一次确认而长期启用全磁盘访问。

Codex 需要修改 vault 中的 Markdown，但通常不需要：

- 访问整个用户目录；
- 删除大量文件；
- 改写 `10-原始资料/`；
- 把私有论文、未公开实验或个人信息上传到其他服务。

本 vault 的 `AGENTS.md` 还规定：批量删除、合并、改名和改写原始资料前必须先获得确认。

### 3.3 检查是否可用

在 Codex 中打开 vault 后发送：

```text
请只读检查当前目录，告诉我：
1. workspace 根目录；
2. 是否读取到了 AGENTS.md；
3. 原始资料层和知识库层分别是哪两个目录。
不要修改文件。
```

期望回答应包含：

- 根目录为 `obsidian_program`；
- 项目规则为根目录的 `AGENTS.md`；
- 原始资料层是 `10-原始资料/`；
- Wiki 层是 `20-知识库/`。

## 4. 创建或打开 Obsidian vault

Obsidian 的 vault 本质上就是本地文件夹，其中的笔记是普通 Markdown 文件；`.obsidian/` 保存这个 vault 的界面与插件配置。官方解释见 [How Obsidian stores data](https://obsidian.md/help/data-storage)。

### 4.1 全新创建

首次打开 Obsidian：

1. 选择 **Create new vault**；
2. 输入 vault 名称；
3. 选择保存位置；
4. 点击 **Create**。

### 4.2 打开本教程已经部署的 vault

本机不需要再创建空 vault：

1. 在 Obsidian 的 vault 切换器中选择 **Open folder as vault**；
2. 选择：

```text
C:\Users\ckz\Desktop\obsidian_program
```

3. 点击打开；
4. 打开 [知识库首页](/resources/codex-obsidian-knowledge-base/知识库首页.md)。

官方步骤见 [Create a vault](https://obsidian.md/help/vault)。

> [!warning]
> 不要在一个 vault 内再创建另一个 vault。Obsidian 官方提醒，嵌套 vault 会让内部链接更新不可靠。

## 5. 已部署的目录结构

```text
obsidian_program/
├─ .obsidian/                 # Obsidian 当前 vault 配置
├─ AGENTS.md                  # Codex 的持久维护规则 / schema
├─ 知识库首页.md              # 内容索引
├─ 变更日志.md                # 只追加的操作历史
├─ 00-收件箱/                 # 尚未处理的内容
├─ 10-原始资料/               # 事实来源层，默认只读
│  ├─ 论文/
│  ├─ 网页剪藏/
│  ├─ 课程与书籍/
│  └─ 数据与代码说明/
├─ 20-知识库/                 # Codex 维护的 Wiki
│  ├─ 文献笔记/
│  ├─ 概念/
│  ├─ 主题综述/
│  └─ 实体/
├─ 30-研究项目/
├─ 40-实验记录/
├─ 50-成果输出/
├─ 60-每日笔记/
└─ 90-系统/
   ├─ 模板/
   └─ 附件/
```

为什么不一开始安装向量数据库、复杂知识图谱和大量插件？

- 在中小规模时，Markdown、首页索引、全文搜索和双链已经够用；
- 学术知识库最先需要解决的是来源追踪和稳定维护，不是搜索基础设施；
- 只有当普通搜索确实成为瓶颈时，再加入本地混合检索；
- 少依赖意味着更容易备份、迁移和让 Codex理解。

## 6. Obsidian 已完成的设置

打开 **Settings** 检查以下内容。

### 6.1 Files and links

本 vault 已写入：

- **Default location for new notes**：`00-收件箱`
- **Attachment folder path**：`90-系统/附件`
- 自动更新内部链接：开启
- 链接格式：Obsidian Wikilinks，即 `[[页面名]]`

这保证临时创建的内容不会散落在根目录，图片也不会与知识页混在一起。

### 6.2 Core plugins

以下核心插件已经启用：

- File explorer
- Search
- Graph view
- Backlinks
- Outgoing links
- Properties
- Daily notes
- Templates
- Command palette
- Outline
- File recovery

第三方插件默认没有安装。先运行基础流程一到两周，再根据真实痛点决定是否增加。

### 6.3 Templates

在 **Settings → Core plugins → Templates** 中，模板目录应为：

```text
90-系统/模板
```

已经提供：

- [文献笔记模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/文献笔记模板.md)
- [概念笔记模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/概念笔记模板.md)
- [主题综述模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/主题综述模板.md)
- [研究项目模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/研究项目模板.md)
- [实验记录模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/实验记录模板.md)
- [每日笔记模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/每日笔记模板.md)

在 Obsidian 中创建新文件后，打开命令面板 `Ctrl+P`，执行 **Templates: Insert template** 即可插入。

Obsidian 官方说明：模板中的 properties 会与当前笔记已有 properties 合并。参考 [Templates](https://obsidian.md/help/plugins/templates) 与 [Properties](https://obsidian.md/help/properties)。

### 6.4 Daily notes

已经配置：

- 文件夹：`60-每日笔记`
- 文件名格式：`YYYY-MM-DD`
- 模板：`90-系统/模板/每日笔记模板`

点击左侧日历按钮，或通过命令面板运行 **Open today's daily note**。官方说明见 [Daily notes](https://obsidian.md/help/Plugins/Daily%2Bnotes)。

### 6.5 Graph view

关系图谱已经默认排除原始资料、模板和附件，避免 PDF、图片和系统文件淹没真正的知识关系；并按概念、文献笔记、项目/实验设置了颜色组。

图谱适合发现：

- 没有入链的孤立 Wiki 页面；
- 连接很多主题的核心概念；
- 只有文献笔记、缺少概念综合的区域；
- 项目和已有知识之间的断裂。

图谱不是知识质量本身。连接多不等于结论正确。

## 7. `AGENTS.md` 为什么关键

Codex 会在开始任务前读取 `AGENTS.md`。官方文档说明：它从项目根目录沿当前工作目录逐层发现规则，越靠近当前目录的规则优先级越高；新的会话会重新建立规则链。见 [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md)。

本 vault 的 [AGENTS.md](/resources/codex-obsidian-knowledge-base/AGENTS.md) 定义了：

- 人类与 Codex 的职责；
- 每个目录的所有权；
- 来源和引用规则；
- YAML properties 规范；
- 摄取、查询和巡检流程；
- 变更日志格式；
- 删除、合并和批量改名的确认要求。

如果以后某个研究项目需要特殊规则，可以在项目文件夹中增加更具体的 `AGENTS.md`，但不要一开始就层层嵌套。

## 8. 第一次摄取：从一篇论文开始

建议一次处理一个来源。这样你能检查 Codex 抓住了什么、漏掉了什么，并逐步校准规则。

### 8.1 放入论文

把一篇你真正读过或准备精读的 PDF 放到：

```text
00-收件箱/
```

文件名建议：

```text
年份-第一作者-短标题.pdf
```

例如：

```text
2017-Vaswani-Attention-Is-All-You-Need.pdf
```

### 8.2 让 Codex 先规划，再写入

发送：

```text
请摄取 00-收件箱/2017-Vaswani-Attention-Is-All-You-Need.pdf。

严格遵守 AGENTS.md。先只读检查：
1. 资料是否可读；
2. 最合适的原始资料目标路径；
3. 计划新建或更新哪些 Wiki 页面；
4. 哪些元数据需要我补充。

先向我展示计划，不要写文件。
```

确认计划后发送：

```text
按刚才的计划执行摄取。

要求：
- 原始 PDF 归入 10-原始资料/论文；
- 创建结构化文献笔记；
- 只创建本篇论文真正需要的概念页，不要一次铺开几十个空页面；
- 每个事实性主张能追溯到论文页码、章节或图表；
- 更新知识库首页和变更日志；
- 最后列出变更、待核验项和我应重点复核的三处内容。
```

### 8.3 人工复核

至少检查：

- 标题、作者、年份、venue、DOI 是否真实；
- 一句话贡献是否过度概括；
- 数据集、评价指标、基线和数字是否与原文一致；
- “局限”是论文明确陈述，还是 Codex 的合理推断；
- 概念页是否真的综合了知识，而不是把摘要换一种说法；
- Wiki 页面是否链接回原始 PDF 或文献笔记；
- [知识库首页](/resources/codex-obsidian-knowledge-base/知识库首页.md) 与 [变更日志](/resources/codex-obsidian-knowledge-base/变更日志.md) 是否更新。

> [!tip]
> 对学术工作，最省时间的不是“完全不复核”，而是让 Codex 明确指出最值得复核的主张、数字和推断。

## 9. 摄取网页、课程与想法

### 9.1 Obsidian Web Clipper

Obsidian 官方 Web Clipper 可把网页内容与元数据保存为本地 Markdown，支持 Chrome、Firefox、Safari、Edge 等浏览器。安装入口与隐私说明见 [Obsidian Web Clipper](https://obsidian.md/help/web-clipper)。

推荐配置：

- 保存位置：`10-原始资料/网页剪藏`
- 文件名：`{{date|date:"YYYY-MM-DD"}}-{{domain}}-{{title}}`
- properties 至少包含：原始 URL、作者、发布日期、剪藏日期

剪藏后，图片默认可能仍是远程链接。需要长期离线保存时，在 Obsidian 命令面板运行 **Download attachments for current file**。官方步骤见 [Clip web pages](https://obsidian.md/help/web-clipper/capture)。

### 9.2 课程与书籍

- 讲义、章节和转写放在 `10-原始资料/课程与书籍/`；
- 一章一章处理通常比整本一次处理更稳；
- 对教材公式，要求 Codex保留符号定义和推导条件；
- 课程老师的口头判断与正式论文结论要分开标记。

### 9.3 自己的想法

想法先进入 `00-收件箱/` 或每日笔记，并明确标记为“个人想法”或“研究假设”。没有来源时，不要让 Codex 把它改写成既成事实。

## 10. 日常查询与写回

### 10.1 只回答，不写文件

```text
基于当前知识库回答：
“对小样本图像分类，参数高效微调与全量微调的主要权衡是什么？”

先读知识库首页，再检索相关 Wiki 页面；必要时回查原始资料。
区分来源陈述、综合判断和推测。给出 vault 内链接。
本次不要修改文件。
```

### 10.2 把高价值综合写回

如果回答形成了长期有用的比较：

```text
刚才的回答值得保留。请将其整理为一篇主题综述：
- 避免重复已有页面；
- 保留证据链；
- 标出结论适用范围和冲突来源；
- 更新知识库首页与变更日志。
```

不值得长期复用的临时问答不要全部写回，否则 Wiki 会快速膨胀。

## 11. 研究项目与实验

### 11.1 创建项目

在 `30-研究项目/` 创建项目文件夹和主页，插入 [研究项目模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/研究项目模板.md)。

让 Codex 协助：

```text
请根据当前知识库，把“项目名”整理成一个可执行研究计划。

要求：
- 研究问题必须明确；
- 假设必须可证伪；
- 给出最小可行实验；
- 成功标准可测量；
- 每个动机和方法选择链接到已有知识；
- 不要虚构数据或基线。
```

### 11.2 记录实验

每次实验从 [实验记录模板](/resources/codex-obsidian-knowledge-base/90-系统/模板/实验记录模板.md) 开始，至少保存：

- 代码 commit；
- 数据版本与切分；
- 环境和硬件；
- 随机种子；
- 完整配置与执行命令；
- 与基线相比的唯一变化；
- 原始日志、检查点和图表路径；
- 失败分析与下一步。

不要只记录“效果提升”。没有上下文的单个数字以后几乎无法解释。

## 12. 每周健康检查

建议每周或每摄取 5–10 个来源后执行：

```text
请按 AGENTS.md 对 20-知识库 执行只读健康检查。

输出：
1. 无来源支撑的事实性主张；
2. 断链与孤立页面；
3. 重复概念或同义页面；
4. 过时或互相冲突的结论；
5. 元数据缺失；
6. 首页索引或变更日志遗漏；
7. 最值得补充的三个知识空白。

先给报告，不要自动删除、合并或批量改名。
```

审阅报告后，再指定某一类问题修复。不要把“巡检”直接变成不受控的大规模重构。

## 13. Properties 约定

Obsidian 的 properties 存在每篇 Markdown 顶部的 YAML 中，既便于人看，也便于 Codex 与搜索处理。

基础字段：

```yaml
---
type: concept
status: developing
created: 2026-07-25
updated: 2026-07-25
aliases: []
tags:
  - concept
---
```

`status` 统一使用：

| 值 | 含义 |
|---|---|
| `seed` | 刚建立，信息很少 |
| `developing` | 正在积累，尚未系统核验 |
| `verified` | 关键内容已由用户核验 |
| `stale` | 很可能过时，需要复查 |
| `archived` | 保留历史，但不再主动维护 |

避免在 properties 中塞入长段文字。Obsidian 官方也把 properties 定位为小而原子的结构化信息。见 [Properties](https://obsidian.md/help/properties)。

## 14. 搜索策略

按从简单到复杂的顺序：

1. 打开 [知识库首页](/resources/codex-obsidian-knowledge-base/知识库首页.md) 浏览类别；
2. 使用 Obsidian 快速切换查标题；
3. 使用全文搜索查关键词、别名和 properties；
4. 使用反向链接与图谱发现关系；
5. 让 Codex 用文件搜索跨页综合；
6. 只有在数百至数千页面、普通搜索明显不足时，再评估本地语义检索。

不要因为“向量数据库听起来先进”就提前引入。额外索引还会带来同步、更新、隐私和失效问题。

## 15. 备份、同步与版本控制

### 15.1 基本原则

- 同步不等于备份；
- 至少保留两份副本，其中一份不与主目录实时镜像删除；
- 未公开论文、审稿材料、个人数据和实验凭据不要放入公共仓库；
- API key、账号令牌和密码永远不要写进 vault。

### 15.2 Obsidian Sync 或云盘

可使用 Obsidian Sync，或你已经信任的同步方案。开始前先做一次完整本地副本。

### 15.3 Git

Markdown 很适合版本控制。若你熟悉 Git，可以为 vault 单独建立私有仓库。建议忽略经常变化的工作区布局：

```text
.obsidian/workspace.json
.obsidian/workspaces.json
.trash/
```

Obsidian 官方也特别指出 `workspace.json` / `workspaces.json` 会随打开文件频繁变化，可加入 `.gitignore`。见 [How Obsidian stores data](https://obsidian.md/help/data-storage)。

> [!warning]
> 当前 vault 所在用户目录可能已处在其他 Git 配置或父级仓库中。初始化新仓库前先运行 `git rev-parse --show-toplevel` 检查边界；不要把整个用户目录意外提交到远程。

## 16. 隐私、版权与学术诚信

- 只把你有权保存和处理的资料放入 vault；
- 不公开传播受版权保护的整篇论文或付费课程内容；
- 未发表研究、审稿稿件、人类受试者数据和敏感日志应遵守所属机构规则；
- Codex 的摘要不是论文证据，正式写作必须回到原文；
- 论文引用必须通过 DOI、出版社页面、Crossref、Semantic Scholar 或原文核验；
- AI 生成文字进入论文前，遵守目标期刊、会议和学校关于 AI 辅助写作的政策；
- 不让 Codex 编造缺失实验，也不把推断伪装为作者原话。

## 17. 推荐的维护节奏

### 每天 5 分钟

- 把新资料放入收件箱；
- 在每日笔记写下研究问题和连接；
- 把有长期价值的实验或结论链接到项目。

### 每周 30–60 分钟

- 清空收件箱；
- 摄取 1–5 个高价值来源；
- 执行一次只读健康检查；
- 人工复核冲突、数字和引用；
- 备份。

### 每月

- 更新主题综述；
- 把过时页面标为 `stale`；
- 检查研究项目与知识库是否断开；
- 合并重复概念，但先人工确认；
- 评估是否真的需要新插件或语义搜索。

## 18. 常用提示词

### 摄取论文

```text
摄取 <文件路径>。严格遵守 AGENTS.md。
先查重，再创建文献笔记；仅更新真正相关的概念和综述。
所有结论标明证据位置，不确定内容标注待核验。
更新知识库首页与变更日志。
```

### 对比两种方法

```text
基于当前知识库比较 <方法 A> 与 <方法 B>。
按假设、计算成本、数据需求、效果、适用边界和失败模式组织。
引用 vault 内页面；缺少证据时明确说缺少。
先回答，不写文件。
```

### 寻找研究空白

```text
基于已有主题综述和文献笔记，提出 5 个研究空白。
每个空白给出：
- 已知证据；
- 仍未知什么；
- 为什么重要；
- 最小可行实验；
- 最大风险。
把“来源支持”和“你的推断”分开。
```

### 更新旧综述

```text
用最近摄取的来源复核 <综述页面>。
列出被支持、被削弱、被推翻和仍未知的结论。
先显示拟修改的段落和证据，不要直接覆盖。
```

### 实验复盘

```text
读取 <实验记录> 及其日志，只根据实际产物复盘。
判断结果是否支持原假设，识别混杂变量和复现缺口。
不要补造缺失数字。
```

## 19. 故障排查

### Codex 没有遵守 `AGENTS.md`

1. 确认 Codex 打开的项目是 vault 根目录；
2. 确认根目录确实存在非空 `AGENTS.md`；
3. 新建任务或重启当前 Codex 会话；
4. 让 Codex 只读列出它加载的规则来源；
5. 检查更高层或更深目录是否存在 `AGENTS.override.md`。

官方说明：Codex 每次新运行时重新建立指令链。见 [AGENTS.md 官方指南](https://developers.openai.com/codex/guides/agents-md)。

### 模板命令里看不到模板

1. 确认 Templates 核心插件已开启；
2. 模板目录应为 `90-系统/模板`；
3. 路径不要以 vault 根目录的绝对路径填写；
4. 重启 Obsidian 后再试；
5. 用 `Ctrl+P` 搜索 **Templates: Insert template**。

### 每日笔记是空白

1. 确认 Daily notes 核心插件已开启；
2. 新文件位置应为 `60-每日笔记`；
3. 模板位置应为 `90-系统/模板/每日笔记模板`；
4. 删除测试用的空白当日日记后重新创建，或手动插入模板。

### 新图片散落在当前文件夹

检查 **Settings → Files and links → Attachment folder path**，应为：

```text
90-系统/附件
```

### Web Clipper 无法写入

- vault 名称必须与 Obsidian 中显示的名称完全一致，而不是完整路径；
- 检查目标文件夹名；
- 确认 Obsidian URI 已正确注册；
- 参考 [Web Clipper Troubleshooting](https://obsidian.md/help/web-clipper/troubleshoot)。

### Wiki 越来越乱

通常不是文件夹不够多，而是以下规则没有执行：

- 一次摄取一个来源；
- 首页索引每次更新；
- 页面先查重；
- 新概念必须有真实内容；
- 每周巡检孤立页面和重复概念；
- 临时答案不全部写回。

## 20. 部署验收清单

### 软件

- [ ] Obsidian 能打开 vault 根目录
- [ ] Codex 能打开同一根目录
- [ ] Codex 能读取 `AGENTS.md`

### Obsidian

- [ ] 新笔记默认进入 `00-收件箱`
- [ ] 附件默认进入 `90-系统/附件`
- [ ] Templates 能看到六个模板
- [ ] Daily notes 在 `60-每日笔记` 生成带模板的笔记
- [ ] 图谱能显示 Wiki 页之间的关系

### 知识库

- [ ] [知识库首页](/resources/codex-obsidian-knowledge-base/知识库首页.md) 可打开全部主要目录
- [ ] [变更日志](/resources/codex-obsidian-knowledge-base/变更日志.md) 有初始化记录
- [ ] 原始资料与 Wiki 分层明确
- [ ] 第一个来源已生成文献笔记
- [ ] 关键结论可以回到来源
- [ ] 首页索引和变更日志随摄取更新

### 研究质量

- [ ] 没有虚构 DOI、页码、引文或实验数字
- [ ] 推断与来源陈述明确区分
- [ ] 项目假设可证伪
- [ ] 实验记录包含复现信息
- [ ] 对外输出在定稿前回查原文

## 21. 下一步：用第一篇真实论文校准系统

现在不要继续增加结构。选择一篇与你当前研究最相关、你能够亲自复核的论文，完整走一次：

```text
收件箱 → 原始资料 → 文献笔记 → 概念页 → 首页索引 → 变更日志 → 人工复核
```

完成后只问三个问题：

1. 哪些字段对你的研究真正有用？
2. Codex 最容易误解哪类内容？
3. 哪个步骤最耗时且重复？

再根据真实答案修改模板或 `AGENTS.md`。好的知识库不是一次设计出来的，而是在可信资料与真实研究问题中逐步长出来的。

## 参考资料

- [Karpathy：LLM Wiki 原始构想](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [Codex Quickstart](https://developers.openai.com/codex/quickstart)
- [Codex Windows 应用](https://developers.openai.com/codex/app/windows)
- [Codex：Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
- [Obsidian 官方下载与安装](https://obsidian.md/help/install)
- [Obsidian：Create a vault](https://obsidian.md/help/vault)
- [Obsidian：How Obsidian stores data](https://obsidian.md/help/data-storage)
- [Obsidian：Properties](https://obsidian.md/help/properties)
- [Obsidian：Templates](https://obsidian.md/help/plugins/templates)
- [Obsidian：Daily notes](https://obsidian.md/help/Plugins/Daily%2Bnotes)
- [Obsidian Web Clipper](https://obsidian.md/help/web-clipper)
