import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// ─── Shared styles ────────────────────────────────────────────────────────────
const BLUE   = '#2B5BE0'
const NAVY   = '#0D1B3E'
const CREAM  = '#F9F8F6'
const INK    = '#1a1a2e'
const DIMMED = '#6B7280'

const base = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:${CREAM};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:${NAVY};padding:32px 40px;border-radius:4px 4px 0 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:600;margin-bottom:6px;">Nevada for HD</div>
                  <div style="font-size:26px;font-weight:300;color:#fff;letter-spacing:-0.5px;">NVforHD</div>
                </td>
                <td align="right">
                  <div style="width:40px;height:40px;background:${BLUE};border-radius:50%;display:inline-block;line-height:40px;text-align:center;font-size:18px;">💙</div>
                </td>
              </tr>
            </table>
            <div style="height:3px;background:${BLUE};margin-top:20px;border-radius:2px;"></div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#fff;padding:40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            ${content}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:${NAVY};padding:24px 40px;border-radius:0 0 4px 4px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.7;">
                  NVforHD · Nevada Non-Profit · Cure Huntington's Disease<br />
                  2600 Mill St. #400, Reno, NV 89502 · <a href="tel:7756918860" style="color:rgba(255,255,255,0.5);text-decoration:none;">775-691-8860</a> · <a href="mailto:info@nvforhd.com" style="color:rgba(255,255,255,0.5);text-decoration:none;">info@nvforhd.com</a>
                </td>
                <td align="right">
                  <a href="https://nvforhd.com" style="font-size:11px;color:${BLUE};text-decoration:none;letter-spacing:1px;text-transform:uppercase;font-weight:600;">nvforhd.com</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

// ─── Admin notification email ──────────────────────────────────────────────────
function adminHtml(subject: string, body: string, replyTo: string, name: string) {
  const rows = body.split('\n').filter(Boolean).map(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx > 0 && colonIdx < 30 && !line.startsWith(' ')) {
      const key = line.slice(0, colonIdx).trim()
      const val = line.slice(colonIdx + 1).trim()
      return `
        <tr>
          <td style="padding:8px 12px;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:600;color:${DIMMED};vertical-align:top;white-space:nowrap;width:140px;">${key}</td>
          <td style="padding:8px 12px;font-size:14px;color:${INK};line-height:1.6;">${val}</td>
        </tr>`
    }
    return `<tr><td colspan="2" style="padding:4px 12px;font-size:14px;color:${INK};line-height:1.6;">${line}</td></tr>`
  }).join('')

  return base(`
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BLUE};font-weight:600;margin-bottom:8px;">New Message</div>
    <div style="font-size:22px;font-weight:300;color:${INK};margin-bottom:4px;letter-spacing:-0.3px;">${subject.replace('[NVforHD] ', '')}</div>
    <div style="font-size:13px;color:${DIMMED};margin-bottom:32px;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;margin-bottom:32px;">
      <thead>
        <tr style="background:${CREAM};">
          <td colspan="2" style="padding:10px 12px;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;color:${DIMMED};border-bottom:1px solid #e5e7eb;">Submission Details</td>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <a href="mailto:${replyTo}?subject=Re: ${encodeURIComponent(subject)}"
            style="display:inline-block;background:${BLUE};color:#fff;padding:14px 28px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;text-decoration:none;border-radius:2px;">
            Reply to ${name} →
          </a>
        </td>
      </tr>
    </table>
  `)
}

// ─── Client confirmation email ─────────────────────────────────────────────────
function clientHtml(name: string, intentTitle: string) {
  const firstName = name.split(' ')[0]

  const intentMessages: Record<string, { headline: string; body: string; cta: string; ctaHref: string }> = {
    'I want to play golf': {
      headline: 'You\'re on the list.',
      body: `Sean will be in touch within 24 hours to confirm your spot for May 29 at Gray's Crossing, Truckee. The 2024 tournament sold out — you're smart to move early.`,
      cta: 'Book directly now →',
      ctaHref: 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament',
    },
    'I want to donate': {
      headline: 'Thank you.',
      body: `Your generosity goes directly to the UC Davis HD Center of Excellence — specialist care for 90+ Northern Nevada families living with Huntington's Disease. Sean will reach out personally.`,
      cta: 'Donate directly →',
      ctaHref: 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament',
    },
    'I want to sponsor': {
      headline: 'We\'d love to have you.',
      body: `Sponsoring NVforHD puts your brand alongside something genuinely meaningful. Sean will be in touch within 24 hours to walk you through the options and find the right fit.`,
      cta: 'Learn about the event →',
      ctaHref: 'https://nvforhd.com/sponsors',
    },
    'I want to volunteer': {
      headline: 'You\'re in.',
      body: `Tournament day is May 29 at Gray's Crossing, Truckee. Sean will confirm your role and send you everything you need to know closer to the date. No experience required — just your willingness.`,
      cta: 'Learn about the cause →',
      ctaHref: 'https://nvforhd.com/causes',
    },
    'My family has HD': {
      headline: 'You\'re not alone.',
      body: `We are an HD family too — Sean's wife Christine was diagnosed with HD, and this organisation was built from that moment. We will respond to you personally. Not with a template. Not with a form letter.`,
      cta: 'UC Davis HD Center of Excellence →',
      ctaHref: 'https://health.ucdavis.edu/huntingtons-disease',
    },
    'Media / Press': {
      headline: 'Thanks for reaching out.',
      body: `HD is an underreported disease and we welcome every opportunity to raise awareness. Sean is available for interviews and we have photography, event footage, and the Puccini family story available on request. We\'ll be in touch shortly.`,
      cta: 'Visit nvforhd.com →',
      ctaHref: 'https://nvforhd.com',
    },
  }

  const msg = intentMessages[intentTitle] || {
    headline: 'Message received.',
    body: `Sean reads every message personally and will be in touch within 24 hours.`,
    cta: 'Visit nvforhd.com →',
    ctaHref: 'https://nvforhd.com',
  }

  return base(`
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BLUE};font-weight:600;margin-bottom:8px;">Message received</div>
    <div style="font-size:26px;font-weight:300;color:${INK};margin-bottom:24px;letter-spacing:-0.3px;">Hi ${firstName},<br /><em style="font-style:italic;color:${DIMMED}">${msg.headline}</em></div>

    <p style="font-size:15px;line-height:1.9;color:#374151;margin:0 0 32px 0;border-left:3px solid ${BLUE};padding-left:16px;">${msg.body}</p>

    <div style="background:${CREAM};border:1px solid #e5e7eb;padding:20px 24px;border-radius:4px;margin-bottom:32px;">
      <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;color:${DIMMED};margin-bottom:10px;">Get in touch directly</div>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:4px 0;font-size:13px;color:${INK};">📞&nbsp;</td>
          <td style="padding:4px 0;"><a href="tel:7756918860" style="font-size:13px;color:${BLUE};text-decoration:none;font-weight:600;">775-691-8860</a> <span style="color:${DIMMED};font-size:12px;">— Call Sean directly</span></td>
        </tr>
        <tr>
          <td style="padding:4px 0;font-size:13px;color:${INK};">✉&nbsp;</td>
          <td style="padding:4px 0;"><a href="mailto:info@nvforhd.com" style="font-size:13px;color:${BLUE};text-decoration:none;font-weight:600;">info@nvforhd.com</a></td>
        </tr>
      </table>
    </div>

    <a href="${msg.ctaHref}" style="display:inline-block;background:${BLUE};color:#fff;padding:14px 28px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;text-decoration:none;border-radius:2px;">
      ${msg.cta}
    </a>

    <p style="font-size:12px;color:${DIMMED};margin-top:32px;line-height:1.7;">
      You received this because you submitted a message on nvforhd.com.<br />
      Annual charity golf tournament · May 29, 2026 · Gray's Crossing, Truckee CA
    </p>
  `)
}

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { subject, body, replyTo, name, intentTitle } = await req.json()

    if (!subject || !body || !replyTo || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Send both emails in parallel
    await Promise.all([
      // 1. Admin notification → info@nvforhd.com
      transporter.sendMail({
        from: `"NVforHD Website" <${process.env.GMAIL_USER}>`,
        to: 'info@nvforhd.com',
        replyTo: `"${name}" <${replyTo}>`,
        subject,
        text: body,
        html: adminHtml(subject, body, replyTo, name),
      }),
      // 2. Client confirmation → submitter
      transporter.sendMail({
        from: `"Sean Schaeffer · NVforHD" <${process.env.GMAIL_USER}>`,
        to: replyTo,
        subject: `We got your message — NVforHD`,
        html: clientHtml(name, intentTitle || ''),
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
