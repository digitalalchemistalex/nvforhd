import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | NVforHD — Huntington\'s Disease Charity Golf',
  description: 'Get in touch with NVforHD. Register to play golf May 29 2026, donate to UC Davis HD care, sponsor the tournament, volunteer, or reach out as an HD family.',
  openGraph: {
    title: 'Contact NVforHD',
    description: 'Play golf, donate, sponsor, volunteer, or connect as an HD family.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nvforhd.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
