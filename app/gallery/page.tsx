'use client'
import { useState, useCallback } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

type Photo = { src: string; alt: string }

const PHOTOS: Photo[] = [
  { src: '/gallery/DSC0572-scaled.jpg', alt: 'NVforHD 2024 golf tournament registration, Old Greenwood Golf Club Truckee CA' },
  { src: '/gallery/DSC0588-scaled.jpg', alt: 'NVforHD 2024 players gathering before shotgun start' },
  { src: '/gallery/DSC0602-scaled.jpg', alt: 'Golfers on Old Greenwood fairway, NVforHD charity tournament 2024' },
  { src: '/gallery/DSC0603-scaled.jpg', alt: 'NVforHD 2024 tournament group photo on course' },
  { src: '/gallery/DSC0604-scaled.jpg', alt: 'Players at the tee box, NVforHD 2024 charity golf tournament' },
  { src: '/gallery/DSC0606-scaled.jpg', alt: 'Beautiful Old Greenwood Golf Club fairway, Truckee CA — NVforHD 2024' },
  { src: '/gallery/DSC0607-scaled.jpg', alt: 'NVforHD players at Old Greenwood, surrounded by Sierra Nevada pines' },
  { src: '/gallery/DSC0626-scaled.jpg', alt: 'Tournament participants at NVforHD 2024 charity golf event' },
  { src: '/gallery/DSC0657-scaled.jpg', alt: 'Golfers at NVforHD 2024, raising funds for Huntington\'s Disease' },
  { src: '/gallery/DSC0660-scaled.jpg', alt: 'Group of players at NVforHD 2024 tournament' },
  { src: '/gallery/DSC0664-scaled.jpg', alt: 'Participants at NVforHD 2024 at Old Greenwood clubhouse, Sierra Nevada pines' },
  { src: '/gallery/DSC0666-scaled.jpg', alt: 'NVforHD 2024 tournament hole sponsor sign on course' },
  { src: '/gallery/DSC0674-scaled.jpg', alt: 'NVforHD 2024 players preparing for their round at Old Greenwood' },
  { src: '/gallery/DSC0675-scaled.jpg', alt: 'Golf foursome at NVforHD 2024 charity tournament, Truckee CA' },
  { src: '/gallery/DSC0689-scaled.jpg', alt: 'NVforHD 2024 participants at Old Greenwood Golf Club' },
  { src: '/gallery/DSC0697-scaled.jpg', alt: 'Pace Supply Corp hole sponsor sign, NVforHD 2024' },
  { src: '/gallery/DSC0701.jpg',         alt: 'NVforHD 2024 tournament players on fairway' },
  { src: '/gallery/DSC0706.jpg',         alt: 'Old Greenwood Golf Club course, NVforHD 2024 tournament day' },
  { src: '/gallery/DSC0708-scaled.jpg', alt: 'Woodhead Family hole sponsor sign, NVforHD 2024' },
  { src: '/gallery/DSC0711-scaled.jpg', alt: 'Blue Reef Enterprises and Washoe Wealth Advisors hole signs, NVforHD 2024' },
  { src: '/gallery/DSC0715-scaled.jpg', alt: 'Golf The High Sierra hole sponsor sign, NVforHD 2024' },
  { src: '/gallery/DSC0716-scaled.jpg', alt: 'Foursome on green at Old Greenwood, NVforHD 2024 annual tournament' },
  { src: '/gallery/DSC0720-scaled.jpg', alt: 'NVforHD 2024 tournament participants at hole, Old Greenwood' },
  { src: '/gallery/DSC0724-scaled.jpg', alt: 'Players at NVforHD 2024 charity tournament, Old Greenwood Truckee' },
  { src: '/gallery/DSC0725-scaled.jpg', alt: 'Group of golfers at NVforHD 2024, raising funds for UC Davis HD' },
  { src: '/gallery/DSC0727-scaled.jpg', alt: 'NVforHD 2024 golf cart lineup at Old Greenwood Golf Club' },
  { src: '/gallery/DSC0730-scaled.jpg', alt: 'Rebuilding Together Northern Nevada booth at NVforHD 2024' },
  { src: '/gallery/DSC0732-scaled.jpg', alt: 'NVforHD 2024 players on Sierra Nevada golf course' },
  { src: '/gallery/DSC0734-scaled.jpg', alt: 'Flowing Tide Pub hole sponsor sign at NVforHD 2024' },
  { src: '/gallery/DSC0741-scaled.jpg', alt: 'NVforHD 2024 golf tournament players at Old Greenwood Truckee California' },
  { src: '/gallery/DSC0749-scaled.jpg', alt: 'NVforHD 2024 charity tournament group on fairway, pine forest' },
  { src: '/gallery/DSC0752-scaled.jpg', alt: 'Players at NVforHD 2024 golf tournament tee box' },
  { src: '/gallery/DSC0755-scaled.jpg', alt: 'NVforHD 2024 tournament group photo, Old Greenwood Golf Club' },
  { src: '/gallery/DSC0760-scaled.jpg', alt: 'Waikiki Brewing and Cheeseburger in Paradise hole sponsor signs, NVforHD 2024' },
  { src: '/gallery/DSC0764-scaled.jpg', alt: 'NVforHD 2024 players at hole, Old Greenwood with mountain views' },
  { src: '/gallery/DSC0768-scaled.jpg', alt: 'Golf foursome at NVforHD 2024 charity tournament, Truckee CA' },
  { src: '/gallery/DSC0780.jpg',         alt: 'NVforHD 2024 tournament day, Old Greenwood Golf Club Truckee' },
  { src: '/gallery/DSC0782.jpg',         alt: 'Players at NVforHD 2024 annual charity golf tournament' },
  { src: '/gallery/DSC0784.jpg',         alt: 'NVforHD 2024 participants raising $25,000 for HelpCureHD' },
  { src: '/gallery/DSC0788.jpg',         alt: 'NVforHD 2024 tournament participants, beautiful Truckee day' },
  { src: '/gallery/DSC0789.jpg',         alt: 'Group photo at NVforHD 2024 inaugural charity golf tournament' },
  { src: '/gallery/DSC0791.jpg',         alt: 'NVforHD 2024 golf tournament, Old Greenwood Jack Nicklaus course' },
  { src: '/gallery/DSC0793.jpg',         alt: 'NVforHD 2024 players at Old Greenwood, fundraising for Huntington\'s Disease' },
  { src: '/gallery/DSC0797.jpg',         alt: 'NVforHD 2024 inaugural tournament hole, Sierra Nevada pines backdrop' },
  { src: '/gallery/DSC0801.jpg',         alt: 'Players at NVforHD 2024 charity golf tournament, Truckee California' },
  { src: '/gallery/DSC0807.jpg',         alt: 'NVforHD 2024 golf event raising funds for Huntington\'s Disease families' },
  { src: '/gallery/DSC0850-scaled.jpg', alt: 'NVforHD 2024 tournament at Old Greenwood Golf Club, Jack Nicklaus Signature Course' },
]

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=gallery-cta'
const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=gallery-donate'

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const open  = useCallback((i: number) => setLightbox(i), [])
  const close = useCallback(() => setLightbox(null), [])
  const prev  = useCallback(() => setLightbox(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null), [])
  const next  = useCallback(() => setLightbox(i => i !== null ? (i + 1) % PHOTOS.length : null), [])

  return (
    <>
      <Nav />
      <PageHero
        kicker="2024 Event Gallery"
        headline={<>The inaugural<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.75)' }}>tournament.</em></>}
        sub="May 2024 · Old Greenwood Golf Club, Truckee CA (Jack Nicklaus Signature Course). Sold out. $25,000 raised. One family changed forever."
        photo="/images/event-foursome-2.jpg"
        photoPosition="center 35%"
        stat1={{ n: '47', label: 'Photos' }}
        stat2={{ n: '$25K', label: 'Raised' }}
        stat3={{ n: '1', label: 'Family changed' }}
      />

      {/* Gallery — on light bg for maximum photo contrast */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(2rem,4vw,4rem) clamp(0.5rem,1.5vw,1.5rem)' }}>
        <div className="gallery-grid">
          {PHOTOS.map((photo, idx) => (
            <div
              key={photo.src}
              className="gallery-item"
              onClick={() => open(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && open(idx)}
              aria-label={`View: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={idx < 12 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>
          <img src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].alt} className="lightbox-img" onClick={e => e.stopPropagation()} />
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">›</button>
          <div className="lightbox-caption">{lightbox + 1} / {PHOTOS.length} &nbsp;·&nbsp; {PHOTOS[lightbox].alt.split(',')[0]}</div>
        </div>
      )}

      {/* CTA */}
      <section className="section-dark dark-section on-dark" style={{ padding: 'var(--py-md) var(--px)', position: 'relative' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-crowd.jpg')", opacity: 0.1, filter: 'grayscale(20%)' }} />
        <div className="divider-gold" />
        <div className="inner" style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div className="kicker" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>May 29, 2026</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300, color: '#fff', marginBottom: '1.5rem' }}>
            Be in <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>next year&apos;s</em> photos.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--white-dim)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Gray&apos;s Crossing Golf Club, Truckee CA. 12:00 PM Shotgun. All proceeds to UC Davis HD Center of Excellence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={BOOK} target="_blank" rel="noopener" className="btn-gold">Join Us — Register Now →</a>
            <a href={DONATE} target="_blank" rel="noopener" className="btn-outline-gold">Donate Without Playing</a>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(2.5rem,4vw,4rem) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
          { href: '/blog', title: 'HD Stories & Education', desc: "Read about the families your participation supports." },
          { href: '/causes', title: 'Where Funds Go', desc: "See exactly what the tournament raises and funds each year." },
          { href: '/contact', title: 'Join Us in 2026', desc: "Register for the May 29 tournament at Gray's Crossing." },
          ].map(({ href, title, desc }) => (
            <a key={href} href={href} style={{ display: 'block', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--cream-3)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 500, color: 'var(--blue)', marginBottom: '0.4rem' }}>{title} →</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6 }}>{desc}</div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
