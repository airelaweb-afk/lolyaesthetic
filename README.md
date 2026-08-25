# Loly Aesthetic — Website

Marketing site for **Loly Aesthetic**, an aesthetic studio at 110 Meyerland Plaza, Suite 38, Houston, TX 77096 · (346) 453-8123.

Stack: React 19 + TypeScript + Vite 7 + TanStack Start/Router + Tailwind CSS v4.

## Local setup

```bash
bun install      # or npm install
bun run dev      # http://localhost:8080
bun run build    # production build
bun run preview  # preview the build
```

## Environment variables

Copy `.env.example` to `.env` and fill in the real destinations. All values are
read in one place: `src/config/site.ts`.

| Variable | Purpose |
| --- | --- |
| `VITE_VAGARO_BOOKING_URL` | Vagaro booking link used by every **Book Now** button |
| `VITE_GOOGLE_MAPS_URL` | Google Maps place/directions link |
| `VITE_INSTAGRAM_URL` | Instagram profile (blank hides the icon) |
| `VITE_SECOND_SOCIAL_URL` | Second social profile (blank hides the icon) |
| `VITE_CONTACT_MESSAGE_URL` | Message/contact destination (blank hides the button) |
| `VITE_REVIEWS_URL` | Review-platform link (blank hides "Read More Reviews") |

Only public, non-secret values belong in `VITE_*` variables.

## Content

- Service catalogue and pricing: `src/data/services.ts`
- Business info, hours, disclaimer: `src/config/site.ts`
- Images: CDN pointers in `src/assets/*.asset.json`

## Routes

`/`, `/about`, `/services`, `/contact`, `/privacy-policy`, `/terms`.
Each route defines its own title, description, and Open Graph metadata.

## Deploying (Cloudflare Workers)

This is a **TanStack Start SSR** app. Deploy it as a **Cloudflare Worker** (with
static assets), not as a static Pages upload. Pages drag-and-drop of the
`public/` folder will not run the site.

The Vite + Nitro build already targets the `cloudflare-module` preset and writes
`.output/server/index.mjs` plus `.output/public`.

### Option A — deploy from this machine

```bash
npx wrangler login
npm run deploy
```

That runs `vite build` and then `wrangler deploy` against the generated Worker.
Preview the same artifact locally with `npm run preview:cf`.

### Option B — Cloudflare dashboard from GitHub

1. Push this repository to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Workers**. Connect the repo.
3. Use these settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy --config .output/server/wrangler.json`
   - **Node.js version:** `22` (see `.node-version`)
4. Add every `VITE_*` variable under **Build** environment variables (production
   and preview). They are inlined at build time, not at runtime.
5. Deploy. Routing is handled on the server, so deep links and refreshes work
   without an SPA fallback file.

Worker name: `loly-aesthetic` (`wrangler.jsonc`). After the first deploy you can
attach a custom domain in the Worker settings.

## Before going live

- Replace the placeholder booking, maps, social, contact, and review URLs.
- Complete `/privacy-policy` and `/terms` (cancellation, late arrival, deposits,
  refunds, patch testing).
- Set the real base URL in `public/sitemap.xml`.
