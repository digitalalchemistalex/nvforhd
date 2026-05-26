import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const READER_ID = 'tmr_Ggv67wD8Mu42Do' // Mobile Charge — S710

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })

    const reader = await (stripe.terminal.readers.cancelAction as Function)(READER_ID)

    return NextResponse.json({ reader })
  } catch (err: any) {
    console.error('Terminal cancel error:', err)
    return NextResponse.json({ error: err?.message || 'Failed to cancel' }, { status: 500 })
  }
}
