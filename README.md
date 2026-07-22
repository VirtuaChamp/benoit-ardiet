# benoitardiet.com

Personal freelance site. Nuxt 4 + Nuxt UI v4, one page, English (FR planned).

## Develop

```bash
npm install
npm run dev
```

## Type check

```bash
npm run typecheck
```

## Deploy — Cloudflare Workers (static assets)

1. Build with the Cloudflare preset:

   ```bash
   npx nuxi build --preset=cloudflare_module
   ```

2. Create `wrangler.jsonc`:

   ```jsonc
   {
     "name": "benoitardiet",
     "main": "./.output/server/index.mjs",
     "compatibility_date": "2026-07-03",
     "compatibility_flags": ["nodejs_compat"],
     "assets": { "binding": "ASSETS", "directory": "./.output/public" }
   }
   ```

3. `npx wrangler deploy`, then attach the custom domain in the Cloudflare dashboard.

Fully static alternative: `npm run generate` and serve `.output/public` via a static-assets-only Worker.
