import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const READER_ID = 'tmr_Ggv67wD8Mu42Do' // Mobile Charge — S710

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })

    await (stripe.terminal.readers.cancelAction as Function)(READER_ID)

    // Immediately clear the reader display so it doesn't show stale payment screen
    await (stripe.terminal.readers.setReaderDisplay as Function)(READER_ID, {
      type: 'cart',
      cart: {
        line_items: [],
        tax: 0,
        total: 0,
        currency: 'usd',
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Terminal cancel error:', err)
    return NextResponse.json({ error: err?.message || 'Failed to cancel' }, { status: 500 })
  }
}
