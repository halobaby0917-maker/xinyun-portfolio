# Xinyun Leung — AI Product × Growth

梁馨匀的产品与增长作品集。当前公开版本聚焦招聘方最需要快速确认的三件事：能从用户问题出发、能独立做出 MVP、能通过真实用户和市场反馈验证结果。

## Tech Stack

- TypeScript + React 19
- Vinext（Vite 驱动、兼容 Next App Router 的静态站点框架）
- Tailwind CSS 4（基础工具链）
- Cloudflare Workers-compatible output via OpenAI Sites

当前环境使用 Vinext，而不是标准 Next.js：它保留熟悉的 `app/` 路由与 Metadata API，同时能直接生成当前托管环境需要的产物。网站无后端、无数据库、无运行时外部 API 依赖。

## Local Development

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## Portfolio Structure

```text
app/
  layout.tsx        # SEO 与全局页面壳
  page.tsx          # MVP 首页
  globals.css       # 设计 tokens、布局与响应式规则
components/
  project-card.tsx
  media-placeholder.tsx
  site-header.tsx
  site-footer.tsx
data/
  portfolio.ts      # 项目、数据、案例内容的唯一维护入口
public/
  favicon.svg
```

## Content Maintenance

- 项目文字、数据、标签和素材建议统一维护在 `data/portfolio.ts`。
- DBTI 已连接真实产品：<https://dbti-test.pages.dev/>。
- Email、GitHub 与社交平台链接统一维护在 `data/portfolio.ts` 的 `profileLinks` 中。
- 麻辣辣007 已接入小红书；抖音与微信视频号保留入口，获得正式地址后在 `platformLinks` 中补充。
- 素材占位不会影响布局。替换时建议保持项目卡中的横向画面比例。

## Deployment

项目已配置 `.openai/hosting.json`，可通过 OpenAI Sites 构建并发布。后续迭代继续使用同一项目即可保持公开 URL 不变。
