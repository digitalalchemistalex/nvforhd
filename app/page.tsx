import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import LetterSection from '@/components/LetterSection'
import PackagesSection from '@/components/PackagesSection'
import SponsorsSection from '@/components/SponsorsSection'
import MobileCTADock from '@/components/MobileCTADock'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Charity Golf Tournament May 29, 2026",
  description: "Annual charity golf tournament at Gray's Crossing, Truckee CA — May 29, 2026. All proceeds to UC Davis HD Center of Excellence. Join 90+ Northern Nevada HD families in the fight.",
  openGraph: {
    title: "NVforHD — Let's Cure Huntington's Disease",
    description: "Golf tournament May 29, 2026. $50K+ raised. One HD-free baby funded. 90+ Nevada families served.",
    images: [{ url: '/images/event-crowd.jpg', width: 1200, height: 630 }],
  },
}

const GOLF  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-golf'
const D100  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-donate'

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'NVforHD Charity Golf Tournament 2026',
  startDate: '2026-05-29T12:00:00-07:00',
  location: { '@type': 'Place', name: "Gray's Crossing Golf Club", address: { '@type': 'PostalAddress', addressLocality: 'Truckee', addressRegion: 'CA', addressCountry: 'US' } },
  organizer: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
  description: "Annual charity golf tournament raising funds for the UC Davis Huntington's Disease Center of Excellence.",
  url: 'https://nvforhd.com',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "What is Huntington's Disease?", acceptedAnswer: { '@type': 'Answer', text: "Huntington's Disease (HD) is a hereditary, fatal brain disorder with no known cure. It causes progressive breakdown of nerve cells and is likened to having Parkinson's, ALS, and Alzheimer's simultaneously. Every child of an HD parent has a 50% chance of inheriting it." } },
    { '@type': 'Question', name: 'What does NVforHD do?', acceptedAnswer: { '@type': 'Answer', text: "NVforHD is a Nevada non-profit that hosts an annual charity golf tournament and directs 100% of proceeds to one chosen HD cause each year. In 2024 we raised $25,000 to fund IVF for an HD family. In 2025 and 2026 we fund the UC Davis HD Center of Excellence, which serves 90+ Northern Nevada families." } },
    { '@type': 'Question', name: 'When is the 2026 NVforHD golf tournament?', acceptedAnswer: { '@type': 'Answer', text: "The 2026 NVforHD charity golf tournament is on Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble format." } },
    { '@type': 'Question', name: 'How can I donate to NVforHD without playing golf?', acceptedAnswer: { '@type': 'Answer', text: "You can make a direct donation starting at $100 through our booking page or by emailing info@nvforhd.com. All donations go directly to the UC Davis HD Center of Excellence." } },
  ],
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <MobileCTADock />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════════
          HERO — Split: dark photo left / white story right
      ══════════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }} className="hero-split">

        {/* Left — cinematic photo panel */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-deep)', minHeight: '100vh' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/event-foursome-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: 0.55, animation: 'drift 25s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,13,26,0.7) 0%, rgba(6,13,26,0.2) 60%, rgba(6,13,26,0.5) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 70%, rgba(248,245,240,1) 100%)' }} />

          {/* Logo top-left */}
          <div style={{ position: 'absolute', top: 'clamp(1.5rem,3vw,2.5rem)', left: 'clamp(1.5rem,3vw,3rem)', zIndex: 10 }}>
            <Image src="/images/logo.png" alt="NVforHD" width={110} height={80} style={{ height: '42px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.2)' }} priority />
          </div>

          {/* Bottom-left stat */}
          <div style={{ position: 'absolute', bottom: 'clamp(2rem,5vw,4rem)', left: 'clamp(1.5rem,3vw,3rem)', zIndex: 10, animation: 'fadeup 1s var(--ease) 0.8s both' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,5vw,5.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>$50K<span style={{ color: 'var(--gold-light)', fontSize: '0.5em' }}>+</span></div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.55)', fontWeight: 500, marginTop: '0.25rem' }}>Raised in 2 years</div>
          </div>

          {/* Scroll cue */}
          <div style={{ position: 'absolute', bottom: 'clamp(2rem,5vw,4rem)', right: '2rem', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }} className="scroll-indicator">
            <div style={{ width: '1px', height: '50px', background: 'rgba(249,248,246,0.15)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '25px', background: 'linear-gradient(to bottom, transparent, rgba(249,248,246,0.6))', animation: 'scrolldrop 2.2s ease-in-out infinite' }} />
            </div>
            <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.25)', writingMode: 'vertical-rl' }}>scroll</span>
          </div>
        </div>

        {/* Right — white story panel */}
        <div style={{ background: 'var(--cream)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(5rem,8vw,9rem) clamp(2rem,5vw,6rem) clamp(3rem,5vw,5rem)', position: 'relative', zIndex: 2 }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', animation: 'fadeup 0.8s var(--ease) 0.3s both' }}>
            <div style={{ width: '18px', height: '1.5px', background: 'var(--blue)' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Nevada for Huntington&apos;s Disease</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,6vw,7rem)', fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: '0.2em', animation: 'fadeup 1s var(--ease) 0.45s both' }}>
            Let&apos;s<br />
            Cure <em style={{ fontStyle: 'italic', color: 'var(--ink-dim)' }}>HD.</em>
          </h1>

          {/* Date line */}
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1rem,1.6vw,1.3rem)', color: 'var(--ink-dim)', margin: '1.5rem 0 2rem', animation: 'fadeup 0.9s var(--ease) 0.6s both' }}>
            May 29, 2026 &nbsp;·&nbsp; Gray&apos;s Crossing, Truckee CA
          </p>

          {/* The hook — the human story */}
          <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1.5rem', marginBottom: '2.5rem', animation: 'fadeup 0.9s var(--ease) 0.75s both' }}>
            <p style={{ fontSize: 'clamp(0.95rem,1.3vw,1.05rem)', lineHeight: 1.9, color: 'var(--ink-mid)' }}>
              Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease. He didn&apos;t hold a fundraiser.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>He started a fight.</strong>
            </p>
            <p style={{ fontSize: 'clamp(0.95rem,1.3vw,1.05rem)', lineHeight: 1.9, color: 'var(--ink-mid)', marginTop: '0.75rem' }}>
              Two years in — <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>$50,000 raised, one HD-free baby on the way, 90+ families protected.</strong>
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', animation: 'fadeup 0.9s var(--ease) 0.9s both' }}>
            <a href={GOLF} target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: '0.68rem' }}>
              Play Golf — May 29 →
            </a>
            <a href={D100} target="_blank" rel="noopener" className="btn btn-secondary" style={{ fontSize: '0.68rem' }}>
              Donate $100
            </a>
          </div>

          {/* Trust micro-line */}
          <p style={{ marginTop: '1.5rem', fontSize: '0.72rem', color: 'var(--ink-faint)', animation: 'fadeup 0.9s var(--ease) 1.05s both' }}>
            100% of proceeds → UC Davis HD Center of Excellence
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAND — white, giant numbers
      ══════════════════════════════════════════ */}
      <section className="section-white on-light" style={{ padding: '0', borderTop: '1px solid var(--cream-3)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { n: '$50K', sup: '+', label: 'Raised in two years', sub: 'From zero. In 24 months.' },
            { n: '90',   sup: '+', label: 'HD families served', sub: 'At UC Davis, Northern Nevada' },
            { n: '1',    sup: '',  label: 'HD-free baby funded', sub: 'Brandon & Rylee Puccini', blue: true },
            { n: '135',  sup: '+', label: 'IVF families helped', sub: 'Nationwide via HelpCureHD' },
          ].map(({ n, sup, label, sub, blue }, i) => (
            <ScrollReveal key={n} delay={i * 0.08} style={{ padding: 'clamp(2.5rem,4vw,4rem) clamp(1.5rem,3vw,3rem)', borderRight: i < 3 ? '1px solid var(--cream-3)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,6vw,7rem)', fontWeight: 600, lineHeight: 1, color: blue ? 'var(--blue)' : 'var(--ink)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                {n}<span style={{ color: 'var(--blue)', fontSize: '0.45em', fontWeight: 400 }}>{sup}</span>
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{label}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--ink-dim)', lineHeight: 1.5 }}>{sub}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE DISEASE — editorial, cream bg
      ══════════════════════════════════════════ */}
      <section id="cause" className="section-light on-light sec" style={{ padding: 'var(--py-xl) var(--px)', position: 'relative', overflow: 'hidden' }}>
        {/* Ghost watermark */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(12rem,20vw,26rem)', fontWeight: 700, fontStyle: 'italic', color: 'rgba(17,24,39,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>HD</div>

        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
              <div style={{ width: '18px', height: '1.5px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>The Disease</span>
            </div>
          </ScrollReveal>

          {/* Pull quote — takes over the page */}
          <ScrollReveal>
            <div style={{ maxWidth: '900px', marginBottom: 'clamp(4rem,7vw,8rem)' }} className="speakable">
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,6vw,7rem)', fontWeight: 300, lineHeight: 1.0, letterSpacing: '-0.025em', color: 'var(--ink)' }}>
                Terminal. Hereditary.<br />
                <em style={{ color: 'var(--ink-dim)' }}>No cure.</em>
              </h2>
              <p style={{ marginTop: '2.5rem', fontSize: 'clamp(1.1rem,1.8vw,1.35rem)', lineHeight: 1.85, color: 'var(--ink-mid)', maxWidth: '680px', fontWeight: 300 }}>
                Huntington&apos;s Disease destroys nerve cells — a process likened to having{' '}
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong>{' '}
                Every child of an HD parent faces a 50% chance of inheriting it. Symptoms emerge at 30–50 — after most people have already had children who may carry the same gene.
              </p>
            </div>
          </ScrollReveal>

          {/* Fact grid — 2 col, clean */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--cream-3)' }} className="facts-grid">
            {[
              { icon: '01', head: 'Always fatal', body: 'There is no approved treatment that stops or meaningfully slows HD. Researchers are advancing rapidly, but there is no cure today.' },
              { icon: '02', head: '50% hereditary rate', body: 'IVF with preimplantation genetic testing permanently breaks the cycle. One procedure means no HD for future generations — forever.' },
              { icon: '03', head: '90+ Nevada families', body: 'The UC Davis HD Center of Excellence is the only specialty HD clinic serving Northern Nevada. It runs entirely on private donation.' },
              { icon: '04', head: '1 in 10,000 worldwide', body: '30,000 Americans live with HD today. Another 200,000 are at-risk. In our region, they have one place to turn: UC Davis.' },
            ].map(({ icon, head, body }) => (
              <ScrollReveal key={icon}>
                <div style={{ background: 'var(--white)', padding: 'clamp(2rem,3.5vw,3.5rem)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.7rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>{icon}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{head}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--ink-dim)' }}>{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quote card */}
          <ScrollReveal delay={0.1} style={{ marginTop: '3rem' }}>
            <div style={{ background: 'var(--navy)', padding: 'clamp(2.5rem,5vw,5rem)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="quote-cta-grid">
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1.3rem,2.5vw,2.2rem)', fontWeight: 300, color: 'var(--snow)', lineHeight: 1.4, marginBottom: '1.25rem' }}>
                  &ldquo;Every time we look at our future child it will be a reminder of the kindness you showed us.&rdquo;
                </div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600 }}>
                  — Rylee Puccini, 2026 · Funded by the 2024 NVforHD Tournament
                </div>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                <a href={GOLF} target="_blank" rel="noopener" className="btn btn-primary" style={{ whiteSpace: 'nowrap', fontSize: '0.66rem' }}>Join May 29 →</a>
                <a href={D100} target="_blank" rel="noopener" style={{ fontSize: '0.65rem', color: 'var(--snow-faint)', textDecoration: 'none', textAlign: 'center' }}>or donate $100</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE — white, 3 cards
      ══════════════════════════════════════════ */}
      <section id="years" className="section-white on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(3rem,5vw,5.5rem)', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '18px', height: '1.5px', background: 'var(--blue)' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Our Track Record</span>
              </div>
              <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,6rem)', color: 'var(--ink)' }}>
                Three years.<br /><em>Real results.</em>
              </h2>
            </div>
            <p style={{ maxWidth: '240px', fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', textAlign: 'right', fontWeight: 300 }}>
              Every dollar goes to one chosen cause. No overhead. No splitting. Just impact.
            </p>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { year: '2024', tag: 'Inaugural · Sold Out', badge: 'bg', title: '$25,000 for HelpCureHD', body: "Sold out in days. Every dollar funded IVF so Brandon & Rylee Puccini could start a family free from Huntington's Disease. Rylee is now pregnant.", href: '/causes', cta: 'Their story →' },
              { year: '2025', tag: 'UC Davis · 90+ Families', badge: 'bd', title: 'HD Center of Excellence', body: 'Funded the only HD specialty clinic in Northern Nevada — 2 neurologists, 2 psychiatrists, a genetic counselor, and a social worker dedicated entirely to HD.', href: '/causes', cta: 'Read more →' },
              { year: '2026', tag: "May 29 · Gray's Crossing", badge: 'curr', title: 'UC Davis — Again', body: "Returning to protect the clinic that serves our community. One round of golf or a $100 donation directly funds care for 90+ Northern Nevada HD families.", href: GOLF, cta: 'Join us →' },
            ].map(({ year, tag, badge, title, body, href, cta }, i) => (
              <ScrollReveal key={year} delay={i * 0.12}>
                <div className="year-block">
                  {badge === 'curr' && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', transform: 'scaleX(1)' }} />}
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,6vw,5.5rem)', fontWeight: 700, color: badge === 'curr' ? 'rgba(29,78,216,0.08)' : 'rgba(17,24,39,0.06)', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>{year}</div>
                  <div style={{ display: 'inline-block', background: badge === 'curr' ? 'var(--blue-light)' : 'var(--cream-2)', border: badge === 'curr' ? '1px solid var(--blue-faint)' : '1px solid var(--cream-3)', color: badge === 'curr' ? 'var(--blue)' : 'var(--ink-dim)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '1rem' }}>{title}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300, flex: 1 }}>{body}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    style={{ marginTop: '2rem', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Puccini letter, packages, sponsors */}
      <LetterSection />
      <PackagesSection />
      <SponsorsSection />

      {/* ══════════════════════════════════════════
          FAQ / AEO BLOCK
      ══════════════════════════════════════════ */}
      <section className="section-white on-light" style={{ padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
              <div style={{ width: '18px', height: '1.5px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Common Questions</span>
            </div>
          </ScrollReveal>

          {[
            { q: "What is Huntington's Disease?", a: "Huntington's Disease is a hereditary, fatal brain disorder with no known cure. It causes progressive breakdown of nerve cells — likened to Parkinson's, ALS, and Alzheimer's simultaneously. Every child of a parent with HD has a 50% chance of inheriting the gene mutation that causes it." },
            { q: "What does NVforHD do with tournament proceeds?", a: "100% of tournament proceeds go to one chosen HD cause each year — zero overhead, zero splitting. In 2024 we funded IVF for a family carrying the HD gene (Brandon & Rylee Puccini, now expecting an HD-free baby). In 2025 and 2026 we fund the UC Davis Huntington's Disease Center of Excellence, serving 90+ Northern Nevada families." },
            { q: "When and where is the 2026 tournament?", a: "Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble format. Discount hotel rooms available at Atlantis and Peppermill in Reno — call Sean at 775-691-8860." },
            { q: "Can I donate without playing golf?", a: "Yes. Direct donations start at $100 and go to the same cause. Email info@nvforhd.com or call 775-691-8860 to donate without registering for golf." },
            { q: "What is the UC Davis HD Center of Excellence?", a: "The UC Davis Huntington's Disease Center of Excellence in Sacramento is the only specialty HD clinic within reach of Northern Nevada. Its team includes 2 movement disorder neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 physical therapists, and 3 research coordinators — all dedicated to HD. It operates entirely on private donation." },
          ].map(({ q, a }, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div style={{ borderBottom: '1px solid var(--cream-3)', padding: '2rem 0' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.05rem,1.8vw,1.35rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.9rem', lineHeight: 1.3 }}>{q}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--ink-dim)' }} className="speakable">{a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .hero-split { grid-template-columns: 1fr !important; }
          .hero-split > div:first-child { min-height: 60vh !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .facts-grid { grid-template-columns: 1fr !important; }
          .quote-cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />
    </>
  )
}
