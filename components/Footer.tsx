import Image from 'next/image'
import Link from 'next/link'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-play-golf'

export default function Footer() {
  return (
    <footer style={{ background: '#08090F', padding: '7rem 5rem 0', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
      {/* Top accent */}
      <div style={{ width: '64px', height: '2px', background: 'var(--gold)', marginBottom: '4rem', opacity: 0.7 }} />

      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '5rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Brand */}
        <div>
          <Image src="/images/logo.png" alt="NVforHD — Cure Huntington's Disease" width={130} height={95}
            style={{ height: '56px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.15)', marginBottom: '1.8rem', display: 'block' }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.58)', fontWeight: 300, maxWidth: '280px' }}>
            A Nevada non-profit raising awareness and funds to battle Huntington&apos;s Disease — one round of golf at a time.
          </p>
          <div style={{ marginTop: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a href="tel:7756918860" style={{ color: 'rgba(255,255,255,0.72)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400 }}>📞 775-691-8860</a>
            <a href="mailto:info@nvforhd.com" style={{ color: 'rgba(255,255,255,0.72)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400 }}>✉ info@nvforhd.com</a>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>
            Tournament logistics by{' '}
            <a href="https://www.golfthehighsierra.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-gths" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Golf The High Sierra</a>
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1.5rem', fontWeight: 600 }}>Navigate</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Charity Causes'], ['/sponsors', 'Sponsors'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} style={{ color: 'rgba(255,255,255,0.58)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300 }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1.5rem', fontWeight: 600 }}>Legal</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li><Link href="/terms" style={{ color: 'rgba(255,255,255,0.58)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300 }}>Terms &amp; Conditions</Link></li>
            <li><Link href="/cancellation" style={{ color: 'rgba(255,255,255,0.58)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300 }}>Cancellation Policy</Link></li>
          </ul>
        </div>

        {/* Join the Fight */}
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1.5rem', fontWeight: 600 }}>Join the Fight</div>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.5rem' }}>
            May 29, 2026<br />Gray&apos;s Crossing<br />Truckee, California
          </p>
          <a href={DONATE} target="_blank" rel="noopener" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem' }}>
            Donate Now →
          </a>
          <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold" style={{ display: 'block', textAlign: 'center', fontSize: '0.68rem' }}>
            Play Golf — May 29 ↗
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0 2rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
        <span>© 2026 NVforHD. All rights reserved. &nbsp;·&nbsp; 2600 Mill St. #400, Reno NV 89502</span>
        <span>
          Photos:{' '}
          <a href="https://unsplash.com/@spencer_demera" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Spencer DeMera</a>
          {' &amp; NVforHD event photography'}
        </span>
      </div>
    </footer>
  )
}
