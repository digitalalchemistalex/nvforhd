const D50  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-50'
const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-500'

export default function DonateBlock() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <a href={D50}  target="_blank" rel="noopener" className="amt-btn">$50</a>
        <a href={D150} target="_blank" rel="noopener" className="amt-btn featured">$150</a>
        <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
      </div>
    </div>
  )
}
