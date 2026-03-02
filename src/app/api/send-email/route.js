// This route is no longer used. Booking is now handled via WhatsApp.
import { NextResponse } from 'next/server';

export async function POST() {
    return NextResponse.json({ message: 'This endpoint is disabled. Please use WhatsApp for bookings.' }, { status: 410 });
}
