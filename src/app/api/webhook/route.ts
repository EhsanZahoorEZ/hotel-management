import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createBooking, updateHotelRoom } from '@/libs/apis';

const checkoutSessionCompletedEvent = 'checkout.session.completed';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-08-16',
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    console.error('Webhook Error:', error.message);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  // Handle the event
  switch (event.type) {
    case checkoutSessionCompletedEvent:
      const session = event.data.object as Stripe.Checkout.Session;

      const { metadata } = session;
      if (!metadata) {
        console.error('Metadata is missing in the session object:', session);
        return new NextResponse('Metadata is missing', { status: 400 });
      }

      const {
        adults,
        checkinDate,
        checkoutDate,
        children,
        hotelRoom,
        numberOfDays,
        user,
        discount,
        totalPrice,
      } = metadata;

      await createBooking({
        adults: Number(adults),
        checkinDate,
        checkoutDate,
        children: Number(children),
        hotelRoom,
        numberOfDays: Number(numberOfDays),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      // Update hotel room
      await updateHotelRoom(hotelRoom);

      return new NextResponse(JSON.stringify({ message: 'Booking successful' }), {
        status: 200,
        statusText: 'Booking Successful',
      });

    default:
      console.log(`Unhandled event type: ${event.type}`);
      return new NextResponse('Unhandled event', { status: 400 });
  }
}
