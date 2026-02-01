import Link from 'next/link';

export const metadata = {
    title: "Hyundai Staria Van Taxi | Group Transport to Bahrain",
    description: "Modern, spacious 7-seater van for group travel. The Hyundai Staria offers panoramic views and business-class seating for teams and families.",
};

export default function StariaPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">HYUNDAI STARIA: FUTURE VAN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Forget everything you know about vans.</strong> The Hyundai Staria is a spaceship on wheels. Designed for ultimate passenger comfort, it features massive panoramic windows and individual captain's chairs that rival business class airline seats.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Specifications</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Class:</strong> Luxury MPV / Van</li>
                                <li><strong>Capacity:</strong> 7 Passengers</li>
                                <li><strong>Luggage:</strong> 4-5 Large Suitcases</li>
                                <li><strong>Features:</strong> Captain Chairs, Panoramic Windows, USB Ports at every seat</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Best For Groups & Teams</h2>
                            <p>Why split your group into two taxis when you can travel together? The Staria fosters conversation and connection. It is the top choice for:</p>
                            <ul>
                                <li style={{ marginBottom: '10px' }}><strong>Corporate Teams:</strong> Conduct a briefing on the way to your meeting in Manama.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Sightseeing Tours:</strong> The massive windows offer unparalleled views of the Arabian Gulf while crossing the bridge.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Extended Families:</strong> Comfortable seating for grandparents, parents, and children all in one vehicle.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Comfort</h2>
                            <p>Unlike traditional vans with bench seats, the Staria (Luxury Trim) offers independent seats that slide and recline. This ensures that even the person in the middle row has personal space and comfort.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK HYUNDAI STARIA
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>QUICK SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Model:</strong> Hyundai Staria</li>
                                <li><strong>Type:</strong> Luxury Van</li>
                                <li><strong>Pax:</strong> Max 7</li>
                                <li><strong>Bags:</strong> Max 5 Large</li>
                                <li><strong>Rate:</strong> Group Rate</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    RESERVE THIS CAR
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
