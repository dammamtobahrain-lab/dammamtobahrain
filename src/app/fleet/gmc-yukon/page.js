import Link from 'next/link';

export const metadata = {
    title: "GMC Yukon XL Taxi to Bahrain | 7-Seater Family SUV",
    description: "Book a GMC Yukon XL or Chevrolet Tahoe for travel to Bahrain. Spacious 7-seater SUV for large families and heavy luggage. Luxury transport.",
};

export default function YukonPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GMC YUKON XL: THE FAMILY FORTRESS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>When space, safety, and presence matter, the GMC Yukon XL is the only choice.</strong> This "King of the Road" is designed for large families, long-distance travelers from Riyadh, and anyone requiring maximum luggage capacity.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Specifications</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Class:</strong> Full-Size Luxury SUV</li>
                                <li><strong>Capacity:</strong> 6-7 Passengers + Chauffeur</li>
                                <li><strong>Luggage:</strong> 6+ Large Suitcases (XL Model)</li>
                                <li><strong>Features:</strong> Tri-Zone Climate Control, Leather Seats, Tinted Privacy Glass</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Perfect For Long Hauls</h2>
                            <p>The Yukon shines on the long desert highways. Its heavy chassis and long wheelbase absorb bumps effortlessly, making it the premier choice for:</p>
                            <ul>
                                <li style={{ marginBottom: '10px' }}><strong>Riyadh to Bahrain:</strong> The 4-hour journey feels like a short hop in these recliner seats.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Airport Transfers:</strong> Does your family have 6 suitcases? A sedan can't handle that. The Yukon swallows luggage with ease.</li>
                                <li style={{ marginBottom: '10px' }}><strong>VIP Guests:</strong> The commanding ride height and tinted windows offer anonymity and security for high-profile clients.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pricing Note</h2>
                            <p>The Yukon is a premium vehicle with higher fuel consumption and running costs. Rates for this class are typically 30-50% higher than standard sedans, but the value provided in comfort and capacity is unmatched.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK GMC YUKON
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>QUICK SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Model:</strong> GMC Yukon XL</li>
                                <li><strong>Type:</strong> Large SUV</li>
                                <li><strong>Pax:</strong> Max 7</li>
                                <li><strong>Bags:</strong> Max 6 Large</li>
                                <li><strong>Rate:</strong> Premium</li>
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
