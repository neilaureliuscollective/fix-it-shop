# Round 1 — logo and imagery

## Acceptance assumptions
Use the objective as the acceptance criteria: preserve the supplied architectural gold emblem, remove the outer ring and all logo halos, retain a transparent standalone mark and deep-blue install icons, keep small-size readability, and place realistic imagery inside an existing section without a broad redesign. No straight razors.

## Evidence and provenance
- verified_fact: the founder supplied `/workspace/aethelios/attachments/1-1-1792329069447.png`. The studio used this exact image as its reference for a transparent ring-removal edit; `public/icons/emblem.png` is the resulting production source. This is a reference-guided raster edit, not an independently drawn vector.
- verified_fact: brand context came from `src/content/site.ts`, `docs/BRAND_GUIDE.md` and the founder's brief. External brand research was unavailable under this run's network restrictions. Existing business claims were preserved, not independently verified.
- verified_fact: `public/scenes/craftsmanship.webp` is an AI-generated illustrative scene of electric-clipper cosmetology. It is not documentary evidence of Katie, a client, or the actual premises. The story figure labels it illustrative.
- visual_impression: the gold bevels, symmetrical arch, star and stepped structure carry the supplied identity into the existing dark, gold and blue interface.
- needs_testing: actual iOS/Android installation and home-screen rendering require device review; browser screenshots and icon files are the available proof here.

## Exact review locations
- `/`: header and footer wordmarks, mobile/desktop hero mark, final CTA background mark; the story section (`#katie`) contains the only new photograph, within its existing arched figure.
- `/opengraph-image`: shared emblem replaces the former line drawing.
- `/icons/emblem.png`, `/icons/icon-512.png`, `/icons/icon-maskable-512.png`, `/icons/apple-touch-icon.png`, `/icons/favicon.png`: direct asset proof.

## Scope preservation
Global styles, color tokens, hero layout, section order, service menu, pricing, policies, opening hours, address, booking URLs, tracking and install behavior are unchanged. Wordmark dimensions change only to fit the detailed emblem. The existing font families are now bundled locally with OFL licenses because Google Fonts requests failed in the sandbox. Sharp was already installed transitively through Next; it is now an explicit development dependency for reproducible icon generation, replacing the previous undeclared Playwright requirement.

## Validation notes
- `npm ci`, `npm run icons`, `npm run build`, `npm run typecheck`, `npm run lint`, and `git diff --check` passed after implementation.
- Original build failed on Google Fonts networking; self-hosting resolved that dependency.
- Desktop and phone home/story camera checks passed with the blocked Vercel analytics request stubbed only in a temporary local QA harness. Production tracking code is unchanged. The camera used a locally downloaded Chromium fallback because its default browser download was forbidden.
- Direct raster URLs exceed the phone viewport at their intrinsic dimensions; these are downloadable image assets, not responsive pages. Desktop native-size asset captures were used for their proof. Actual home-screen installation remains a device check.
- Asset assertions passed for PNG dimensions, transparent source alpha, image size budgets, and successful manifest icon URL responses.
