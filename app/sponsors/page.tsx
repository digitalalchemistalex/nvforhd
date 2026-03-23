import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SponsorsSection from '@/components/SponsorsSection'

export const metadata: Metadata = {
  title: '2025 Sponsors | NVforHD',
  description: 'NVforHD 2025 sponsors: Aguirre Riley (Title), UC Davis Health (Platinum), C-Hawk (Gold), and hole sponsors. Become a 2026 sponsor.',
}

export default function SponsorsPage() {
  return (
    <>
      <Nav />
      <PageHero
        kicker="2025 Sponsors"
        headline={<>Those who made<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.35)' }}>it possible.</em></>}
        sub="Every sponsor on this page directly funded the fight against Huntington's Disease in 2025. Join them for 2026."
        photo="/images/event-booth.jpg"
        photoPosition="center 40%"
      />
      {/* Reuse the full SponsorsSection component — no redundant markup */}
      <SponsorsSection />
      <Footer />
    </>
  )
}
