const D100  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=inline-donate-100'
const D220  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=inline-donate-220'
const D500  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=inline-donate-500'

export default function DonateBlock() {
  return (
    <div>
      <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', marginBottom: '0.75rem', fontWeight: 500 }}>
        Choose a donation amount
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <a href={D100} target="_blank" rel="noopener" className="amt-btn">$100</a>
        <a href={D220} target="_blank" rel="noopener" className="amt-btn featured" style={{ marginTop: '1rem' }}>$220</a>
        <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
      </div>
    </div>
  )
}
