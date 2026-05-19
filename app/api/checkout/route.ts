import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// ─── Packages — update price IDs once Sean creates them in Stripe dashboard ───
const PACKAGES: Record<string, { name: string; priceId: string }> = {
  single: {
    name: 'Single Golfer',
    priceId: process.env.STRIPE_PRICE_SINGLE!,
  },
  foursome: {
    name: 'Foursome',
    priceId: process.env.STRIPE_PRICE_FOURSOME!,
  },
  donation: {
    name: 'Donation',
    priceId: process.env.STRIPE_PRICE_DONATION!,
  },
}

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })

    const { packageId } = await req.json()

    const pkg = PACKAGES[packageId]
    if (!pkg) {
      return NextResponse.json({ error: 'Invalid package' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: pkg.priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/#register`,
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      metadata: {
        package: packageId,
        event: 'NVforHD 2026',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
