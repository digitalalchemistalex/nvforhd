import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact NVforHD | Play, Donate, Sponsor or Volunteer",
  description: "Get in touch with NVforHD. Register for the May 29 golf tournament, make a donation to HD research, become a sponsor, or volunteer. We respond within 24 hours.",
  openGraph: {
    title: 'Contact NVforHD | Play, Donate, Sponsor or Volunteer',
    description: 'Play golf, donate, sponsor, volunteer, or connect as an HD family.',
    images: [{ url: '/images/event-crowd.jpg', width: 1200, height: 630, alt: 'Contact NVforHD' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact NVforHD',
    description: 'Play golf, donate, sponsor, volunteer, or connect as an HD family.',
    images: ['/images/event-crowd.jpg'],
  },
  alternates: { canonical: 'https://www.nvforhd.com/contact' },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact NVforHD',
  url: 'https://www.nvforhd.com/contact',
  description: 'Contact NVforHD to play golf, donate, sponsor, volunteer, or reach out as an HD family.',
  mainEntity: {
    '@type': 'Organization',
    name: 'NVforHD',
    telephone: '+17756918860',
    email: 'info@nvforhd.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2600 Mill St. #400',
      addressLocality: 'Reno',
      addressRegion: 'NV',
      postalCode: '89502',
      addressCountry: 'US',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nvforhd.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.nvforhd.com/contact' },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
