
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import ComparisonTable from '@/components/sections/ComparisonTable';
import PageFAQ from '@/components/sections/PageFAQ';

export const metadata = {
    title: "Dammam to Bahrain Transport Guide 2026: Bus vs. Taxi vs. Uber vs. Train",
    description: "The honest 2026 comparison of all ways to get from Dammam to Bahrain. SAPTCO bus, Uber/Careem, Blacklane, driving yourself, or private limo. Prices, hidden costs, and speed.",
    keywords: ["saptco dammam to bahrain", "uber saudi to bahrain", "careem dammam to bahrain", "blacklane bahrain price", "dammam to bahrain train", "taxi vs bus bahrain"],
};

export default function TransportComparisonPage() {
    // Data for the comparison table
    const comparisonHeaders = ['Transport Mode', 'Cost (One-Way)', 'Door-to-Door?', 'Time (Avg)', 'Reliability'];
    const comparisonRows = [
        ['SAPTCO Bus', '60-100 SAR', 'No (Station only)', '3-5 Hours', 'High'],
        ['Ride Apps (Uber/Careem)', '400-600 SAR*', 'Yes', 'Variable', 'Low (Cancellations common)'],
        ['Global Limo (Blacklane)', '800+ SAR', 'Yes', '1.5 Hours', 'High'],
        ['Personal Car', '100 SAR (Ins/Gas)', 'Yes', '1.5 Hours', 'Med (Insurance hassles)'],
        ['Private Executive Taxi', '250-350 SAR', 'Yes', '1.5 Hours', 'Very High'],
    ];

    const faqs = [
        {
            question: "Is there a train from Dammam to Bahrain?",
            answer: "As of early 2026, the King Hamad Causeway railway project is still in development. There is no operational passenger train connecting Dammam and Bahrain yet. The only land option is the King Fahd Causeway road."
        },
        {
            question: "Can I take an Uber from Dammam to Bahrain?",
            answer: "Technically, yes, but it is complicated. Most Uber/Careem drivers do not have the authorization to cross the border. You typically have to negotiate off-app, which is risky, or face high cancellation rates. Dedicated cross-border taxi services are far more reliable."
        },
        {
            question: "How much is the SAPTCO bus?",
            answer: "SAPTCO bus tickets range from 60 to 100 SAR depending on the class (standard vs. VIP). While cheap, remember you must travel to the bus station in Dammam (adding taxi costs) and wait for all 40+ passengers to clear customs at the border."
        },
        {
            question: "Is driving my own car cheaper?",
            answer: "On paper, yes. But you must buy Bahrain insurance at the border (approx 30-50 SAR) and risky border traffic. If you scratch your car or have a minor accident in Bahrain, dealing with police and insurance as a Saudi resident can be a major headache."
        }
    ];

    return (
        <>
            <SchemaMarkup type="article" data={{
                headline: "Dammam to Bahrain Transport Showdown 2026: Bus vs. Taxi vs. Uber",
                description: "We tested every way to cross the King Fahd Causeway so you don't have to. Here is the definitive ranking of Dammam to Bahrain transport options.",
                author: "Dammam to Bahrain Taxi Service",
                datePublished: "2026-02-20",
                breadcrumbs: [
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' },
                    { name: 'Transport Comparison', url: '/blog/dammam-to-bahrain-bus-vs-taxi' }
                ]
            }} />

            <div className="section">
                <div className="container" style={{ maxWidth: '900px' }}>

                    <span className="animate-fade-up" style={{ display: 'block', color: 'var(--color-text-muted)', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        The 2026 Travel Guide
                    </span>
                    <h1 className="section-title text-left" style={{ marginBottom: '2rem' }}>
                        Dammam to Bahrain: <span className="text-gradient-gold">Bus vs. Taxi vs. Uber</span> <br />
                        Which is Right for You?
                    </h1>

                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginBottom: '3rem', borderLeft: '5px solid var(--color-primary)' }}>
                        <p className="lead" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>
                            <strong>The Short Answer:</strong>
                        </p>
                        <ul style={{ marginBottom: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>💰 <strong>Best Budget:</strong> SAPTCO Bus (if you have time).</li>
                            <li>⚡ <strong>Best Speed & Value:</strong> <Link href="/booking">Private Executive Taxi</Link> (Our Recommendation).</li>
                            <li>📱 <strong>Most Overrated:</strong> Uber/Careem (High cancellations).</li>
                            <li>💸 <strong>Most Expensive:</strong> Global Limo Apps (Blacklane).</li>
                        </ul>
                    </div>

                    <h2 style={{ marginTop: '3rem', fontSize: '1.8rem' }}>1. SAPTCO Bus: The "Backpacker" Choice</h2>
                    <p>
                        The Saudi Public Transport Company (SAPTCO) runs reliable buses. It's the cheapest way to cross, but efficient it is not.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ color: 'green', marginTop: 0 }}>✅ The Good</h4>
                            <ul style={{ paddingLeft: '1rem', fontSize: '0.95rem' }}>
                                <li>Cheapest option (60-100 SAR)</li>
                                <li>Air-conditioned coaches</li>
                                <li>Safe and regulated</li>
                            </ul>
                        </div>
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ color: 'red', marginTop: 0 }}>❌ The Bad</h4>
                            <ul style={{ paddingLeft: '1rem', fontSize: '0.95rem' }}>
                                <li><strong>The Customs Wait:</strong> The bus waits for <em>everyone</em>. If one passenger has a visa issue, you all wait.</li>
                                <li><strong>Not Door-to-Door:</strong> You need a taxi to the Dammam station (30 SAR) and a taxi from the Manama station (30 SAR). Real cost is closer to 120 SAR.</li>
                                <li><strong>3-5 Hour Journey:</strong> Vs 1.5 hours in a car.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 style={{ marginTop: '3rem', fontSize: '1.8rem' }}>2. Uber & Careem: The "Gamble"</h2>
                    <p>
                        We love ride-hailing apps for city travel. But for crossing international borders? It's a mess.
                    </p>
                    <p>
                        Most Uber drivers in Dammam are driving personal cars and <strong>do not have the commercial permit</strong> required to transport paying passengers across the King Fahd Causeway.
                    </p>
                    <ul>
                        <li><strong>The Scenario:</strong> You book a ride. The driver arrives, realizes it's to Bahrain, and asks you to cancel because they can't cross. You get charged a cancellation fee.</li>
                        <li><strong>The "Off-App" Risk:</strong> Some drivers will agree but ask for cash (400+ SAR) to make it "worth their while." You lose all safety tracking and insurance protections.</li>
                    </ul>

                    <h2 style={{ marginTop: '3rem', fontSize: '1.8rem' }}>3. Global Limo Apps (Blacklane, Sixt)</h2>
                    <p>
                        These are fantastic, reliable services. We respect them. But you pay a massive "Global Brand Tax."
                    </p>
                    <p>
                        A one-way trip from Dammam to Bahrain with these providers often exceeds <strong>800 SAR</strong>. Why? Because they simply contract local limousine companies (like us) and add a 100% markup for their app coordination.
                    </p>
                    <p><strong>The Smart Move:</strong> Book directly with a local premium provider. You get the <em>exact same Lexus or GMC vehicle</em> for 250-350 SAR. That's 60% savings.
                    </p>

                    <h2 style={{ marginTop: '3rem', fontSize: '1.8rem' }}>4. Driving Your Own Car</h2>
                    <p>
                        Great for total freedom, but comes with hidden headaches.
                    </p>
                    <ul>
                        <li><strong>Insurance:</strong> You must buy Bahrain insurance at the border kiosk (time consuming) or via the app.</li>
                        <li><strong>Authorizations:</strong> If the car is on a lease/bank loan, you need a valid authorization letter (Tawjeeh).</li>
                        <li><strong>Parking:</strong> Parking in Manama (especially Adliya/Block 338) is notoriously difficult on weekends.</li>
                    </ul>

                    <h2 style={{ marginTop: '3rem', fontSize: '1.8rem' }}>The Verdict: Comparison Table</h2>
                    <div style={{ marginBottom: '2rem' }}>
                        <ComparisonTable
                            title="2026 Transport Comparison"
                            headers={comparisonHeaders}
                            rows={comparisonRows}
                            highlightRow={4} // Highlight Private Executive Taxi
                        />
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        background: '#1a1a1a',
                        color: 'white',
                        padding: '3rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Skip the Hassle. Ride in Luxury for Less.</h3>
                        <p style={{ color: '#ccc', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                            Why start your trip with a 4-hour bus ride or a cancelled Uber?
                            Get a private Lexus ES or GMC Yukon from your doorstep to your hotel. Fixed rates. No surprises.
                        </p>
                        <Link href="/booking" className="btn btn-primary" style={{
                            padding: '1rem 3rem',
                            fontSize: '1.2rem',
                            background: '#d4af37',
                            color: '#000',
                            border: 'none',
                            fontWeight: 'bold'
                        }}>
                            Book Your Ride (From 250 SAR)
                        </Link>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
                        <PageFAQ faqs={faqs} />
                    </div>

                </div>
            </div>

            <TrustBar />
            <LastUpdated date="February 20, 2026" />
        </>
    );
}
