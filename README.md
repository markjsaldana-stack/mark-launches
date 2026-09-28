# Launch with Mark

Portfolio site for Mark Saldaña: product marketing, customer onboarding, and the campaigns behind the numbers. Built with Next.js so it can be deployed on Vercel and served from a custom domain.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update the work

Portfolio copy, stats, and project links live in `lib/content.ts`. The Telos sales one-pager is a static file at `public/files/telos-one-pager.pdf`.

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new). Framework preset is Next.js. No extra build settings are required.
2. Deploy. Vercel assigns a `*.vercel.app` URL immediately.
3. In the project, open **Settings → Domains** and add your domain. Point DNS at Vercel using the records they show (usually an `A` record for the apex and a `CNAME` for `www`).
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your domain, including `https://`, then redeploy. That locks canonical URLs, Open Graph links, and `sitemap.xml` to the domain you own. If you skip it, production builds use Vercel’s production domain automatically once that domain is attached.

See `.env.example` for the variable name.
