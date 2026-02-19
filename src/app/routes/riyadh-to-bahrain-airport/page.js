import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';

export const metadata = {
    title: "Riyadh to Bahrain Airport Transfer | Direct Chauffeur Service | Dammam to Bahrain Taxi",
    description: "Direct executive car service from Riyadh to Bahrain Airport (BAH). Skip connecting flights. 4.5-hour door-to-terminal service in Lexus ES or GMC Yukon XL. Unlimited luggage.",
};

const routeFaqs = [
    {
        question: "How long is the drive from Riyadh to Bahrain Airport?",
        answer: "The drive takes approximately 4.5 hours door-to-terminal, including the causeway crossing. We add a 60-minute buffer for border formalities, so plan for 5.5 hours total. Book your pickup 6 hours before your flight departure."
    },
    {
        question: "Is driving from Riyadh faster than flying to Bahrain?",
        answer: "When you factor in airport check-in (1 hour), the flight itself (1 hour), immigration and baggage claim (45 min), and transfer to your destination (30 min), flying takes about 3.5 hours. Driving takes 4.5 hours but with zero stress, unlimited luggage, and door-to-door service. For late-night flights, driving is often the smarter choice."
    },
    {
        question: "Which vehicle is best for the Riyadh to Bahrain route?",
        answer: "For solo travelers or couples, the Lexus ES offers a quiet, luxury ride perfect for sleeping or working during the 4.5-hour journey. For families with luggage, the GMC Yukon XL is ideal — it can carry 6+ suitcases with ease, eliminating airline baggage fees."
    },
];

export default function RiyadhAirportRoutePage() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Routes', href: '/routes/' },
                    { name: 'Riyadh to Bahrain Airport', href: '/routes/riyadh-to-bahrain-airport/' },
                ],
                faqs: routeFaqs,
            }} />

            <div className="section">
                <div className="container">
                    <h1 className="section-title">ROUTE: RIYADH TO BAHRAIN AIRPORT</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                        <div style={{ border: '2px solid #000', padding: '3rem' }}>
                            <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                                <strong>The Smart Alternative to Connecting Flights.</strong> Many travelers find that taking a direct car from Riyadh to Bahrain Airport is actually faster and less stressful than flying RUH-BAH, especially when factoring in check-in times and potential delays.
                            </p>

                            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                                <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Scenario</h2>
                                <p>You have an international flight departing from Bahrain (BAH) to London or Bangkok at 2:00 AM.</p>
                                <ul>
                                    <li><strong>Option A (Fly):</strong> You fly Riyadh to Bahrain at 9:00 PM. You land, clear immigration, collect bags, transfer terminals. Stress level: High.</li>
                                    <li><strong>Option B (Drive):</strong> We pick you up from your Riyadh home at 6:00 PM. You sleep in the back of a Lexus. We drop you at the BAH departure curb at 10:30 PM. Stress level: Zero.</li>
                                </ul>

                                <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Luggage Freedom</h2>
                                <p>Airlines charge heavy fees for excess baggage on the short hop from Riyadh to Bahrain. In our <Link href="/fleet/gmc-yukon/" style={{ textDecoration: 'underline' }}>GMC Yukon XL</Link>, your luggage allowance is virtually unlimited (up to 8 full-size suitcases). This alone often covers the cost of the transfer.</p>

                                <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Timing Your Trip</h2>
                                <p>The drive is approximately 4.5 hours door-to-door. We always add a 60-minute buffer for the causeway crossing. We recommend booking your pickup <strong>6 hours before your flight departure time</strong>.</p>

                            </div>

                            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                    100% satisfaction guarantee · No hidden fees · Free cancellation up to 24hrs
                                </p>
                                <Link href="/booking/" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                    BOOK RIYADH → BAH
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                                <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                    <li><strong>Origin:</strong> Riyadh City</li>
                                    <li><strong>Dest:</strong> Bahrain Airport</li>
                                    <li><strong>Distance:</strong> ~430 KM</li>
                                    <li><strong>Time:</strong> ~5 Hours</li>
                                    <li><strong>Vehicle:</strong> Lexus/Yukon Only</li>
                                </ul>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <Link href="/booking/" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                        BOOK NOW
                                    </Link>
                                </div>
                                <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    Trusted by 500+ passengers
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Expert Insight */}
            <div className="section" style={{ padding: '0 0 2rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <ExpertInsight
                        text="The Riyadh-to-Bahrain Airport route is one of our signature services. We have refined the timing down to a science: departure from Riyadh at the right hour, a brief stop at the halfway rest area, and arrival at BAH Terminal with time to spare. Our drivers on this route are specifically trained for long-haul night driving and know every rest stop, petrol station, and shortcut between the two cities."
                        cityName="Riyadh-Bahrain"
                        author="Long-Haul Operations, Dammam to Bahrain Taxi"
                    />
                </div>
            </div>

            {/* FAQ */}
            <div className="section" style={{ background: '#fafafa', padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <PageFAQ faqs={routeFaqs} cityName="Riyadh-Bahrain Airport" />
                </div>
            </div>

            {/* Trust Bar */}
            <TrustBar clientsServed="500+" />

            {/* Last Updated */}
            <div className="container">
                <LastUpdated date="February 19, 2026" />
            </div>
        </>
    );
}
