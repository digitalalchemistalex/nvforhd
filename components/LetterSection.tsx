import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

const D100 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-100'
const D220 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-220'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-500'
const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-golf'

export default function LetterSection() {
  return (
    /* Slate dark blue — not pure black */
    <section className="section-slate dark-section on-dark" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
      <div className="photo-texture" style={{ backgroundImage: "url('/images/event-action.jpg')", opacity: 0.12, filter: 'grayscale(30%) brightness(0.6)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,32,53,0.97) 0%, rgba(26,32,53,0.88) 50%, rgba(26,32,53,0.75) 100%)', zIndex: 0 }} />
      <div className="divider-gold" />

      <div className="inner grid-2" style={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
        <ScrollReveal>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '-10px', right: '10px', bottom: '10px', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '2px', zIndex: 0 }} />
            <Image
              src="/images/rb-letter.png"
              alt="Expecting! — Thank you letter from Rylee and Brandon Puccini announcing their pregnancy after IVF funded by NVforHD 2024 golf tournament"
              width={791} height={1024}
              style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, boxShadow: '0 40px 80px rgba(0,0,0,0.5)', borderRadius: '2px' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '2rem' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)' }} />
            A letter from the Puccinis
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, lineHeight: 0.95, color: '#fff', marginBottom: '2rem' }}>
            &ldquo;Rylee is<br />pregnant.&rdquo;
          </h2>

          <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 2.0, color: 'var(--white-dim)', borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: '1.75rem', marginBottom: '1rem' }}>
            &ldquo;Funded by the <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>2024 Golf Tournament.</strong> Successful embryo transfer at the Santa Barbara Fertility Center. We even heard the baby&apos;s heartbeat.&rdquo;
          </blockquote>
          <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 2.0, color: 'var(--white-dim)', borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: '1.75rem', marginBottom: '1rem' }}>
            &ldquo;Thank you for gifting us <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>life that is Huntington&apos;s free.</strong> Every time we look at our future child it will be a reminder of the kindness you all showed us.&rdquo;
          </blockquote>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--gold)', paddingLeft: '1.75rem', marginBottom: '3rem' }}>
            — Rylee and Brandon Puccini, 2026
          </div>

          {/* Donate box — light card on dark section */}
          <div style={{ background: 'rgba(247,244,238,0.06)', border: '1px solid rgba(247,244,238,0.12)', padding: 'clamp(1.5rem,3vw,2.5rem)', backdropFilter: 'blur(20px)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>Fund the next family.</div>
            <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              No golf required. Your donation funds IVF for the next family carrying the HD gene.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'flex-end' }}>
              <a href={D100} target="_blank" rel="noopener" className="amt-btn on-dark">$100</a>
              <a href={D220} target="_blank" rel="noopener" className="amt-btn on-dark featured" style={{ marginTop: '1.2rem' }}>$220</a>
              <a href={D500} target="_blank" rel="noopener" className="amt-btn on-dark">$500</a>
            </div>
            <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white-dimmer)', textDecoration: 'none' }}>
              Prefer to play golf? Book May 29 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
