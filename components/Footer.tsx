import Image from 'next/image'
import Link from 'next/link'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-golf'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-deep)', borderTop: '1px solid rgba(201,168,76,0.15)', padding: 'clamp(3rem,5vw,6rem) var(--px) 0', paddingBottom: 'calc(80px + env(safe-area-inset-bottom,0px))' }}>
      <div style={{ width: '48px', height: '2px', background: 'var(--gold)', marginBottom: '3rem', opacity: 0.8 }} />

      <div className="inner footer-grid" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div>
          <Image src="/images/logo.png" alt="NVforHD — Cure Huntington's Disease" width={130} height={95}
            style={{ height: '48px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.15)', marginBottom: '1.5rem', display: 'block' }} />
          <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(245,242,234,0.55)', fontWeight: 300, maxWidth: '240px' }}>
            A Nevada non-profit raising awareness and funds to battle Huntington&apos;s Disease — one round of golf at a time.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="tel:7756918860" style={{ color: 'rgba(245,242,234,0.72)', textDecoration: 'none', fontSize: '0.85rem' }}>📞 775-691-8860</a>
            <a href="mailto:info@nvforhd.com" style={{ color: 'rgba(245,242,234,0.72)', textDecoration: 'none', fontSize: '0.85rem' }}>✉ info@nvforhd.com</a>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.75)', marginBottom: '1.2rem', fontWeight: 600 }}>Navigate</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Causes'], ['/gallery', 'Gallery'], ['/sponsors', 'Sponsors'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} style={{ color: 'rgba(245,242,234,0.52)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.75)', marginBottom: '1.2rem', fontWeight: 600 }}>Legal</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <li><Link href="/terms" style={{ color: 'rgba(245,242,234,0.52)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>Terms &amp; Conditions</Link></li>
            <li><Link href="/cancellation" style={{ color: 'rgba(245,242,234,0.52)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>Cancellation Policy</Link></li>
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.75)', marginBottom: '1.2rem', fontWeight: 600 }}>Join the Fight</div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,234,0.5)', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.2rem' }}>
            May 29, 2026<br />Gray&apos;s Crossing, Truckee CA
          </p>
          <a href={DONATE} target="_blank" rel="noopener" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginBottom: '0.6rem', fontSize: '0.66rem', padding: '0.75rem 1rem' }}>Donate Now →</a>
          <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold" style={{ display: 'block', textAlign: 'center', fontSize: '0.64rem', padding: '0.72rem 1rem' }}>Play Golf — May 29 ↗</a>
        </div>
      </div>

      <div className="inner" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', padding: '1.5rem 0 2rem', fontSize: '0.7rem', color: 'rgba(245,242,234,0.25)' }}>
        <span>© 2026 NVforHD. All rights reserved. &nbsp;·&nbsp; 2600 Mill St. #400, Reno NV 89502</span>
        <span>
          Tournament logistics by{' '}
          <a href="https://www.golfthehighsierra.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-gths" target="_blank" rel="noopener" style={{ color: 'rgba(245,242,234,0.3)', textDecoration: 'none' }}>Golf The High Sierra</a>
        </span>
      </div>
    </footer>
  )
}
