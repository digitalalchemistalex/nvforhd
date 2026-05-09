import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sponsor NVforHD | Huntington's Disease Charity Golf 2026",
  description: "Put your brand on the fight against HD. Title, Gold, Lunch and Hole sponsorships for the May 29, 2026 charity golf tournament at Gray's Crossing, Truckee.",
  openGraph: {
    title: "Sponsor NVforHD | Huntington's Disease Charity Golf 2026",
    description: 'Meet our 2025 sponsors and become a 2026 sponsor. Packages from $100.',
    images: [{ url: '/images/event-crowd.jpg', width: 1200, height: 630, alt: 'NVforHD Sponsors' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVforHD Sponsors — Support the Fight Against HD',
    description: 'Become a 2026 sponsor. Packages from $100.',
    images: ['/images/event-crowd.jpg'],
  },
  alternates: { canonical: 'https://www.nvforhd.com/sponsors' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nvforhd.com' },
    { '@type': 'ListItem', position: 2, name: 'Sponsors', item: 'https://nvforhd.com/sponsors' },
  ],
}

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-page'

export default function SponsorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      {/* ── HERO — light, human, purposeful ── */}
      <section style={{ background: 'var(--white)', paddingTop: 'clamp(7rem,14vw,11rem)', paddingBottom: 'clamp(3rem,5vw,5rem)', paddingLeft: 'var(--px)', paddingRight: 'var(--px)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--cream-3)' }}>
        {/* Large ghost text */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '-1rem', top: '0', fontFamily: 'var(--serif)', fontSize: 'clamp(8rem,16vw,20rem)', fontWeight: 700, color: 'rgba(17,24,39,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>2025</div>

        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>2025 Tournament Sponsors</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,6rem)', alignItems: 'end' }} className="sponsors-hero-grid">
            <div>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,6rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.95, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                These businesses<br />
                <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>chose the fight.</em>
              </h1>
              <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', color: 'var(--ink-mid)', lineHeight: 1.85, maxWidth: '480px' }}>
                Sponsoring NVforHD isn&apos;t advertising. It&apos;s putting your name on something that matters. Every sponsor on this page funded real care for real families living with Huntington&apos;s Disease.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship" style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '1.1rem 2.2rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                Become a 2026 Sponsor →
              </a>
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-dim)' }}>Title · Gold · Lunch · Hole Signs · Custom</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TITLE SPONSOR — Aguirre Riley ── */}
      <section style={{ background: 'var(--cream)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ padding: 'clamp(4rem,7vw,8rem) var(--px)' }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
              <div style={{ background: 'var(--blue)', color: '#fff', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.85rem', fontFamily: 'var(--sans)' }}>🏆 Title Sponsor</div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="sponsor-card-grid">
            <ScrollReveal>
              <div style={{ background: 'var(--white)', padding: 'clamp(3rem,5vw,5rem)', boxShadow: '0 8px 48px rgba(17,24,39,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--blue)' }} />
                <Image src="/images/aguirre-riley.png" alt="Aguirre Riley P.C." width={320} height={130} style={{ width: '100%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3vw,3rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Aguirre Riley, P.C.
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem', fontFamily: 'var(--sans)' }}>
                Estate Planning · Business Law · Tax Law
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.5rem' }}>
                Northern Nevada&apos;s trusted legal partner chose to put their name at the top of this fight. Aguirre Riley understands that protecting families — legally and medically — is the same mission.
              </p>
              <a href="https://www.aguirreriley.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-aguirre" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--sans)', borderBottom: '2px solid var(--blue)', paddingBottom: '2px' }}>
                aguirreriley.com ↗
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PLATINUM — UC Davis (solo full-width) ── */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ padding: 'clamp(4rem,7vw,8rem) var(--px)' }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
              <div style={{ background: 'var(--blue)', color: '#fff', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.85rem', fontFamily: 'var(--sans)' }}>⭐ Platinum — Charity Partner</div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="sponsor-card-grid">
            <ScrollReveal>
              <div style={{ background: 'var(--cream-2)', padding: 'clamp(3rem,5vw,5rem)', boxShadow: '0 8px 48px rgba(17,24,39,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--blue)' }} />
                <Image src="/images/uc-davis.png" alt="UC Davis Health" width={320} height={130} style={{ width: '100%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3vw,3rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                UC Davis Health
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem', fontFamily: 'var(--sans)' }}>
                HD Center of Excellence · 2025 &amp; 2026 Beneficiary
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.5rem' }}>
                The only HD specialty clinic serving Northern Nevada. 90+ families. 2 neurologists, 2 psychiatrists, a genetic counselor, social worker, and physical therapists — all dedicated to HD. Runs on private donation.
              </p>
              <a href="https://health.ucdavis.edu/huntingtons-disease?utm_source=nvforhd" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--sans)', borderBottom: '2px solid var(--blue)', paddingBottom: '2px' }}>
                health.ucdavis.edu ↗
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── GOLD — C-Hawk, Fleet, Home Depot (3-col) ── */}
      <section style={{ background: 'var(--cream)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ padding: 'clamp(4rem,7vw,8rem) var(--px)' }}>
          <ScrollReveal style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ background: 'var(--cream)', border: '1px solid var(--cream-3)', color: 'var(--ink-dim)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.85rem', fontFamily: 'var(--sans)' }}>🥇 Gold Sponsors</div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'clamp(2rem,4vw,4rem)' }} className="dual-sponsor-grid">

            {/* C-Hawk */}
            <ScrollReveal>
              <div style={{ border: '1px solid var(--cream-3)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="sponsor-logo-box" style={{ background: '#1A3A1A', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '180px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gold-light)', zIndex: 1 }} />
                  <Image src="/images/c-hawk.png" alt="C-Hawk Technology" width={400} height={180} style={{ width: '100%', height: '180px', objectFit: 'contain', padding: '2rem' }} />
                </div>
                <div style={{ padding: 'clamp(1.75rem,3vw,2.75rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem,2vw,1.7rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.5rem' }}>C-Hawk Technology</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--sans)' }}>Advanced Manufacturing &amp; Engineering</p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--ink-mid)', flex: 1, marginBottom: '1.5rem' }}>
                    Advanced manufacturing and engineering company proudly supporting NVforHD&apos;s mission to defeat Huntington&apos;s Disease — because fighting for families is everyone&apos;s business.
                  </p>
                  <a href="https://c-hawk.com?utm_source=nvforhd" target="_blank" rel="noopener" style={{ fontSize: '0.68rem', color: 'var(--ink)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--sans)', borderBottom: '1.5px solid var(--ink)', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                    c-hawk.com ↗
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Fleet Heating & Air Conditioning */}
            <ScrollReveal delay={0.1}>
              <div style={{ border: '1px solid var(--cream-3)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="sponsor-logo-box" style={{ background: '#000', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '180px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gold-light)', zIndex: 1 }} />
                  <Image src="/images/fleet-heating-ac.png" alt="Fleet Heating & Air Conditioning" width={400} height={180} style={{ width: '100%', height: '180px', objectFit: 'contain', padding: '1rem' }} />
                </div>
                <div style={{ padding: 'clamp(1.75rem,3vw,2.75rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem,2vw,1.7rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.5rem' }}>Fleet Heating &amp; Air Conditioning</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--sans)' }}>Gold Sponsor</p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--ink-mid)', flex: 1, marginBottom: '1.5rem' }}>
                    Keeping Northern Nevada comfortable — and proudly helping NVforHD keep the fight against Huntington&apos;s Disease alive.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* The Home Depot */}
            <ScrollReveal delay={0.2}>
              <div style={{ border: '1px solid var(--cream-3)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="sponsor-logo-box" style={{ background: '#F96302', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '180px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gold-light)', zIndex: 1 }} />
                  <Image src="/images/home-depot.svg" alt="The Home Depot" width={400} height={180} style={{ width: '100%', height: '180px', objectFit: 'contain', padding: '2rem' }} />
                </div>
                <div style={{ padding: 'clamp(1.75rem,3vw,2.75rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem,2vw,1.7rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.5rem' }}>The Home Depot</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--sans)' }}>Gold Sponsor</p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--ink-mid)', flex: 1, marginBottom: '1.5rem' }}>
                    Proud supporter of NVforHD and the fight against Huntington&apos;s Disease.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOLE & EVENT SPONSORS — cream, human ── */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="inner" style={{ padding: 'clamp(4rem,7vw,7rem) var(--px)' }}>
          <ScrollReveal style={{ marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>⛳ Hole &amp; Event Sponsors</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-mid)', maxWidth: '560px', lineHeight: 1.8 }}>
              Every hole sign on the course carries a name. These businesses and individuals made sure theirs stood for something real — every golfer who walked that hole knew someone chose to fight HD.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Matt & Kari Woodhead', role: 'Lunch Sponsor', url: null, note: 'Fuelled the whole day.' },
              { name: 'Pace Supply Corp', role: 'Hole Sponsor', url: 'https://www.pacesupply.com?utm_source=nvforhd', note: 'Building Northern Nevada.' },
              { name: 'Blue Reef Enterprises', role: 'Hole Sponsor · Builders', url: null, note: 'Building more than homes.' },
              { name: 'Washoe Wealth Advisors', role: 'Hole Sponsor', url: null, note: 'Protecting what matters.' },
              { name: 'Golf The High Sierra', role: 'Event Partner', url: 'https://www.golfthehighsierra.com?utm_source=nvforhd', note: 'Makes the tournament possible.' },
              { name: 'Flowing Tide Pub', role: 'Hole Sponsor', url: 'https://flowingtidepub.com?utm_source=nvforhd', note: 'Community in every pint.' },
              { name: 'Rebuilding Together NV', role: 'Event Partner', url: 'https://rebuildingtogethernnv.org?utm_source=nvforhd', note: 'Stronger communities together.' },
            ].map(({ name, role, url, note }) => {
              const inner = (
                <div style={{ background: 'var(--white)', border: '1px solid var(--cream-3)', borderLeft: `3px solid ${url ? 'var(--blue)' : 'var(--cream-3)'}`, padding: '1.5rem 1.75rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.4rem', transition: 'box-shadow 0.2s, transform 0.2s' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.25 }}>{name}</div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, fontFamily: 'var(--sans)' }}>{role}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--ink-dim)', fontStyle: 'italic', marginTop: '0.2rem' }}>{note}</div>
                  {url && <div style={{ marginTop: 'auto', paddingTop: '0.75rem', fontSize: '0.62rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--sans)' }}>Visit ↗</div>}
                </div>
              )
              return url ? (
                <a key={name} href={url} target="_blank" rel="noopener" style={{ textDecoration: 'none', display: 'block' }}>{inner}</a>
              ) : <div key={name}>{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ── BECOME 2026 SPONSOR — white, bold ask ── */}
      <section style={{ background: 'var(--white)', borderTop: '3px solid var(--blue)' }}>
        <div className="inner" style={{ padding: 'clamp(4rem,7vw,8rem) var(--px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="sponsor-cta-grid">
            <ScrollReveal>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,4.5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                Put your name on<br />
                <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>the fight that matters.</em>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '440px' }}>
                Sponsoring NVforHD means your logo on the course, your brand in the fight, and your business associated with something genuinely good. 100% of proceeds fund HD families directly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { tier: '🏆 Title Sponsor', price: '$3,500', what: '4 golfers · lunch · logo on all materials' },
                  { tier: '🥇 Gold Sponsor', price: '$3,000', what: '4 golfers · lunch · logo at events' },
                  { tier: '🍽 Lunch Sponsor', price: '$3,000', what: '4 golfers included · lunch credit' },
                  { tier: '📍 Hole Sign', price: '$100+', what: 'Your name on the course' },
                ].map(({ tier, price, what }) => (
                  <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '0.75rem 0', borderBottom: '1px solid var(--cream-3)' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--blue)', minWidth: '64px' }}>{price}</div>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--sans)' }}>{tier}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)' }}>{what}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div style={{ background: 'linear-gradient(135deg, #071525 0%, #0D2040 50%, #0A1E3D 100%)', padding: 'clamp(2.5rem,4vw,4rem)', borderTop: '3px solid #F59E0B', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 300, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  Spots for 2026 are limited.<br />
                  <em style={{ color: 'rgba(255,255,255,0.90)' }}>Title and Gold go first.</em>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Email Sean directly or call. He&apos;ll walk you through the options and make it easy.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry" style={{ display: 'block', textAlign: 'center', background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', color: '#fff', padding: '1.15rem', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)', boxShadow: '0 4px 20px rgba(59,130,246,0.45)' }}>
                    Email About Sponsorship →
                  </a>
                  <a href="tel:7756918860" style={{ display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.70)', padding: '1.1rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                    📞 Call Sean: 775-691-8860
                  </a>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.68rem', color: 'rgba(255,255,255,0.90)' }}>
                  Or <a href={BOOK} target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>register to play golf May 29 ↗</a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(2.5rem,4vw,4rem) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
          { href: '/causes', title: 'Our Charity Causes', desc: "100% of sponsorship goes directly to HD families." },
          { href: '/gallery', title: '2024 Event Gallery', desc: "See what your sponsorship makes possible." },
          { href: '/contact', title: 'Enquire Now', desc: "Talk to Sean directly about 2026 sponsorship packages." },
          ].map(({ href, title, desc }) => (
            <a key={href} href={href} style={{ display: 'block', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--cream-3)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 500, color: 'var(--blue)', marginBottom: '0.4rem' }}>{title} →</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6 }}>{desc}</div>
            </a>
          ))}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .sponsors-hero-grid  { grid-template-columns: 1fr !important; }
          .sponsor-card-grid   { grid-template-columns: 1fr !important; }
          .dual-sponsor-grid   { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .sponsor-cta-grid    { grid-template-columns: 1fr !important; }
          .sponsor-logo-box    { min-height: 140px !important; padding: 2rem !important; }
          .sponsor-logo-box img { max-width: 220px !important; }
        }
      ` }} />
    </>
  )
}
