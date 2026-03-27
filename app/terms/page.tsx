import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | NVforHD',
  description: 'NVforHD Terms & Conditions. Governing law, cancellation policy, privacy, and contact information.',
  alternates: { canonical: 'https://www.nvforhd.com/terms' },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  const prose: React.CSSProperties = { fontSize: '0.92rem', lineHeight: 1.9, color: 'rgba(245,242,234,0.68)', fontWeight: 300, marginBottom: '1.5rem' }
  const h3: React.CSSProperties = { fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: '#fff', marginBottom: '0.75rem', marginTop: '2.5rem' }

  return (
    <>
      <Nav />
      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>Legal</div>
          <h1 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5rem)' }}>Terms &amp; Conditions</h1>
          <p style={{ ...prose, marginTop: '1.5rem', color: 'rgba(245,242,234,0.45)', fontSize: '0.82rem' }}>Effective January 01, 2024</p>
        </div>
      </div>

      <section style={{ background: 'var(--void)', padding: '6rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={prose}>Welcome to www.nvforhd.com. This website is operated by NV for HD ("NV for HD"). Your use of the site constitutes agreement to all terms below. www.nvforhd.com is a Non-Profit Site raising funds for Huntington&apos;s Disease Awareness and Treatment.</p>

          <h3 style={h3}>Privacy</h3>
          <p style={prose}>Your use of www.nvforhd.com is subject to NV for HD&apos;s Privacy Policy, which governs the site and informs users of our data collection practices.</p>

          <h3 style={h3}>Electronic Communications</h3>
          <p style={prose}>Visiting www.nvforhd.com or sending emails to NV for HD constitutes electronic communications. You consent to receive electronic communications and agree that all agreements, notices, and other communications provided electronically satisfy any legal requirement that such communications be in writing.</p>

          <h3 style={h3}>Children Under Thirteen</h3>
          <p style={prose}>NV for HD does not knowingly collect personal information from persons under the age of thirteen. If you are under 18, you may use www.nvforhd.com only with permission of a parent or guardian.</p>

          <h3 style={h3}>Cancellation/Refund Policy</h3>
          <p style={prose}>NV for HD provides a 72-hour cancellation policy for all services, except large group outings defined by individual contract. Golf Events are refundable 14 days prior to the event date unless otherwise posted on the registration site. All customers review and agree to cancellation policies inside each event registration portal.</p>

          <h3 style={h3}>Links to Third Party Sites</h3>
          <p style={prose}>www.nvforhd.com may contain links to other websites. Linked Sites are not under the control of NV for HD and NV for HD is not responsible for their contents. These links are provided for convenience only and do not imply endorsement.</p>

          <h3 style={h3}>Intellectual Property</h3>
          <p style={prose}>All content on the Site is the property of NV for HD or its suppliers and protected by copyright and other laws. You may not modify, publish, transmit, or exploit any content found on the Site without express written permission.</p>

          <h3 style={h3}>Liability Disclaimer</h3>
          <p style={{ ...prose, textTransform: 'uppercase', fontSize: '0.82rem' }}>The information, software, products, and services included in or available through the site may include inaccuracies or typographical errors. NV for HD and/or its suppliers make no representations about the suitability, reliability, availability, timeliness, and accuracy of the information on the site. All such information is provided "as is" without warranty of any kind.</p>

          <h3 style={h3}>Arbitration</h3>
          <p style={prose}>Any dispute arising out of these Terms shall be resolved by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator administered by the American Arbitration Association. The arbitrator&apos;s award shall be final and judgment may be entered upon it in any court having jurisdiction.</p>

          <h3 style={h3}>Governing Law</h3>
          <p style={prose}>This agreement is governed by the laws of the State of Nevada. You consent to the exclusive jurisdiction and venue of courts in Nevada in all disputes arising out of or relating to use of the Site.</p>

          <h3 style={h3}>Contact</h3>
          <p style={prose}>
            NV for HD<br />
            2600 Mill St. #400<br />
            Reno, Nevada 89502<br />
            <a href="mailto:info@nvforhd.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>info@nvforhd.com</a><br />
            <a href="tel:7756918860" style={{ color: 'var(--gold)', textDecoration: 'none' }}>775-691-8860</a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
