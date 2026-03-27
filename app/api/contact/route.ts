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
const WHITE_DIM  = '#8899BB'  // replaces rgba(255,255,255,0.45)
const WHITE_FAINT = '#4A5E80' // replaces rgba(255,255,255,0.35)

const base = (content: string) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background-color:${CREAM};font-family:Helvetica Neue,Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="${CREAM}" style="background-color:${CREAM};">
<tr><td align="center" style="padding:40px 20px;">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr>
    <td bgcolor="${NAVY}" style="background-color:${NAVY};padding:32px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align:middle;">
            <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${WHITE_DIM};font-weight:600;">Nevada for HD</p>
            <p style="margin:0;font-size:28px;font-weight:300;color:#ffffff;letter-spacing:-0.5px;font-family:Georgia,serif;">NVforHD</p>
          </td>
          <td align="right" style="vertical-align:middle;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td bgcolor="${BLUE}" style="background-color:${BLUE};width:42px;height:42px;text-align:center;vertical-align:middle;">
                  <span style="font-size:20px;line-height:42px;display:block;">&#128153;</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- Blue accent bar -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
        <tr><td bgcolor="${BLUE}" style="background-color:${BLUE};height:3px;font-size:1px;line-height:1px;">&nbsp;</td></tr>
      </table>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td bgcolor="#ffffff" style="background-color:#ffffff;padding:40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
      ${content}
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td bgcolor="${NAVY}" style="background-color:${NAVY};padding:24px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-size:11px;color:${WHITE_FAINT};line-height:1.8;">
            NVforHD &middot; Nevada Non-Profit &middot; Cure Huntington&apos;s Disease<br />
            2600 Mill St. #400, Reno, NV 89502<br />
            <a href="tel:7756918860" style="color:${WHITE_DIM};text-decoration:none;">775-691-8860</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:info@nvforhd.com" style="color:${WHITE_DIM};text-decoration:none;">info@nvforhd.com</a>
          </td>
          <td align="right" style="vertical-align:bottom;">
            <a href="https://nvforhd.com" style="font-size:11px;color:${BLUE};text-decoration:none;font-weight:700;letter-spacing:1px;text-transform:uppercase;">nvforhd.com</a>
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
      return `<tr>
        <td style="padding:8px 12px;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:600;color:${DIMMED};vertical-align:top;white-space:nowrap;width:140px;border-bottom:1px solid #f3f4f6;">${key}</td>
        <td style="padding:8px 12px;font-size:14px;color:${INK};line-height:1.6;border-bottom:1px solid #f3f4f6;">${val}</td>
      </tr>`
    }
    return `<tr><td colspan="2" style="padding:4px 12px;font-size:14px;color:${INK};line-height:1.6;">${line}</td></tr>`
  }).join('')

  return base(`
    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BLUE};font-weight:600;">New Message</p>
    <p style="margin:0 0 4px 0;font-size:22px;font-weight:300;color:${INK};letter-spacing:-0.3px;">${subject.replace('[NVforHD] ', '')}</p>
    <p style="margin:0 0 32px 0;font-size:13px;color:${DIMMED};">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;margin-bottom:32px;">
      <tr bgcolor="${CREAM}" style="background-color:${CREAM};">
        <td colspan="2" style="padding:10px 12px;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;color:${DIMMED};border-bottom:1px solid #e5e7eb;">Submission Details</td>
      </tr>
      ${rows}
    </table>

    <table cellpadding="0" cellspacing="0">
      <tr>
        <td bgcolor="${BLUE}" style="background-color:${BLUE};">
          <a href="mailto:${replyTo}?subject=Re: ${encodeURIComponent(subject)}"
            style="display:inline-block;padding:14px 28px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;text-decoration:none;color:#ffffff;font-family:Helvetica,Arial,sans-serif;">
            Reply to ${name} &rarr;
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

  const msg = intentMessages[intentTitle] || intentMessages[intentTitle.replace('I want to ', '')] || {
    headline: 'Message received.',
    body: `Sean reads every message personally and will be in touch within 24 hours.`,
    cta: 'Visit nvforhd.com →',
    ctaHref: 'https://nvforhd.com',
  }

  return base(`
    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BLUE};font-weight:600;">Message received</p>
    <p style="margin:0 0 24px 0;font-size:24px;font-weight:300;color:${INK};letter-spacing:-0.3px;line-height:1.3;">Hi ${firstName},<br /><em style="font-style:italic;color:${DIMMED};">${msg.headline}</em></p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="border-left:3px solid ${BLUE};padding:4px 0 4px 16px;">
          <p style="margin:0;font-size:15px;line-height:1.9;color:#374151;">${msg.body}</p>
        </td>
      </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td bgcolor="${CREAM}" style="background-color:${CREAM};padding:20px 24px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 10px 0;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;color:${DIMMED};">Get in touch directly</p>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:4px 0;font-size:13px;color:${INK};">&#128222;&nbsp;</td>
              <td style="padding:4px 0;"><a href="tel:7756918860" style="font-size:13px;color:${BLUE};text-decoration:none;font-weight:600;">775-691-8860</a> <span style="color:${DIMMED};font-size:12px;">&mdash; Call Sean directly</span></td>
            </tr>
            <tr>
              <td style="padding:4px 0;font-size:13px;color:${INK};">&#9993;&nbsp;</td>
              <td style="padding:4px 0;"><a href="mailto:info@nvforhd.com" style="font-size:13px;color:${BLUE};text-decoration:none;font-weight:600;">info@nvforhd.com</a></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table cellpadding="0" cellspacing="0">
      <tr>
        <td bgcolor="${BLUE}" style="background-color:${BLUE};">
          <a href="${msg.ctaHref}" style="display:inline-block;padding:14px 28px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;text-decoration:none;color:#ffffff;font-family:Helvetica,Arial,sans-serif;">
            ${msg.cta}
          </a>
        </td>
      </tr>
    </table>

    <p style="font-size:12px;color:${DIMMED};margin-top:32px;line-height:1.7;">
      You received this because you submitted a message on nvforhd.com.<br />
      Annual charity golf tournament &middot; May 29, 2026 &middot; Gray&apos;s Crossing, Truckee CA
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

    const isTest = process.env.NODE_ENV !== 'production' || process.env.TEST_MODE === 'true'

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
        ...(isTest && { bcc: 'ifyougetlockedout@protonmail.com' }),
      }),
      // 2. Client confirmation → submitter
      transporter.sendMail({
        from: `"Sean Schaeffer · NVforHD" <${process.env.GMAIL_USER}>`,
        to: replyTo,
        subject: `We got your message — NVforHD`,
        html: clientHtml(name, intentTitle || ''),
        ...(isTest && { bcc: 'ifyougetlockedout@protonmail.com' }),
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
