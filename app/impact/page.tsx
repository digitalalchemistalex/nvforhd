import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import MobileCTADock from '@/components/MobileCTADock'
import LetterSection from '@/components/LetterSection'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Impact — The Puccini Family Story | NVforHD',
  description: '2024 NVforHD raised $25,000 to fund IVF for Brandon and Rylee Puccini. Rylee is now pregnant with an HD-free baby. This is why we fight.',
}

const D100 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=impact-100'
const D220 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=impact-220'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=impact-500'
const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=impact-golf'

export default function ImpactPage() {
  return (
    <>
      <Nav />
      <MobileCTADock />

      <PageHero
        kicker="2024 · The Puccini Family"
        headline={<>&ldquo;Rylee is<br /><span style={{ color: 'var(--gold)' }}>pregnant.&rdquo;</span></>}
        sub="Your 2024 donation funded IVF at the Santa Barbara Fertility Center. Brandon and Rylee Puccini are expecting a child free from Huntington's Disease. This is why NVforHD exists."
        photo="/images/rb-letter.png"
        photoPosition="center top"
        stat1={{ n: '$25,000', label: 'raised in 2024' }}
        stat2={{ n: '1', label: 'family changed forever' }}
        stat3={{ n: '0', label: 'HD genes passed on' }}
      />

      {/* Letter section — full component */}
      <LetterSection />

      {/* What HelpCureHD does */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)' }}>
        <div className="inner grid-2" style={{ alignItems: 'center', gap: 'clamp(3rem,6vw,8rem)' }}>
          <ScrollReveal>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>2024 Beneficiary</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,4vw,4.5rem)', color: 'var(--ink)', marginBottom: '2rem' }}>
              HelpCureHD —<br /><em style={{ color: 'var(--ink-dimmer)' }}>One family at a time.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
              HelpCureHD was inspired by Lee Smith, mother of MLB veteran Joe Smith. Lee was diagnosed with HD in 2012 and passed in 2020. Joe and his wife, TNT reporter Allie LaForce, founded HelpCureHD to fulfill a promise: end Huntington's Disease, one family at a time.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '2rem' }}>
              HelpCureHD assists families with the cost of IVF and preimplantation genetic testing — ensuring future generations are born HD-free. To date they have helped <strong style={{ color: 'var(--ink)' }}>over 135 families</strong> nationally.
            </p>
            <a href="http://www.helpcurehd.com" target="_blank" rel="noopener"
              style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--gold-dark)', textDecoration: 'none' }}>
              Visit HelpCureHD.com →
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {[
              { n: '135+', label: 'families helped nationally by HelpCureHD' },
              { n: '1', label: 'family funded by NVforHD 2024' },
              { n: '$25K', label: 'raised at our inaugural tournament' },
            ].map(({ n, label }, i) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '8rem 1fr', gap: '1.5rem', padding: '2rem 0', borderBottom: '1px solid var(--cream-3)', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3.5vw,3.5rem)', fontWeight: 300, color: 'var(--gold-dark)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ink-dim)' }}>{label}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — fund the next family */}
      <section className="section-dark dark-section on-dark" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative', textAlign: 'center' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-crowd.jpg')", opacity: 0.08 }} />
        <div className="inner" style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <ScrollReveal>
            <div className="kicker" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>2026 — Join Us</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300, color: '#fff', marginBottom: '1.5rem', lineHeight: 1 }}>
              Fund the<br /><span style={{ color: 'var(--gold)' }}>next family.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--white-dim)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              No golf required. Your donation funds IVF for the next family carrying the HD gene — breaking the cycle permanently.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <a href={D100} target="_blank" rel="noopener" className="amt-btn on-dark">$100</a>
              <a href={D220} target="_blank" rel="noopener" className="amt-btn on-dark featured">$220</a>
              <a href={D500} target="_blank" rel="noopener" className="amt-btn on-dark">$500</a>
            </div>
            <a href={GOLF} target="_blank" rel="noopener"
              style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white-dimmer)', textDecoration: 'none' }}>
              Prefer to play golf? Book May 29 →
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
