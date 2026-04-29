# DG Detailing — Brand Guide

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Miami Blue | `#00B8E6` | Primary CTAs, icons, accents, headings, links |
| Primary Dark | `#0096C7` | Button hover states, darker blue elements |
| Accent Light | `#48D1F0` | Hover glow, lighter accent use |
| Brand Black | `#0A0A0A` | Page background, section backgrounds |
| Charcoal | `#161616` | Card backgrounds, alternating sections |
| Gray 900 | `#1F2937` | Subtle borders, secondary backgrounds |
| Gray 100 | `#F3F4F6` | Body text on dark backgrounds |
| White | `#FFFFFF` | Headings, high-contrast text |

**In Tailwind CSS v4 (inline):**
```css
style={{ backgroundColor: "#00B8E6" }}
style={{ color: "#00B8E6" }}
```

**In CSS variables:**
```css
var(--brand-primary)       /* #00B8E6 */
var(--brand-primary-dark)  /* #0096C7 */
var(--brand-accent)        /* #48D1F0 */
var(--brand-black)         /* #0A0A0A */
var(--brand-charcoal)      /* #161616 */
```

---

## Typography

**Font:** Inter (Google Fonts, self-hosted via next/font)

| Role | Weight | Usage |
|------|--------|-------|
| Display | 900 (Black) | H1 hero headings, section headings |
| Bold | 700 | H2, H3, card titles, CTA buttons |
| SemiBold | 600 | Nav links, sub-labels, featured text |
| Medium | 500 | Body with slight emphasis |
| Regular | 400 | Body text, descriptions |

**Scale pattern:**
- Hero H1: `text-5xl sm:text-6xl font-black`
- Section H2: `text-3xl sm:text-4xl font-black`
- Card H3: `text-xl font-bold`
- Body: `text-base text-gray-300 leading-relaxed`
- Caption: `text-sm text-gray-400`
- Label: `text-xs font-bold uppercase tracking-widest`

---

## Visual Style

**Theme:** Black-dominant, premium automotive. Miami Blue as the hero accent color.

**Cards:** `rounded-2xl` (16px radius), subtle `border border-white/10`, hover border glows to `border-[#00B8E6]/40`

**Buttons — Primary:** Miami Blue background, black text, `rounded-full`, `glow-blue` class (box-shadow glow on hover)

**Buttons — Secondary:** Transparent background, `border border-white/20`, white text, hover `bg-white/10`

**Section alternation:** `bg-[#0A0A0A]` and `bg-[#161616]` alternate for visual depth

**Glow effect (CTAs):**
```css
.glow-blue {
  box-shadow: 0 0 20px rgba(0, 184, 230, 0.4);
}
.glow-blue:hover {
  box-shadow: 0 0 32px rgba(0, 184, 230, 0.65);
}
```

**Background gradient (hero sections):**
```css
background: linear-gradient(135deg, #0A0A0A 0%, #161616 100%);
```

**Ambient glow (hero):**
```css
background: radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,184,230,0.07) 0%, transparent 70%);
```

---

## Tone of Voice

**Premium, confident, direct. No fluff.**

- **DO:** State facts about the service clearly. "6+ years. 1,500+ vehicles. Hand-wash only."
- **DO:** Write from the client's perspective — what problem does this solve?
- **DO:** Use "we" and "you" — conversational but professional.
- **DON'T:** Use filler phrases like "world-class," "second to none," or "best in the business."
- **DON'T:** Write long paragraphs — use bullets and clear subheadings.
- **DON'T:** Over-promise. State facts, not hyperbole.

**Example of on-brand copy:**
> "Brentwood owners drive premium vehicles, and premium vehicles deserve premium care — not strip-mall car washes that scratch clear coats. DG Detailing offers luxury mobile auto detailing in Brentwood with clay bar, sealant, and ceramic-grade finishes designed for high-end paint."

---

## Photo Style Guide

When Diego provides photos:

- **Mood:** Clean, sharp, premium. Show the glossy result, not the process.
- **Lighting:** Natural daylight preferred. Avoid heavy editing or filters.
- **Composition:** Full vehicle shots, close-ups of paint/trim, interior before/after comparisons.
- **Background:** Neutral — driveways, garages, clean parking lots. No cluttered backgrounds.
- **Avoid:** Selfies, blurry shots, heavily saturated edits.

**Alt text formula:**
```
DG Detailing [service type] — [vehicle type], [city], Los Angeles
```
Example: `DG Detailing Gold Exterior Detail — Range Rover, Brentwood Los Angeles`
