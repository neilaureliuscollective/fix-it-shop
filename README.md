# The Fix-It Shop

Front-of-house web app for The Fix-It Shop — veteran-owned men's grooming by Katie in Eunice, Louisiana.
Installable on any phone ("Add to Home Screen"). All booking goes to GlossGenius; nothing is booked here.

## Edit content
Everything Katie might change lives in **`src/content/site.ts`**: booking URL, services and prices, hours, policies, copy.
Open `TODO`s in that file mark details still to confirm (Edge+ price/duration, Thu/Fri/Sun hours).

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
`public/icons/emblem.png` is the transparent source, edited from the founder-supplied emblem to remove the outer ring. Regenerate install icons and the SVG favicon wrapper with `npm run icons` (Sharp). Maskable artwork fits inside the circular safe zone.

The existing Cormorant Garamond and Manrope typefaces are self-hosted in `src/app/fonts` (Fontsource variable packages, version 5.3.0; OFL licenses included) so builds do not require Google Fonts access.

The story card uses an AI-generated illustrative cosmetology scene, not a photo of Katie, her premises, or a customer. See `docs/ROUND_1.md` for provenance and review scope.

## Structure
- `src/app` — layout, page, manifest, robots, sitemap, Open Graph image
- `src/components` — page sections and `BookButton` (every booking CTA goes through it)
- `src/lib` — booking URL builder, JSON-LD schema, site URL
- `brand/reference` — early direction (logo concept + brand board); not binding
