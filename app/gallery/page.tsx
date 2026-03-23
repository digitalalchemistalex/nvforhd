import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: '2024 Event Gallery',
  description: 'Photos from the inaugural 2024 NVforHD Golf Tournament at Old Greenwood Golf Club (Jack Nicklaus Signature Course), Truckee CA.',
}

const CDN = 'https://nv-for-hd-v1757363743.websitepro-cdn.com/wp-content/uploads/2024/12/'
const photos = [
  'DSC0572-scaled.jpg','DSC0588-scaled.jpg','DSC0602-scaled.jpg','DSC0603-scaled.jpg',
  'DSC0604-scaled.jpg','DSC0606-scaled.jpg','DSC0607-scaled.jpg','DSC0626-scaled.jpg',
  'DSC0657-scaled.jpg','DSC0660-scaled.jpg','DSC0664-scaled.jpg','DSC0666-scaled.jpg',
  'DSC0674-scaled.jpg','DSC0675-scaled.jpg','DSC0689-scaled.jpg','DSC0697-scaled.jpg',
  'DSC0701.jpg','DSC0706.jpg','DSC0708-scaled.jpg','DSC0711-scaled.jpg',
  'DSC0715-scaled.jpg','DSC0716-scaled.jpg','DSC0720-scaled.jpg','DSC0724-scaled.jpg',
  'DSC0725-scaled.jpg','DSC0727-scaled.jpg','DSC0730-scaled.jpg','DSC0732-scaled.jpg',
  'DSC0734-scaled.jpg','DSC0741-scaled.jpg','DSC0749-scaled.jpg','DSC0752-scaled.jpg',
  'DSC0755-scaled.jpg','DSC0760-scaled.jpg','DSC0764-scaled.jpg','DSC0768-scaled.jpg',
  'DSC0780.jpg','DSC0782.jpg','DSC0784.jpg','DSC0788.jpg',
  'DSC0789.jpg','DSC0791.jpg','DSC0793.jpg','DSC0797.jpg',
  'DSC0801.jpg','DSC0807.jpg','DSC0850-scaled.jpg',
]

export default function GalleryPage() {
  return (
    <>
      <Nav />

      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>2024 Event</div>
            <h1 className="display" style={{ fontSize: 'clamp(3rem,5vw,6rem)' }}>
              The day that<br /><em>started it all.</em>
            </h1>
            <p className="body-text" style={{ marginTop: '1.5rem', maxWidth: '500px' }}>
              Inaugural tournament at Old Greenwood Golf Club (Jack Nicklaus Signature Course), Truckee CA. Sold out. $25,000 raised. One family changed forever.
            </p>
          </div>
          <a href="https://drive.google.com/drive/folders/1s-Omg_LPI5S56ezKHYjE-I7go2fU4_Ln?usp=drive_link" target="_blank" rel="noopener" className="btn-outline-gold">
            Full Gallery ↗
          </a>
        </div>
      </div>

      <section style={{ background: 'var(--void)', padding: '6rem 5rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2px',
          }}>
            {photos.map((photo, i) => (
              <ScrollReveal key={photo} delay={(i % 4) * 0.06}>
                <div style={{ overflow: 'hidden', aspectRatio: '4/3', background: 'var(--deep)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${CDN}${photo}`}
                    alt={`2024 NVforHD Golf Tournament — photo ${i + 1}`}
                    loading="lazy"

                    className="gallery-img" 
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
