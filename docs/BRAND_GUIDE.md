# The Fix-It Shop — Brand Guide

## 1. Who we are
**The Fix-It Shop** is a veteran-owned men's grooming chair in Eunice, Louisiana, run by **Katie**, a United States Marine veteran and cosmetologist who works with men only. She built it from the ground up.

**What it really is:** more than a haircut. Men walk in carrying a long week or a hard season. They sit down, the cape goes on, and for a little while somebody is looking out for them. They leave looking right, feeling right, and standing a little taller. Katie helps men move forward and build their legacy, in the chair and out of it.

**What the name means:** it was never about fixing you. It's about helping you get back to you.

## 2. Positioning
- **One line:** More than a haircut.
- **Promise:** Come as you are. Leave standing taller.
- **Who it's for:** men in and around Eunice who want a great cut and a chair where they can breathe out.
- **Why her:** clean, careful work; a chair that feels like yours; someone in your corner. Veteran-owned. Locally built.

## 3. Voice: humble confidence
The client is the hero. Katie is his guide.

| Do | Don't |
|---|---|
| Speak to "you," in the present tense | Talk about how good we are |
| Small real details (cape on, phone down, first look in the mirror) | Superlatives: best, elite, higher standard, better than anyone |
| Warm, plain, a little wit | Military bravado or "alpha" talk |
| Service, showing up, looking out for people | Calling it therapy, or making promises for Katie |
| Let the experience speak | Hype, exclamation points |

**Signature lines**
- Come as you are. Leave standing taller.
- It was never just about the hair.
- You're not broken. You're just due.
- Come sit down a while. You've earned it.
- A good chair, a clean cut, and someone in your corner.
- If she can help, she will.

## 4. Color
| Token | Hex | Role |
|---|---|---|
| Carbon | `#07080A` | Base background |
| Ink | `#0E1013` | Raised surfaces |
| Steel | `#5F6770` | Borders, decoration (never body text) |
| Mist | `#B4BAC2` | Secondary text |
| Stone | `#F4F1EA` | Primary text |
| Ice | `#C9DEF2` | Cool specular highlights |
| Gold | `#DCB062` | Primary accent, CTAs |
| Gold Bright | `#F5DCA2` | Gold highlights |
| Gold Deep | `#A47B36` | Gold shadows |
| Navy | `#0D3B58` | Depth fields |
| Sapphire | `#1B5C86` | Ambient light |

**Gold metal gradient:** `#F8E2AD → #E2B867 → #C0913F → #D7AA5A` (top to bottom).
Gold stays under ~10% of any screen. Contrast: gold on carbon 8.4:1, stone on carbon 16.8:1.

## 5. Type
- **Display:** Cormorant Garamond 500/600 (italic for emphasis words)
- **UI and labels:** Manrope, spaced uppercase (tracking ~0.3em)
- **Body:** Manrope 400

## 6. Materials and motion
- Liquid glass: translucent panels, light-catching gradient rim, top specular edge, deep soft shadow.
- Polished liquid-gold buttons.
- A slow aurora of gold, sapphire and ice light behind the page.
- Motion is slow and calm, and honors reduced-motion settings.

## 7. Mark
**Current concept (v1):** an arched doorway (step in, come as you are), a four-point guiding star (direction, service, rising), and a razor-straight threshold line. **Status:** placeholder until the official icon is generated (prompt below).

**Icon requirements**
- Legible at 16px (favicon) and beautiful at 1024px (app icon)
- One bold silhouette, no text, no hairline details under ~2% of canvas width
- Glyph inside the central 60–66% of the canvas (maskable safe zone is 80%)
- Works in full gold-metal, flat single gold `#DCB062`, and flat stone `#F4F1EA`

**Never:** barber poles, scissor or mustache clip-art, wrenches or hammers (reads hardware store), skulls, crowns, the USMC Eagle, Globe and Anchor or any official military insignia, text in the icon.

## 8. Icon generation prompt (for Athelios)

```
ROLE
You are a world-class brand identity designer — the caliber of the teams behind Apple's app icons and the badges on Aston Martin and Lamborghini. You are creating the OFFICIAL icon for The Fix-It Shop.

THE BRAND
The Fix-It Shop is a veteran-owned men's grooming chair in Eunice, Louisiana, run by Katie, a United States Marine veteran and cosmetologist who works with men only. She built it from the ground up. It is more than a haircut: men walk in worn down by life and walk out standing taller. Katie helps them move forward and build their legacy, in the chair and out of it.
Brand promise: "Come as you are. Leave standing taller."
Voice: humble confidence. Masculine, warm, quietly premium. Never loud, never arrogant, never gimmicky.
Visual world: liquid glass, polished gold metal, deep carbon black, soft sapphire light. Think the future of men's grooming: Apple-level craft, supercar-badge precision, a hint of Iron Man arc-light.

WHAT TO CREATE
A single ICON (symbol only, no words) for:
1. The website favicon and header mark
2. The installable app icon on iPhone and Android home screens

CORE CONCEPT — "THE DOORWAY"
Primary direction (build this first):
- An ARCHED DOORWAY: a clean, architectural round-top arch. It means welcome, step in, come as you are.
- A FOUR-POINT GUIDING STAR inside the arch, set slightly ABOVE center. It means direction, service and rising: standing taller.
- A single RAZOR-STRAIGHT THRESHOLD LINE at the base, the one quiet nod to the craft (a straight-razor edge).
Elevate it: the two sides of the arch may subtly read as the two blades of a pair of shears or straight razors meeting at the top. Do this only if it stays elegant and abstract, never literal clip-art.
Proportions: tall and confident, about 1 : 1.15 width to height. Even, deliberate stroke weights. Geometric construction on a strict grid. The star is the brightest point.

RENDER STYLE (app icon version)
- Background: deep carbon #07080A, full-bleed square, NO rounded corners (iOS and Android apply their own mask). Add a very soft radial light: warm gold glow behind the star (#DCB062 at low opacity) and a faint sapphire glow (#1B5C86) in the lower corner. Subtle, not neon.
- Glyph material: polished liquid gold metal. Gradient top to bottom #F8E2AD → #E2B867 → #C0913F → #D7AA5A. A crisp specular highlight along the top edges, a soft cool ice rim light (#C9DEF2) on one side, and a gentle inner bevel for real depth. It should feel like a precision-machined gold inlay set in black glass.
- Optional: a thin glass ring around the doorway with a single moving light-catch, an arc-reactor whisper. Keep it at 1–2px weight at 1024px, and drop it in the small sizes.
- Lighting from top-left. One soft contact shadow under the glyph. Photoreal material, but a flat, front-on, iconic composition. No perspective tilt.

TECHNICAL REQUIREMENTS (non-negotiable)
- Canvas 1024 × 1024 px.
- Glyph fits inside the central 62% of the canvas (the maskable safe zone is 80%; leave breathing room).
- Must read instantly at 16 × 16 px and 29 × 29 px: one bold silhouette, no detail thinner than ~2% of canvas width, no tiny text, no fine filigree.
- Perfectly centered and symmetric.
- Pure, clean edges, ready to vectorize.

DELIVERABLES
1. App icon, 1024 × 1024, full render on the carbon background (as above).
2. Glyph only on a transparent background, same gold-metal render.
3. Flat single-color glyph in gold #DCB062 on transparent (for favicon and UI).
4. Flat single-color glyph in stone #F4F1EA on transparent (for dark UI and monochrome system icons).
5. A size test sheet: the icon at 1024, 180, 64, 32 and 16 px side by side on black, plus one mockup on an iPhone home screen among other premium app icons.
6. If you can, SVG for deliverables 3 and 4.
Then give me 3 alternate explorations of the same concept (for example: shears-as-arch, a pure geometric arch with star, and the arch inside a soft glass medallion), each as an app icon render, so I can compare.

AVOID
No text or letters. No barber pole. No literal scissors, combs, mustaches or razors as clip-art. No wrenches, hammers or tools (that reads hardware store). No skulls, crowns, shields with banners or laurel wreaths. NO USMC Eagle, Globe and Anchor or any official military insignia. No cartoon or 3D-render-template look, no heavy bevels, no glitter, no lens flares, no busy gradients, no drop-shadow halos. Nothing that would look cheap at 16px.

QUALITY BAR
It should look at home next to Apple's own app icons and on the key fob of a $300,000 car. Quiet, precise, unmistakable. If it doesn't feel like the future of men's grooming, iterate before you show me.
```
