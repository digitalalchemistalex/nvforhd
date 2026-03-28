---
name: nvforhd-site
description: "Full rebuild of NVforHD.com — Nevada non-profit HD charity golf tournament site. Use whenever working on any aspect of this project: pages, components, animations, SEO, psychology strategy, images, content. Zero WordPress/Elementor. Next.js + Tailwind + Framer Motion. Trigger on: NVforHD, nvforhd, Huntington's Disease golf tournament, Sean Schaeffer, Nevada HD charity."
---

# NVforHD.com — Project Skill

**Read master-coding-standards FIRST. Then this.**

---

## Project Identity

| Field | Value |
|-------|-------|
| Client | NVforHD (Nevada for HD) — non-profit |
| Domain | nvforhd.com |
| GitHub | digitalalchemistalex/nvforhd |
| Phone | 775-691-8860 (Sean Schaeffer) |
| Email | info@nvforhd.com |
| Event | Annual golf tournament, May 29, 2026 |
| Venue 2026 | Gray's Crossing Golf Club, Truckee, CA |
| Venue 2024 | Old Greenwood Golf Club (Jack Nicklaus), Truckee, CA |
| Booking URL | https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament |
| Google Analytics | G-3KT4C16M4V |
| Vercel Project | prj_y53GvCnsDyKr9xDL1cLlH91DroOo |
| Vercel Team | team_CW7MOCxDAdkppWyd6Ra0iLRR (golfbookingsystem) |
| Unsplash App | ID: 903256, Key: 7snfb-_ppWFNwIDFrd0pPJVNe4ReHkKYP5pXm7JltBA |

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | CSS custom properties (globals.css) — NO Tailwind utility classes |
| Animations | CSS keyframes + ScrollReveal component (IntersectionObserver) |
| Hosting | Vercel (auto-deploy from GitHub main) |
| Images | next/image, Unsplash API, own event photos |
| Forms | React Hook Form + Resend |
| Analytics | GA4 G-3KT4C16M4V |
| **BANNED** | WordPress, Elementor, jQuery, Tailwind utility classes, Framer Motion (installed but NOT used — keep as CSS) |

---

## CRITICAL: Styling Pattern

The site uses **inline styles + CSS custom properties + className-based CSS rules** — NOT Tailwind utility classes like `className="bg-blue-500"`. Every component uses `style={{ ... }}` with `var(--navy)` etc.

CSS classes are defined inside `<style dangerouslySetInnerHTML>` blocks within each page/component. Match this pattern exactly.

---

## Color Palette (globals.css — source of truth)

```css
:root {
  --navy:        #0B1628;
  --navy-mid:    #142040;
  --navy-deep:   #060D1A;
  --blue:        #3B82F6;   /* UPDATED — universally readable on dark AND light */
  --blue-dark:   #1E3A8A;
  --blue-mid:    #2563EB;
  --blue-light:  #EFF6FF;
  --blue-faint:  #DBEAFE;
  --blue-bright: #93C5FD;   /* Use on dark/navy backgrounds — eyebrows, kickers */
  --blue-hd:     #2563EB;
  --gold:        #B8860B;
  --gold-light:  #F59E0B;
  --gold-pale:   #FEF3C7;
  --gold-dark:   #92400E;
  --snow-dim:    rgba(249,248,246,0.85);
  --snow-faint:  rgba(249,248,246,0.70);
  --white-dim:   rgba(249,248,246,0.85);
  --white-dimmer:rgba(249,248,246,0.70);
  --ink-faint:   #6B7280;
}
```

### Color Rules — NON-NEGOTIABLE
- **`--blue` on dark/navy bg** — use `--blue-bright` (#93C5FD) instead — dark blue disappears on dark bg
- **Eyebrows/kickers on navy sections** — always `--blue-bright` not `--blue`
- **No hardcoded `rgba(29,78,216,...)` or `#1D4ED8`** — these are old dark blue values, replace with `var(--blue)` or `var(--blue-bright)`
- **Ghost buttons on dark bg** — border `rgba(255,255,255,0.65)`, text `rgba(255,255,255,0.95)` minimum
- **Body text on dark bg** — minimum `rgba(255,255,255,0.85)`, never below `0.70`

---

## Typography

```css
--serif: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
--sans:  [system/DM Sans loaded via Google Fonts]
```

---

## Site Structure

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Hero → Stats → Disease → Rylee/Puccini → Testimonials → Timeline → Packages → Sponsors → FAQ → Hub |
| `/about` | `app/about/page.tsx` | 4 board member cards |
| `/cause` | `app/cause/page.tsx` | What is HD |
| `/causes` | `app/causes/page.tsx` | 2024/2025/2026 charity cause accordion |
| `/story` | `app/story/page.tsx` | Origin story |
| `/impact` | `app/impact/page.tsx` | Puccini IVF story |
| `/sponsors` | `app/sponsors/page.tsx` | Tiered sponsor grid |
| `/gallery` | `app/gallery/page.tsx` | Event photo gallery |
| `/blog` | `app/blog/page.tsx` | Blog index |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Blog post renderer |
| `/contact` | `app/contact/page.tsx` | Contact + intent selector |
| `/terms` | `app/terms/page.tsx` | Terms |
| `/cancellation` | `app/cancellation/page.tsx` | Cancellation policy |

---

## Components

| Component | Purpose |
|-----------|---------|
| `Nav.tsx` | Desktop nav (9 links) + mobile bottom tab bar (Home/HD/Causes/Donate/Gallery) |
| `Footer.tsx` | Site footer |
| `ScrollReveal.tsx` | IntersectionObserver fade-up on scroll |
| `VideoTestimonial.tsx` | YouTube thumbnail card → lightbox player |
| `SponsorsSection.tsx` | Dark sponsor grid (desktop) + touch carousel (mobile) |
| `PackagesSection.tsx` | Golf packages with urgency chips |
| `DonateBlock.tsx` | Donation amount selector |
| `PageHero.tsx` | Reusable full-bleed hero |
| `MobileCTADock.tsx` | No-op (kept to avoid import errors) |

---

## CTA System

All CTAs use these CSS classes defined in page-level `<style>` blocks:

```css
/* Primary — gradient + shimmer + pulse */
.cta-primary {
  background: linear-gradient(135deg, #1D4ED8, #3B82F6);
  box-shadow: 0 4px 20px rgba(59,130,246,0.5);
  /* shimmer via ::before animation */
}

/* Ghost — on dark backgrounds */
.cta-ghost {
  background: rgba(255,255,255,0.1);
  border: 1.5px solid rgba(255,255,255,0.75);
  color: #fff;
}

/* Hero primary — pulse ring animation */
.hero-btn-donate {
  background: linear-gradient(135deg, #1D4ED8 0%, #3B82F6 50%, #2563EB 100%);
  animation: heroPulse 2.8s ease-in-out infinite;
}
```

**Dark CTA blocks** (navy sections with CTAs — all use same treatment):
- Background: `linear-gradient(135deg, #071525 0%, #0D2040 50%, #0A1E3D 100%)`
- Top border: `3px solid #F59E0B` (gold)
- Primary button: gradient blue with glow shadow
- Applied to: home Rylee block, blog inline CTA, sponsors CTA, contact navy section, causes CTA

---

## Mobile vs Desktop — Key Differences

### Nav
- **Desktop**: 9 text links + "Donate Now" + "Play May 29" CTAs
- **Mobile**: Bottom tab bar — Home | HD | Causes | **Donate** (primary blue) | Gallery

### Testimonials (VideoTestimonial)
- **Desktop**: 3-col grid
- **Mobile**: Horizontal touch carousel (85vw per slide, snap scroll, "← Swipe →" hint)
- Applied to: home page + causes page

### Sponsors (SponsorsSection)
- **Desktop**: 3-col grid for major sponsors
- **Mobile**: Horizontal touch carousel (82vw per slide)
- Title sponsor stacks vertically on mobile

### Timeline
- **Desktop**: Left-to-right 2024→2026 (chronological)
- **Mobile**: Reversed — 2026 first (most urgent at top)

### Packages
- **Desktop**: PackagesSection component
- **Mobile**: Simplified 2×2 grid version inline in page.tsx

---

## Video Testimonials

3 UC Davis HD family videos — all from YouTube:

| Person | YouTube ID | Placement | Fallback Image |
|--------|-----------|-----------|----------------|
| Mikey & Holly | `zij5RaT5GsY` | Home + Causes | `/images/event-group-2.jpg` |
| Tiffany | `7nDr5ous818` | Home + Causes | `/images/event-group-3.jpg` |
| Leilani Dunmoyer | `7jrefyflRVc` | Home + Causes | `/images/event-group-4.jpg` |

**Thumbnail note**: Mikey & Holly and Tiffany videos are unlisted — YouTube blocks `maxresdefault.jpg`. Using `hqdefault.jpg` with `onError` fallback to site event photos.

---

## Blog Posts (content/blog/)

### Patient Story posts (category: Patient Stories — purple badge)
- `hd-family-story-tiffany-uc-davis.md` — Tiffany's 24-year journey, UC Davis
- `hd-family-story-mikey-holly-uc-davis.md` — Holly's diagnosis, Mikey's tribute
- `hd-family-story-leilani-dunmoyer-uc-davis.md` — Gene-positive, marathon runner

Each has: unique Unsplash cover image + YouTube video embedded after first paragraph.

### Education/Event posts
- `what-is-huntingtons-disease.md`
- `huntingtons-disease-symptoms-stages.md`
- `is-huntingtons-disease-hereditary.md`
- `ivf-genetic-testing-huntingtons-disease.md`
- `huntingtons-disease-northern-nevada-care.md`
- `huntingtons-disease-support-nevada.md`
- `charity-golf-sponsorship-nevada.md`
- `grays-crossing-golf-club-truckee.md`
- `how-to-help-huntingtons-disease-nevada.md`
- `nvforhd-transparency-where-money-goes.md`
- `nvforhd-2025-year-in-review.md`
- `nvforhd-golf-tournament-2026.md`
- `genetic-testing-huntingtons-disease-guide.md`

**Blog frontmatter format:**
```yaml
---
title: 'Title here — use single quotes to avoid YAML escaping issues'
excerpt: "Excerpt here"
date: "2026-03-27"
author: "NVforHD"
category: "Patient Stories"
coverImage: "/images/blog-tiffany.jpg"
coverAlt: "Alt text"
readingTime: 4
featured: true
---
```

**WARNING**: Never use double-quoted titles with internal quotes — causes YAML parse errors and `\"` showing on site. Use single-quoted titles.

---

## Blog Custom HTML Elements

The blog body renderer supports custom HTML classes:

```html
<!-- Video embed (CSS class .blog-video-wrap / .blog-video already exists) -->
<div class="blog-video-wrap">
  <div class="blog-video">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID?rel=0" ...></iframe>
  </div>
  <p class="blog-caption">Caption text</p>
</div>
```

---

## Content — Verified Facts

- Raised: $50,000+ total, $25,000 in 2024 (sold out)
- 2024 beneficiary: HelpCureHD — Brandon & Rylee Puccini IVF (HD-free baby)
- 2025/2026 beneficiary: UC Davis HD Center of Excellence, Sacramento
- UC Davis serves 90+ Northern Nevada HD families
- UC Davis team: 2 neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 PTs, 3 researchers
- HelpCureHD helped 135+ families nationally
- Founder: Sean Schaeffer — wife Christine diagnosed with HD
- Hotel partner: Atlantis & Peppermill — call Sean 775-691-8860 for discount rooms
- HD = Parkinson's + ALS + Alzheimer's simultaneously, always fatal, hereditary (50% pass rate)

---

## Known Content Gaps (flag to client before launch)

- [ ] 5th board member bio + headshot
- [ ] 2026 charity cause content (currently "Coming Soon" on charity causes page)
- [ ] Event pricing / packages (PackagesSection has placeholder prices)
- [ ] Day-of event schedule
- [ ] Social media handles (Instagram/Facebook) — none found
- [ ] Donation-only flow (no golf required)
- [ ] Was 2025 at Old Greenwood or Gray's Crossing?
- [ ] Terms & Conditions content
- [ ] Cancellation Policy content
- [ ] 2026 sponsor logos + tiers
- [ ] Unique headshot photos for blog post cover images (currently using Unsplash)

---

## SEO / Schema

| Page | Schema |
|------|--------|
| All | WebPage + Speakable + Organization + BreadcrumbList |
| Home | SportsEvent + NonprofitOrganization + FAQPage |
| About | Person ×4 |
| Causes | FAQPage |
| Blog posts | BlogPosting + BreadcrumbList |
| Contact | ContactPage |

Meta title: `[Topic] | NVforHD — Cure Huntington's Disease`
Canonical: always `https://www.nvforhd.com/[path]` — no trailing slash

---

## Deploy Workflow

GitHub push to `main` → Vercel auto-deploys.

**ALWAYS run `npm run build` locally before pushing.** Build errors block all subsequent deploys.

Common build errors seen:
- Event handlers (`onMouseEnter`, `onMouseLeave`) in Server Components → use CSS classes instead
- Duplicate object keys in inline styles (e.g. `borderLeft` twice) → TypeScript error
- Unescaped apostrophes in JS string literals → syntax error
- YAML frontmatter with double-quoted titles containing internal quotes → use single quotes

---

## Outbound Links (preserve all)

| URL | Usage |
|-----|-------|
| https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament | Primary booking CTA |
| http://www.helpcurehd.com | 2024 charity partner |
| https://drive.google.com/drive/folders/1s-Omg_LPI5S56ezKHYjE-I7go2fU4_Ln | Old gallery fallback |
| tel:7756918860 | Phone |
| mailto:info@nvforhd.com | Email |
| www.rtnnv.org | Rebuilding Together NV (sponsor) |
| https://www.aguirreriley.com | Title Sponsor |
| https://health.ucdavis.edu/huntingtons-disease | UC Davis HD Center |
| https://c-hawk.com | C-Hawk Technology (Gold Sponsor) |
