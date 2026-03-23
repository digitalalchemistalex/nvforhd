import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

const D100  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-donate-100'
const D220  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-single-golfer'
const D500  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-donate-500'
const GOLF  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-play-golf'

export default function LetterSection() {
  return (
    <section id="letter" style={{ background: 'var(--void)', position: 'relative', overflow: 'hidden' }}>
      {/* Course photo as full section background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/images/event-group-2.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
        opacity: 0.18,
        filter: 'grayscale(30%) brightness(0.7)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(5,6,10,0.98) 0%, rgba(5,6,10,0.85) 45%, rgba(5,6,10,0.6) 100%), linear-gradient(to top, rgba(5,6,10,0.9) 0%, transparent 40%)',
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '7rem 5rem', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        {/* Left — the actual Puccini letter image */}
        <ScrollReveal>
          <div style={{ position: 'relative' }}>
            {/* Gold accent frame */}
            <div style={{ position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '2px' }} />
            <Image
              src="/images/rb-letter.png"
              alt="'Expecting!' — Thank you letter from Rylee and Brandon Puccini announcing pregnancy after IVF funded by NVforHD 2024 golf tournament"
              width={791} height={1024}
              style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', borderRadius: '2px' }}
            />
          </div>
        </ScrollReveal>

        {/* Right — letter context and donate */}
        <ScrollReveal delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '2rem' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
            A letter from the Puccinis
          </div>

          <h2 className="display" style={{ fontSize: 'clamp(2.8rem,5vw,6rem)', marginBottom: '2rem' }}>
            &ldquo;Rylee is<br />pregnant.&rdquo;
          </h2>

          <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 2.0, color: 'rgba(245,242,234,0.78)', borderLeft: '2px solid rgba(201,168,76,0.45)', paddingLeft: '2rem', marginBottom: '1.2rem' }}>
            &ldquo;It has been a long journey since we first received your support for our IVF Process, funded by the <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>2024 Golf Tournament.</strong> We had a successful embryo transfer at the Santa Barbara Fertility Center. We even heard the baby&apos;s heartbeat.&rdquo;
          </blockquote>

          <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 2.0, color: 'rgba(245,242,234,0.78)', borderLeft: '2px solid rgba(201,168,76,0.45)', paddingLeft: '2rem', marginBottom: '1.2rem' }}>
            &ldquo;Thank you for gifting us with the miracle of life — and specifically <strong style={{ color: '#fff', fontWeight: 600, fontStyle: 'normal' }}>life that is Huntington&apos;s free.</strong> Every time we look at our future child it will be a reminder of the kindness you all showed us.&rdquo;
          </blockquote>

          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--gold)', paddingLeft: '2rem', marginBottom: '3rem', fontWeight: 400 }}>
            — Rylee and Brandon Puccini, 2026
          </div>

          {/* Donate CTA */}
          <div style={{ padding: '2.5rem', border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(5,6,10,0.8)', backdropFilter: 'blur(20px)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.6rem' }}>Fund the next family.</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.65)', fontWeight: 300, marginBottom: '1.8rem', lineHeight: 1.75 }}>
              No golf required. Your donation funds IVF for the next family carrying the HD gene.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'flex-end' }}>
              <a href={D100} target="_blank" rel="noopener" className="amt-btn">$100</a>
              <a href={D220} target="_blank" rel="noopener" className="amt-btn featured" style={{ marginTop: '1.2rem' }}>$220</a>
              <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
              <a href="mailto:info@nvforhd.com?subject=Custom%20Donation&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=letter-custom" className="amt-btn">Other →</a>
            </div>
            <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', textDecoration: 'none', display: 'inline-block' }}>
              Prefer to play golf? Book May 29 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
