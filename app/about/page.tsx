import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — Board Members',
  description: "Meet the NVforHD board: Sean Schaeffer (founder), Mike Milligan, Michael Eskuchen, and John McGinnes. United by one mission — cure Huntington's Disease.",
}

const board = [
  {
    name: 'Sean Schaeffer',
    role: 'Founder',
    img: '/images/headshot-sean.jpg',
    bio: [
      "Sean Schaeffer has spent the last 30 years in the Sales and Customer Service industries. His entrepreneurial spirit has led him to create several of his own companies and ground-breaking technologies. Over the years he has run large call center operations with hundreds of thousands of annual transactions in the Hospitality and Gaming sectors. Most recently, he served as CEO of a publicly traded technology company.",
      "Sean is our founder and has a deeply personal connection to Huntington's Disease. His lovely wife of 30+ years, Christine, was recently diagnosed with this horrible disease. Sean and his family are new to the HD community but will throw every bit of effort they have into raising awareness, finding a cure, and assisting others.",
    ],
  },
  {
    name: 'Mike Milligan',
    role: 'Board Member',
    img: '/images/headshot-milligan.png',
    bio: [
      "A native of Santa Rosa, CA, Mike has been part of the golf industry in the Reno/Lake Tahoe area since 2004. He built the tournament golf sales department at Tahoe Mountain Club in Truckee, served as President of Golf the High Sierra from 2005 to 2014, and returned as Director of Sales in 2020 — helping grow its regional significance in the Reno/Lake Tahoe marketplace.",
      "Mike is an avid golfer and an able soccer goalkeeper at 54 years old. He is first and foremost a family man and amateur farmer, raising his son Jones, 2 donkeys, 2 cows, 4 goats, 2 sheep, 2 horses, 4 dogs, and a cat with his wife Marilyn.",
    ],
  },
  {
    name: 'Michael R. Eskuchen',
    role: 'Board Member',
    img: '/images/headshot-eskuchen.png',
    bio: [
      "Mike began his career in golf in Palm Springs, CA before moving to Sparks, NV to manage sales at Red Hawk — the Golf Club at Wingfield Springs. He became Director of Sales at Duncan Golf Management, growing the organisation from 2 to 9 courses in under 5 years. He then served as GM and COO of Hidden Valley CC in Reno before joining Golf the High Sierra as Account Manager.",
      "Mike has a love for animals and enjoys coaching football and baseball for his twin boys.",
    ],
  },
  {
    name: 'John McGinnes',
    role: 'Board Member',
    img: '/images/headshot-mcginnes.jpg',
    bio: [
      "John is Executive Director of Sales for the #1 Reno-Tahoe resort ranked by TripAdvisor in Northern Nevada. With 30 years in hotel sales, he progressed from parking cars to leading sales for 16 years at the Eldorado Hotel Casino, then led teams at Intercontinental Hotel Group, and in 2016 returned to lead the Atlantis Casino Resort Spa.",
      "McGinnes holds a BA in Communications from Monmouth College and his commission as a Field Artillery officer in the U.S. Army. He served 8 years in the Army Reserve, is Secretary of the Regional Air Service Corporation (RASC), and was three-term President of the Reno-Tahoe Chapter of SKÄL International 2019–2021.",
    ],
  },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: board.map((m, i) => ({
    '@type': 'ListItem', position: i + 1,
    item: { '@type': 'Person', name: m.name, jobTitle: m.role, worksFor: { '@type': 'NonprofitOrganization', name: 'NVforHD' } },
  })),
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Nav />

      {/* Header with event crowd photo */}
      <div style={{ position: 'relative', background: 'var(--deep)', padding: 'clamp(7rem,12vw,11rem) var(--px) clamp(2rem,4vw,5rem)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/event-crowd.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.1, filter: 'grayscale(20%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,12,20,0.8) 0%, rgba(10,12,20,0.95) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>About NVforHD</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,6vw,7rem)', marginBottom: '1.5rem' }}>
            The people<br /><em>behind the fight.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(245,242,234,0.62)', fontWeight: 300, maxWidth: '560px', lineHeight: 1.8 }}>
            Four board members united by a single mission — raise awareness, raise funds, and fight Huntington&apos;s Disease until there is a cure.
          </p>
        </div>
      </div>

      {/* Board grid */}
      <section style={{ background: 'var(--void)', padding: 'var(--py-md) var(--px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,0.06)' }}>
          {board.map(({ name, role, img, bio }, i) => (
            <ScrollReveal key={name} delay={i % 2 === 0 ? 0 : 0.1}>
              <div style={{
                background: 'var(--void)',
                padding: 'clamp(2rem,4vw,5rem)',
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: '5rem',
                alignItems: 'start',
              }}>
                {/* Photo */}
                <div>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
                    <Image
                      src={img}
                      alt={`${name} — ${role}, NVforHD`}
                      width={280} height={340}
                      style={{ width: '100%', height: '340px', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(10%)', display: 'block', transition: 'filter 0.3s' }}
                    />
                    {/* Gold border on hover handled via CSS would need client — keep simple */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400, color: '#fff', marginBottom: '0.3rem' }}>{name}</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>{role}</div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  {bio.map((p, j) => (
                    <p key={j} style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(245,242,234,0.7)', fontWeight: 300, marginBottom: j < bio.length - 1 ? '1.2rem' : 0 }}>{p}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* 5th member placeholder */}
          <div style={{ background: 'rgba(245,242,234,0.02)', padding: '3rem 5rem', border: '1px dashed rgba(245,242,234,0.08)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px dashed rgba(245,242,234,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,242,234,0.2)', fontSize: '1.5rem' }}>?</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(245,242,234,0.25)' }}>5th board member — coming soon</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
