import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const READER_ID = 'tmr_Ggv67wD8Mu42Do' // Mobile Charge — S710

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })

    const { payment_intent_id } = await req.json()

    if (!payment_intent_id) {
      return NextResponse.json({ error: 'Missing payment_intent_id' }, { status: 400 })
    }

    const reader = await (stripe.terminal.readers.processPaymentIntent as Function)(
      READER_ID,
      { payment_intent: payment_intent_id }
    )

    return NextResponse.json({ reader })
  } catch (err: any) {
    console.error('Terminal collect error:', err)
    return NextResponse.json({ error: err?.message || 'Failed to collect payment' }, { status: 500 })
  }
}
