'use client'
const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=mobile-dock-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=mobile-dock-golf'

export default function MobileCTADock() {
  return (
    <div className="mobile-cta-dock">
      <a href={DONATE} target="_blank" rel="noopener" className="btn-gold"
        style={{ flex: 1, textAlign: 'center', fontSize: '0.7rem', padding: '0.85rem 1rem' }}>
        Donate $100
      </a>
      <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold"
        style={{ flex: 1, textAlign: 'center', fontSize: '0.7rem', padding: '0.85rem 1rem' }}>
        Play Golf ↗
      </a>
    </div>
  )
}
