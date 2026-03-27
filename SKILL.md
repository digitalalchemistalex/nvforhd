---
name: nvforhd-site
description: "Full rebuild of NVforHD.com — Nevada non-profit HD charity golf tournament site. Use whenever working on any aspect of this project: pages, components, animations, SEO, psychology strategy, images, content, email, blog. Zero WordPress/Elementor. Next.js + Tailwind. Trigger on: NVforHD, nvforhd, Huntington's Disease golf tournament, Sean Schaeffer, Nevada HD charity."
---

# NVforHD.com — Project Skill

**Read master-coding-standards FIRST. Then this.**

---

## Project Identity

| Field | Value |
|-------|-------|
| Client | NVforHD (Nevada for HD) — non-profit |
| Domain | **www.nvforhd.com** (always www — canonical, sitemap, schema) |
| GitHub | github.com/digitalalchemistalex/nvforhd |
| Vercel | vercel.com/golfbookingsystem/nvforhd |
| Phone | 775-691-8860 (Sean Schaeffer) |
| Email | info@nvforhd.com |
| Mailing | 2600 Mill St. #400, Reno, NV 89502 |
| Event | Annual golf tournament, May 29, 2026 |
| Venue 2026 | Gray's Crossing Golf Club, Truckee, CA |
| Venue 2024 | Old Greenwood Golf Club (Jack Nicklaus), Truckee, CA |
| Booking URL | https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament |
| Google Analytics | G-3KT4C16M4V (deferred load after window.load) |
| Google Search Console | Property: https://www.nvforhd.com — verified via meta tag |
| GSC Verification tag | dzMmgHd7knYIS59vlZo5Nz23g1-IdTioOAfHhI0LfFU |
| Unsplash App | ID: 903256, Key: 7snfb-_ppWFNwIDFrd0pPJVNe4ReHkKYP5pXm7JltBA |

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14.2.29 (App Router) |
| Styling | CSS custom properties (no Tailwind — CSS vars used throughout) |
| Animations | Framer Motion (desktop) + CSS-only (mobile) |
| Hosting | Vercel (auto-deploy from GitHub main branch) |
| Email | Nodemailer + Gmail SMTP (app/api/contact/route.ts) |
| Images | next/image — all event images converted to WebP |
| Analytics | GA4 G-3KT4C16M4V |
| Blog | Markdown files in /content/blog/ — custom renderer |
| **BANNED** | WordPress, Elementor, jQuery, Resend (replaced by Nodemailer) |

---

## DNS & Infrastructure

- **Registrar:** Network Solutions (nameservers transferred to Vercel)
- **Nameservers:** ns1.vercel-dns.com, ns2.vercel-dns.com
- **Email provider:** Google Workspace (Gmail)
- **Vercel DNS records set:**
  - MX x4 (Google Workspace)
  - TXT: SPF `v=spf1 include:_spf.google.com ~all`
  - TXT: GSC verification
  - TXT: DKIM `google._domainkey` (set via Google Workspace admin)
  - TXT: DMARC `v=DMARC1; p=quarantine; rua=mailto:info@nvforhd.com; pct=100`
- **DKIM:** Generated in Google Workspace admin → Apps → Gmail → Authenticate email — must click "Start Authentication" after DNS record added

---

## Environment Variables (Vercel Production)

| Variable | Value | Purpose |
|----------|-------|---------|
| `GMAIL_USER` | info@nvforhd.com | Contact form sender |
| `GMAIL_APP_PASSWORD` | caqs lccd ancs opxl | Gmail app password |
| `TEST_MODE` | true (REMOVE after testing) | BCC test emails to protonmail |

---

## Email System

- **Route:** `app/api/contact/route.ts`
- **Sends via:** Nodemailer → Gmail SMTP (port 465, secure)
- **Admin email:** Branded HTML to info@nvforhd.com with structured submission table + Reply CTA
- **Client email:** Branded HTML confirmation personalised per intent type
- **Logo:** Base64 embedded (no external URL — works in Protonmail/Gmail/Outlook)
- **Tagline in header:** "Nevada's fight against Huntington's Disease"
- **Spam protection:** Honeypot field (`form._hp`) + rate limiting (3/IP/hour) + input validation
- **TEST_MODE:** When `process.env.TEST_MODE === 'true'`, BCCs both emails to ifyougetlockedout@protonmail.com

### Contact Form Intents

| Intent | Extra Fields |
|--------|-------------|
| play | Group size dropdown, group member names |
| donate | Donation amount selector |
| sponsor | Tier selector (Title/Gold/Lunch/Hole/Custom), business name, website |
| volunteer | Role checkboxes (5 options), availability dropdown |
| media | Coverage type selector (5 options), publication, deadline, story angle |
| family | Message only — personal response promised |

---

## Site Structure

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Hero + Stats + Story + Causes + FAQ + Hub grid |
| `/about` | `app/about/page.tsx` | Board member cards + hub grid |
| `/causes` | `app/causes/page.tsx` | 2024/2025/2026 causes + hub grid |
| `/sponsors` | `app/sponsors/page.tsx` | Tiered sponsor grid + hub grid |
| `/gallery` | `app/gallery/page.tsx` | Masonry gallery (use client) |
| `/gallery` layout | `app/gallery/layout.tsx` | Metadata + ImageGallery schema |
| `/contact` | `app/contact/page.tsx` | Smart contact form (use client) |
| `/contact` layout | `app/contact/layout.tsx` | Metadata + ContactPage schema |
| `/blog` | `app/blog/page.tsx` | Blog index + hub grid |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Rich blog post renderer |
| `/terms` | `app/terms/page.tsx` | noindex |
| `/cancellation` | `app/cancellation/page.tsx` | noindex |
| `/api/contact` | `app/api/contact/route.ts` | Email handler |
| `/sitemap.xml` | `app/sitemap.ts` | Dynamic — reads file mtimes + blog post dates |
| `/robots.txt` | `public/robots.txt` | All major AI bots allowed |
| `/llms.txt` | `public/llms.txt` | AI crawler context file |

---

## Blog System

### Content Location
`/content/blog/*.md` — frontmatter + markdown body

### Frontmatter Fields
```yaml
title: string
excerpt: string
date: YYYY-MM-DD
author: string
category: Education | Event | Impact | Sponsors | Get Involved
coverImage: /images/... path
coverAlt: string
readingTime: number (minutes)
featured: boolean
```

### Rich Markdown Components (in blog posts)
```
:::stat NUMBER | Label          → Big navy stat callout
:::stats-grid / :::end          → 3-col grid of stats
:::pull Quote text              → Pull quote (large serif italic)
:::fact Verified fact. Source   → Green fact card with ✓
:::warning Hard truth text      → Orange warning card with !
:::image /path | Alt | Caption  → Full-width image with caption
:::video YOUTUBE_ID | Caption   → Responsive 16:9 YouTube embed
:::photos img1,img2,img3        → 3-col photo strip
```

### Published Blog Posts (13 total)
| Slug | Category | Target Keyword |
|------|----------|---------------|
| what-is-huntingtons-disease | Education | what is huntingtons disease |
| huntingtons-disease-symptoms-stages | Education | huntingtons disease symptoms stages |
| is-huntingtons-disease-hereditary | Education | is huntingtons disease hereditary |
| genetic-testing-huntingtons-disease-guide | Education | genetic testing huntingtons disease |
| huntingtons-disease-northern-nevada-care | Education | huntingtons disease nevada care |
| huntingtons-disease-support-nevada | Education | huntingtons disease support nevada |
| ivf-genetic-testing-huntingtons-disease | Impact | ivf huntingtons disease puccini |
| nvforhd-transparency-where-money-goes | Impact | where does nvforhd money go |
| nvforhd-2025-year-in-review | Impact | nvforhd 2025 results |
| nvforhd-golf-tournament-2026 | Event | nvforhd golf tournament 2026 |
| grays-crossing-golf-club-truckee | Event | grays crossing golf club truckee |
| charity-golf-sponsorship-nevada | Sponsors | charity golf sponsorship nevada |
| how-to-help-huntingtons-disease-nevada | Get Involved | how to help huntingtons disease nevada |

### Adding New Blog Posts
1. Create `/content/blog/[slug].md` with frontmatter
2. Sitemap auto-updates (reads getAllPosts() dynamically)
3. BlogPosting + BreadcrumbList schema auto-applied by renderer
4. generateMetadata auto-generates title, description, OG, canonical

---

## SEO / AEO State

### Global (layout.tsx)
- metadataBase: https://www.nvforhd.com
- Default OG image: /images/hero-couple.jpg (1200x630)
- Twitter card: summary_large_image
- NonprofitOrganization schema (JSON-LD)
- GSC verification meta tag
- GA4 deferred to window.load event
- Font: Cormorant Garamond (trimmed weights) + DM Sans via <link> (not @import)
- Hero LCP preload: `<link rel="preload" as="image" href="/images/hero-couple.jpg" fetchPriority="high">`

### Per-Page Schema
| Page | Schema |
|------|--------|
| Home | SportsEvent + FAQPage + BreadcrumbList + NonprofitOrg |
| About | Person ×4 (ItemList) + BreadcrumbList |
| Causes | FAQPage (4 HD questions) + Speakable + BreadcrumbList |
| Sponsors | BreadcrumbList |
| Gallery | ImageGallery + BreadcrumbList |
| Contact | ContactPage + BreadcrumbList |
| Blog | Blog schema + BreadcrumbList |
| Blog post | BlogPosting + BreadcrumbList (3-level) |

### Canonical Rule
**ALL canonicals use www.nvforhd.com — never bare nvforhd.com**
Sitemap, robots.txt, orgSchema, all page alternates → all www

### Meta Title Targets (50-60 chars)
| Page | Title |
|------|-------|
| Home | NVforHD — Charity Golf Tournament for Huntington's Disease |
| About | About NVforHD \| Fighting Huntington's Disease Since 2024 |
| Causes | How NVforHD Funds the Fight Against Huntington's Disease |
| Sponsors | Sponsor NVforHD \| Huntington's Disease Charity Golf 2026 |
| Gallery | NVforHD 2024 Golf Tournament Photos \| Truckee CA |
| Contact | Contact NVforHD \| Play, Donate, Sponsor or Volunteer |
| Blog | NVforHD Blog \| Huntington's Disease Stories & Updates |

### AEO / AI Overview
- Speakable CSS selector: `.speakable-causes` on causes page
- FAQPage schema on home + causes — answers HD questions for AI Overviews
- llms.txt at /llms.txt — full org context for AI crawlers
- All major AI bots allowed in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)

---

## Internal Linking Architecture

### Page → Page (hub grids before Footer)
Every main page has a hub grid linking to 3-4 other pages.
- Home → About, Causes, Sponsors, Gallery, Blog, Contact
- About → Causes, Blog, Contact
- Causes → Sponsors, About, Blog (IVF story), Contact
- Sponsors → Causes, Gallery, Contact
- Gallery → Blog, Causes, Contact
- Blog index → Causes, About, Sponsors, Contact
- Blog post → Causes, About, Sponsors, Contact (hub grid) + related posts

### Blog Cross-Links
Each blog post links to at least one other blog post and /causes or /contact.
Key cross-link chains:
- what-is-HD → symptoms-stages → ivf-story → transparency
- is-hereditary → ivf-story → causes
- grays-crossing → sponsorship → 2025-review
- how-to-help → tournament-2026 → causes

---

## Images

### Available in /public/images/
All event images converted to WebP. Headshots converted to WebP.
Key files: hero-couple.jpg, event-crowd.jpg/webp, event-green.webp, hd-ribbon.jpg, rb-letter.png, uc-davis.png, baby-hands.jpg, logo.png

### /public/gallery/
47 DSC*.jpg files from 2024 tournament. Used in blog photo strips.

### WebP Conversions Done
headshot-milligan.webp (30KB from 1.4MB), headshot-eskuchen.webp (37KB from 1.6MB), headshot-mcginnes.webp, headshot-sean.webp, all event-*.webp

---

## Brand

### Actual fonts in use (check globals.css — NOT Playfair)
```css
--font-serif: Cormorant Garamond (weights: 300, 400, 700 + italic 300, 400)
--font-sans:  DM Sans (weights: 300, 400, 500, 600, 700)
```

### Color Palette (CSS vars — check globals.css for full list)
```css
--blue:       #2B5BE0   /* primary CTAs, HD ribbon */
--navy:       #0D1B3E   /* dark sections */
--cream:      #F9F8F6   /* alternating bg */
--ink:        #1a1a2e   /* headings */
--ink-mid:    body copy color
--gold-dark:  sponsor accent
```

---

## Key Verified Facts (use freely in copy)

| Fact | Source |
|------|--------|
| $50,000+ raised in first 2 years | NVforHD confirmed |
| $25,000 raised in 2024 — sold out | NVforHD confirmed |
| 90+ Northern Nevada HD families | UC Davis / NVforHD confirmed |
| 2024 beneficiary: HelpCureHD, recipients: Brandon & Rylee Puccini | NVforHD confirmed |
| Rylee Puccini pregnant with HD-free baby | NVforHD confirmed |
| 2025 & 2026 beneficiary: UC Davis HD Center of Excellence, Sacramento | NVforHD confirmed |
| UC Davis team: 2 neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 PTs, 3 researchers | UC Davis / NVforHD |
| Sean Schaeffer's wife Christine diagnosed with HD | NVforHD confirmed |
| HD = Parkinson's + ALS + Alzheimer's simultaneously | HDSA |
| 50% hereditary chance per child | HDSA |
| 1 in 10,000 globally have HD | HDSA |
| IVF PGT-M success rate >95% for HD-free embryos | HDSA Medical Advisory Board |
| UC Davis is 1 of 48 HDSA Centers of Excellence nationwide | HDSA |
| HTT gene CAG repeat 40+ = will develop HD, no exceptions | HDSA |
| HelpCureHD helped 135+ families nationally | HelpCureHD |
| Hotel partner: Atlantis & Peppermill — call Sean 775-691-8860 | NVforHD confirmed |
| Packages: Foursome $880, Single $220, Sponsorships from $3,500 | NVforHD confirmed |

---

## Known Gaps (still needed from client)

- [ ] 5th board member bio + headshot
- [ ] Social media handles (Instagram/Facebook) — none found
- [ ] TEST_MODE env var must be REMOVED from Vercel after testing complete
- [ ] DKIM — must click "Start Authentication" in Google Workspace admin after DNS record confirmed

---

## Outbound Links (preserve all)

| URL | Usage |
|-----|-------|
| https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament | Primary booking/donate CTA |
| http://www.helpcurehd.com | 2024 charity partner |
| https://health.ucdavis.edu/huntingtons-disease | UC Davis HD Center |
| https://drive.google.com/drive/folders/1s-Omg_LPI5S56ezKHYjE-I7go2fU4_Ln | Old gallery fallback |
| tel:7756918860 | Phone |
| mailto:info@nvforhd.com | Email |
| www.rtnnv.org | Rebuilding Together NV (sponsor) |
| www.golfthehighsierra.com | Golf the High Sierra (event partner) |

---

## Deployment

Push to `main` → Vercel auto-deploys. No manual steps needed.
Always run `npm run build` locally before pushing — broken builds block all subsequent deploys.

**Common gotcha:** JSX does not allow duplicate className attributes — `className="foo" style={{}} className="bar"` will fail. Always merge into `className="foo bar"`.

**Canonical/www rule:** Every URL in the codebase must use `https://www.nvforhd.com` — sitemap.ts base, robots.txt Sitemap:, orgSchema url, all page alternates.canonical. The GSC property is www — mismatches cause indexing failures.
