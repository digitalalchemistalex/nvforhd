import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'
import LetterSection from '@/components/LetterSection'
import SponsorsSection from '@/components/SponsorsSection'
import PackagesSection from '@/components/PackagesSection'
import MobileCTADock from '@/components/MobileCTADock'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Charity Golf Tournament May 29, 2026",
  description: "Annual charity golf tournament at Gray's Crossing, Truckee CA — May 29, 2026. All proceeds to UC Davis HD Center of Excellence. Join the fight against Huntington's Disease.",
  openGraph: {
    title: "NVforHD — Let's Cure Huntington's Disease",
    description: "May 29, 2026 · Gray's Crossing Golf Club · Truckee, CA. $50K+ raised. One family changed forever.",
    images: ["/images/event-crowd.jpg"],
  },
}

const GOLF  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-golf'
const D100  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-donate'
const BOOK  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=packages'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Huntington's Disease?",
      "acceptedAnswer": { "@type": "Answer", "text": "Huntington's Disease is a fatal hereditary brain disorder with no known cure. It causes progressive deterioration of nerve cells, combining symptoms of Parkinson's, ALS, and Alzheimer's simultaneously. Every child of an HD parent has a 50% chance of inheriting it." }
    },
    {
      "@type": "Question",
      "name": "What does NVforHD do?",
      "acceptedAnswer": { "@type": "Answer", "text": "NVforHD is a Nevada non-profit that hosts an annual charity golf tournament to raise funds for Huntington's Disease research, care, and family support. In our first two years we raised over $50,000 — funding IVF for one HD-free baby and supporting the UC Davis HD Center of Excellence which serves 90+ Northern Nevada families." }
    },
    {
      "@type": "Question",
      "name": "When is the 2026 NVforHD golf tournament?",
      "acceptedAnswer": { "@type": "Answer", "text": "The 2026 NVforHD Charity Golf Tournament is on May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble format." }
    },
    {
      "@type": "Question",
      "name": "Where does the money go?",
      "acceptedAnswer": { "@type": "Answer", "text": "100% of proceeds go directly to the UC Davis Huntington's Disease Center of Excellence in Sacramento — the only HD specialty clinic serving over 90 families in Northern Nevada and the Sierra Foothills." }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <MobileCTADock />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════
          HERO — Split: dark left / white right
      ══════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }} className="hero-split">

        {/* LEFT — cinematic photo */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/event-crowd.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%', animation: 'drift 30s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,27,42,0.35) 0%, rgba(13,27,42,0.15) 60%, rgba(13,27,42,0.75) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,27,42,0.7) 0%, transparent 50%)' }} />

          {/* Floating stat — bottom left of photo */}
          <div style={{ position: 'absolute', bottom: 'clamp(2rem,5vw,4rem)', left: 'clamp(2rem,5vw,4rem)', zIndex: 2 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 600, color: '#fff', lineHeight: 1, textShadow: '0 4px 32px rgba(0,0,0,0.4)' }}>
              $50K<span style={{ color: 'var(--gold)', fontSize: '0.5em' }}>+</span>
            </div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem', fontWeight: 500 }}>Raised · Two Years</div>
          </div>

          {/* Event badge top-left */}
          <div style={{ position: 'absolute', top: 'clamp(5rem,10vw,8rem)', left: 'clamp(2rem,5vw,4rem)', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(27,79,216,0.9)', backdropFilter: 'blur(12px)', padding: '0.5rem 1rem', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, fontFamily: 'var(--sans)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', animation: 'pulse 2s infinite' }} />
              May 29, 2026 · Truckee, CA
            </div>
          </div>
        </div>

        {/* RIGHT — white story panel */}
        <div style={{ background: 'var(--white)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem,6vw,6rem)', paddingTop: 'clamp(6rem,12vw,10rem)', position: 'relative', zIndex: 2 }}>

          {/* Thin blue left edge on white panel */}
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, var(--blue), transparent)' }} />

          <div style={{ animation: 'fadeup 0.9s var(--ease) 0.2s both' }}>
            <div className="kicker on-light" style={{ marginBottom: '1.5rem' }}>Nevada for Huntington&#39;s Disease</div>
          </div>

          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(3.5rem,6vw,7.5rem)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--navy)', marginBottom: '0.15em', animation: 'fadeup 1.1s var(--ease) 0.35s both' }}>
            Let&#39;s<br />
            <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Cure</span><br />
            HD.
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', lineHeight: 1.85, color: 'var(--ink-mid)', maxWidth: '460px', margin: '2rem 0', animation: 'fadeup 0.9s var(--ease) 0.6s both', fontWeight: 300 }}>
            Sean Schaeffer&#39;s wife Christine was diagnosed with Huntington&#39;s Disease.
            He didn&#39;t hold a fundraiser.{" "}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>He started a fight.</strong>
            {" "}Two years in — one family changed forever.
          </p>

          {/* The human proof */}
          <div style={{ background: 'var(--blue-light)', borderLeft: '3px solid var(--blue)', padding: '1.25rem 1.5rem', marginBottom: '2.5rem', animation: 'fadeup 0.9s var(--ease) 0.75s both' }}>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.7 }}>
              &ldquo;Thank you for gifting us life that is Huntington&#39;s free.&rdquo;
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--blue)', marginTop: '0.5rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              — Rylee Puccini · IVF funded by NVforHD 2024
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', animation: 'fadeup 0.9s var(--ease) 0.9s both' }}>
            <a href={GOLF} target="_blank" rel="noopener" className="btn btn-primary">Play Golf May 29 →</a>
            <a href={D100} target="_blank" rel="noopener" className="btn btn-outline">Donate Now</a>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--cream-3)', display: 'flex', gap: '2.5rem', animation: 'fadeup 0.9s var(--ease) 1.05s both' }}>
            {[
              { n: '90+',  l: 'HD families\nserved' },
              { n: '1',    l: 'HD-free baby\non the way' },
              { n: '3rd',  l: 'Annual\ntournament' },
            ].map(({ n, l }) => (
              <div key={n}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--blue)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-dim)', lineHeight: 1.5, marginTop: '0.3rem', whiteSpace: 'pre-line', fontWeight: 500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAND — cream, giant numbers
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--cream-3)', borderBottom: '1px solid var(--cream-3)', padding: 'clamp(3rem,6vw,6rem) var(--px)', overflow: 'hidden', position: 'relative' }}>
        {/* Decorative large text behind */}
        <div style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(8rem,18vw,20rem)', fontWeight: 700, color: 'rgba(13,27,42,0.025)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>
          HD
        </div>
        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="stats-grid">
            {[
              { n: '$50K', sup: '+', label: 'Raised in two years', sub: '100% direct to cause — no overhead' },
              { n: '90',   sup: '+', label: 'HD families served', sub: 'Northern Nevada · UC Davis clinic' },
              { n: '135',  sup: '+', label: 'IVF families helped', sub: 'Nationally via HelpCureHD' },
              { n: '1',    sup: '',   label: 'HD-free baby', sub: 'Brandon & Rylee Puccini · 2026', accent: true },
            ].map(({ n, sup, label, sub, accent }, i) => (
              <ScrollReveal key={n} delay={i * 0.1}>
                <div style={{ padding: 'clamp(2rem,4vw,4rem) clamp(1.5rem,3vw,3rem)', borderRight: i < 3 ? '1px solid var(--cream-3)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,6vw,7rem)', fontWeight: 600, lineHeight: 1, color: accent ? 'var(--blue)' : 'var(--navy)', marginBottom: '0.15em', letterSpacing: '-0.03em' }}>
                    {n}<span style={{ fontSize: '0.45em', color: 'var(--blue)', verticalAlign: 'super' }}>{sup}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem', fontFamily: 'var(--sans)' }}>{label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--ink-dim)', lineHeight: 1.5 }}>{sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE DISEASE — editorial, white bg
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', padding: 'var(--py-lg) var(--px)', position: 'relative', overflow: 'hidden' }}>
        <div className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,8vw,10rem)', alignItems: 'start' }} className="grid-2">

            {/* Left — the facts */}
            <ScrollReveal>
              <div className="kicker on-light" style={{ marginBottom: '2rem' }}>The Disease</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(2.8rem,5vw,6rem)', lineHeight: 0.92, color: 'var(--navy)', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                Terminal.<br />
                Hereditary.<br />
                <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>No cure.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-mid)', marginBottom: '1.5rem' }}>
                HD destroys nerve cells — doctors describe it as having{" "}
                <strong style={{ color: 'var(--ink)' }}>Parkinson&#39;s, ALS, and Alzheimer&#39;s simultaneously.</strong>{" "}
                It is always fatal. There is no approved treatment that slows it.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-mid)' }}>
                Every child of an HD parent faces a{" "}
                <strong style={{ color: 'var(--ink)' }}>50% chance of inheriting it</strong> — and symptoms typically emerge at 30–50, after most people have already had children.
              </p>

              {/* Urgency bar */}
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--navy)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, flexShrink: 0 }}>30K</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>Americans symptomatic right now</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>200,000 more at risk · 1 in 10,000 globally</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — numbered facts + quote card */}
            <div>
              {[
                { n: '01', title: 'No known cure', body: 'HD is always fatal. Researchers are making progress but there is no approved treatment that slows or stops the disease.' },
                { n: '02', title: '50% hereditary rate', body: 'IVF with preimplantation genetic testing permanently breaks the cycle — the child cannot inherit HD or pass it on.' },
                { n: '03', title: 'UC Davis is the only option', body: 'For 90+ Northern Nevada families, UC Davis HD Center of Excellence in Sacramento is the nearest specialist care. It runs on private donation.' },
              ].map(({ n, title, body }, i) => (
                <ScrollReveal key={n} delay={i * 0.12}>
                  <div style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1rem', padding: '1.75rem 0', borderBottom: '1px solid var(--cream-3)' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '0.72rem', color: 'var(--blue)', paddingTop: '0.15rem', fontWeight: 600 }}>{n}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>{title}</div>
                      <div style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-mid)' }}>{body}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.36}>
                <div style={{ marginTop: '2rem', background: 'var(--cream)', border: '1px solid var(--cream-3)', borderLeft: '4px solid var(--blue)', padding: '2rem' }}>
                  <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    &ldquo;Every time we look at our future child it will be a reminder of the kindness you showed us.&rdquo;
                  </blockquote>
                  <div style={{ fontSize: '0.7rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>— Rylee Puccini · 2026</div>
                  <div className="on-light"><DonateBlock /></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE — cream, 3 year cards
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem,5vw,5rem)', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div className="kicker on-light" style={{ marginBottom: '1.25rem' }}>Three Years of Impact</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,6rem)', lineHeight: 0.92, color: 'var(--navy)' }}>
                  Real money.<br /><span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Real results.</span>
                </h2>
              </div>
              <p style={{ maxWidth: '240px', textAlign: 'right', fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300 }}>
                One cause per year. Every dollar goes direct. No overhead. Just impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {[
              { year: '2024', tag: 'Inaugural · Sold Out', title: '$25,000 for HelpCureHD', body: "Sold out instantly. Every dollar funded IVF so Brandon and Rylee Puccini could start a family — HD-free. Rylee is now pregnant.", cta: 'Their story →', href: '/impact', active: false },
              { year: '2025', tag: 'UC Davis · 90+ Families', title: 'HD Center of Excellence', body: "Funded the only HD specialty clinic in Northern Nevada — 2 neurologists, 2 psychiatrists, genetic counselors, all dedicated to HD.", cta: 'Read more →', href: '/causes', active: false },
              { year: '2026', tag: "May 29 · Gray's Crossing", title: 'UC Davis — Again', body: "12PM shotgun start. Every registration directly funds the clinic keeping 90+ Northern Nevada HD families in specialist care.", cta: 'Join us →', href: GOLF, active: true },
            ].map(({ year, tag, title, body, cta, href, active }, i) => (
              <ScrollReveal key={year} delay={i * 0.15}>
                <div className="year-block" style={{ borderTop: active ? '3px solid var(--blue)' : '1px solid var(--cream-3)' }}>
                  {active && (
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--blue)', color: '#fff', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, padding: '0.25rem 0.6rem' }}>
                      Active
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem,6vw,5.5rem)', fontWeight: 700, color: 'rgba(13,27,42,0.06)', lineHeight: 1, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>{year}</div>
                  <div style={{ display: 'inline-block', background: active ? 'var(--blue-light)' : 'var(--cream-2)', border: '1px solid', borderColor: active ? 'rgba(27,79,216,0.2)' : 'var(--cream-3)', color: active ? 'var(--blue)' : 'var(--ink-dim)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.2rem 0.7rem', marginBottom: '1rem', fontWeight: 700 }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.85rem' }}>{title}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-mid)', fontWeight: 300, flex: 1 }}>{body}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: active ? 'var(--blue)' : 'var(--ink)', textDecoration: 'none', borderBottom: '2px solid currentColor', paddingBottom: '2px' }}>
                    {cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PUCCINI LETTER / DONATE
      ══════════════════════════════════════ */}
      <LetterSection />

      {/* ══════════════════════════════════════
          PACKAGES
      ══════════════════════════════════════ */}
      <PackagesSection />

      {/* ══════════════════════════════════════
          SPONSORS
      ══════════════════════════════════════ */}
      <SponsorsSection />

      {/* ══════════════════════════════════════
          FAQ — AEO / AI Overview block
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <ScrollReveal style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="kicker on-light" style={{ marginBottom: '1.5rem' }}>Common Questions</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--navy)', marginBottom: '3rem', lineHeight: 1.05 }}>
              Everything you need to know<br /><span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>about NVforHD.</span>
            </h2>
          </ScrollReveal>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                q: "What is Huntington's Disease?",
                a: "Huntington's Disease is a fatal hereditary brain disorder with no known cure. It progressively destroys nerve cells, combining symptoms of Parkinson's disease, ALS, and Alzheimer's simultaneously. Every child of an HD parent has a 50% chance of inheriting it."
              },
              {
                q: "What does NVforHD do with the money raised?",
                a: "100% of funds go directly to one chosen cause per year — zero overhead. In 2024 we funded IVF for Brandon and Rylee Puccini through HelpCureHD. In 2025 and 2026 we support the UC Davis Huntington's Disease Center of Excellence, the only HD specialty clinic serving 90+ Northern Nevada families."
              },
              {
                q: "When and where is the 2026 tournament?",
                a: "May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble format. Discount hotel rooms at Atlantis and Peppermill in Reno — call Sean at 775-691-8860 for details."
              },
              {
                q: "Can I help without playing golf?",
                a: "Yes. You can donate directly at any amount — $100 is our entry-level donation. You can also become a hole sponsor, volunteer on the day, or sponsor the event at Title, Gold, or Lunch level. Contact info@nvforhd.com for any of these options."
              },
              {
                q: "What is the UC Davis HD Center of Excellence?",
                a: "It is the closest Huntington's Disease specialty clinic for families in Northern Nevada — over 130 miles away in Sacramento. It includes 2 HD neurologists, 2 HD psychiatrists, a genetic counselor, social worker, and physical therapists. It operates entirely on private donation."
              },
            ].map(({ q, a }, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <details style={{ borderBottom: '1px solid var(--cream-3)', paddingBottom: '0' }}>
                  <summary style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', cursor: 'pointer', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '1rem', color: 'var(--ink)' }}>
                    {q}
                    <span style={{ fontSize: '1.4rem', color: 'var(--blue)', flexShrink: 0, marginLeft: '1rem', fontWeight: 300, lineHeight: 1 }}>+</span>
                  </summary>
                  <div style={{ paddingBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', maxWidth: '680px' }}>{a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          {/* Speakable summary — for AI overview */}
          <ScrollReveal style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--blue-light)', borderLeft: '4px solid var(--blue)', maxWidth: '800px', margin: '4rem auto 0' }}>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.75rem' }}>About NVforHD</div>
            <p className="speakable" style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)' }}>
              NVforHD is a Nevada-based non-profit that raises funds to fight Huntington&#39;s Disease through an annual charity golf tournament at Gray&#39;s Crossing Golf Club in Truckee, California. Founded by Sean Schaeffer after his wife Christine was diagnosed with HD, NVforHD has raised over $50,000 in two years. The 2026 tournament is May 29, 2026. All proceeds support the UC Davis Huntington&#39;s Disease Center of Excellence, which serves over 90 Northern Nevada families.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-split { min-height: 100vh; }
        @media (max-width: 900px) {
          .hero-split { grid-template-columns: 1fr !important; }
          .hero-split > div:first-child { min-height: 55vw !important; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--cream-3); }
        }
        details[open] summary span { transform: rotate(45deg); display: inline-block; }
        details summary::-webkit-details-marker { display: none; }
      ` }} />
    </>
  )
}
