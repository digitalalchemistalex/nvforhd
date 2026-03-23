import ScrollReveal from '@/components/ScrollReveal'

const D50  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-50'
const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-500'
const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'

// Couple holding ultrasound photo — directly mirrors the Puccini letter
const LETTER_IMG = 'https://images.unsplash.com/photo-1770134846141-a7a11976145d?w=2200&q=90&fit=crop&fm=jpg'

export default function LetterSection() {
  return (
    <section id="letter" style={{ background: 'var(--void)', position: 'relative' }}>
      {/* Couple with ultrasound — this IS Rylee & Brandon's story */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LETTER_IMG}
        alt="Couple holding ultrasound photo — the Puccini family story"
        loading="lazy"
        style={{
          width: '100%', height: '80vh', minHeight: '540px',
          objectFit: 'cover', objectPosition: 'center 35%',
          filter: 'sepia(15%) brightness(0.58) contrast(1.1) saturate(0.9)',
          display: 'block',
        }}
      />

      {/* Gradient from bottom — text readable over photo */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '8rem 5rem 5.5rem',
        background: 'linear-gradient(to top, rgba(5,6,10,1) 52%, rgba(5,6,10,0.82) 75%, rgba(5,6,10,0.2) 92%, transparent)',
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'end' }}>

          {/* Left — headline */}
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '2.2rem' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
              A letter from the Puccinis
            </div>
            <div style={{
              fontFamily: 'var(--serif)', fontWeight: 300, lineHeight: 0.9,
              color: '#FFFFFF', fontSize: 'clamp(2.8rem,5.5vw,6.5rem)',
              letterSpacing: '-0.02em', textShadow: '0 4px 40px rgba(0,0,0,0.5)',
            }}>
              &ldquo;Rylee is<br />pregnant.&rdquo;
            </div>
          </ScrollReveal>

          {/* Right — letter text + donate */}
          <ScrollReveal delay={0.2}>
            <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.02rem', lineHeight: 2.1, color: 'rgba(245,242,234,0.82)', borderLeft: '2px solid rgba(201,168,76,0.5)', paddingLeft: '2rem', marginBottom: '1.2rem' }}>
              &ldquo;It has been a long journey since we first received your support for our IVF Process, funded by the <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>2024 Golf Tournament.</strong> We had a successful embryo transfer at the Santa Barbara Fertility Center. We even heard the baby&apos;s heartbeat.&rdquo;
            </blockquote>
            <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.02rem', lineHeight: 2.1, color: 'rgba(245,242,234,0.82)', borderLeft: '2px solid rgba(201,168,76,0.5)', paddingLeft: '2rem', marginBottom: '1.2rem' }}>
              &ldquo;Thank you for gifting us with the miracle of life — and specifically <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>life that is Huntington&apos;s free.</strong> Every time we look at our future child it will be a reminder of the kindness you all showed us.&rdquo;
            </blockquote>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--gold)', paddingLeft: '2rem', marginBottom: '2.5rem', fontWeight: 400 }}>
              — Rylee and Brandon Puccini, 2026
            </div>

            {/* Donate — highest converting position */}
            <div style={{ padding: '2.5rem', border: '1px solid rgba(201,168,76,0.28)', background: 'rgba(5,6,10,0.85)', backdropFilter: 'blur(16px)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.6rem' }}>Fund the next family.</div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.68)', fontWeight: 300, marginBottom: '1.8rem', lineHeight: 1.75 }}>
                No golf required. Your donation funds IVF for the next family carrying the HD gene. $150 makes a direct difference.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'flex-end' }}>
                <a href={D50}  target="_blank" rel="noopener" className="amt-btn">$50</a>
                <a href={D150} target="_blank" rel="noopener" className="amt-btn featured" style={{ marginTop: '1.2rem' }}>$150</a>
                <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
                <a href="mailto:info@nvforhd.com?subject=Custom%20Donation" className="amt-btn">Other →</a>
              </div>
              <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', textDecoration: 'none', display: 'inline-block' }}>
                Prefer to play golf? Book May 29 →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
