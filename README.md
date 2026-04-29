# DG Detailing — Website

Production-ready Next.js 16 website for **DG Detailing**, a premium mobile auto detailing service in Los Angeles.

**Live domain:** `www.dgautodetailing.com`
**Phone:** (310) 855-4277
**Owner:** Diego

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animation:** framer-motion
- **Icons:** lucide-react
- **Fonts:** Inter (via next/font)
- **Forms:** GoHighLevel iframe embed
- **Chat:** GoHighLevel widget
- **Deployment:** Vercel

---

## Dev Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

---

## Project Structure

```
/app                    — All routes (App Router)
  /page.tsx             — Homepage
  /about/               — About page
  /services/            — Services index + /[service] dynamic pages
  /locations/           — Locations index + /[city] dynamic pages
  /blog/                — Blog index + /[slug] dynamic pages
  /reviews/             — Reviews page
  /gallery/             — Gallery page
  /specials/            — Specials page
  /contact/             — Contact page
  /sitemap.ts           — Auto-generated sitemap.xml
  /robots.ts            — robots.txt (allows all AI crawlers)
  /manifest.ts          — PWA manifest

/components             — Reusable components
  Nav.tsx               — Sticky nav with dropdowns
  Footer.tsx            — 5-column footer
  GHLForm.tsx           — GoHighLevel booking form embed
  TrustBar.tsx          — Six-icon trust bar
  ServiceCard.tsx       — Service tier card
  LocationCard.tsx      — City location card
  ReviewCard.tsx        — Customer review card
  CTASection.tsx        — Reusable CTA block
  BlogCard.tsx          — Blog post card
  Breadcrumbs.tsx       — Breadcrumb nav
  PlaceholderImage.tsx  — Placeholder for client photos
  SchemaJsonLd.tsx      — Injects JSON-LD structured data

/lib                    — Data & utilities (source of truth)
  services.ts           — All 9 service definitions
  locations.ts          — All 7 city page data
  reviews.ts            — Customer reviews
  blog.ts               — All blog posts with full content
  schema.ts             — JSON-LD schema generators
  seo.ts                — Metadata builder utility

/public
  /logo.svg             — DG Detailing SVG wordmark
  /llms.txt             — AI crawler visibility file
  /favicon.ico          — Favicon (replace with actual)
  /og-default.jpg       — Default OG image (add this file — 1200×630px)
```

---

## Adding Client Photos (Diego's Images)

When Diego provides photos, follow these steps:

### Step 1 — Drop images into the right folder

```
/public/images/about/        — Diego's portrait photo
/public/images/gallery/      — Vehicle detail photos (before/after)
/public/images/services/     — Service-specific vehicle photos
/public/images/locations/    — Location-specific photos
/public/images/blog/         — Blog featured images
```

**Naming convention:** `dg-[descriptor]-[city]-[year].jpg`
Example: `dg-gold-detail-exterior-brentwood-2024.jpg`

**Required specs:**
- JPEG format, max 300KB per image
- Strip EXIF data before uploading
- Minimum 1200px wide for full-bleed
- OG card images: exactly 1200×630px

### Step 2 — Replace PlaceholderImage components

In each page file, replace `<PlaceholderImage />` with `<Image />` from `next/image`:

```tsx
import Image from "next/image";

// Replace this:
<PlaceholderImage width={600} height={400} alt="..." />

// With this:
<Image
  src="/images/gallery/dg-gold-detail-exterior-brentwood-2024.jpg"
  alt="DG Detailing Gold Exterior Detail — Range Rover, Brentwood Los Angeles"
  width={600}
  height={400}
  className="rounded-2xl object-cover"
  priority  // only for above-fold images
/>
```

### Step 3 — Push to Vercel

Once images are added and PlaceholderImage components are replaced, push to Vercel. The site auto-serves the real photos.

---

## Updating Site Content

### Add/edit a service
Edit `/lib/services.ts` — all service pages, the homepage tier cards, footer links, nav dropdowns, sitemap, and schema all pull from this file automatically.

### Add/edit a city page
Edit `/lib/locations.ts` — all location pages, the locations index, homepage area cards, footer, and nav populate from this file.

### Add/edit a review
Edit `/lib/reviews.ts`.

### Add a blog post
Edit `/lib/blog.ts` — add a new object to the `blogPosts` array. The post will appear on the blog index and be added to the sitemap automatically.

### Update the GHL form
The form iframe is in `/components/GHLForm.tsx`. Update the `src` URL and `id` if the GHL account changes.

---

## Deploying to Vercel

1. Push the `dg-detailing` folder to a GitHub repo
2. Connect the repo to a new Vercel project
3. Set root directory to `dg-detailing` (or repo root if you pushed just the inner folder)
4. Add environment variable `NEXT_PUBLIC_SITE_URL=https://www.dgautodetailing.com`
5. Add custom domain `www.dgautodetailing.com` in Vercel settings
6. Enable automatic deployments on push to main

**Required public files to add before launch:**
- `/public/og-default.jpg` — 1200×630px branded OG image
- `/public/favicon.ico` — replace the placeholder

---

## AI Visibility

`/public/llms.txt` is served at `https://www.dgautodetailing.com/llms.txt` and provides a structured, AI-crawler-readable summary of all services, locations, pricing, and contact info. All major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Gemini) are allowed in `robots.ts`.

---

## Schema / SEO

- **Organization + LocalBusiness** schema: root layout (every page)
- **WebSite + SearchAction** schema: root layout
- **Service** schema: every `/services/[service]` page
- **FAQPage** schema: every service page (3 FAQs each)
- **LocalBusiness** schema: every `/locations/[city]` page
- **BreadcrumbList**: every non-home page
- **BlogPosting**: every `/blog/[slug]` page
- **AggregateRating + Review**: `/reviews` page
- **Offer**: `/specials` page
