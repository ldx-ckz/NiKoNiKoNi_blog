# 部署说明

## 固定环境

- Node.js：24 LTS 或更高版本
- pnpm：10.22.0（以 `package.json#packageManager` 为准）
- 构建命令：`pnpm build`
- 输出目录：`dist/`

## 本地验证

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm type-check
pnpm build
pnpm preview
```

若不使用外部内容仓库，运行前明确设置：

```dotenv
ENABLE_CONTENT_SYNC=false
```

## 环境变量

| 变量 | 必需 | 说明 |
| --- | --- | --- |
| `ENABLE_CONTENT_SYNC` | 建议显式设置 | `false` 使用仓库内内容；`true` 启用外部内容同步 |
| `CONTENT_REPO_URL` | 条件必需 | 启用内容同步时的 Git 仓库地址 |
| `CONTENT_DIR` | 否 | 外部内容本地目录，默认 `./content` |
| `UMAMI_API_KEY` | 否 | 构建首页统计时使用的 Umami API 密钥 |
| `GITHUB_TOKEN` / `GH_TOKEN` | 否 | 提高 GitHub 活动数据请求额度 |
| `POST_PASSWORDS_JSON` | 条件必需 | 构建加密文章时提供密码映射 |
| `BCRYPT_SALT_ROUNDS` | 否 | 文章密码哈希轮数，默认 12 |

密钥只放在本地 `.env` 或托管平台的 Secret/Environment Variables 中。不要把真实值提交到仓库。

## Vercel

仓库根目录的 `vercel.json` 已声明 Astro、构建命令、输出目录和响应头。连接仓库后只需配置环境变量；生产域名应与 `src/config.ts` 中的 `siteURL` 一致。

## GitHub Actions

- `build.yml`：在 `master` 推送和 Pull Request 上运行 Astro 检查与构建。
- `biome.yml`：检查 `src/` 的代码格式和质量。
- `deploy.yml`：把 `dist/` 发布到 `pages` 分支。

同一站点应只选择一个生产部署入口。若使用 Vercel，`deploy.yml` 可以保留为手动/备用方案；若使用 GitHub Pages，需要在仓库设置中把发布源配置为 `pages` 分支。

## 发布前检查

1. `pnpm check`、`pnpm type-check`、`pnpm build` 全部通过；
2. 桌面端和移动端首页、文章页、搜索和导航可用；
3. `siteURL`、RSS、Atom、sitemap 和 robots.txt 指向正式域名；
4. Git 状态不包含 `.env`、本地密码文件或临时构建产物。
