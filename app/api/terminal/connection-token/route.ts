import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })

    const connectionToken = await stripe.terminal.connectionTokens.create()

    return NextResponse.json({ secret: connectionToken.secret })
  } catch (err) {
    console.error('Terminal connection token error:', err)
    return NextResponse.json({ error: 'Failed to create connection token' }, { status: 500 })
  }
}
