import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import PackagesSection from '@/components/PackagesSection'
import SponsorsSection from '@/components/SponsorsSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'
import Link from 'next/link'
import VideoTestimonial from '@/components/VideoTestimonial'

export const metadata: Metadata = {
  title: "NVforHD — Charity Golf Tournament for Huntington's Disease",
  description: "Join Nevada's charity golf tournament May 29, 2026 at Gray's Crossing, Truckee. 100% fights Huntington's Disease. $50K+ raised. Register or donate.",
  alternates: { canonical: 'https://www.nvforhd.com' },
  openGraph: {
    title: "NVforHD — Let's Cure Huntington's Disease",
    description: "Golf tournament May 29, 2026. $50K+ raised. One HD-free baby funded. 90+ Nevada families served.",
    images: [{ url: '/images/hero-couple.jpg', width: 1200, height: 630, alt: "NVforHD Charity Golf Tournament 2026" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NVforHD — Let's Cure Huntington's Disease",
    description: "Golf tournament May 29, 2026 at Gray's Crossing, Truckee CA.",
    images: ['/images/hero-couple.jpg'],
  },
}

const GOLF  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-golf'
const D100  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-donate'

const eventSchema = {
  '@context': 'https://schema.org', '@type': 'SportsEvent',
  name: 'NVforHD Charity Golf Tournament 2026', startDate: '2026-05-29T12:00:00-07:00',
  location: { '@type': 'Place', name: "Gray's Crossing Golf Club", address: { '@type': 'PostalAddress', addressLocality: 'Truckee', addressRegion: 'CA', addressCountry: 'US' } },
  organizer: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
  description: "Annual charity golf tournament raising funds for the UC Davis HD Center of Excellence.",
  url: 'https://nvforhd.com',
}
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "What is Huntington's Disease?", acceptedAnswer: { '@type': 'Answer', text: "Huntington's Disease is a hereditary, fatal brain disorder with no known cure. It causes progressive breakdown of nerve cells — likened to Parkinson's, ALS, and Alzheimer's simultaneously. Every child of an HD parent has a 50% chance of inheriting it." } },
    { '@type': 'Question', name: 'What does NVforHD do?', acceptedAnswer: { '@type': 'Answer', text: "NVforHD hosts an annual charity golf tournament and directs 100% of proceeds to one chosen HD cause each year." } },
    { '@type': 'Question', name: 'When is the 2026 NVforHD golf tournament?', acceptedAnswer: { '@type': 'Answer', text: "Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start." } },
    { '@type': 'Question', name: 'How can I donate without playing golf?', acceptedAnswer: { '@type': 'Answer', text: "Direct donations start at $100. Email info@nvforhd.com or call 775-691-8860." } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nvforhd.com' },
  ],
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══════════════════════════════════════
          HERO
          LCP: hero-couple.jpg preloaded, priority=true
          DESKTOP: left-heavy gradient, text left
          MOBILE: full-bleed photo, text bottom-pinned, 2 CTAs visible above fold
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', maxHeight: '900px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <Image src="/images/hero-couple.jpg" alt="A couple embracing — every HD family" fill
          style={{ objectFit: 'cover', objectPosition: 'center 28%' }} priority quality={85} sizes="100vw" />

        {/* Desktop gradient: left heavy */}
        <div className="hero-grad-desktop" />
        {/* Mobile gradient: bottom heavy — text needs to be readable at bottom */}
        <div className="hero-grad-mobile" />

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', zIndex: 3 }} />

        <div className="hero-content">
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', animation: 'fadeup 0.7s ease 0.2s both' }}>
            <div style={{ width: '16px', height: '2px', background: 'var(--blue)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue-bright)' }}>For every family living with HD</span>
          </div>

          {/* Headline — different sizes per device, same copy */}
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,8vw,8rem)', fontWeight: 300, lineHeight: 0.92, color: '#fff', letterSpacing: '-0.025em', marginBottom: '1.5rem', animation: 'fadeup 1s ease 0.35s both' }}>
            HD takes<br />everything.<br /><em style={{ color: 'rgba(255,255,255,0.70)', fontStyle: 'italic' }}>We fight back.</em>
          </h1>

          {/* Body — mobile: 1 sentence. Desktop: 2 sentences via CSS */}
          <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1.25rem', marginBottom: '2rem', animation: 'fadeup 0.9s ease 0.5s both' }}>
            <p className="hero-body-mobile">Someone near and dear to us was diagnosed with HD — a fatal, hereditary brain disorder with no cure. We replaced despair with hope. Join us May 29 at Grays Crossing Golf Club, Truckee, CA.</p>
            <p className="hero-body-desktop">Someone near and dear to us was diagnosed with HD — a fatal, hereditary brain disorder with no cure. We decided to replace despair with hope and help others wherever we can. Please consider joining us in this fight as we raise funds for those in need via our Annual Golf Tournament. This year&apos;s event will be held at Grays Crossing Golf Club in Truckee, CA.</p>
          </div>

          {/* CTAs — stacked on mobile, side by side on desktop */}
          <div className="hero-ctas" style={{ animation: 'fadeup 0.9s ease 0.65s both' }}>
            <a href={D100} target="_blank" rel="noopener" className="hero-btn-donate">Reserve Now →</a>
            <a href={GOLF} target="_blank" rel="noopener" className="hero-btn-golf">Play Golf May 29</a>
          </div>

          <p style={{ marginTop: '1rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.75)', animation: 'fadeup 0.9s ease 0.8s both' }}>
            100% → UC Davis HD Center of Excellence
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — Animated counters
          MOBILE: 2×2, compact padding
          DESKTOP: 4-col, large
      ══════════════════════════════════════ */}
      <section className="stats-section">
        <div className="stats-grid-4">
          {[
            { target: 50, prefix: '$', suffix: 'K+', label: 'Raised', sub: 'In 2 years', blue: false },
            { target: 90, prefix: '',  suffix: '+',  label: 'HD Families', sub: "This year's event will help benefit", blue: false },
            { target: 1,  prefix: '',  suffix: '',   label: 'HD-Free Baby', sub: 'Funded', blue: true },
            { target: 0,  prefix: '',  suffix: '',   label: 'Known Cures or Treatments', sub: "That's why we fight", blue: false },
          ].map(({ target, prefix, suffix, label, sub, blue }, i) => (
            <ScrollReveal key={label} delay={i * 0.07} style={{ padding: 'clamp(2rem,4vw,4rem) clamp(1rem,3vw,3rem)', borderRight: i < 3 ? '1px solid var(--cream-3)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,6.5rem)', fontWeight: 600, lineHeight: 1, color: blue ? 'var(--blue)' : 'var(--ink)', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
                {target > 1 ? <AnimatedCounter target={target} prefix={prefix} suffix={suffix} duration={1600} /> : <>{prefix}{target}{suffix}</>}
              </div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem', fontFamily: 'var(--sans)' }}>{label}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--ink-dim)' }}>{sub}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          DISEASE — Mobile: 3 facts stacked, no walls
          Desktop: pull quote + 2×2 grid
      ══════════════════════════════════════ */}
      <section className="disease-section">
        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>

          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Huntington&apos;s Disease</span>
            </div>
            <h2 className="disease-h2">Terminal. Hereditary.<br /><em style={{ color: 'var(--ink-dim)' }}>No cure.</em></h2>
            {/* Mobile: short, visceral */}
            <p className="disease-copy-mobile">HD destroys the brain. <strong>Parkinson&apos;s + ALS + Alzheimer&apos;s simultaneously.</strong> Your parent has it? Flip a coin. That&apos;s your chance of inheriting it.</p>
            {/* Desktop: fuller */}
            <p className="disease-copy-desktop">HD destroys nerve cells — likened to experiencing <strong>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong> It is always fatal. There is no treatment that slows it. If your parent has HD, flip a coin. That is your statistical chance of inheriting it.</p>
          </ScrollReveal>

          {/* ── DESKTOP: 2×2 white fact cards with body text ── */}
          <div className="facts-grid facts-desktop">
            {[
              { n: '01', head: 'No cure or treatments exist', body: 'Every family affected right now needs support, research and guidance.' },
              { n: '02', head: "We've already helped one family break the cycle and have a child via IVF", body: 'IVF with genetic testing means a child can be born HD-free. The mutation stops here.' },
              { n: '03', head: 'UC Davis HD Center of Excellence is the only HD care within reach of Northern Nevada and the Sierra\'s', body: '' },
              { n: '04', head: 'Every little bit helps keep it open', body: 'The clinic runs on private donations. Your participation helps keep the lights on for families that have nowhere else to go.' },
            ].map(({ n, head, body }) => (
              <ScrollReveal key={n}>
                <div style={{ background: 'var(--white)', padding: 'clamp(1.5rem,3vw,3rem)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{n}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.4rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.6rem', lineHeight: 1.2 }}>{head}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--ink-dim)', margin: 0 }}>{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── MOBILE: Full-width impact statements — alternating dark/light, stat + punch line ── */}
          <div className="facts-mobile">
            {[
              {
                dark: true,
                stat: 'No cure.',
                sub: 'Not yet. Maybe not in time for your family.',
                line: 'HD is always fatal. Every family fighting it right now needs care — not a promise.',
                accent: 'var(--blue-bright)',
              },
              {
                dark: false,
                stat: '50% chance.',
                sub: "If your parent has HD, that's your odds.",
                line: "Inherited. Irreversible. Most people find out after they've already had children.",
                accent: 'var(--blue)',
              },
              {
                dark: true,
                stat: '90 families.',
                sub: 'One clinic. 130 miles from home.',
                line: 'UC Davis HD Center is the only specialist care in reach of Northern Nevada. It runs on private donation.',
                accent: 'var(--blue-bright)',
              },
              {
                dark: false,
                stat: '$100.',
                sub: 'Keeps a family in care.',
                line: 'Your donation goes directly to the clinic. Zero overhead. One hundred percent impact.',
                accent: 'var(--blue)',
              },
            ].map(({ dark, stat, sub, line, accent }, i) => (
              <div key={i} style={{
                background: dark ? 'var(--navy)' : 'var(--white)',
                padding: '2.25rem 1.5rem',
                borderLeft: `4px solid ${accent}`,
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem,10vw,3.5rem)', fontWeight: 600, color: dark ? '#fff' : 'var(--ink)', lineHeight: 0.95, marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
                  {stat}
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  {sub}
                </div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: dark ? 'rgba(255,255,255,0.88)' : 'var(--ink-mid)', margin: 0 }}>
                  {line}
                </p>
              </div>
            ))}
          </div>

          {/* Rylee quote block */}
          <ScrollReveal delay={0.1}>
            <div className="rylee-block">
              <div className="rylee-quote">&ldquo;Thank you for gifting us life that is Huntington&apos;s free.&rdquo;</div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '1.5rem' }}>
                — Rylee Puccini · Funded by the 2024 Tournament
              </div>
              <div className="rylee-ctas">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href={D100} target="_blank" rel="noopener" className="cta-primary-glow">Fund a Family →</a>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', color: '#D4A843', letterSpacing: '0.08em' }}>May 29 · Gray's Crossing · Limited spots</span>
                </div>
                <a href={GOLF} target="_blank" rel="noopener" className="cta-ghost-warm">Play Golf May 29 ↗</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE
          DESKTOP: 3-col with track line + photos
          MOBILE: 3 tap-to-go photo cards, full-bleed
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', borderTop: '1px solid var(--cream-3)', borderBottom: '1px solid var(--cream-3)' }}>
        {/* Desktop */}
        <div className="timeline-desktop-wrapper">
          <div className="inner" style={{ padding: 'var(--py-lg) var(--px)' }}>
            <ScrollReveal style={{ marginBottom: 'clamp(3rem,5vw,5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Three Years. Real Results.</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.95, letterSpacing: '-0.025em' }}>
                  Year by year.<br /><em style={{ color: 'var(--ink-dim)' }}>Cause by cause.</em>
                </h2>
              </div>
              <p style={{ maxWidth: '200px', fontSize: '0.82rem', lineHeight: 1.85, color: 'var(--ink-dim)', textAlign: 'right' }}>Every dollar to one cause. No overhead.</p>
            </ScrollReveal>

            <div style={{ position: 'relative', paddingBottom: '2rem' }}>
              <div style={{ position: 'absolute', top: '28px', left: 0, right: 0, height: '2px', background: 'var(--cream-3)' }} />
              <div style={{ position: 'absolute', top: '28px', left: 0, width: '66%', height: '2px', background: 'var(--blue)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5rem', position: 'relative', zIndex: 2 }}>
                {[
                  { year: '2024', done: true, tag: 'Sold Out', title: '$25,000 for HelpCureHD', body: "Funded IVF for Brandon & Rylee Puccini. Their baby will never have HD.", href: '/causes', cta: 'Their story →', img: '/images/event-crowd.jpg' },
                  { year: '2025', done: true, tag: '90+ Families', title: 'UC Davis HD Center', body: "Helped fund the only HD Specialty Clinic for families in Northern Nevada and the Sierra's.", href: '/causes', cta: 'Read more →', img: '/images/event-group-2.jpg' },
                  { year: '2026', done: false, tag: 'Open Now', title: 'UC Davis — Again', body: "May 29 · Grays Crossing, Truckee CA. Play one round of golf and help over 90 families fight this insidious disease.", href: GOLF, cta: 'Register →', img: '/images/course-1.jpg' },
                ].map(({ year, done, tag, title, body, href, cta, img }, i) => (
                  <ScrollReveal key={year} delay={i * 0.12}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: done ? 'var(--blue)' : 'var(--white)', border: `3px solid ${done ? 'var(--blue)' : 'var(--cream-3)'}`, flexShrink: 0, boxShadow: done ? '0 0 0 4px rgba(29,78,216,0.12)' : 'none' }} />
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 600, color: done ? 'var(--blue)' : 'var(--ink-dim)' }}>{year}</span>
                    </div>
                    <div style={{ border: `1px solid ${!done ? 'var(--blue)' : 'var(--cream-3)'}`, borderTop: `3px solid ${done ? 'var(--blue)' : 'var(--cream-3)'}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'relative', height: '140px', flexShrink: 0 }}>
                        <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
                        {!done && <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'var(--blue)', color: '#fff', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, padding: '0.2rem 0.55rem', fontFamily: 'var(--sans)' }}>Open Now</div>}
                      </div>
                      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'inline-block', background: !done ? 'var(--blue-light)' : 'var(--cream-2)', color: !done ? 'var(--blue)' : 'var(--ink-dim)', fontSize: '0.54rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', marginBottom: '0.75rem', fontWeight: 600, fontFamily: 'var(--sans)', border: !done ? '1px solid var(--blue-faint)' : '1px solid var(--cream-3)' }}>{tag}</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(0.95rem,1.6vw,1.15rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '0.6rem' }}>{title}</div>
                        <p style={{ fontSize: '0.8rem', lineHeight: 1.8, color: 'var(--ink-dim)', flex: 1, marginBottom: '1rem' }}>{body}</p>
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                          style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--blue)', textDecoration: 'none' }}>{cta}</a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — 3 full-bleed tap cards */}
        <div className="timeline-mobile-wrapper">
          {[
            { year: '2024', tag: 'Sold Out', title: '$25,000 raised', sub: 'Brandon & Rylee — HD-free baby.', href: '/causes', img: '/images/event-crowd.jpg', done: true },
            { year: '2025', tag: '90+ Families', title: 'UC Davis funded', sub: 'The only HD clinic in Northern NV.', href: '/causes', img: '/images/event-group-2.jpg', done: true },
            { year: '2026', tag: 'Register Now', title: 'May 29 — Join us', sub: "Gray's Crossing, Truckee. Open.", href: GOLF, img: '/images/course-1.jpg', done: false },
          ].map(({ year, tag, title, sub, href, img, done }) => (
            <a key={year} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
              style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', height: '180px' }}>
              <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.93) 0%, rgba(6,13,26,0.18) 60%)' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: done ? 'var(--blue)' : 'var(--gold-light)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 600, color: '#fff' }}>{year}</span>
                  <span style={{ background: !done ? 'var(--blue)' : 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, padding: '0.18rem 0.55rem', fontFamily: 'var(--sans)' }}>{tag}</span>
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: '#fff', marginBottom: '0.15rem' }}>{title}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PUCCINI — The conversion moment
          MOBILE: photo top, white donate card below
          DESKTOP: side by side
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/pregnant-sunset.jpg" alt="Rylee and Brandon — funded by NVforHD" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} quality={80} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.88)' }} />
        </div>
        <div className="inner puccini-grid" style={{ position: 'relative', zIndex: 2, padding: 'var(--py-xl) var(--px)' }}>
          <ScrollReveal>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px', border: '1px solid rgba(29,78,216,0.4)', zIndex: 0 }} className="puccini-frame" />
              <Image src="/images/baby-hands.jpg" alt="Two parents holding their HD-free newborn" width={800} height={600}
                style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }} quality={85} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: '1.25rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(6,13,26,0.9), transparent)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Brandon & Rylee Puccini · 2025 · HD-Free</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '16px', height: '2px', background: 'var(--gold-light)' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-light)' }}>What your money did in 2024</span>
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, lineHeight: 0.95, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                &ldquo;Rylee is pregnant.&rdquo;
              </h2>
              {/* Mobile: 2 lines */}
              <p className="puccini-copy-mobile" style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                $25,000. IVF. <strong style={{ color: '#fff' }}>Their baby will never have Huntington&apos;s Disease.</strong>
              </p>
              {/* Desktop: full */}
              <p className="puccini-copy-desktop">The 2024 tournament raised $25,000. That funded IVF for Brandon and Rylee Puccini. The transfer was successful. <strong style={{ color: '#fff' }}>That baby exists because people bought a round of golf.</strong></p>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ══════════════════════════════════════
          TESTIMONIALS — Real HD families
          2 videos: Mikey & Holly + Tiffany
          Both UC Davis patients — placed after emotional Puccini moment
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="inner">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue-bright)' }}>Real Families. Real Impact.</span>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 300, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              Why we show up<br /><em style={{ color: 'rgba(255,255,255,0.75)' }}>every year.</em>
            </h2>
          </div>
          {/* Desktop: 3-col grid */}
          <div className="testimonials-desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
            <VideoTestimonial
              youtubeId="zij5RaT5GsY"
              name="Mikey & Holly"
              role="HD Patient & Family — UC Davis Care Team"
              quote="Their care for us is not transactional — they are in this journey with us. We cannot have the quality of life that we have if it wasn't for them."
              fallbackImage="/images/event-group-2.jpg"
            />
            <VideoTestimonial
              youtubeId="7nDr5ous818"
              name="Tiffany"
              role="HD Family — UC Davis Patient"
              quote="From the moment we connected with them we were surrounded by people who understood what we were going through. They didn't just treat the medical side — they cared about the whole journey."
              fallbackImage="/images/event-group-3.jpg"
            />
            <VideoTestimonial
              youtubeId="7jrefyflRVc"
              name="Leilani Dunmoyer"
              role="Gene-Positive — UC Davis Patient Family"
              quote="We just felt hopeless and helpless — and then we found the UC Davis Center of Excellence. They have become like family right from the get-go."
              fallbackImage="/images/event-group-4.jpg"
            />
          </div>

          {/* Mobile: touch carousel */}
          <div className="testimonials-mobile-carousel">
            <div className="testimonials-scroll-track">
              <div className="testimonial-slide">
                <VideoTestimonial
                  youtubeId="zij5RaT5GsY"
                  name="Mikey & Holly"
                  role="HD Patient & Family — UC Davis Care Team"
                  quote="Their care for us is not transactional — they are in this journey with us. We cannot have the quality of life that we have if it wasn't for them."
                  fallbackImage="/images/event-group-2.jpg"
                />
              </div>
              <div className="testimonial-slide">
                <VideoTestimonial
                  youtubeId="7nDr5ous818"
                  name="Tiffany"
                  role="HD Family — UC Davis Patient"
                  quote="From the moment we connected with them we were surrounded by people who understood what we were going through. They didn't just treat the medical side — they cared about the whole journey."
                  fallbackImage="/images/event-group-3.jpg"
                />
              </div>
              <div className="testimonial-slide">
                <VideoTestimonial
                  youtubeId="7jrefyflRVc"
                  name="Leilani Dunmoyer"
                  role="Gene-Positive — UC Davis Patient Family"
                  quote="We just felt hopeless and helpless — and then we found the UC Davis Center of Excellence. They have become like family right from the get-go."
                  fallbackImage="/images/event-group-4.jpg"
                />
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', marginTop: '0.75rem', textTransform: 'uppercase' }}>← Swipe to see all 3 stories →</p>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Desktop: grid visible, carousel hidden */
          .testimonials-desktop-grid { display: grid; }
          .testimonials-mobile-carousel { display: none; }

          @media (max-width: 768px) {
            .testimonials-desktop-grid { display: none !important; }
            .testimonials-mobile-carousel { display: block; }
            .testimonials-scroll-track {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              gap: 12px;
              padding-bottom: 4px;
              scrollbar-width: none;
            }
            .testimonials-scroll-track::-webkit-scrollbar { display: none; }
            .testimonial-slide {
              flex: 0 0 85vw;
              scroll-snap-align: start;
            }
          }
        ` }} />
      </section>

      {/* Packages + Sponsors — only on desktop, mobile too long */}
      <div className="packages-desktop"><PackagesSection /></div>
      <div className="packages-mobile">
        <section style={{ background: 'var(--cream)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
          <div className="inner">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>May 29, 2026 · Join Us</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              {[
                { price: '$220', label: 'Single Golfer', sub: 'Full round + lunch' },
                { price: '$880', label: 'Foursome', sub: 'Golf for 4 + lunch' },
                { price: '$100', label: 'Donate', sub: 'No golf needed' },
                { price: '$100+', label: 'Hole Sign', sub: 'Your name on course' },
              ].map(({ price, label, sub }) => (
                <a key={label} href={GOLF} target="_blank" rel="noopener" style={{ display: 'block', background: 'var(--white)', border: '1px solid var(--cream-3)', padding: '1.25rem 1rem', textDecoration: 'none' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue)', lineHeight: 1, marginBottom: '0.3rem' }}>{price}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>{label}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--ink-dim)' }}>{sub}</div>
                </a>
              ))}
            </div>
            <a href={GOLF} target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', background: 'var(--blue)', color: '#fff', padding: '1.1rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
              Register for May 29 →
            </a>
          </div>
        </section>
      </div>

      <SponsorsSection />


      {/* Pull quote — Leilani — bridges testimonials to FAQ */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem,5vw,5rem) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.4, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              &ldquo;We just felt hopeless and helpless — and then we found the UC Davis Center of Excellence. They have become like family right from the get-go.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 600 }}>Leilani Dunmoyer — Gene-Positive, UC Davis Patient Family</span>
              <div style={{ width: '32px', height: '1px', background: 'var(--blue)' }} />
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="/blog/hd-family-story-leilani-dunmoyer-uc-davis" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--blue)', textDecoration: 'none' }}>Read her full story →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ maxWidth: '800px' }}>
          <ScrollReveal style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Common Questions</span>
            </div>
          </ScrollReveal>
          {[
            { q: "What is Huntington's Disease?", a: "A hereditary, fatal brain disorder with no known cure — likened to Parkinson's, ALS, and Alzheimer's simultaneously. Every child of a parent with HD has a 50% chance of inheriting it. As one family we support put it: 'We just felt hopeless and helpless' — until they found the right care team." },
            { q: "Where does my money go?", a: "100% to one chosen HD cause — zero overhead. In 2024: IVF for the Puccini family (HD-free baby born HD-free). In 2025 & 2026: UC Davis HD Center of Excellence, serving 90+ Northern Nevada families including Tiffany, Mikey & Holly, and Leilani's family — all of whom have shared their stories on this site." },
            { q: "When and where is the 2026 tournament?", a: "May 29, 2026 · Gray's Crossing Golf Club · Truckee, CA · 12:00 PM shotgun · Four-person scramble. Hotel discounts at Atlantis & Peppermill — call Sean: 775-691-8860." },
            { q: "Can I donate without playing?", a: "Yes. $100 minimum. Email info@nvforhd.com or call 775-691-8860. 100% goes directly to the cause." },
          ].map(({ q, a }, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div style={{ borderBottom: '1px solid var(--cream-3)', padding: '1.5rem 0' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(0.95rem,1.6vw,1.2rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.7rem', lineHeight: 1.3 }}>{q}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', margin: 0 }} className="speakable">{a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── INTERNAL LINK HUB ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem,5vw,5rem) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--ink-dim)', marginBottom: '2rem', fontFamily: 'var(--sans)' }}>Explore NVforHD</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="hub-grid">
            {[
              { href: '/causes', icon: '💙', title: 'Our Causes', desc: 'See exactly where every dollar goes — year by year.' },
              { href: '/about', icon: '🤝', title: 'Meet the Board', desc: 'Four people. One mission. Sean Schaeffer and the team behind NVforHD.' },
              { href: '/sponsors', icon: '🏆', title: 'Become a Sponsor', desc: 'Put your brand on the fight. Packages from $100.' },
              { href: '/gallery', icon: '📸', title: '2024 Gallery', desc: 'Photos from our sold-out inaugural tournament at Old Greenwood.' },
              { href: '/blog', icon: '📖', title: 'HD Education', desc: 'Learn about Huntington\'s Disease, IVF, and what NVforHD has achieved.' },
              { href: '/contact', icon: '✉️', title: 'Get In Touch', desc: 'Play, donate, sponsor, volunteer, or reach out as an HD family.' },
            ].map(({ href, icon, title, desc }) => (
              <a key={href} href={href} style={{ display: 'block', padding: 'clamp(1.25rem,2vw,1.75rem)', background: 'var(--white)', border: '1px solid var(--cream-3)', textDecoration: 'none', transition: 'all 0.2s' }}>
                <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.75rem' }}>{icon}</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.4rem' }}>{title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6 }}>{desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── HERO ── */
        .hero-grad-desktop {
          position: absolute; inset: 0;
          background: linear-gradient(110deg, rgba(6,13,26,0.96) 0%, rgba(6,13,26,0.82) 45%, rgba(6,13,26,0.2) 100%);
        }
        .hero-grad-mobile { display: none; }
        .hero-content {
          position: relative; z-index: 2;
          padding: var(--px);
          padding-bottom: clamp(4rem,7vw,6rem);
          width: 100%;
          max-width: calc(var(--max) + var(--px) * 2);
          margin: 0 auto;
        }
        .hero-body-mobile { display: none; font-size: clamp(0.92rem,3vw,1rem); line-height: 1.75; color: rgba(255,255,255,0.82); font-weight: 300; margin: 0; }
        .hero-body-desktop { font-size: clamp(0.98rem,1.4vw,1.05rem); line-height: 1.9; color: rgba(255,255,255,0.82); font-weight: 300; margin: 0; }
        .hero-ctas { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .hero-btn-donate {
          display: inline-block;
          background: linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #1D4ED8 100%);
          background-size: 200% 200%;
          color: #fff;
          padding: 1.05rem 2.25rem; font-size: 0.72rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 700; text-decoration: none;
          font-family: var(--sans);
          box-shadow: 0 4px 20px rgba(59,130,246,0.5), 0 0 0 0 rgba(59,130,246,0.4);
          transition: all 0.3s ease;
          animation: ctaPulse 2.5s ease-in-out infinite;
          position: relative; overflow: hidden;
        }
        .hero-btn-donate::after {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }
        .hero-btn-donate:hover {
          background-position: right center;
          box-shadow: 0 8px 32px rgba(59,130,246,0.7);
          transform: translateY(-2px);
        }
        .hero-btn-golf {
          display: inline-block; background: rgba(255,255,255,0.08); color: #fff;
          border: 1.5px solid rgba(255,255,255,0.7); padding: 1rem 2rem;
          font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
          font-weight: 600; text-decoration: none; font-family: var(--sans);
          transition: all 0.25s ease;
        }
        .hero-btn-golf:hover {
          background: rgba(255,255,255,0.18); border-color: #fff;
          transform: translateY(-2px); box-shadow: 0 4px 16px rgba(255,255,255,0.15);
        }

        /* ── CTA ANIMATIONS ── */
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(59,130,246,0.5), 0 0 0 0 rgba(59,130,246,0.35); }
          50% { box-shadow: 0 4px 28px rgba(59,130,246,0.65), 0 0 0 8px rgba(59,130,246,0); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          60%, 100% { left: 150%; }
        }
        .cta-primary-glow {
          display: inline-block;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          color: #fff; padding: 1rem 2rem;
          font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
          font-weight: 700; text-decoration: none; font-family: var(--sans);
          box-shadow: 0 4px 24px rgba(59,130,246,0.55);
          transition: all 0.25s ease;
          position: relative; overflow: hidden;
        }
        .cta-primary-glow::after {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shimmer 2.8s ease-in-out infinite;
        }
        .cta-primary-glow:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(59,130,246,0.7); }
        .cta-ghost-warm {
          display: inline-block;
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.55);
          padding: 0.95rem 1.75rem;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          font-weight: 600; text-decoration: none; font-family: var(--sans);
          transition: all 0.25s ease;
        }
        .cta-ghost-warm:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.9); transform: translateY(-1px); }

        /* ── CTA SYSTEM ── */
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(59,130,246,0.55), 0 0 0 0 rgba(59,130,246,0.3); }
          60% { box-shadow: 0 4px 32px rgba(59,130,246,0.7), 0 0 0 10px rgba(59,130,246,0); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          60%, 100% { left: 150%; }
        }
        .cta-primary {
          display: inline-block; position: relative; overflow: hidden;
          background: linear-gradient(135deg, #1D4ED8, #3B82F6);
          color: #fff; padding: 1rem 2rem;
          font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 700; text-decoration: none; font-family: var(--sans);
          box-shadow: 0 4px 20px rgba(59,130,246,0.5);
          transition: all 0.25s ease;
        }
        .cta-primary::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          animation: shimmer 3s ease-in-out 2s infinite;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(59,130,246,0.65); }
        .cta-ghost {
          display: inline-block;
          background: rgba(255,255,255,0.1); color: #fff;
          border: 1.5px solid rgba(255,255,255,0.75);
          padding: 0.95rem 1.75rem;
          font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase;
          font-weight: 600; text-decoration: none; font-family: var(--sans);
          transition: all 0.25s ease;
          box-shadow: inset 0 0 0 0 rgba(255,255,255,0.05);
        }
        .cta-ghost:hover { background: rgba(255,255,255,0.18); border-color: #fff; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(255,255,255,0.1); }

        /* ── STATS ── */
        .stats-section { background: var(--white); border-top: 1px solid var(--cream-3); border-bottom: 1px solid var(--cream-3); }
        .stats-grid-4 { display: grid; grid-template-columns: repeat(4,1fr); }

        /* ── DISEASE ── */
        .disease-section { background: var(--cream); padding: var(--py-xl) var(--px); position: relative; overflow: hidden; }
        .disease-h2 { font-family: var(--serif); font-size: clamp(2.5rem,6vw,7rem); font-weight: 300; line-height: 0.95; color: var(--ink); margin-bottom: 1.75rem; letter-spacing: -0.025em; }
        .disease-copy-mobile { display: none; font-size: 1rem; line-height: 1.8; color: var(--ink-mid); margin-bottom: clamp(2rem,4vw,4rem); }
        .disease-copy-desktop { font-size: clamp(1rem,1.5vw,1.15rem); line-height: 1.9; color: var(--ink-mid); max-width: 640px; font-weight: 300; margin-bottom: clamp(3rem,5vw,6rem); }
        .facts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px; background: var(--cream-3); margin-bottom: 1.5px; }
        .facts-mobile { display: none; }
        .rylee-block { background: linear-gradient(135deg, #060D1A 0%, #0B1A35 60%, #0F2040 100%); padding: clamp(2rem,4vw,4.5rem); border-top: 3px solid #D4A843; position: relative; overflow: hidden; }
        .rylee-block::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%); pointer-events: none; }
        .rylee-quote { font-family: var(--serif); font-style: italic; font-size: clamp(1.2rem,2.5vw,2.2rem); font-weight: 300; color: #fff; line-height: 1.35; margin-bottom: 1rem; }
        .rylee-ctas { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }

        /* ── TIMELINE ── */
        .timeline-desktop-wrapper { display: block; }
        .timeline-mobile-wrapper { display: none; }

        /* ── PUCCINI ── */
        .puccini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem,6vw,7rem); align-items: center; }
        .puccini-copy-mobile { display: none; }
        .puccini-copy-desktop { font-size: clamp(0.95rem,1.3vw,1.05rem); line-height: 1.9; color: rgba(255,255,255,0.72); margin-bottom: 2rem; font-weight: 300; }

        /* ── PACKAGES ── */
        .packages-desktop { display: block; }
        .packages-mobile  { display: none; }

        /* ═════════════════════════════════
           MOBILE — 768px and below
           True separate experience
        ═════════════════════════════════ */
        @media (max-width: 768px) {
          /* Hero: full bleed photo, text at bottom */
          .hero-grad-desktop { display: none; }
          .hero-grad-mobile {
            display: block; position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(6,13,26,0.98) 0%, rgba(6,13,26,0.55) 50%, rgba(6,13,26,0.15) 100%);
          }
          .hero-content { padding-bottom: calc(2.5rem + env(safe-area-inset-bottom, 0px)); }
          .hero-body-mobile  { display: block; }
          .hero-body-desktop { display: none; }
          .hero-ctas { flex-direction: column; gap: 0.6rem; }

          /* Stats: 2×2 compact */
          .stats-grid-4 { grid-template-columns: 1fr 1fr !important; }

          /* Disease: no walls */
          .disease-copy-mobile  { display: block; }
          .disease-copy-desktop { display: none; }
          .facts-desktop { display: none !important; }
          .facts-mobile  { display: block !important; }
          .rylee-block { padding: 2rem 1.5rem; }
          .rylee-ctas { flex-direction: column; align-items: stretch; gap: 0.75rem; }
          .cta-primary-glow { text-align: center; padding: 1.1rem 1.5rem; }
          .cta-ghost-warm { text-align: center; padding: 1rem 1.5rem; }
          .hero-btn-donate, .hero-btn-golf { width: 100%; text-align: center; padding: 1.1rem; }

          /* Timeline: mobile cards */
          .timeline-desktop-wrapper { display: none; }
          .timeline-mobile-wrapper  { display: block; }

          /* Puccini: stack */
          .puccini-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .puccini-frame { display: none; }
          .puccini-copy-mobile  { display: block; }
          .puccini-copy-desktop { display: none; }

          /* Packages: mobile version */
          .packages-desktop { display: none; }
          .packages-mobile  { display: block; }

          /* Hub grids */
          .hub-grid   { grid-template-columns: 1fr 1fr !important; }
          .hub-grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .hub-grid   { grid-template-columns: 1fr !important; }
          .hub-grid-4 { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </>
  )
}
