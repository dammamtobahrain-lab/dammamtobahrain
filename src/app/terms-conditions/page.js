export const metadata = {
    title: "Terms and Conditions | Dammam to Bahrain Taxi",
    description: "Legal terms governing the use of our taxi services. Please read carefully before booking.",
};

export default function TermsConditions() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">TERMS & CONDITIONS</h1>

                <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>

                    <p style={{ fontStyle: 'italic', marginBottom: '2rem', textAlign: 'center' }}>Last Updated: February 1, 2026</p>

                    <p>
                        Welcome to Dammam to Bahrain Taxi. By booking a trip with us, either via our website, email, or WhatsApp, you agree to be bound by the following Terms and Conditions. These terms constitute a legally binding agreement between you (the "Client") and Dammam to Bahrain Taxi (the "Service Provider").
                    </p>

                    <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>1. Booking & Confirmation</h3>
                    <p>
                        1.1. <strong>Reservation Request:</strong> A booking request submitted through our online form does not constitute a confirmed reservation. A reservation is only confirmed once you have received a confirmation message (via WhatsApp or Email) from our dispatch team containing your driver's details.<br />
                        1.2. <strong>Accuracy of Information:</strong> The Client is responsible for providing accurate information regarding pickup location, time, and passenger count. We are not liable for delays caused by incorrect information provided by the Client.<br />
                        1.3. <strong>Lead Time:</strong> While we accept last-minute bookings subject to availability, we strongly recommend booking at least 24 hours in advance for travel on Thursdays and Saturdays.
                    </p>

                    <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>2. Pricing & Payment</h3>
                    <p>
                        2.1. <strong>Rates:</strong> All rates quoted are in Saudi Riyals (SAR). The rate includes the vehicle, driver, fuel, and standard waiting time (up to 15 minutes).<br />
                        2.2. <strong>Tolls:</strong> The standard quotation INCLUDES the Saudi toll gate fee (25 SAR). It does NOT include visa fees or customs duties, which are the sole responsibility of the passenger.<br />
                        2.3. <strong>Payment Methods:</strong> We accept cash (SAR/BHD) or bank transfer. Credit card payments request must be made at the time of booking so a POS-equipped vehicle can be dispatched.
                    </p>

                    <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>3. Cancellation & No-Show Policy</h3>
                    <p>
                        3.1. <strong>Client Cancellation:</strong> You may cancel your booking free of charge up to 2 hours before the scheduled pickup time. Cancellations made within 2 hours may be subject to a cancellation fee of 50 SAR.<br />
                        3.2. <strong>No-Show:</strong> If the driver arrives at the pickup location and is unable to contact the Client within 30 minutes, the trip will be marked as a "No-Show" and the full fare may be liable.<br />
                        3.3. <strong>Provider Cancellation:</strong> In the rare event that we must cancel due to unforeseen circumstances (e.g., breakdown, severe weather), we will provide a full refund of any pre-paid amount and assisting in finding alternative transport.
                    </p>

                    <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>4. Passenger Conduct</h3>
                    <p>
                        4.1. <strong>Prohibited Items:</strong> Passengers are strictly prohibited from carrying illegal substances, alcohol (into KSA), or weapons. The driver reserves the right to refuse service to anyone suspected of carrying illicit items.<br />
                        4.2. <strong>Behavior:</strong> Abusive or threatening behavior towards the driver will not be tolerated and will result in immediate termination of the trip without refund.<br />
                        4.3. <strong>Smoking:</strong> Smoking is strictly prohibited in all our vehicles.
                    </p>

                    <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>5. Limitation of Liability</h3>
                    <p>
                        5.1. <strong>Delays:</strong> We plan routes to ensure timely arrival, but we are not liable for delays caused by circumstances beyond our control, including but not limited to: Causeway traffic jams, customs computer system failures, road accidents, or severe weather conditions.<br />
                        5.2. <strong>Missed Flights:</strong> We strongly advise allowing extra time for airport transfers. We are not liable for missed flights resulting from border delays. Please verify causeway traffic status before your trip.
                    </p>

                </div>
            </div>
        </div>
    );
}
