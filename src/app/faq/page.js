import PageFAQ from '@/components/sections/PageFAQ';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
    title: "Frequently Asked Questions | Dammam to Bahrain Taxi 2026",
    description: "Get answers to common questions about our taxi service between Saudi Arabia and Bahrain. Visa requirements, pricing, border crossing procedures, payment methods, and more.",
};

const allFaqs = [
    { question: 'Do I need a visa to enter Bahrain?', answer: 'GCC nationals and residents enter Bahrain visa-free. Citizens of the US, UK, EU, Canada, Australia, and many other countries can obtain a Bahrain eVisa online or a visa on arrival at the King Fahd Causeway border. Check the official Bahrain eVisa portal for your nationality. Our drivers can guide you through the procedure but are not responsible for your visa status.' },
    { question: 'How long does the trip take from Al Khobar/Dammam to Bahrain?', answer: 'On a normal day, the drive from Al Khobar takes 45-60 minutes and from Dammam about 55-70 minutes, including the border crossing. During peak times (Thursday evenings 4-8 PM, Saturday afternoons), delays at the King Fahd Causeway can extend this to 2-3 hours.' },
    { question: 'What forms of payment do you accept?', answer: 'We accept cash (SAR or BHD), bank transfer, and major credit cards (Visa, MasterCard). Corporate clients can set up monthly invoicing accounts. Payment can be made online during booking or directly to the driver.' },
    { question: 'Can you pick me up from the airport?', answer: 'Yes. We offer airport pickups at both King Fahd International Airport (DMM) in Dammam and Bahrain International Airport (BAH). Provide your flight number when booking — we track your flight in real-time and adjust pickup times automatically if your flight is delayed, at no extra charge.' },
    { question: 'Is smoking allowed in the vehicle?', answer: 'No. For the comfort of all passengers, all our vehicles are strictly non-smoking. This policy is non-negotiable.' },
    { question: 'What if my flight is delayed?', answer: 'We monitor all flights in real-time. If your flight is delayed by minutes or hours, your driver adjusts automatically. There are no extra waiting fees for flight delays — your driver will be there when you land.' },
    { question: 'Is the vehicle shared or private?', answer: 'All our bookings are 100% private transfers. The vehicle is exclusively for you and your party. We never combine passengers from different bookings.' },
    { question: 'What vehicles do you have?', answer: 'Our fleet includes Lexus ES luxury sedans, Toyota Camry economy sedans, GMC Yukon full-size SUVs, and Hyundai Staria family vans. All vehicles are late-model, fully insured, and meticulously maintained.' },
    { question: 'Can I book a round trip?', answer: 'Yes. Round trips can be booked for same-day returns (like visa runs) or different-day returns. Booking a round trip in advance guarantees your return vehicle, especially important during busy Saturday evenings.' },
    { question: 'How far in advance should I book?', answer: 'We recommend booking at least 24 hours in advance, especially for Thursday/weekend travel. For remote locations (Jubail, Riyadh, Khafji), 48 hours is preferred. Last-minute bookings are accommodated when vehicles are available.' },
    { question: 'Do you offer corporate accounts?', answer: 'Yes. We offer monthly corporate invoicing, priority dispatch, fixed rate cards, and detailed trip reporting for businesses. Contact corporate@dammamtobahrain.com to set up an account.' },
    { question: 'What is the causeway toll fee?', answer: 'The King Fahd Causeway toll is 25 SAR per vehicle crossing from Saudi to Bahrain. Our quoted prices include this toll fee — no hidden charges.' },
    { question: 'Can you help with the border crossing process?', answer: 'Our drivers are experienced with the causeway border procedures and can guide you through the immigration process. However, they cannot enter the passport control booths on your behalf. For most crossings, you remain in the vehicle while the driver handles vehicle-lane processing.' },
    { question: 'Do you provide child/baby car seats?', answer: 'Yes, upon request. Please mention the age and number of children when booking so we can install the appropriate car seats in advance. Saudi Arabia requires child safety seats for children under 10 years of age.' },
    { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 24 hours before pickup. Cancellations within 24 hours may incur a 50% fee. No-shows are charged the full fare. We understand plans change — just give us as much notice as possible.' },
];

export default function FAQ() {
    return (
        <>
            <SchemaMarkup type="location" data={{
                faqs: allFaqs,
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'FAQ', href: '/faq/' },
                ],
            }} />

            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="section-title">
                        <span>Help Center</span>
                        <h1>Frequently Asked Questions</h1>
                        <p>Everything you need to know about our Saudi Arabia to Bahrain taxi service. Can't find your answer? Contact us at booking@dammamtobahrain.com.</p>
                    </div>

                    <PageFAQ faqs={allFaqs} />

                    <div style={{ border: '1px solid var(--color-primary)', padding: '2rem', marginTop: '2rem', textAlign: 'center', borderRadius: '8px' }}>
                        <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Still have questions?</p>
                        <p style={{ marginBottom: '1rem' }}>Contact us directly — we respond within minutes during business hours.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="mailto:booking@dammamtobahrain.com" className="btn btn-outline">Email Us</a>
                            <Link href="/booking/" className="btn btn-primary">Book a Ride</Link>
                        </div>
                    </div>
                </div>
            </div>

            <TrustBar />

            <div className="container">
                <LastUpdated date="February 19, 2026" />
            </div>
        </>
    );
}
