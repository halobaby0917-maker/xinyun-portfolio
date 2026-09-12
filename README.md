# Xinyun Leung — AI Product × Growth

梁馨匀的 AI 产品与增长作品集。网站面向 AI Product、AI Growth、GTM 与 Founder Associate 求职场景，以产品案例和真实增长结果呈现从用户洞察、MVP 构建到市场验证的工作方式。

## Tech Stack

- TypeScript + React 19
- Vinext（Vite 驱动、兼容 Next App Router 的静态站点框架）
- Tailwind CSS 4（基础工具链）
- Cloudflare Workers-compatible build output

项目使用 Vinext，而不是标准 Next.js：它保留 `app/` 路由与 Metadata API，并通过 Cloudflare Vite 插件生成 Worker 与静态资源。网站无数据库、无运行时外部 API 依赖。

## Local Development

```bash
npm install
npm run dev
```

## Build

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

`npm run build` 会生成：

- `dist/server/index.js`：Cloudflare Worker 入口
- `dist/server/wrangler.json`：构建后的 Worker 配置
- `dist/client`：浏览器端静态资源

当前产物是带 Worker 入口的 Vinext 应用，不是包含顶层 `index.html` 的纯静态 Pages 目录。推荐使用 Cloudflare Workers Builds 连接本仓库：

- Production branch：`main`
- Build command：`npm run build`
- Deploy command：`npx wrangler deploy --config dist/server/wrangler.json`
- Root directory：留空（仓库根目录）
- Environment variables：无需配置

直接将 `dist` 或 `dist/client` 作为 Cloudflare Pages 的 Build output directory 会遗漏当前应用所需的 Worker 运行入口，因此不应这样配置。
