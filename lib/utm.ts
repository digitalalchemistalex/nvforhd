// UTM tracking for all outgoing links
// Usage: import { utm, BOOK } from '@/lib/utm'
//        <a href={utm(BOOK, 'hero', 'donate-100')}>

const BASE = 'https://www.tripsee.travel/merchant/book/index.html'

export const BOOK = `${BASE}?ref=2026NVforHDGolfTournament`

export function utm(
  url: string,
  content: string,
  term?: string
): string {
  const u = new URL(url)
  u.searchParams.set('utm_source', 'nvforhd')
  u.searchParams.set('utm_medium', 'website')
  u.searchParams.set('utm_campaign', '2026tournament')
  u.searchParams.set('utm_content', content)
  if (term) u.searchParams.set('utm_term', term)
  return u.toString()
}

// Pre-built UTM links for every outgoing destination
export const LINKS = {
  // TripSee booking
  bookGolf:        utm(BOOK, 'nav', 'play-golf'),
  bookHero:        utm(BOOK, 'hero', 'play-golf'),
  bookPackages:    utm(BOOK, 'packages', 'golf'),
  bookFooter:      utm(BOOK, 'footer', 'play-golf'),
  donate100:       utm(BOOK, 'hero', 'donate-100'),
  donate220:       utm(BOOK, 'hero', 'single-golfer'),
  donateFooter:    utm(BOOK, 'footer', 'donate'),
  donateLetter:    utm(BOOK, 'letter', 'donate'),
  donateCause:     utm(BOOK, 'cause', 'donate'),
  donatePackages:  utm(BOOK, 'packages', 'donate'),
  // Charities
  helpCureHD:      utm('http://www.helpcurehd.com', 'causes', 'helpcurehd'),
  ucDavis:         utm('https://health.ucdavis.edu', 'causes', 'uc-davis'),
  // Sponsors
  aguirreRiley:    utm('https://www.aguirreriley.com', 'sponsors', 'aguirre-riley'),
  ucDavisSponsor:  utm('https://health.ucdavis.edu', 'sponsors', 'uc-davis'),
  cHawk:           utm('https://c-hawk.com', 'sponsors', 'c-hawk'),
  rtnnv:           utm('https://rebuildingtogethernnv.org', 'sponsors', 'rtnnv'),
  gths:            utm('https://www.golfthehighsierra.com', 'sponsors', 'gths'),
}
