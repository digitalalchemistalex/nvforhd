import Image from 'next/image'
import Link from 'next/link'

const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--void)', padding: '7rem 5rem 4rem', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr', gap: '5rem', marginBottom: '5rem' }}>
        <div>
          <Image src="/images/logo.png" alt="NVforHD" width={120} height={87}
            style={{ height: '52px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.7, marginBottom: '1.8rem', display: 'block' }} />
          <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(245,242,234,0.45)', fontWeight: 300, maxWidth: '270px' }}>
            A Nevada non-profit raising awareness and funds to battle Huntington&apos;s Disease — one round of golf at a time.
          </p>
          <p style={{ marginTop: '1.2rem', fontSize: '0.68rem', color: 'rgba(245,242,234,0.22)', letterSpacing: '0.03em' }}>
            Tournament logistics by{'  '}
            <a href="https://www.golfthehighsierra.com" target="_blank" rel="noopener" style={{ color: 'rgba(245,242,234,0.3)', textDecoration: 'none' }}>
              Golf The High Sierra
            </a>
          </p>
        </div>

        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.28)', marginBottom: '1.5rem', fontWeight: 500 }}>Navigate</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[['/ ', 'Home'], ['/about', 'About Us'], ['/causes', 'Charity Causes'], ['/sponsors', 'Sponsors'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href.trim()} style={{ color: 'rgba(245,242,234,0.5)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.28)', marginBottom: '1.5rem', fontWeight: 500 }}>Legal</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/terms" style={{ color: 'rgba(245,242,234,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>Terms &amp; Conditions</Link></li>
            <li><Link href="/cancellation" style={{ color: 'rgba(245,242,234,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>Cancellation Policy</Link></li>
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.28)', marginBottom: '1.5rem', fontWeight: 500 }}>Contact</div>
          <a href="tel:7756918860" style={{ display: 'block', color: 'rgba(245,242,234,0.55)', textDecoration: 'none', fontSize: '0.88rem', marginBottom: '0.75rem', transition: 'color 0.2s' }}>775-691-8860</a>
          <a href="mailto:info@nvforhd.com" style={{ display: 'block', color: 'rgba(245,242,234,0.55)', textDecoration: 'none', fontSize: '0.88rem', marginBottom: '1.5rem', transition: 'color 0.2s' }}>info@nvforhd.com</a>
          <a href={D150} target="_blank" rel="noopener" className="btn-outline-gold" style={{ fontSize: '0.65rem', padding: '0.75rem 1.4rem' }}>
            Donate — Any Amount ↗
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(245,242,234,0.07)', fontSize: '0.72rem', color: 'rgba(245,242,234,0.28)' }}>
        <span>© 2026 NVforHD. All rights reserved.</span>
        <span>
          Photos:{'  '}
          <a href="https://unsplash.com/@supergios" target="_blank" rel="noopener" style={{ color: 'rgba(245,242,234,0.28)', textDecoration: 'none' }}>Jonny Gios</a>
          {'  &  '}
          <a href="https://unsplash.com/@haozlife" target="_blank" rel="noopener" style={{ color: 'rgba(245,242,234,0.28)', textDecoration: 'none' }}>Hao Zhang</a>
          {'  on Unsplash'}
        </span>
      </div>
    </footer>
  )
}
