import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About Us — Board Members',
  description: 'Meet the NVforHD board — Sean Schaeffer (founder), Mike Milligan, Michael Eskuchen, and John McGinnes. A team united by one mission: cure Huntington\'s Disease.',
}

const board = [
  {
    name: 'Sean Schaeffer',
    role: 'Founder',
    img: 'https://nv-for-hd-v1757363743.websitepro-cdn.com/wp-content/uploads/2024/02/ss-headshot.jpg',
    bio: [
      'Sean Schaeffer has spent the last 30 years in the Sales and Customer Service industries. His entrepreneurial spirit has led him to create several of his own companies and ground-breaking technologies. Over the years he has run large call center operations and his companies have accounted for hundreds of thousands of transactions annually in the Hospitality and Gaming sectors. Most recently, he has been the CEO of a publicly traded technology company.',
      'Sean is our founder and has a very personal connection to Huntington\'s Disease. His lovely wife of 30+ years was recently diagnosed with this horrible disease. Sean and his family are new to the HD community but will throw every bit of effort they have into raising awareness, finding a cure, and assisting others with this disease.',
    ],
  },
  {
    name: 'Mike Milligan',
    role: 'Board Member',
    img: 'https://nv-for-hd-v1757363743.websitepro-cdn.com/wp-content/uploads/2026/01/milligan-headshot-2.png',
    bio: [
      'A native of Santa Rosa, CA, Mike has been a part of the golf industry within the Reno/Lake Tahoe area since 2004. After building the tournament golf sales department for Tahoe Mountain Club in Truckee, CA, he served as President of Golf the High Sierra from 2005 to 2014, helping to build its regional significance. He returned to the Golf the High Sierra team as Director of Sales in 2020.',
      'Mike is an avid golfer and very able soccer goalkeeper, playing regularly at 54 years of age. He is first and foremost a family man and amateur farmer, raising his son Jones, 2 donkeys, 2 cows, 4 goats, 2 sheep, 2 horses, 4 dogs, and a cat with his wife Marilyn.',
    ],
  },
  {
    name: 'Michael R. Eskuchen',
    role: 'Board Member',
    img: 'https://nv-for-hd-v1757363743.websitepro-cdn.com/wp-content/uploads/2026/01/skoogen-head-shot-1.png',
    bio: [
      'Mike began his career in the Golf Industry in Palm Springs, CA before moving to Sparks, NV to manage golf sales for Red Hawk, the Golf Club at Wingfield Springs. He later became Director of Sales at Duncan Golf Management, growing the organization from 2 to 9 golf courses in under 5 years. He then served as General Manager and COO of Hidden Valley CC in Reno, NV before joining Golf the High Sierra as Account Manager.',
      'Mike has a love for animals and enjoys coaching football and baseball for his twin boys.',
    ],
  },
  {
    name: 'John McGinnes',
    role: 'Board Member',
    img: 'https://nv-for-hd-v1757363743.websitepro-cdn.com/wp-content/uploads/2024/02/John-McGinnes.jpg',
    bio: [
      'John is the Executive Director of Sales for the #1 Reno-Tahoe resort ranked by TripAdvisor in Northern Nevada. An active member of hotel sales for 30 years, he worked his way up from parking cars to leading hotel sales for 16 years at the Eldorado Hotel Casino, then led sales teams at Intercontinental Hotel Group and the Atlantis Casino Resort Spa.',
      'McGinnes is a graduate of Monmouth College with a BA in Communications, earned his commission as a Field Artillery officer in the U.S. Army, and served eight years in the Army Reserve. He is Secretary & board member of the Regional Air Service Corporation (RASC) and served as three-term President of the Reno-Tahoe Chapter of SKÄL International from 2019–2021.',
    ],
  },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: board.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      worksFor: { '@type': 'NonprofitOrganization', name: 'NVforHD' },
    },
  })),
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Nav />

      {/* Page header */}
      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>About NVforHD</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,5vw,6rem)' }}>
            The people<br /><em>behind the fight.</em>
          </h1>
        </div>
      </div>

      {/* Board members */}
      <section style={{ background: 'var(--void)', padding: '8rem 5rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'rgba(201,168,76,0.07)' }}>
            {board.map(({ name, role, img, bio }, i) => (
              <ScrollReveal key={name} delay={(i % 2) * 0.15}>
                <div style={{ background: 'var(--void)', padding: '4rem' }}>
                  <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={name}
                      style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(20%)', border: '1px solid rgba(201,168,76,0.2)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.3rem' }}>{name}</div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400 }}>{role}</div>
                    </div>
                  </div>
                  {bio.map((p, j) => (
                    <p key={j} className="body-text" style={{ fontSize: '0.88rem', marginBottom: j < bio.length - 1 ? '1rem' : 0 }}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 5th member placeholder */}
          <ScrollReveal style={{ marginTop: '1px' }}>
            <div style={{ background: 'rgba(201,168,76,0.02)', border: '1px dashed rgba(201,168,76,0.15)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(245,242,234,0.25)' }}>5th board member — coming soon</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
