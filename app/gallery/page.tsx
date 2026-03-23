'use client'
import { useState, useCallback } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Image from 'next/image'

type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

// All 47 real event photos from 2024 NVforHD tournament at Old Greenwood Golf Club, Truckee CA
// Each has a descriptive alt tag for accessibility and SEO
const PHOTOS: Photo[] = [
  { src: '/gallery/DSC0572-scaled.jpg',  alt: 'NVforHD 2024 golf tournament registration area, Old Greenwood Golf Club Truckee CA', width: 1600, height: 1067 },
  { src: '/gallery/DSC0588-scaled.jpg',  alt: 'NVforHD 2024 tournament players gathering before shotgun start', width: 1600, height: 1067 },
  { src: '/gallery/DSC0602-scaled.jpg',  alt: 'Golfers on the Old Greenwood fairway, NVforHD charity tournament 2024', width: 1600, height: 1067 },
  { src: '/gallery/DSC0603-scaled.jpg',  alt: 'NVforHD 2024 tournament group photo on course', width: 1600, height: 1067 },
  { src: '/gallery/DSC0604-scaled.jpg',  alt: 'Players at the tee box, NVforHD 2024 charity golf tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0606-scaled.jpg',  alt: 'Beautiful Old Greenwood Golf Club fairway, Truckee CA — venue for NVforHD 2024', width: 1600, height: 1067 },
  { src: '/gallery/DSC0607-scaled.jpg',  alt: 'NVforHD players enjoying the day at Old Greenwood, surrounded by Sierra Nevada pines', width: 1600, height: 1067 },
  { src: '/gallery/DSC0626-scaled.jpg',  alt: 'Tournament participants at NVforHD 2024 charity golf event', width: 1600, height: 1067 },
  { src: '/gallery/DSC0657-scaled.jpg',  alt: 'Golfers at NVforHD 2024, raising funds for Huntington\'s Disease awareness', width: 1600, height: 1067 },
  { src: '/gallery/DSC0660-scaled.jpg',  alt: 'Group of players on course at NVforHD 2024 tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0664-scaled.jpg',  alt: 'Participants mingling at NVforHD 2024 tournament at Old Greenwood clubhouse, Sierra Nevada pines', width: 1600, height: 1067 },
  { src: '/gallery/DSC0666-scaled.jpg',  alt: 'NVforHD 2024 tournament hole sponsor sign on course', width: 1600, height: 1067 },
  { src: '/gallery/DSC0674-scaled.jpg',  alt: 'NVforHD 2024 players preparing for their round at Old Greenwood', width: 1600, height: 1067 },
  { src: '/gallery/DSC0675-scaled.jpg',  alt: 'Golf foursome at NVforHD 2024 charity tournament, Truckee CA', width: 1600, height: 1067 },
  { src: '/gallery/DSC0689-scaled.jpg',  alt: 'NVforHD 2024 event participants on the Old Greenwood Golf Club grounds', width: 1600, height: 1067 },
  { src: '/gallery/DSC0697-scaled.jpg',  alt: 'Pace Supply Corp hole sponsor sign at NVforHD 2024 charity golf tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0701.jpg',          alt: 'NVforHD 2024 tournament players on fairway', width: 1600, height: 1067 },
  { src: '/gallery/DSC0706.jpg',          alt: 'Old Greenwood Golf Club course conditions, NVforHD 2024 tournament day', width: 1600, height: 1067 },
  { src: '/gallery/DSC0708-scaled.jpg',  alt: 'Woodhead Family hole sponsor sign with players at NVforHD 2024', width: 1600, height: 1067 },
  { src: '/gallery/DSC0711-scaled.jpg',  alt: 'Blue Reef Enterprises Builders and Washoe Wealth Advisors hole sponsor signs, foursome at NVforHD 2024', width: 1600, height: 1067 },
  { src: '/gallery/DSC0715-scaled.jpg',  alt: 'Golf The High Sierra hole sponsor sign, players at NVforHD 2024 charity tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0716-scaled.jpg',  alt: 'Foursome of golfers on green at Old Greenwood, NVforHD 2024 annual tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0720-scaled.jpg',  alt: 'NVforHD 2024 tournament participants at hole, Old Greenwood Golf Club', width: 1600, height: 1067 },
  { src: '/gallery/DSC0724-scaled.jpg',  alt: 'Players enjoying the NVforHD 2024 charity golf tournament at Old Greenwood Truckee', width: 1600, height: 1067 },
  { src: '/gallery/DSC0725-scaled.jpg',  alt: 'Group of golfers at NVforHD 2024, raising funds for UC Davis HD Center of Excellence', width: 1600, height: 1067 },
  { src: '/gallery/DSC0727-scaled.jpg',  alt: 'NVforHD 2024 golf cart lineup at Old Greenwood Golf Club', width: 1600, height: 1067 },
  { src: '/gallery/DSC0730-scaled.jpg',  alt: 'Rebuilding Together Northern Nevada booth at NVforHD 2024 charity golf tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0732-scaled.jpg',  alt: 'NVforHD 2024 players on beautiful Sierra Nevada golf course at Old Greenwood', width: 1600, height: 1067 },
  { src: '/gallery/DSC0734-scaled.jpg',  alt: 'Flowing Tide Pub hole sponsor sign at NVforHD 2024 tournament', width: 1600, height: 1067 },
  { src: '/gallery/DSC0741-scaled.jpg',  alt: 'NVforHD 2024 golf tournament players on course at Old Greenwood Truckee California', width: 1600, height: 1067 },
  { src: '/gallery/DSC0749-scaled.jpg',  alt: 'NVforHD 2024 charity tournament, group on fairway surrounded by pine forest', width: 1600, height: 1067 },
  { src: '/gallery/DSC0752-scaled.jpg',  alt: 'Players at NVforHD 2024 golf tournament tee box', width: 1600, height: 1067 },
  { src: '/gallery/DSC0755-scaled.jpg',  alt: 'NVforHD 2024 tournament group photo, Old Greenwood Golf Club', width: 1600, height: 1067 },
  { src: '/gallery/DSC0760-scaled.jpg',  alt: 'Waikiki Brewing and Cheeseburger in Paradise hole sponsor signs, NVforHD 2024', width: 1600, height: 1067 },
  { src: '/gallery/DSC0764-scaled.jpg',  alt: 'NVforHD 2024 players at hole, Old Greenwood course with mountain views', width: 1600, height: 1067 },
  { src: '/gallery/DSC0768-scaled.jpg',  alt: 'Golf foursome at NVforHD 2024 charity tournament, Truckee CA', width: 1600, height: 1067 },
  { src: '/gallery/DSC0780.jpg',          alt: 'NVforHD 2024 tournament day, Old Greenwood Golf Club Truckee', width: 1200, height: 800 },
  { src: '/gallery/DSC0782.jpg',          alt: 'Players on course at NVforHD 2024 annual charity golf tournament', width: 1200, height: 800 },
  { src: '/gallery/DSC0784.jpg',          alt: 'NVforHD 2024 golf event participants, raising $25,000 for HelpCureHD', width: 1200, height: 800 },
  { src: '/gallery/DSC0788.jpg',          alt: 'NVforHD 2024 tournament participants enjoying a beautiful Truckee day', width: 1200, height: 800 },
  { src: '/gallery/DSC0789.jpg',          alt: 'Group photo at NVforHD 2024 inaugural charity golf tournament', width: 1200, height: 800 },
  { src: '/gallery/DSC0791.jpg',          alt: 'NVforHD 2024 golf tournament on Old Greenwood course, Jack Nicklaus design', width: 1200, height: 800 },
  { src: '/gallery/DSC0793.jpg',          alt: 'NVforHD 2024 event players at Old Greenwood, fundraising for Huntington\'s Disease', width: 1200, height: 800 },
  { src: '/gallery/DSC0797.jpg',          alt: 'NVforHD 2024 inaugural tournament hole, Sierra Nevada pines backdrop', width: 1200, height: 800 },
  { src: '/gallery/DSC0801.jpg',          alt: 'Players at NVforHD 2024 charity golf tournament, Truckee California', width: 1200, height: 800 },
  { src: '/gallery/DSC0807.jpg',          alt: 'NVforHD 2024 golf event, raising funds for families battling Huntington\'s Disease', width: 1200, height: 800 },
  { src: '/gallery/DSC0850-scaled.jpg',  alt: 'NVforHD 2024 tournament at Old Greenwood Golf Club, Jack Nicklaus Signature Course, Truckee CA', width: 1600, height: 1067 },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = useCallback((idx: number) => setLightbox(idx), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null), [])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % PHOTOS.length : null), [])

  return (
    <>
      <Nav />

      {/* Page header — event photo as background */}
      <div style={{
        position: 'relative',
        background: 'var(--deep)',
        padding: 'clamp(7rem,12vw,11rem) var(--px) clamp(2rem,4vw,5rem)',
        overflow: 'hidden',
      }}>
        {/* Real event photo as texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/event-crowd.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          opacity: 0.12, filter: 'grayscale(30%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,12,20,0.8) 0%, rgba(10,12,20,0.6) 60%, rgba(10,12,20,0.95) 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>2024 Event</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,6vw,7rem)', marginBottom: '1.5rem' }}>
            The inaugural<br /><em>tournament.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(245,242,234,0.65)', fontWeight: 300, maxWidth: '580px', lineHeight: 1.8 }}>
            May 2024. Old Greenwood Golf Club, Truckee CA (Jack Nicklaus Signature Course).
            Sold out. $25,000 raised. One family changed forever.
            These are the faces that made it happen.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
              47<span style={{ fontSize: '1rem', color: 'rgba(245,242,234,0.45)', fontFamily: 'var(--sans)', marginLeft: '0.5rem', fontWeight: 300 }}>photos</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(245,242,234,0.1)' }} />
            <div style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: '#fff', lineHeight: 1 }}>
              $25K<span style={{ fontSize: '1rem', color: 'rgba(245,242,234,0.45)', fontFamily: 'var(--sans)', marginLeft: '0.5rem', fontWeight: 300 }}>raised</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(245,242,234,0.1)' }} />
            <div style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: '#fff', lineHeight: 1 }}>
              1<span style={{ fontSize: '1rem', color: 'rgba(245,242,234,0.45)', fontFamily: 'var(--sans)', marginLeft: '0.5rem', fontWeight: 300 }}>family changed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery — masonry with lightbox */}
      <section style={{ background: 'var(--void)', padding: 'clamp(2rem,4vw,4rem) clamp(0.5rem,2vw,2rem)' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div className="gallery-grid">
            {PHOTOS.map((photo, idx) => (
              <div
                key={photo.src}
                className="gallery-item"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}
                aria-label={`View full size: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={idx < 8 ? 'eager' : 'lazy'}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous photo">‹</button>
          <img
            src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next photo">›</button>
          <div className="lightbox-caption">
            {lightbox + 1} / {PHOTOS.length} &nbsp;·&nbsp; {PHOTOS[lightbox].alt.split(',')[0]}
          </div>
        </div>
      )}

      {/* CTA — join 2026 */}
      <section style={{ background: 'var(--deep)', padding: 'var(--py-md) var(--px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/event-foursome-2.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.1, filter: 'grayscale(20%)',
        }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="kicker" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>May 29, 2026</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', marginBottom: '1.5rem' }}>
            Be in <em>next year&apos;s</em> photos.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(245,242,234,0.62)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Gray&apos;s Crossing Golf Club, Truckee CA. 12:00 PM Shotgun Start.
            All proceeds to UC Davis HD Center of Excellence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=gallery-cta"
              target="_blank" rel="noopener"
              className="btn-gold"
            >
              Join Us — Register Now →
            </a>
            <a
              href="https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=gallery-donate"
              target="_blank" rel="noopener"
              className="btn-outline-gold"
            >
              Donate Without Playing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
