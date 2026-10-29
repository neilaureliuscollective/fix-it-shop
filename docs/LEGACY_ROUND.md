# Legacy direction — round 1

## Evidence and limits
- **verified_fact:** The founder attachment `2-1-20261029_120357.jpg` explicitly asks for family legacy and the book to lead instead of Katie's Marine chapter. Reviewed in this run. Private correspondence is not copied into the public site or repository.
- **verified_fact:** `1-1-Screenshot_20261029_120013_Chrome.jpg` shows a book cover titled *Mr. Bell’s Fixit Shop*, credited to Ronne Peltzman and illustrated by Aurelius Battaglia. One pictured sign changes “but broken hearts” to “even broken hearts.” These are observations of the supplied image, not independent verification of the book's plot or publication history. The search engine's AI summary is not treated as authoritative.
- **hypothesis / brand interpretation:** Care for an object can represent care for its owner. For men's grooming this translates into respectful attention, considered details, a moment to reset, and a family business whose legacy is how people are treated. The site makes no therapeutic promises and does not suggest clients are broken.
- **needs_testing:** Independent publisher/library verification and research into premium salon positioning remain blocked by the run's network allowlist. No external research service was accessed. No invented plot details, dates, endorsements, testimonials or conversion claims are used.
- **verified_fact:** Existing service information and booking/contact destinations are in `src/content/site.ts`; prior sourcing is documented in `docs/BUILD_PLAN.md`. They were not independently reverified this round. Unknown Edge+ pricing remains null; unknown hours are now labeled “Check booking.”

## Design decisions
**visual_impression:** The original cool glow, rotating medallions and military-led headline competed with the requested human story. Warm parchment, forest-charcoal, brass and walnut now frame the existing arch/star emblem. The business remains The Fix-It Shop; the book title is an inspiration, not an unsupported business rename.

**hypothesis:** Welcome → family story → services → honest proof status → visit/booking gives visitors both a reason to trust and a clear next action. All required sections share the existing homepage route.

The generated photograph is a labeled conceptual still life, not Katie's actual shop, tools or work. A real client gallery awaits approved photographs. Fonts retain the existing families, now locally hosted from Fontsource packages with OFL licenses for network-independent builds. No runtime dependency was added.

## Acceptance assumptions
- Lead with restoration, family legacy and trust; remove the Marine chapter from headline and metadata.
- Preserve the existing live emblem and service/booking infrastructure.
- Supply Home, story, services, proof status and visit sections on one responsive page.
- Keep booking prominent and keyboard accessible, with mobile navigation.
- Pass lint, TypeScript and production build; inspect desktop and phone screenshots.

## Founder review before publication
Approve final narrative; verify current prices, hours and cancellation terms in GlossGenius; supply authorized client work and an optional Katie portrait. Verify the literary reference with a primary source when browsing is available. Conversion improvement requires measurement after release.

## Validation outcome
`npm ci` completed successfully. `npm run lint && npm run typecheck && npm run build` passed after correcting a relative local-font path. The production server served the homepage and photograph successfully via curl. `git diff --check` passed.

Visual browser QA is blocked: the platform camera exited 1 while downloading Chromium (`403 Domain forbidden` from `cdn.playwright.dev`). An older Playwright fallback also exited 1 because browser system dependencies could not be installed; configured Debian snapshot sources were forbidden. No desktop/phone screenshots or camera CHECK results were produced. The generated photograph itself was opened and visually reviewed. Platform browser review remains required before publication.
