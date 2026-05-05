# Deployment

The app is a fully static export — no server runtime needed. Output goes to `out/` after `npm run build`.

## Quickest path: Cloudflare Pages (recommended)

Free, fast, global CDN. Two ways:

### Option A — drag-and-drop (no CLI, no git)

1. Build locally: `npm run build`
2. Visit https://dash.cloudflare.com → Workers & Pages → Create → Pages → Upload assets
3. Drag the `out/` folder into the upload area
4. Choose a project name (e.g., `jin-vani`). Site goes live at `<name>.pages.dev`

### Option B — wrangler CLI (faster for repeat deploys)

```bash
# One-time login (opens browser to authenticate)
npx wrangler login

# Build + deploy in one command
npm run build
npx wrangler pages deploy out --project-name=jin-vani
```

Subsequent deploys are one command.

## Alternative: Vercel

```bash
npx vercel deploy
# Or for production:
npx vercel deploy --prod
```

Vercel auto-detects Next.js. The static export works on either Edge or static deployment.

## Alternative: Netlify

```bash
npx netlify deploy --dir=out
# Production:
npx netlify deploy --dir=out --prod
```

## Local serving (test the static build before deploying)

```bash
npm run build
npx serve out -p 4000
# Open http://localhost:4000
```

## What's deployed

After `npm run build` you get in `out/`:

- 67+ static HTML pages (home, library, all 48 verse routes, story, foundations, etc.)
- Pagefind search index (`out/pagefind/`)
- Service worker (`out/sw.js`) for offline use
- PWA manifest (`out/manifest.webmanifest`)
- All static assets

No server, no database, no API keys needed.

## After first deploy

1. Test the site on a real phone (install as PWA via Chrome → Add to Home Screen)
2. Verify offline mode: visit a verse, then disable network — should still work
3. Run Lighthouse audit — should hit 90+ across the board
4. Share staging URL with the cultural reviewer (D-004) for content review
5. Once content review is complete, decide on custom domain (D-006)
