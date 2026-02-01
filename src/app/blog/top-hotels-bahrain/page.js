import Link from 'next/link';

export const metadata = {
    title: "Top 5 Family Hotels in Bahrain | Driver Recommended",
    description: "Where to stay in Manama? Best hotels for Saudi families near City Centre and Seef. Clean, respectful, and luxury options.",
};

export default function HotelGuidePage() {
    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="section-title">Where to Stay: Bahrain Hotel Guide</h1>

                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p>
                        After dropping off thousands of families, our drivers know exactly which hotels offer the best experience.
                        Here are the top requested destinations.
                    </p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>1. The Ritz-Carlton (Seef)</h2>
                    <p>The classic choice. Private beach, excellent villas, and total privacy. It is the gold standard for a reason.</p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>2. The Westin (City Centre)</h2>
                    <p>Directly connected to City Centre Mall. This is the #1 choice for shopping trips. You can shop till you drop and walk straight to your room.</p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>3. Sofitel Bahrain Zallaq</h2>
                    <p>Located far from the city noise, near the F1 track. It feels like a true overseas resort with Thalassa sea treatments.</p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>4. Four Seasons (Bahrain Bay)</h2>
                    <p>The icon of the skyline. Incredible views and high-end dining (Cut by Wolfgang Puck).</p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>Taxi Tip</h2>
                    <p>
                        Most hotels have a 3:00 PM check-in. If you arrive early, book our <Link href="/services/city-tour" style={{ textDecoration: 'underline' }}>City Tour</Link> to kill time while exploring hidden gems like the Bahrain Fort.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link href="/services/hotel-transfers" className="btn btn-primary" style={{ padding: '15px 40px' }}>
                        BOOK HOTEL TRANSFER
                    </Link>
                </div>
            </div>
        </div>
    );
}
