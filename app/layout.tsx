import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'NVforHD — Let\'s Cure Huntington\'s Disease',
    template: '%s | NVforHD — Cure Huntington\'s Disease',
  },
  description: 'NVforHD is a Nevada non-profit raising awareness and funds to battle Huntington\'s Disease through an annual golf tournament. Donate or play — May 29, 2026 at Gray\'s Crossing, Truckee CA.',
  metadataBase: new URL('https://nvforhd.com'),
  openGraph: {
    siteName: 'NVforHD',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'NVforHD',
  alternateName: 'Nevada for HD',
  url: 'https://nvforhd.com',
  logo: 'https://nvforhd.com/images/logo.png',
  description: 'Nevada non-profit raising awareness and funds to battle Huntington\'s Disease.',
  telephone: '+17756918860',
  email: 'info@nvforhd.com',
  foundingDate: '2024',
  areaServed: 'Nevada',
  sameAs: ['http://www.helpcurehd.com'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3KT4C16M4V" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-3KT4C16M4V');`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
