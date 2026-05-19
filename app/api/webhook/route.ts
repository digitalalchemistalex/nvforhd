import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'


// ─── Shared email styles (matches contact form branding) ─────────────────────
const BLUE        = '#2B5BE0'
const NAVY        = '#0D1B3E'
const CREAM       = '#F9F8F6'
const INK         = '#1a1a2e'
const DIMMED      = '#6B7280'
const WHITE_DIM   = '#8899BB'
const WHITE_FAINT = '#4A5E80'


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
            <p style="margin:0;font-size:20px;color:#ffffff;font-weight:700;font-family:Georgia,serif;letter-spacing:-0.02em;">NVforHD</p>
            <p style="margin:4px 0 0;font-size:10px;color:${WHITE_FAINT};font-family:Helvetica,Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;">Nevada&rsquo;s fight against Huntington&rsquo;s Disease</p>
          </td>
          <td align="right" style="vertical-align:middle;">
            <div style="background:${BLUE};padding:6px 14px;">
              <p style="margin:0;font-size:9px;color:#fff;font-family:Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Payment Confirmed</p>
            </div>
          </td>
        </tr>
      </table>
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

// ─── Admin email to Sean ──────────────────────────────────────────────────────
function adminEmail(session: Stripe.Checkout.Session) {
  const name    = session.customer_details?.name || 'Guest'
  const email   = session.customer_details?.email || '—'
  const amount  = `$${((session.amount_total || 0) / 100).toFixed(2)}`
  const date    = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })

  return base(`
    <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BLUE};font-weight:600;">New Payment</p>
    <p style="margin:0 0 28px;font-size:22px;font-weight:300;color:${INK};letter-spacing:-0.3px;">${amount} received</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;margin-bottom:32px;">
      <tr bgcolor="${CREAM}" style="background-color:${CREAM};">
        <td colspan="2" style="padding:10px 12px;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;color:${DIMMED};border-bottom:1px solid #e5e7eb;">Payment Details</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;font-size:11px;text-transform:uppercase;color:${DIMMED};border-bottom:1px solid #f3f4f6;width:140px;">Customer</td>
        <td style="padding:10px 12px;font-size:14px;color:${INK};border-bottom:1px solid #f3f4f6;">${name}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;font-size:11px;text-transform:uppercase;color:${DIMMED};border-bottom:1px solid #f3f4f6;">Email</td>
        <td style="padding:10px 12px;font-size:14px;color:${INK};border-bottom:1px solid #f3f4f6;"><a href="mailto:${email}" style="color:${BLUE};text-decoration:none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 12px;font-size:11px;text-transform:uppercase;color:${DIMMED};border-bottom:1px solid #f3f4f6;">Amount</td>
        <td style="padding:10px 12px;font-size:14px;color:${INK};font-weight:700;border-bottom:1px solid #f3f4f6;">${amount}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;font-size:11px;text-transform:uppercase;color:${DIMMED};border-bottom:1px solid #f3f4f6;">Time</td>
        <td style="padding:10px 12px;font-size:14px;color:${INK};border-bottom:1px solid #f3f4f6;">${date}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;font-size:11px;text-transform:uppercase;color:${DIMMED};">Session ID</td>
        <td style="padding:10px 12px;font-size:11px;color:${DIMMED};font-family:monospace;">${session.id}</td>
      </tr>
    </table>

    <table cellpadding="0" cellspacing="0">
      <tr>
        <td bgcolor="${BLUE}" style="background-color:${BLUE};">
          <a href="https://dashboard.stripe.com/payments"
            style="display:inline-block;padding:14px 28px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;text-decoration:none;color:#ffffff;font-family:Helvetica,Arial,sans-serif;">
            View in Stripe Dashboard &rarr;
          </a>
        </td>
      </tr>
    </table>
  `)
}

// ─── Customer confirmation email ─────────────────────────────────────────────
function customerEmail(session: Stripe.Checkout.Session) {
  const name   = session.customer_details?.name?.split(' ')[0] || 'there'
  const amount = `$${((session.amount_total || 0) / 100).toFixed(2)}`

  return base(`
    <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BLUE};font-weight:600;">Payment Confirmed</p>
    <p style="margin:0 0 24px;font-size:24px;font-weight:300;color:${INK};letter-spacing:-0.3px;line-height:1.3;">
      Thank you, ${name}.<br />
      <em style="font-style:italic;color:${DIMMED};">You&rsquo;re supporting real families.</em>
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="border-left:3px solid ${BLUE};padding:4px 0 4px 16px;">
          <p style="margin:0;font-size:15px;line-height:1.9;color:#374151;">
            Your ${amount} payment goes directly to the <strong>UC Davis Huntington&rsquo;s Disease Center of Excellence</strong> — specialist care for 90+ Northern Nevada families living with HD.
          </p>
        </td>
      </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td bgcolor="${CREAM}" style="background-color:${CREAM};padding:20px 24px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 12px;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;color:${DIMMED};">Event Details</p>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:4px 0;font-size:13px;color:${INK};">📅&nbsp;</td>
              <td style="padding:4px 0;font-size:13px;color:${INK};">Friday, May 29, 2026</td>
            </tr>
            <tr>
              <td style="padding:4px 0;font-size:13px;color:${INK};">📍&nbsp;</td>
              <td style="padding:4px 0;font-size:13px;color:${INK};">Gray&apos;s Crossing Golf Club, Truckee CA</td>
            </tr>
            <tr>
              <td style="padding:4px 0;font-size:13px;color:${INK};">⏰&nbsp;</td>
              <td style="padding:4px 0;font-size:13px;color:${INK};">12:00 PM Shotgun Start</td>
            </tr>
            <tr>
              <td style="padding:4px 0;font-size:13px;color:${INK};">📞&nbsp;</td>
              <td style="padding:4px 0;">
                <a href="tel:7756918860" style="font-size:13px;color:${BLUE};text-decoration:none;font-weight:600;">775-691-8860</a>
                <span style="color:${DIMMED};font-size:12px;"> &mdash; Call Sean with questions</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table cellpadding="0" cellspacing="0">
      <tr>
        <td bgcolor="${BLUE}" style="background-color:${BLUE};">
          <a href="https://nvforhd.com" style="display:inline-block;padding:14px 28px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;text-decoration:none;color:#ffffff;font-family:Helvetica,Arial,sans-serif;">
            Visit nvforhd.com &rarr;
          </a>
        </td>
      </tr>
    </table>

    <p style="font-size:12px;color:${DIMMED};margin-top:32px;line-height:1.7;">
      You received this because you made a payment at nvforhd.com.<br />
      NVforHD &middot; Nevada Non-Profit &middot; Annual charity golf tournament May 29, 2026
    </p>
  `)
}

// ─── Webhook handler ──────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-04-22.dahlia',
  })

  const body = await req.text()
  const sig  = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Webhook signature failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const custEmail = session.customer_details?.email

    const mailer = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    console.log('Processing payment:', session.id, 'for', custEmail, 'amount:', session.amount_total)

    try {
      await mailer.sendMail({
        from: `"NVforHD Payments" <${process.env.GMAIL_USER}>`,
        to: 'info@nvforhd.com',
        subject: `[NVforHD] Payment received — $${((session.amount_total || 0) / 100).toFixed(2)} from ${session.customer_details?.name || 'Guest'}`,
        html: adminEmail(session),
      })
      console.log('Admin email sent')

      if (custEmail) {
        await mailer.sendMail({
          from: `"Sean Schaeffer · NVforHD" <${process.env.GMAIL_USER}>`,
          to: custEmail,
          subject: `Payment confirmed — NVforHD · May 29, 2026`,
          html: customerEmail(session),
        })
        console.log('Customer email sent to', custEmail)
      }
    } catch (emailErr) {
      console.error('Email send failed:', emailErr)
    }
  }

  return NextResponse.json({ received: true })
}
