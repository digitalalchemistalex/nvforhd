import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })

    const pi = req.nextUrl.searchParams.get('pi')
    if (!pi) return NextResponse.json({ error: 'Missing pi' }, { status: 400 })

    const paymentIntent = await stripe.paymentIntents.retrieve(pi)

    return NextResponse.json({ status: paymentIntent.status })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message }, { status: 500 })
  }
}
