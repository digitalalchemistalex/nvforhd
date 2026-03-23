import Image from 'next/image'
import Link from 'next/link'

const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'

export default function Footer() {
  return (
    <footer style={{
      background: '#080A10',
      padding: '7rem 5rem 0',
      borderTop: '1px solid rgba(201,168,76,0.15)',
    }}>
      {/* Gold accent line */}
      <div style={{ width: '64px', height: '2px', background: 'var(--gold)', marginBottom: '4rem', opacity: 0.7 }} />

      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '5rem', paddingBottom: '5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {/* Brand col */}
        <div>
          <Image
            src="/images/logo.png"
            alt="NVforHD — Cure Huntington's Disease"
            width={130} height={95}
            style={{ height: '56px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.15)', marginBottom: '1.8rem', display: 'block' }}
          />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.62)', fontWeight: 300, maxWidth: '280px' }}>
            A Nevada non-profit raising awareness and funds to battle Huntington&apos;s Disease — one round of golf at a time.
          </p>
          <div style={{ marginTop: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a href="tel:7756918860" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400, transition: 'color 0.2s' }}>
              📞 775-691-8860
            </a>
            <a href="mailto:info@nvforhd.com" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400, transition: 'color 0.2s' }}>
              ✉ info@nvforhd.com
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1.5rem', fontWeight: 600 }}>Navigate</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Charity Causes'], ['/sponsors', 'Sponsors'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300, transition: 'color 0.2s' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1.5rem', fontWeight: 600 }}>Legal</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li><Link href="/terms" style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300 }}>Terms &amp; Conditions</Link></li>
            <li><Link href="/cancellation" style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300 }}>Cancellation Policy</Link></li>
          </ul>
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1rem', fontWeight: 600 }}>Logistics</div>
            <a href="https://www.golfthehighsierra.com" target="_blank" rel="noopener"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>
              Golf The High Sierra
            </a>
          </div>
        </div>

        {/* Donate CTA col */}
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', marginBottom: '1.5rem', fontWeight: 600 }}>Join the Fight</div>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.62)', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.5rem' }}>
            May 29, 2026<br />Gray&apos;s Crossing Golf Club<br />Truckee, California
          </p>
          <a href={D150} target="_blank" rel="noopener" className="btn-gold"
            style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem' }}>
            Donate Now →
          </a>
          <a href="https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament" target="_blank" rel="noopener" className="btn-outline-gold"
            style={{ display: 'block', textAlign: 'center', fontSize: '0.68rem' }}>
            Play Golf — May 29 ↗
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 0 2rem',
        fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)',
      }}>
        <span>© 2026 NVforHD. All rights reserved.</span>
        <span>
          Photos:{' '}
          <a href="https://unsplash.com/@spencer_demera" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none' }}>Spencer DeMera</a>
          ,{' '}
          <a href="https://unsplash.com/@desiraygreen" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none' }}>Desiray Green</a>
          ,{' '}
          <a href="https://unsplash.com/@barnabaspiper" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none' }}>Barnabas Piper</a>
          {' '}on Unsplash
        </span>
      </div>
    </footer>
  )
}
