import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import MobileCTADock from '@/components/MobileCTADock'

export const metadata: Metadata = {
  title: "Our Story - Three Years of Fighting HD | NVforHD",
  description: 'From $25,000 raised in 2024 to funding UC Davis HD Center of Excellence in 2025 and 2026. The NVforHD story year by year.',
}

const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=story-golf'

export default function StoryPage() {
  return (
    <>
      <Nav />
      <MobileCTADock />

      <PageHero
        kicker="NVforHD — Founded 2024"
        headline={<>Three years.<br /><em style={{ color: 'rgba(255,255,255,0.35)' }}>Real</em> <span style={{ color: 'var(--gold)' }}>results.</span></>}
        sub="Sean Schaeffer's wife Christine was diagnosed with Huntington's Disease. He didn't hold a fundraiser. He started a fight. Two years in — $50,000 raised, one family changed forever."
        photo="/images/event-group-1.jpg"
        photoPosition="center top"
        stat1={{ n: '$50K+', label: 'raised total' }}
        stat2={{ n: '3', label: 'years running' }}
        stat3={{ n: '1', label: 'family changed forever' }}
      />

      {/* Timeline */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem,5vw,5rem)', gap: '2rem', flexWrap: 'wrap' }}>
              <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,6rem)', color: 'var(--ink)' }}>
                Year by year.<br /><em style={{ color: 'var(--ink-dimmer)' }}>Cause by cause.</em>
              </h2>
              <p style={{ maxWidth: '260px', textAlign: 'right', fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300 }}>
                Every dollar raised goes to one chosen HD cause. No overhead. All impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3 on-light" style={{ gap: '1.5rem' }}>
            {[
              {
                year: '2024',
                tag: 'Inaugural · Sold Out',
                title: '$25,000 for HelpCureHD',
                body: "Our first event at Old Greenwood Golf Club sold out completely. Every dollar funded IVF through HelpCureHD so Brandon and Rylee Puccini could have a child free from Huntington's Disease. Rylee became pregnant. The cycle of HD ends with their family.",
                detail: 'Beneficiary: HelpCureHD · Venue: Old Greenwood, Truckee CA',
                cta: 'Their story →',
                href: '/impact',
              },
              {
                year: '2025',
                tag: 'UC Davis · 90+ Families',
                title: 'HD Center of Excellence',
                body: 'We shifted focus to help more families in our own backyard. The UC Davis HD Center of Excellence in Sacramento is the only HD specialty clinic serving Northern Nevada — 90+ families who have no other option for this level of care.',
                detail: 'Beneficiary: UC Davis HD Center · Team: 2 neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 PTs',
                cta: 'About the cause →',
                href: '/causes',
              },
              {
                year: '2026',
                tag: "May 29 · Gray's Crossing",
                title: 'UC Davis — Again',
                body: "Gray's Crossing Golf Club. Peter Jacobsen design. 12PM shotgun start. This clinic operates on private donation - your round of golf or $100 donation directly funds care for 90+ Northern Nevada HD families.",
                detail: "Venue: Gray's Crossing, Truckee CA · Date: May 29, 2026 · Shotgun: 12PM",
                cta: 'Join us →',
                href: GOLF,
              },
            ].map(({ year, tag, title, body, detail, cta, href }, i) => (
              <ScrollReveal key={year} delay={i * 0.15}>
                <div className="year-block" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,5vw,5rem)', fontWeight: 300, color: 'rgba(28,26,22,0.08)', lineHeight: 1, marginBottom: '1.5rem' }}>{year}</div>
                  <div style={{ display: 'inline-block', background: 'var(--cream-2)', border: '1px solid var(--cream-3)', color: 'var(--ink-dimmer)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.2rem 0.7rem', marginBottom: '1rem', fontWeight: 600 }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.45rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem' }}>{title}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300, flex: 1, marginBottom: '1rem' }}>{body}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--ink-dimmer)', lineHeight: 1.6, borderTop: '1px solid var(--cream-3)', paddingTop: '1rem', marginBottom: '1.5rem' }}>{detail}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--gold-dark)', textDecoration: 'none' }}>
                    {cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark stats */}
      <section className="section-dark dark-section on-dark" style={{ position: 'relative' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-foursome-1.jpg')", opacity: 0.1 }} />
        <div className="inner grid-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)', position: 'relative', zIndex: 1 }}>
          {[
            { n: '$25K', label: 'raised\n2024 (inaugural)' },
            { n: '$25K+', label: 'raised\n2025' },
            { n: '$50K+', label: 'total raised\nfirst two years' },
            { n: '1', label: 'HD-free baby\non the way', gold: true },
          ].map(({ n, label, gold }, i) => (
            <ScrollReveal key={n} delay={i * 0.1} style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1rem,3vw,3rem)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,5vw,6rem)', fontWeight: 300, lineHeight: 1, color: gold ? 'var(--gold)' : '#fff', marginBottom: '0.75rem' }}>{n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--white-dimmer)', lineHeight: 1.65, whiteSpace: 'pre-line', fontWeight: 500 }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
