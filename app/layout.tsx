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
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="dzMmgHd7knYIS59vlZo5Nz23g1-IdTioOAfHhI0LfFU" />
        {/* Font preconnect — must come before stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Font stylesheet — display=swap prevents FOIT, non-render-blocking */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload LCP hero image — desktop and mobile */}
        <link rel="preload" as="image" href="/images/hero-couple.jpg" fetchPriority="high" />
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
