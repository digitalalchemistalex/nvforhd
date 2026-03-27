import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — Board Members | NVforHD',
  description: "Meet the NVforHD board: Sean Schaeffer (founder), Mike Milligan, Michael Eskuchen, and John McGinnes. United by one mission — cure Huntington's Disease.",
  openGraph: {
    title: 'About NVforHD — Meet the Board',
    description: "Four board members united by one mission — cure Huntington's Disease.",
    images: ['/images/event-crowd.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://nvforhd.com/about',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NVforHD Board Members',
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: {
        '@type': 'Person',
        name: 'Sean Schaeffer',
        jobTitle: 'Founder',
        worksFor: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
        description: 'Founder of NVforHD. 30+ years in sales. CEO of publicly traded technology company. Founded NVforHD after wife Christine was diagnosed with Huntington\'s Disease.',
        image: 'https://nvforhd.com/images/headshot-sean.webp',
      },
    },
    {
      '@type': 'ListItem', position: 2,
      item: {
        '@type': 'Person',
        name: 'Mike Milligan',
        jobTitle: 'Board Member',
        worksFor: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
        description: 'Director of Sales, Golf the High Sierra. Former President of Golf the High Sierra 2005–2014.',
        image: 'https://nvforhd.com/images/headshot-milligan.webp',
      },
    },
    {
      '@type': 'ListItem', position: 3,
      item: {
        '@type': 'Person',
        name: 'Michael R. Eskuchen',
        jobTitle: 'Board Member',
        worksFor: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
        description: 'Account Manager, Golf the High Sierra. Former GM & COO of Hidden Valley CC, Reno, NV.',
        image: 'https://nvforhd.com/images/headshot-eskuchen.webp',
      },
    },
    {
      '@type': 'ListItem', position: 4,
      item: {
        '@type': 'Person',
        name: 'John McGinnes',
        jobTitle: 'Board Member',
        worksFor: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
        description: 'Executive Director of Sales, Atlantis Casino Resort Spa. 30 years in hotel sales.',
        image: 'https://nvforhd.com/images/headshot-mcginnes.webp',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nvforhd.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://nvforhd.com/about' },
  ],
}

const board = [
  {
    name: 'Sean Schaeffer',
    role: 'Founder',
    img: '/images/headshot-sean.webp',
    bio: [
      "Sean Schaeffer has spent the last 30 years in the Sales and Customer Service industries. His entrepreneurial spirit has led him to create several of his own companies and ground-breaking technologies. Over the years he has run large call center operations with hundreds of thousands of annual transactions in the Hospitality and Gaming sectors. Most recently, he served as CEO of a publicly traded technology company.",
      "Sean is our founder and has a deeply personal connection to Huntington's Disease. His lovely wife of 30+ years, Christine, was recently diagnosed with this horrible disease. Sean and his family are new to the HD community but will throw every bit of effort they have into raising awareness, finding a cure, and assisting others.",
    ],
  },
  {
    name: 'Mike Milligan',
    role: 'Board Member',
    img: '/images/headshot-milligan.webp',
    bio: [
      "A native of Santa Rosa, CA, Mike has been part of the golf industry in the Reno/Lake Tahoe area since 2004. He built the tournament golf sales department at Tahoe Mountain Club in Truckee, served as President of Golf the High Sierra from 2005 to 2014, and returned as Director of Sales in 2020 — helping grow its regional significance in the Reno/Lake Tahoe marketplace.",
      "Mike is an avid golfer and an able soccer goalkeeper at 54 years old. He is first and foremost a family man and amateur farmer, raising his son Jones, 2 donkeys, 2 cows, 4 goats, 2 sheep, 2 horses, 4 dogs, and a cat with his wife Marilyn.",
    ],
  },
  {
    name: 'Michael R. Eskuchen',
    role: 'Board Member',
    img: '/images/headshot-eskuchen.webp',
    bio: [
      "Mike began his career in golf in Palm Springs, CA before moving to Sparks, NV to manage sales at Red Hawk — the Golf Club at Wingfield Springs. He became Director of Sales at Duncan Golf Management, growing the organisation from 2 to 9 courses in under 5 years. He then served as GM and COO of Hidden Valley CC in Reno before joining Golf the High Sierra as Account Manager.",
      "Mike has a love for animals and enjoys coaching football and baseball for his twin boys.",
    ],
  },
  {
    name: 'John McGinnes',
    role: 'Board Member',
    img: '/images/headshot-mcginnes.webp',
    bio: [
      "John is Executive Director of Sales for the #1 Reno-Tahoe resort ranked by TripAdvisor in Northern Nevada. With 30 years in hotel sales, he progressed from parking cars to leading sales for 16 years at the Eldorado Hotel Casino, then led teams at Intercontinental Hotel Group, and in 2016 returned to lead the Atlantis Casino Resort Spa.",
      "McGinnes holds a BA in Communications from Monmouth College and his commission as a Field Artillery officer in the U.S. Army. He served 8 years in the Army Reserve, is Secretary of the Regional Air Service Corporation (RASC), and was three-term President of the Reno-Tahoe Chapter of SKÄL International 2019–2021.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <PageHero
        kicker="About NVforHD"
        headline={<>The people<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.35)' }}>behind</em> the fight.</>}
        sub="Four board members united by a single mission — raise awareness, raise funds, and fight Huntington's Disease until there is a cure."
        photo="/images/event-crowd.jpg"
        photoPosition="center 30%"
        stat1={{ n: '4', label: 'Board Members' }}
        stat2={{ n: '$50K+', label: 'Raised together' }}
        stat3={{ n: '3', label: 'Years fighting' }}
      />

      {/* Board — alternating light/dark rows */}
      {board.map(({ name, role, img, bio }, i) => (
        <section key={name} className={i % 2 === 0 ? 'section-light on-light' : 'section-light on-light'} style={{ background: i % 2 === 0 ? 'var(--cream)' : '#fff', position: 'relative' }}>
          {i === 0 && <div className="divider-dark" />}
          <div className="inner" style={{ padding: 'clamp(3rem,5vw,6rem) var(--px)', display: 'grid', gridTemplateColumns: 'clamp(200px,22vw,300px) 1fr', gap: 'clamp(2.5rem,5vw,6rem)', alignItems: 'start' }}>
            <ScrollReveal delay={0.05}>
              <div style={{ position: 'relative' }}>
                <Image
                  src={img}
                  alt={`${name} — ${role}, NVforHD`}
                  width={300} height={360}
                  style={{ width: '100%', height: 'clamp(220px,30vw,360px)', objectFit: 'cover', objectPosition: 'top', display: 'block', borderRadius: '2px' }}
                />
                {/* Gold accent */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold-dark), transparent)' }} />
              </div>
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', color: 'var(--ink)', fontWeight: 400 }}>{name}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 600, marginTop: '0.3rem' }}>{role}</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              {bio.map((p, j) => (
                <p key={j} style={{ fontSize: 'clamp(0.9rem,1.2vw,1rem)', lineHeight: 1.9, color: 'var(--ink-dim)', fontWeight: 300, marginBottom: j < bio.length - 1 ? '1.25rem' : 0 }}>{p}</p>
              ))}
            </ScrollReveal>
          </div>
          <div style={{ height: '1px', background: 'var(--cream-3)', margin: '0 var(--px)' }} />
        </section>
      ))}

      {/* 5th member placeholder */}
      <section className="section-light on-light" style={{ background: 'var(--cream)', padding: 'clamp(2rem,4vw,4rem) var(--px)' }}>
        <div className="inner" style={{ display: 'flex', alignItems: 'center', gap: '2rem', opacity: 0.4 }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', border: '1.5px dashed var(--ink-dimmer)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-dimmer)', fontSize: '1.5rem', flexShrink: 0 }}>?</div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--ink-dim)' }}>5th board member — coming soon</div>
        </div>
      </section>

      <Footer />
    </>
  )
}
