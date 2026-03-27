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

export async function POST(req: NextRequest) {
  try {
    const { subject, body, replyTo, name } = await req.json()

    if (!subject || !body || !replyTo || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"NVforHD Website" <${process.env.GMAIL_USER}>`,
      to: 'info@nvforhd.com',
      replyTo: `"${name}" <${replyTo}>`,
      subject,
      text: body,
      html: `<pre style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap">${body}</pre>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
