# The Fix-It Shop — Digital Flagship Build Plan

Status: **Draft for approval** · Owner: Neil Stutes · Client: Katie, The Fix-It Shop

---

## 1. What we know (research findings)

| Item | Detail | Source |
|---|---|---|
| Business | The Fix-It Shop — men's grooming by a licensed cosmetologist (men only) | GlossGenius booking site |
| Stylist | Katie (Katie Guidry, per her Facebook profile tagging "The Fix-It Shop") | Facebook / GlossGenius |
| Address | 230 West Walnut Avenue, Eunice, LA 70535 | GlossGenius /about |
| Phone | (337) 945-9138 | GlossGenius |
| Hours (partial) | Mon closed · Tue 12–6 · Wed 10–6 · Sat 9–2 · **Thu/Fri/Sun unknown** | GlossGenius (indexed) |
| Booking | `https://fixitshop.glossgenius.com/services` | Provided by Neil |
| Cancellation | 50% fee; asks clients to give notice ASAP · **window unknown** | GlossGenius (indexed) |
| Google | Booking URL carries a Reserve-with-Google token → she has a live Google Business Profile with "Book" enabled | URL analysis |
| Personal brand | 13K Facebook followers, "Business · Fitness · Fashion ⚜ Daily dose of KajunKhaos", IG `@kajunkate388` | Facebook screenshot |
| Her own voice | "Clean up edges, tighten fades, and help with life in general." | GlossGenius /about |

### Current service menu (real, from GlossGenius)

| Service | Price | Time | Notes |
|---|---|---|---|
| Fix-It: Jr. | $25 | 25 min | Ages 10 and under, no towel/wash |
| Fix-It | $30 | 30 min | Fade, optional hot-towel shampoo |
| Fix-It: Edge | $45 | 60 min | Fade + beard sculpting |
| The Fix-It: Edge+ | **TBD** | **TBD** | Precision cut, beard sculpt, scalp massage, edge-up, hot towels |

> The brand board mockup shows placeholder services ($45 / $35 / $75 / $95). The build uses the **real menu above**, never the mockup numbers.

### Competitive context (Eunice, LA)
- The Gentlemen's Barbershop, 109 W Walnut — cuts from $25 (Booksy)
- Hill's Barbershop — basic men's cut $30 (Booksy)
- Neither has a premium owned web presence. Nobody in Eunice does. That's the opening.

---

## 2. Strategic position

**Premium, not pretentious.** The brand board is dark steel, navy and gold, built to feel luxurious. Katie's appeal is warmth, Cajun personality and real relationships ("help with life in general"). The site has to carry both. Luxury in the *execution* (type, space, materials, motion), her voice in the *words*.

**Positioning line:** *The men's grooming standard in Eunice.*

**Why it matters for revenue:** the current prices ($25–$45) sit level with the barbershops down the street. A flagship-level presence is what earns a price step-up later, with Edge+ as the anchor service. The site is built so prices change in one file.

### Two honest flags
1. **The logo has no wordmark.** The arch, columns, star and rising bars read more "institution / finance" than grooming, and "Fix-It Shop" never appears in it. Plan: pair the emblem with a set wordmark (`FIX-IT SHOP` in spaced caps, as on the board) everywhere it's used. Use the emblem alone only for the app icon.
2. **Palette names.** "Sanctum Steel" and "Reserve Blue / Reserve Gold" overlap with naming in your other projects (Reserve at Sanctum). Confirm Katie owns these, or we rename internally (e.g. Walnut Steel, Eunice Navy, Fix-It Gold). The hex values stay either way.

---

## 3. Brand system (from the provided board)

| Token | Hex | Role |
|---|---|---|
| `steel` | `#5A6168` | Signature gray: borders, secondary surfaces, metallic gradient base |
| `navy` | `#0F3B4C` | Depth: section bands, emblem field |
| `gold` | `#D4A853` | Accent only: CTAs, rules, numerals, prices (≤10% of any screen) |
| `stone` | `#F5F4EF` | Primary text on dark, light-mode surfaces |
| `carbon` | `#121417` | Base background |
| Signature gradient | `carbon → steel` with gold light-catch | Hero and card sheen |

**Type**
- Display: high-contrast serif (Cormorant Garamond 500/600 — the closest free match to the board's "Refined By Design").
- Labels: spaced uppercase sans (Manrope 500, tracking 0.3em), as in "MODERN GROOMING. HIGHER STANDARDS."
- Body: Manrope 400.

**Motifs:** thin gold hairline dividers, numbered pillars (01 / 02 / 03), brushed-steel texture, the arch shape from the emblem used as an image frame.

**Brand words (from the board):** Strength · Precision · Confidence · A Higher Standard.

---

## 4. Product: what we build

A **front-of-house web app**, installable on a phone's home screen like an app, that sends every booking to GlossGenius. No booking engine, no logins, no database.

### Information architecture
Mobile-first single flow, with a bottom tab bar in installed mode:

1. **Home / Hero:** "Refined By Design." / "More than a cut. A sharper you." with a gold `Book with Katie →` button and the three pillars (01 Expert Care · 02 Premium Products · 03 A Better You).
2. **The Menu:** service cards with name, one-line elevated description, price, time and a `Book` button on each. Edge+ is styled as the signature experience.
3. **Meet Katie:** her story in her voice. Licensed cosmetologist who chose men's grooming only. Warm, direct, a little Cajun.
4. **The Work:** gallery of her real cuts, shot on the arch-frame motif. Instagram link.
5. **Visit:** address, tap-to-call, tap-for-directions, hours, embedded map.
6. **The Standard:** booking and cancellation policy written clearly and politely.
7. **Footer:** emblem + wordmark, "Precision care for a more confident you."

A **sticky `Book Now` bar** sits at the bottom of the screen on phones, always one tap away.

### Booking integration
- One constant: `BOOKING_URL = "https://fixitshop.glossgenius.com/services"`. The `rwg_token` in the shared link is a Google session tracker. It is stripped and never hard-coded.
- Every CTA routes through one `<BookButton service?>` component, so changing the destination is a one-line change.
- **Per-service deep links:** I'll test GlossGenius service URLs during the build. If they work, each service card opens that service directly. If not, every card goes to `/services`. No guessing in production.
- Click tracking on every Book button (Vercel Analytics custom event, tagged by service), so we can tell Katie how many bookings the site sends.

### Copy direction (draft, to refine with Katie)
- **Fix-It: Jr.** — *Young gents, 10 and under. Clean, quick, confidence-building.* · $25 · 25 min
- **The Fix-It** — *The signature fade. Precision-blended, finished with an optional hot-towel shampoo.* · $30 · 30 min
- **Fix-It: Edge** — *Fade plus full beard sculpting. Lines drawn with intent.* · $45 · 60 min
- **Fix-It: Edge+** — *The full reset. Precision cut, beard sculpt, edge-up, scalp massage, hot towels. Walk out a different man.* · $TBD

Keep the "Fix-It" naming. It's her equity. Elevate the descriptions, not the names.

---

## 5. Technical plan

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router), TypeScript, static output | Fast, free on Vercel, simple to hand off |
| Styling | Tailwind CSS v4 with the brand tokens above as CSS variables | One source of truth for color |
| Fonts | `next/font` (Cormorant Garamond, Manrope), self-hosted | No layout shift, no third-party calls |
| Content | `src/content/site.ts` holds services, hours, policy, links | Prices and hours change in one file |
| Images | `next/image`, AVIF/WebP, arch-mask CSS | Premium look, fast on rural LTE |
| App install | Web manifest + icons generated from the emblem (192/512/maskable/Apple touch), theme `#121417` | "Add to Home Screen" icon, opens full-screen |
| SEO | JSON-LD `HairSalon` (address, geo, hours, phone, priceRange, `potentialAction: ReserveAction` → GlossGenius), OG image, sitemap | Wins "men's haircut Eunice" and matches her Google profile |
| Analytics | Vercel Analytics (privacy-friendly, no cookie banner) | Count Book clicks |
| Hosting | Vercel, then a custom domain (e.g. `fixitshopeunice.com`, to be confirmed) | |
| Quality bar | Lighthouse ≥95 on all four scores (mobile), WCAG AA contrast (gold on carbon 8.4:1, stone on carbon 16.8:1; steel on carbon is 2.9:1, so steel is used only for borders and decoration, never text), reduced-motion respected | |

### Repo structure
```
src/
  app/            layout.tsx · page.tsx · manifest.ts · sitemap.ts · opengraph-image.tsx
  components/     Hero · Pillars · ServiceMenu · ServiceCard · BookButton · StickyBookBar
                  MeetKatie · Gallery · Visit · Policies · Footer · Wordmark · GoldRule
  content/        site.ts
  lib/            booking.ts (URL builder + click event) · schema.ts (JSON-LD)
public/           icons/ · images/
brand/reference/  logo-emblem.jpg · brand-board.jpg
```

---

## 6. Build sequence

| Phase | Work | Output |
|---|---|---|
| 1. Foundation | Scaffold Next.js + Tailwind, tokens, fonts, content file, BookButton | Deployable shell |
| 2. Core screens | Hero, Menu, Sticky bar, Visit, Policies, Footer | Fully bookable site |
| 3. Brand finish | Steel gradient, gold rules, arch frames, subtle motion, wordmark | Matches the board |
| 4. App and SEO | Manifest and icons, JSON-LD, OG image, sitemap | Installable, searchable |
| 5. Content | Meet Katie and Gallery with her real photos and copy | Launch-ready |
| 6. QA and launch | Lighthouse, real-device test (iOS Safari + Android Chrome), every Book link verified live, domain | Live |

Phases 1–4 can ship now with placeholders clearly marked. Phase 5 waits on Katie's material.

---

## 7. Needed from Katie / Neil

1. **Edge+ price and duration.**
2. **Thursday, Friday, Sunday hours.**
3. **Cancellation window** (e.g. 24 hours?) and the no-show policy.
4. **6–12 real photos** of her cuts, plus one portrait of her in the shop. Stock models off-brand from day one.
5. **Business Instagram handle,** if separate from `@kajunkate388`.
6. **Logo source files** (SVG or transparent PNG). The current file is a flattened JPG with black bars.
7. **Domain** preference.
8. Her license / years of experience for the About section.
9. Confirmation on the palette names (see §2).
