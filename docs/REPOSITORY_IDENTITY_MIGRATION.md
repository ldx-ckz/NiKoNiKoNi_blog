# 仓库身份迁移记录

## 目标

把仓库从“看起来仍是 Mizuki 模板”迁移为“nikonikoni 的个人博客与数字花园”，同时保留必要的来源与许可证声明。

## 基线

- 日期：2026-08-20
- 起始提交：`d98e6a2c5bfccc26c421d5d105485e342567657f`
- 默认分支：`master`
- 修改前已有未提交文件：`src/components/HomeDashboard.astro`
- 排除规则：本次迁移不修改、不暂存、不还原该既有改动

## 变更批次

| 批次 | 目的 | 主要文件 | 验证 |
| --- | --- | --- | --- |
| 1. 公开身份 | README、包元数据和页脚只以 nikonikoni 为主角 | `README*`、`package.json`、`src/components/Footer.astro`、`src/config.ts` | JSON 解析、品牌残留扫描、链接检查 |
| 2. 仓库治理 | CI、Issue、PR 和依赖更新流程归属当前仓库 | `.github/` | 分支/版本扫描、YAML 与工作流检查 |
| 3. 文档与数据 | 删除上游说明书和虚构履历，建立当前项目文档 | `docs/`、`src/data/skills.ts`、`src/data/timeline.ts` | 文档链接扫描、示例域名扫描 |
| 4. 来源与素材 | 使用用户提供的站点截图，集中记录上游和第三方素材边界，移除已失去引用的上游截图 | `THIRD_PARTY_NOTICES.md`、`docs/images/`、`docs/image/` | 原图哈希比对、README 链接检查、反向引用扫描 |
| 5. 完整验证 | 确认代码可检查、可构建且没有误导性品牌残留 | 全仓库 | `pnpm check`、`pnpm type-check`、`pnpm build`、`git diff --check` |

## 署名规则

Mizuki 链接仅保留在：

1. README 的“来源与致谢”；
2. 网站页脚的简短 “Based on Mizuki”；
3. 架构/迁移记录和第三方许可证声明。

内部事件名等兼容标识不作为公开品牌处理，避免在没有功能收益的情况下扩大重构范围。

## GitHub 外层设置

代码提交后还需要核对 GitHub 仓库的 About、Homepage、Topics、Social Preview 和默认分支。这些设置不在 Git 文件历史中，因此最终值同时记录在本文件中：

- Description：`Personal Astro blog and digital garden for learning notes, projects, and everyday records.`
- Homepage：`https://miku.nikonikoni.blog/`
- Topics：`astro`、`typescript`、`svelte`、`personal-blog`、`digital-garden`、`learning-notes`、`static-site`
- Social Preview：`docs/images/nikonikoni-home.png`

当前环境的 GitHub 连接未返回该仓库，且本地 GitHub CLI 未登录，因此这些远端设置没有被自动修改；上面的值是后续在仓库 Settings 中逐项填写的唯一依据。

## 验证结果

验证日期：2026-08-20。

| 检查 | 结果 | 说明 |
| --- | --- | --- |
| `pnpm build` | 通过 | 生成 31 个页面，Pagefind 完成索引；保留少量既有构建警告 |
| `pnpm check` | 未通过（既有债务） | 90 个错误、100 个提示，集中在旧配置类型、浏览器全局变量和相册类型等既有代码；本次新增/清空的数据文件未被报告 |
| `pnpm type-check` | 未通过（既有债务） | Node 类型版本冲突、Astro 声明冲突及上述既有源码类型问题 |
| GitHub YAML 解析 | 通过 | `.github/` 下 7 个 YAML 文件均可解析 |
| README 相对链接 | 通过 | 所有相对 Markdown 链接均指向现存文件 |
| Biome 定向检查 | 通过 | `package.json`、`src/data/skills.ts`、`src/data/timeline.ts` 无格式或规则错误 |
| `git diff --check` | 通过 | 无空白错误 |
| 品牌残留扫描 | 通过 | 公开位置只保留署名；`mizuki:page:loaded` 作为内部兼容事件名保留 |

README 使用用户提供的两张首页截图，未调用图片生成或图片编辑模型。第一张保持原始文件；第二张按用户要求通过本地 Sharp 从 2549×1468 机械缩放到 2551×1474，使两张图片尺寸一致：

- `docs/images/nikonikoni-home.png`：`0159DD6BD62B751EB06F616E4D55E119EB96EE955BC26FD08E8CB8B8EE87ABC9`
- `docs/images/nikonikoni-home-content.png`：`4038EF989D4AE4A4E2007040EF87B71E37650634A0BB0F1934EE7C546D199493`

## 回溯方式

- 本轮所有仓库身份改造都以“起始提交”中记录的提交为基线，可用 `git diff d98e6a2c5bfccc26c421d5d105485e342567657f` 查看完整差异。
- `src/components/HomeDashboard.astro` 是迁移开始前已经存在的用户改动，不属于本轮成果；核对本轮差异时应单独排除该文件。
- 上表的五个批次是文件归属和验收依据；删除的旧说明与旧截图仍可从起始提交恢复。
- 本轮未创建提交、未暂存文件、未推送远端，避免把既有用户改动混入自动提交。需要提交时，可按上表批次拆分为独立提交。
