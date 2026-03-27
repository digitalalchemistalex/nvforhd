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

// ─── Rate limiting — max 3 submissions per IP per hour ────────────────────────
const rateMap = new Map<string, { count: number; reset: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 60 * 60 * 1000 })
    return true
  }
  if (entry.count >= 3) return false
  entry.count++
  return true
}

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
            <img src="data:image/png;base64,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" alt="NVforHD" width="120" height="auto" style="display:block;border:0;" />
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
    // Rate limit by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const { subject, body, replyTo, name, intentTitle } = await req.json()

    if (!subject || !body || !replyTo || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Basic input validation
    if (name.length > 200 || replyTo.length > 200 || body.length > 5000) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
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
