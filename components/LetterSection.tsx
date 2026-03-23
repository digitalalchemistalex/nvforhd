import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

const D100  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-donate-100'
const D220  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-donate-220'
const D500  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-donate-500'
const GOLF  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-play-golf'

export default function LetterSection() {
  return (
    <section id="letter" className="sec-pad-lg" style={{ background: 'var(--void)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/event-group-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.15, filter: 'grayscale(30%) brightness(0.7)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,6,10,0.98) 0%, rgba(5,6,10,0.88) 50%, rgba(5,6,10,0.75) 100%)' }} />
      <div className="sec-divider" />

      <div className="inner letter-grid grid-2" style={{ position: 'relative', alignItems: 'center' }}>
        <ScrollReveal>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '-10px', right: '10px', bottom: '10px', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '2px', zIndex: 0 }} />
            <Image
              src="/images/rb-letter.png"
              alt="'Expecting!' — Thank you letter from Rylee and Brandon Puccini announcing pregnancy after IVF funded by NVforHD 2024 tournament"
              width={791} height={1024}
              style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, boxShadow: '0 32px 80px rgba(0,0,0,0.6)', borderRadius: '2px' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '2rem' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
            A letter from the Puccinis
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,6rem)', marginBottom: '2rem' }}>
            &ldquo;Rylee is<br />pregnant.&rdquo;
          </h2>
          <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 2.0, color: 'rgba(245,242,234,0.78)', borderLeft: '2px solid rgba(201,168,76,0.45)', paddingLeft: '2rem', marginBottom: '1.2rem' }}>
            &ldquo;Funded by the <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>2024 Golf Tournament.</strong> We had a successful embryo transfer at the Santa Barbara Fertility Center. We even heard the baby&apos;s heartbeat.&rdquo;
          </blockquote>
          <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 2.0, color: 'rgba(245,242,234,0.78)', borderLeft: '2px solid rgba(201,168,76,0.45)', paddingLeft: '2rem', marginBottom: '1.2rem' }}>
            &ldquo;Thank you for gifting us <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>life that is Huntington&apos;s free.</strong> Every time we look at our future child it will be a reminder of the kindness you showed us.&rdquo;
          </blockquote>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--gold)', paddingLeft: '2rem', marginBottom: '2.5rem' }}>
            — Rylee and Brandon Puccini, 2026
          </div>
          <div style={{ padding: '2.5rem', border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(5,6,10,0.8)', backdropFilter: 'blur(20px)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.6rem' }}>Fund the next family.</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.65)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              No golf required. Your donation funds IVF for the next family carrying the HD gene.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'flex-end' }}>
              <a href={D100} target="_blank" rel="noopener" className="amt-btn">$100</a>
              <a href={D220} target="_blank" rel="noopener" className="amt-btn featured" style={{ marginTop: '1.2rem' }}>$220</a>
              <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
            </div>
            <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', textDecoration: 'none' }}>
              Prefer to play golf? Book May 29 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
