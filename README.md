# Click Decoded — Next.js

B2B agency site (SEO, web development, paid ads, AI automation). Full 1:1 migration of the 100-page HTML site to Next.js 15 (App Router) + TypeScript, preserving exact content, design and SEO metadata.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 (utilities only — legacy pages ship their own scoped CSS) · nodemailer (Zoho SMTP) · MDX blog pipeline · deployed on VPS via standalone output.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill values (see below)
npm run dev                  # http://localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build (standalone) |
| `npm start` | Serve production build |
| `npm run type-check` | TypeScript check |
| `npm run lint` | ESLint |

## VPS deployment

```bash
npm run build
# standalone bundle: .next/standalone
node .next/standalone/server.js         # or manage with pm2:
pm2 start .next/standalone/server.js --name clickdecoded
```

Copy `public/` and `.next/static` next to the standalone server if deploying the bundle alone (see Next.js standalone docs). Put nginx in front for TLS + gzip.

## Environment (.env.local)

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID |
| `NEXT_PUBLIC_WA_NUMBER` | WhatsApp number |
| `ZOHO_EMAIL` / `ZOHO_APP_PASSWORD` | SMTP auth for contact & careers forms |
| `SMTP_HOST` / `SMTP_PORT` | SMTP server (default smtp.zoho.in:465) |

`.env.example` is the committed template; `.env.local` holds real secrets (gitignored).

## Architecture

```
src/
  app/                    # 101 routes, generated 1:1 from the HTML site
    page.tsx              # home (from index.html)
    services/<slug>/      # 38 service pages
    locations/{bhopal,indore}/<service>/   # 34 city pages
    industries/<slug>/    # 11 industry pages
    white-label/<slug>/   # 6 white-label pages
    legal/{privacy,terms,cookie-policy}/
    blog/                 # listing + 3 long-form guides + MDX posts ([slug])
    api/{contact,careers} # Zoho SMTP form handlers
    sitemap.ts robots.ts  # generated sitemap.xml / robots.txt
  components/chrome/      # Header (mega menu), Footer, WhatsAppFab,
                          # PageScript + LegacyHandlers (run legacy page JS)
  lib/constants.ts        # ALL site-wide constants — never hardcode strings
  lib/email/              # email HTML templates (ported from api/*.js)
  content/blog/           # MDX posts
```

### How converted pages work

Each generated `page.tsx` contains: Next `metadata` export (title/description/canonical/OG), the page's original `<style>` block, JSON-LD schema, exact JSX markup, and its original inline scripts replayed via `PageScript`. Old flat URLs (`/seo-services.html`) 301-redirect to the new folder routes (`/services/seo`) — full table in `next.config.ts`.

### Notes

- `src/components/{sections,layout,whatsapp}` are from the earlier prototype build and are no longer imported (kept for reference).
- Regenerating pages: the HTML originals live one directory up; the converter pipeline is a session tool — edit generated pages directly going forward.

## Changelog

- **2026-07-04** — Full migration: all 100 HTML pages converted to App Router routes (exact design + content), v5 mega-menu header, footer + WhatsApp widget ported, Zoho SMTP contact/careers APIs, 190 × 301 redirects, sitemap/robots, GA4 via env.
- Earlier — Project scaffold, index prototype, MDX blog pipeline.
