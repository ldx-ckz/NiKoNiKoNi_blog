# nikonikoni blog 文档

这里保存站点维护所需的少量长期文档。README 负责介绍项目，`docs/` 负责解释代码如何组织和发布。

| 文档 | 用途 |
| --- | --- |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 页面、内容、配置和构建流程的结构说明 |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | 本地验证与生产部署步骤 |
| [CONTENT_SYNC.md](./CONTENT_SYNC.md) | 可选的代码—内容仓库分离流程 |
| [REPOSITORY_IDENTITY_MIGRATION.md](./REPOSITORY_IDENTITY_MIGRATION.md) | 从上游主题身份迁移到个人仓库的变更台账 |

内容写作约定以 [`src/content.config.ts`](../src/content.config.ts) 和现有文章为准；站点功能开关以 [`src/config.ts`](../src/config.ts) 为准。文档与代码冲突时，应先核对实际运行行为，再同步修正文档。
