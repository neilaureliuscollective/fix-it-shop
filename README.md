# The Fix-It Shop

Front-of-house web app for The Fix-It Shop — men's grooming by Katie in Eunice, Louisiana.
Installable on any phone ("Add to Home Screen"). All booking goes to GlossGenius; nothing is booked here.

## Edit content
Everything Katie might change lives in **`src/content/site.ts`**: booking URL, services and prices, hours, policies, copy.
Open `TODO`s in that file mark details still to confirm (Edge+ price/duration).

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Deploy (Vercel)
Import the repo in Vercel; no configuration needed. When the domain is purchased, add it in Vercel and set
`NEXT_PUBLIC_SITE_URL=https://yourdomain.com` so canonical URLs, sitemap and structured data use it.
Enable **Analytics** in the Vercel project to see `book_click` events (tagged by placement and service).

## Icons
`public/icons/icon.svg` is the source. Regenerate PNGs with `npm run icons` (uses the preinstalled Playwright).

## Structure
- `src/app` — layout, page, manifest, robots, sitemap, Open Graph image
- `src/components` — page sections and `BookButton` (every booking CTA goes through it)
- `src/lib` — booking URL builder, JSON-LD schema, site URL
- `brand/reference` — early direction (logo concept + brand board); not binding
