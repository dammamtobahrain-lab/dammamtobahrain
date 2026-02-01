import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// --- CONFIGURATION ---
const SUPABASE_URL = 'https://iqmpstetmarfrzoibyby.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbXBzdGV0bWFyZnJ6b2lieWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4ODk0ODIsImV4cCI6MjA4NTQ2NTQ4Mn0.yrH08o0TnIlqoLwXQDlx9UAr3YpbQdiVpMfRYhMeltU';

// Initialize Supabase
let supabase;
try {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
    console.error("Supabase Init Error:", e);
}

export async function POST(request) {
    try {
        const data = await request.json();
        const { fullName, phone, email, pickupCity, dropoffCity, pickupDate, pickupTime, passengers, luggage, vehicleType, notes } = data;

        console.log('📧 Processing booking request for:', fullName);

        // 1. Save to Supabase Database
        let dbStatus = "Skipped";
        if (supabase) {
            const { error: dbError } = await supabase
                .from('bookings')
                .insert([
                    {
                        full_name: fullName,
                        phone: phone,
                        email: email,
                        pickup_city: pickupCity,
                        dropoff_city: dropoffCity,
                        pickup_date: pickupDate,
                        pickup_time: pickupTime,
                        passengers: passengers,
                        luggage: luggage,
                        vehicle_type: vehicleType,
                        notes: notes,
                        status: 'pending'
                    }
                ]);

            if (dbError) {
                console.error('❌ Supabase Error:', dbError);
                dbStatus = "Error: " + dbError.message;
            } else {
                console.log('✅ Saved to Supabase');
                dbStatus = "Saved";
            }
        }

        // 2. Configure Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.improvmx.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const fromAddress = `"Dammam to Bahrain Taxi" <booking@dammamtobahrain.com>`;

        // 3. Send Notification to Admin
        const adminMailOptions = {
            from: fromAddress,
            to: process.env.ADMIN_EMAIL || 'dammamtobahrain@gmail.com',
            subject: `New Booking Request: ${fullName}`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
              <h2 style="color: #333;">New Booking Request</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${phone}</td></tr>
                <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${email || 'N/A'}</td></tr>
                
                <tr><td colspan="2" style="background: #333; color: white; padding: 5px;"><strong>Trip Details</strong></td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Pickup:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${pickupCity}</td></tr>
                <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>Dropoff:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${dropoffCity}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Date/Time:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${pickupDate} @ ${pickupTime}</td></tr>
                
                <tr><td colspan="2" style="background: #333; color: white; padding: 5px;"><strong>Vehicle & Pax</strong></td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Vehicle:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${vehicleType}</td></tr>
                <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>Passengers:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${passengers}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Luggage:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${luggage} Bags</td></tr>
                
                <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>Notes:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${notes || 'N/A'}</td></tr>
              </table>
              <p style="margin-top: 20px; color: #666;">
                <strong>Database Status:</strong> ${dbStatus}<br/>
                This is an automated message from dammamtobahrain.com
              </p>
            </div>
        `,
        };
        await transporter.sendMail(adminMailOptions);
        console.log('✅ Admin notification sent');

        // 4. Send Auto-Reply to Customer
        if (email) {
            const customerMailOptions = {
                from: fromAddress,
                to: email,
                subject: `Booking Received - Dammam to Bahrain Taxi`,
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333; text-align: center;">Booking Received</h2>
                  <p>Dear ${fullName},</p>
                  <p>Thank you for booking with <strong>Dammam to Bahrain Taxi</strong>. We have received your request and our team is currently reviewing it.</p>
                  
                  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #555;">Trip Details:</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 5px 0;"><strong>Route:</strong> ${pickupCity} to ${dropoffCity}</li>
                        <li style="padding: 5px 0;"><strong>Date:</strong> ${pickupDate} @ ${pickupTime}</li>
                        <li style="padding: 5px 0;"><strong>Vehicle:</strong> ${vehicleType}</li>
                        <li style="padding: 5px 0;"><strong>Pax/Luggage:</strong> ${passengers} Pax / ${luggage} Bags</li>
                    </ul>
                  </div>

                  <p><strong>What happens next?</strong></p>
                  <p>One of our drivers or operations managers will contact you shortly via <strong>WhatsApp</strong> at ${phone} to confirm the price and driver details.</p>
                  
                  <p>If you need immediate assistance, please click below to chat with us:</p>
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://wa.me/13073464572" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 5px;">Chat on WhatsApp</a>
                  </div>

                  <p style="font-size: 0.9rem; color: #888; text-align: center;">
                    Dammam to Bahrain Taxi<br/>
                    <a href="https://dammamtobahrain.com">www.dammamtobahrain.com</a>
                  </p>
                </div>
            `,
            };
            try {
                await transporter.sendMail(customerMailOptions);
                console.log('✅ Customer auto-reply sent');
            } catch (replyError) {
                console.error('❌ Failed to send auto-reply:', replyError);
            }
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Booking processed successfully!',
            dbSaved: dbStatus === "Saved"
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('❌ Processing Error:', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to process booking.',
            error: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
