const D100 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=inline-100'
const D220 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=inline-220'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=inline-500'

export default function DonateBlock() {
  return (
    <div>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', marginBottom: '0.75rem', fontWeight: 600 }}>
        Choose a donation amount
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <a href={D100} target="_blank" rel="noopener" style={{ padding: '0.8rem 1.5rem', fontSize: '0.88rem', fontWeight: 500, border: '1px solid rgba(28,26,22,0.2)', color: 'var(--ink)', textDecoration: 'none', background: '#fff', transition: 'all 0.2s', fontFamily: 'var(--sans)', display: 'inline-block' }}>$100</a>
        <a href={D220} target="_blank" rel="noopener" style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem', fontWeight: 700, background: 'var(--ink)', color: 'var(--cream)', textDecoration: 'none', position: 'relative', marginTop: '1rem', fontFamily: 'var(--sans)', display: 'inline-block' }}>
          $220
          <span style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dark)', whiteSpace: 'nowrap', fontWeight: 600 }}>Most chosen</span>
        </a>
        <a href={D500} target="_blank" rel="noopener" style={{ padding: '0.8rem 1.5rem', fontSize: '0.88rem', fontWeight: 500, border: '1px solid rgba(28,26,22,0.2)', color: 'var(--ink)', textDecoration: 'none', background: '#fff', transition: 'all 0.2s', fontFamily: 'var(--sans)', display: 'inline-block' }}>$500</a>
      </div>
    </div>
  )
}
