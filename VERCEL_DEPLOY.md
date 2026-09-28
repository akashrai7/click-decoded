# Click Decoded — Vercel Deployment

This package is the Next.js app itself; its contents are intended to be the Vercel project root.

## Vercel settings

- Framework Preset: Next.js
- Root Directory: `./` (the uploaded repository root)
- Build Command: `npm run build`
- Install Command: `npm ci`
- Output Directory: leave default

## Environment variables

Copy `.env.example` values into Vercel Project Settings → Environment Variables and replace the placeholders:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_WA_NUMBER`
- `ZOHO_EMAIL`
- `ZOHO_APP_PASSWORD`
- `SMTP_HOST`
- `SMTP_PORT`

Do not commit `.env.local` or real credentials.

## Notes

- Old `.html` routes are retained as permanent redirects in `next.config.ts` for SEO migration.
- Internal navigation points directly to the new Next.js routes.
- Careers resume validation is capped at 4 MB for Vercel compatibility.
- The VPS-only `output: 'standalone'` setting has been removed.
