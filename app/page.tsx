import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import PackagesSection from '@/components/PackagesSection'
import SponsorsSection from '@/components/SponsorsSection'
import MobileCTADock from '@/components/MobileCTADock'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Charity Golf Tournament May 29, 2026",
  description: "NVforHD raises funds to fight Huntington's Disease. Annual golf tournament May 29, 2026 at Gray's Crossing, Truckee CA. $50K+ raised. One HD-free baby funded. 90+ Nevada families served.",
  openGraph: {
    title: "NVforHD — Let's Cure Huntington's Disease",
    description: "Golf tournament May 29, 2026. $50K+ raised. One HD-free baby funded. 90+ Nevada families served.",
    images: [{ url: '/images/hero-couple.jpg', width: 1200, height: 630 }],
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
    { '@type': 'Question', name: 'What does NVforHD do?', acceptedAnswer: { '@type': 'Answer', text: "NVforHD is a Nevada non-profit that hosts an annual charity golf tournament and directs 100% of proceeds to one chosen HD cause each year." } },
    { '@type': 'Question', name: 'When is the 2026 NVforHD golf tournament?', acceptedAnswer: { '@type': 'Answer', text: "Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start." } },
    { '@type': 'Question', name: 'How can I donate to NVforHD without playing golf?', acceptedAnswer: { '@type': 'Answer', text: "Direct donations start at $100. Email info@nvforhd.com or call 775-691-8860." } },
  ],
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <MobileCTADock />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════
          HERO — Full bleed human photo.
          DESKTOP: Split layout — dark photo left, cream story right
          MOBILE: Full bleed photo, text overlay bottom, CTA pinned
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/hero-couple.jpg" alt="A couple embracing — every HD family" fill
            style={{ objectFit: 'cover', objectPosition: 'center 28%' }} priority quality={90} className="hero-kb" />
        </div>
        {/* Desktop: heavy left gradient, photo breathes right */}
        <div className="hero-gradient-desktop" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(6,13,26,0.96) 0%, rgba(6,13,26,0.85) 45%, rgba(6,13,26,0.25) 100%)' }} />
        {/* Mobile: bottom gradient so text readable */}
        <div className="hero-gradient-mobile" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.97) 0%, rgba(6,13,26,0.6) 50%, rgba(6,13,26,0.2) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', zIndex: 3 }} />

        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'var(--px)', paddingTop: 'clamp(6rem,14vw,10rem)', paddingBottom: 'clamp(4rem,8vw,6rem)', width: '100%' }}>
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', animation: 'fadeup 0.8s var(--ease) 0.2s both' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(29,78,216,0.9)' }}>For every family living with HD</span>
            </div>

            {/* MOBILE headline — short, punchy, 2 lines max */}
            <h1 className="hero-h1-mobile" style={{ display: 'none', fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,11vw,4.5rem)', fontWeight: 300, lineHeight: 0.92, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.025em', animation: 'fadeup 1s var(--ease) 0.35s both' }}>
              HD takes everything.<br /><em style={{ color: 'rgba(255,255,255,0.4)' }}>We fight back.</em>
            </h1>

            {/* DESKTOP headline */}
            <h1 className="hero-h1-desktop" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,7vw,8rem)', fontWeight: 300, lineHeight: 0.9, color: '#fff', marginBottom: '2rem', letterSpacing: '-0.025em', animation: 'fadeup 1s var(--ease) 0.35s both' }}>
              HD takes<br />everything.<br /><em style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>We fight back.</em>
            </h1>

            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1.5rem', marginBottom: '2.5rem', animation: 'fadeup 0.9s var(--ease) 0.55s both' }}>
              {/* MOBILE — max 3 lines */}
              <p className="hero-copy-mobile" style={{ display: 'none', fontSize: 'clamp(0.95rem,3.5vw,1rem)', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', fontWeight: 300 }}>
                Sean&apos;s wife Christine has HD. He raised $50,000 and funded a family&apos;s future.
              </p>
              {/* DESKTOP */}
              <p className="hero-copy-desktop" style={{ fontSize: 'clamp(1rem,1.5vw,1.1rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.82)', fontWeight: 300 }}>
                Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease — a fatal, hereditary brain disorder with no cure. He didn&apos;t grieve quietly.{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>He raised $50,000 and funded a family&apos;s future.</strong>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', animation: 'fadeup 0.9s var(--ease) 0.7s both' }}>
              <a href={D100} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '1.1rem 2.2rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                Donate Now →
              </a>
              <a href={GOLF} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1.5px solid rgba(255,255,255,0.3)', padding: '1.05rem 1.75rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                Play Golf May 29
              </a>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', animation: 'fadeup 0.9s var(--ease) 0.85s both' }}>
              100% → UC Davis HD Center of Excellence
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — Animated counters.
          DESKTOP: 4 col, giant numbers
          MOBILE: 2×2 grid, slightly smaller
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', borderTop: '1px solid var(--cream-3)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { n: 50000, prefix: '$', suffix: 'K+', label: 'Raised', sub: 'In 2 years. From zero.', blue: false },
            { n: 90,    prefix: '',  suffix: '+',  label: 'HD Families', sub: 'Served at UC Davis', blue: false },
            { n: 1,     prefix: '',  suffix: '',   label: 'HD-Free Baby', sub: 'Funded. On the way.', blue: true },
            { n: 0,     prefix: '',  suffix: '',   label: 'Known Cures', sub: "That's why we fight.", blue: false },
          ].map(({ n, prefix, suffix, label, sub, blue }, i) => (
            <ScrollReveal key={label} delay={i * 0.08} style={{ padding: 'clamp(2.5rem,4vw,4.5rem) clamp(1.5rem,3vw,3rem)', borderRight: i < 3 ? '1px solid var(--cream-3)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,6vw,7rem)', fontWeight: 600, lineHeight: 1, color: blue ? 'var(--blue)' : 'var(--ink)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                {n === 50000
                  ? <><AnimatedCounter target={50} prefix="$" suffix="K+" duration={2000} /></>
                  : n > 1
                  ? <><AnimatedCounter target={n} suffix={suffix} duration={1600} /></>
                  : <>{prefix}{n}{suffix}</>
                }
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--ink-dim)' }}>{sub}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          DISEASE SECTION
          DESKTOP: Big pull quote + 2×2 fact grid
          MOBILE: Single column, short copy blocks
      ══════════════════════════════════════ */}
      <section id="cause" style={{ background: 'var(--cream)', padding: 'var(--py-xl) var(--px)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(12rem,20vw,26rem)', fontWeight: 700, fontStyle: 'italic', color: 'rgba(17,24,39,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>HD</div>
        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Huntington&apos;s Disease</span>
            </div>
            <div style={{ maxWidth: '860px', marginBottom: 'clamp(3.5rem,6vw,7rem)' }} className="speakable">
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,6vw,7rem)', fontWeight: 300, lineHeight: 0.95, color: 'var(--ink)', marginBottom: '2rem', letterSpacing: '-0.025em' }}>
                Terminal. Hereditary.<br /><em style={{ color: 'var(--ink-dim)' }}>No cure.</em>
              </h2>
              {/* MOBILE copy — max 3 lines */}
              <p className="cause-copy-mobile" style={{ display: 'none', fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-mid)', maxWidth: '560px' }}>
                HD destroys the brain — <strong style={{ color: 'var(--ink)' }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong> If your parent has it, flip a coin. That&apos;s your chance.
              </p>
              {/* DESKTOP copy */}
              <p className="cause-copy-desktop" style={{ fontSize: 'clamp(1.05rem,1.6vw,1.2rem)', lineHeight: 1.9, color: 'var(--ink-mid)', maxWidth: '640px', fontWeight: 300 }}>
                HD destroys nerve cells — a process likened to experiencing <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong> It is always fatal. There is no approved treatment that slows it. If your parent has HD, flip a coin. That is your statistical chance of inheriting it.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--cream-3)' }} className="facts-grid">
            {[
              { n: '01', head: 'No cure exists', body: 'Researchers are making real progress — but today there is no drug that stops HD. Every family affected right now needs support, not promises.' },
              { n: '02', head: 'The cycle can be broken', body: 'IVF with genetic testing means a child can be born HD-free permanently. The mutation stops here. That is what your donation buys.' },
              { n: '03', head: '90+ families, one clinic', body: 'The UC Davis HD Center is the only specialist HD care within reach of Northern Nevada. 130 miles from Reno. Runs on private donation.' },
              { n: '04', head: 'This is local', body: 'Reno, Sparks, the Sierra Foothills. Your $100 keeps the clinic open for families who have nowhere else to go.' },
            ].map(({ n, head, body }) => (
              <ScrollReveal key={n}>
                <div style={{ background: 'var(--white)', padding: 'clamp(1.75rem,3vw,3.5rem)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.7rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>{n}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{head}</h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--ink-dim)' }} className="fact-body">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1} style={{ marginTop: '1.5px' }}>
            <div style={{ background: 'var(--navy)', padding: 'clamp(2.5rem,5vw,5rem)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="quote-cta-grid">
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem,2.8vw,2.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.35, marginBottom: '1.25rem' }}>
                  &ldquo;Thank you for gifting us life that is Huntington&apos;s free.&rdquo;
                </div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600 }}>
                  — Rylee Puccini · Funded by the 2024 Tournament
                </div>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href={D100} target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', background: 'var(--blue)', color: '#fff', padding: '1rem 2rem', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)', whiteSpace: 'nowrap' }}>Fund a Family →</a>
                <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', textAlign: 'center' }}>or play golf May 29</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE — DESKTOP: Horizontal scroll
          MOBILE: Vertical stacked cards
          This is the core desktop psychology:
          the visitor scrolls THROUGH time
      ══════════════════════════════════════ */}
      <section id="years" style={{ background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--cream-3)' }} />

        {/* ── DESKTOP: Horizontal pin + scroll ── */}
        <div className="timeline-desktop" style={{ padding: 'var(--py-lg) var(--px)' }}>
          <div className="inner">
            <ScrollReveal style={{ marginBottom: 'clamp(3rem,5vw,5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Three Years. Real Results.</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,6rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.95, letterSpacing: '-0.025em' }}>
                  Year by year.<br /><em style={{ color: 'var(--ink-dim)' }}>Cause by cause.</em>
                </h2>
              </div>
              <p style={{ maxWidth: '220px', fontSize: '0.85rem', lineHeight: 1.85, color: 'var(--ink-dim)', textAlign: 'right' }}>
                Every dollar to one cause. No overhead. No splitting.
              </p>
            </ScrollReveal>

            {/* Horizontal timeline track */}
            <div style={{ position: 'relative', paddingBottom: '2rem' }}>
              {/* Track line */}
              <div style={{ position: 'absolute', top: '28px', left: 0, right: 0, height: '2px', background: 'var(--cream-3)', zIndex: 0 }} />
              <div style={{ position: 'absolute', top: '28px', left: 0, width: '66%', height: '2px', background: 'var(--blue)', zIndex: 1 }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', position: 'relative', zIndex: 2 }}>
                {[
                  { year: '2024', done: true,  tag: 'Inaugural · Sold Out', title: '$25,000 for HelpCureHD', body: "Sold out. Every dollar funded IVF for Brandon & Rylee Puccini. Rylee is now pregnant with an HD-free baby.", href: '/causes', cta: 'Their story →', img: '/images/event-crowd.jpg' },
                  { year: '2025', done: true,  tag: 'UC Davis · 90+ Families', title: 'HD Center of Excellence', body: 'Funded the only HD specialist clinic in Northern Nevada — 2 neurologists, 2 psychiatrists, a genetic counselor, social worker, and physical therapists.', href: '/causes', cta: 'Read more →', img: '/images/event-group-2.jpg' },
                  { year: '2026', done: false, tag: "May 29 · Register Now", title: 'UC Davis — Again', body: "Returning to protect the clinic. One round of golf or a $100 donation keeps care open for 90+ Northern Nevada HD families.", href: GOLF, cta: 'Join us →', img: '/images/course-1.jpg' },
                ].map(({ year, done, tag, title, body, href, cta, img }, i) => (
                  <ScrollReveal key={year} delay={i * 0.15}>
                    {/* Year node */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: done ? 'var(--blue)' : 'var(--white)', border: `3px solid ${done ? 'var(--blue)' : 'var(--cream-3)'}`, flexShrink: 0, boxShadow: done ? '0 0 0 4px rgba(29,78,216,0.15)' : 'none', transition: 'all 0.3s' }} />
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 600, color: done ? 'var(--blue)' : 'var(--ink-dim)', letterSpacing: '-0.01em' }}>{year}</span>
                    </div>

                    {/* Card with photo */}
                    <div style={{ background: 'var(--white)', border: `1px solid ${!done ? 'var(--blue)' : 'var(--cream-3)'}`, borderTop: `3px solid ${done ? 'var(--blue)' : 'var(--cream-3)'}`, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'relative', height: '160px', overflow: 'hidden', flexShrink: 0 }}>
                        <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: done ? 'none' : 'brightness(1.05)' }} />
                        {!done && <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'var(--blue)', color: '#fff', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, padding: '0.25rem 0.65rem', fontFamily: 'var(--sans)' }}>Open Now</div>}
                      </div>
                      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'inline-block', background: !done ? 'var(--blue-light)' : 'var(--cream-2)', border: !done ? '1px solid var(--blue-faint)' : '1px solid var(--cream-3)', color: !done ? 'var(--blue)' : 'var(--ink-dim)', fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.22rem 0.65rem', marginBottom: '0.85rem', fontWeight: 600, fontFamily: 'var(--sans)' }}>{tag}</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.6vw,1.25rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '0.75rem' }}>{title}</div>
                        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'var(--ink-dim)', fontWeight: 300, flex: 1, marginBottom: '1.25rem' }}>{body}</p>
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                          style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--blue)', textDecoration: 'none' }}>
                          {cta}
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE: Vertical stacked, full-bleed photos ── */}
        <div className="timeline-mobile" style={{ display: 'none' }}>
          <div style={{ padding: 'var(--py-lg) var(--px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Our Track Record</span>
            </div>
          </div>
          {[
            { year: '2024', tag: 'Sold Out', title: '$25,000 raised', sub: 'Brandon & Rylee Puccini — HD-free baby funded.', href: '/causes', img: '/images/event-crowd.jpg', done: true },
            { year: '2025', tag: '90+ Families', title: 'UC Davis funded', sub: 'The only HD specialist clinic in Northern Nevada.', href: '/causes', img: '/images/event-group-2.jpg', done: true },
            { year: '2026', tag: 'Open Now', title: 'May 29 — Join us', sub: "Gray's Crossing, Truckee. Register today.", href: GOLF, img: '/images/course-1.jpg', done: false },
          ].map(({ year, tag, title, sub, href, img, done }) => (
            <a key={year} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
              style={{ display: 'block', textDecoration: 'none', marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '200px' }}>
                <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.92) 0%, rgba(6,13,26,0.2) 60%)' }} />
                {done && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)' }} />}
                {!done && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gold-light)' }} />}
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 600, color: '#fff' }}>{year}</span>
                    <span style={{ background: !done ? 'var(--blue)' : 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, padding: '0.2rem 0.6rem', fontFamily: 'var(--sans)' }}>{tag}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: '#fff', marginBottom: '0.2rem' }}>{title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>{sub}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PUCCINI — The conversion moment.
          Full-bleed pregnant sunset. Baby hands.
          MOBILE: Stacked, photo full-bleed top, white card below
          DESKTOP: Side by side
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/pregnant-sunset.jpg" alt="Rylee and Brandon — funded by NVforHD 2024" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} quality={85} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.88)' }} />
        </div>
        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'var(--py-xl) var(--px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="puccini-grid">
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px', border: '1px solid rgba(29,78,216,0.4)', zIndex: 0 }} />
                <Image src="/images/baby-hands.jpg" alt="Two parents' hands holding their HD-free newborn" width={800} height={600}
                  style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }} quality={90} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: '1.5rem 1.75rem 1.75rem', background: 'linear-gradient(to top, rgba(6,13,26,0.9), transparent)' }}>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Brandon & Rylee Puccini · 2025 · HD-Free</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  <div style={{ width: '18px', height: '2px', background: 'var(--gold-light)' }} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-light)' }}>What your money did in 2024</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,5.5vw,6rem)', fontWeight: 300, lineHeight: 0.95, color: '#fff', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                  &ldquo;Rylee is<br />pregnant.&rdquo;
                </h2>
                {/* MOBILE — 3 lines */}
                <p className="puccini-copy-mobile" style={{ display: 'none', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                  $25,000 from the 2024 tournament funded IVF for Brandon & Rylee. <strong style={{ color: '#fff' }}>Their baby will never have HD.</strong>
                </p>
                {/* DESKTOP */}
                <p className="puccini-copy-desktop" style={{ fontSize: 'clamp(1rem,1.4vw,1.1rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.72)', marginBottom: '1.25rem', fontWeight: 300 }}>
                  The 2024 tournament raised $25,000. That money funded IVF with genetic screening for Brandon and Rylee Puccini. The embryo transfer was successful. They heard the heartbeat.
                </p>
                <p className="puccini-copy-desktop" style={{ fontSize: 'clamp(1rem,1.4vw,1.1rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.72)', marginBottom: '2.5rem', fontWeight: 300 }}>
                  <strong style={{ color: '#fff' }}>Their baby will never have Huntington&apos;s Disease. That baby exists because people bought a round of golf.</strong>
                </p>

                {/* White donate card */}
                <div style={{ background: '#fff', padding: 'clamp(1.5rem,3vw,2.5rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', color: 'var(--ink)', fontWeight: 400 }}>Fund the next family.</div>
                    <div style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, fontFamily: 'var(--sans)' }}>100% to UC Davis HD</div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--ink-dim)', marginBottom: '1.25rem', lineHeight: 1.65 }}>Every dollar keeps the only HD specialist clinic serving 90+ Northern Nevada families open.</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginBottom: '1rem' }}>
                    <a href={D100} target="_blank" rel="noopener" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.9rem 0.4rem', background: 'var(--cream)', border: '2px solid var(--cream-3)', textDecoration: 'none', cursor: 'pointer' }}>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>$100</span>
                      <span style={{ fontSize: '0.55rem', color: 'var(--ink-dim)', marginTop: '0.3rem', textAlign: 'center' }}>Keeps a family in care</span>
                    </a>
                    <a href={D100} target="_blank" rel="noopener" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.9rem 0.4rem', background: 'var(--blue)', border: '2px solid var(--blue)', textDecoration: 'none', cursor: 'pointer', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '-9px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gold-light)', color: 'var(--navy-deep)', fontSize: '0.45rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800, padding: '0.18rem 0.5rem', whiteSpace: 'nowrap', fontFamily: 'var(--sans)' }}>★ Most Chosen</div>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>$250</span>
                      <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.3rem', textAlign: 'center' }}>Most impactful</span>
                    </a>
                    <a href={D100} target="_blank" rel="noopener" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.9rem 0.4rem', background: 'var(--cream)', border: '2px solid var(--cream-3)', textDecoration: 'none', cursor: 'pointer' }}>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>$500</span>
                      <span style={{ fontSize: '0.55rem', color: 'var(--ink-dim)', marginTop: '0.3rem', textAlign: 'center' }}>Funds a month of care</span>
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px solid var(--cream-3)', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.68rem', color: 'var(--ink-faint)' }}>No account needed.</span>
                    <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.66rem', color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Play golf instead →</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PackagesSection />
      <SponsorsSection />

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ maxWidth: '800px' }}>
          <ScrollReveal style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Common Questions</span>
            </div>
          </ScrollReveal>
          {[
            { q: "What is Huntington's Disease?", a: "Huntington's Disease is a hereditary, fatal brain disorder with no known cure. It causes progressive breakdown of nerve cells — likened to Parkinson's, ALS, and Alzheimer's simultaneously. Every child of a parent with HD has a 50% chance of inheriting it." },
            { q: "What does NVforHD do with tournament proceeds?", a: "100% of proceeds to one chosen HD cause — zero overhead. In 2024: IVF for Brandon & Rylee Puccini (now expecting an HD-free baby). In 2025 & 2026: UC Davis HD Center of Excellence serving 90+ Northern Nevada families." },
            { q: "When and where is the 2026 tournament?", a: "Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble. Discount hotel rooms at Atlantis and Peppermill — call Sean: 775-691-8860." },
            { q: "Can I donate without playing golf?", a: "Yes. Direct donations start at $100. Email info@nvforhd.com or call 775-691-8860." },
            { q: "What is the UC Davis HD Center of Excellence?", a: "The only HD specialty clinic within reach of Northern Nevada — 2 neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 physical therapists, 3 research coordinators. 130 miles from Reno. Runs entirely on private donation." },
          ].map(({ q, a }, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div style={{ borderBottom: '1px solid var(--cream-3)', padding: '1.75rem 0' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.3rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.8rem', lineHeight: 1.3 }}>{q}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--ink-dim)' }} className="speakable">{a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── DESKTOP ONLY ── */
        @media (min-width: 901px) {
          .hero-gradient-mobile  { display: none; }
          .hero-h1-mobile        { display: none !important; }
          .hero-copy-mobile      { display: none !important; }
          .cause-copy-mobile     { display: none !important; }
          .puccini-copy-mobile   { display: none !important; }
          .timeline-mobile       { display: none !important; }
        }

        /* ── MOBILE ONLY ── */
        @media (max-width: 900px) {
          .hero-gradient-desktop { display: none; }
          .hero-h1-desktop       { display: none !important; }
          .hero-copy-desktop     { display: none !important; }
          .cause-copy-desktop    { display: none !important; }
          .puccini-copy-desktop  { display: none !important; }
          .timeline-desktop      { display: none !important; }
          .timeline-mobile       { display: block !important; }

          .stats-grid   { grid-template-columns: 1fr 1fr !important; }
          .facts-grid   { grid-template-columns: 1fr !important; }
          .quote-cta-grid { grid-template-columns: 1fr !important; }
          .puccini-grid { grid-template-columns: 1fr !important; }

          /* Mobile: fact bodies short */
          .fact-body { display: none; }

          /* Mobile hero: text at bottom, photo full bleed */
          section:first-of-type .inner { padding-top: 60vh !important; padding-bottom: 2rem !important; }
        }
      ` }} />
    </>
  )
}
