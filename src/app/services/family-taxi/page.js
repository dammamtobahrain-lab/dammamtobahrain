import Link from 'next/link';

export const metadata = {
    title: "Family Taxi Service to Bahrain | Safe & Spacious",
    description: "Dedicated family taxi service with child seats usage (on request), female-friendly drivers, and spacious SUVs. Safe travel for women and children.",
};

export default function FamilyTaxiPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: FAMILY TRANSPORT</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Safety first.</strong> We understand that when you travel with your family, your priorities are different. You need patience, stopping power, safe driving, and help with the kids' luggage. Our "Family Class" service is designed for peace of mind.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Family Fleet</h2>
                            <p>We exclusively use the <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon XL</Link> and <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Hyundai Staria</Link> for this service tier. These vehicles offer:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Privacy Glass:</strong> Standard on all rear windows.</li>
                                <li><strong>Rear Climate Control:</strong> So the kids in the back don't get hot.</li>
                                <li><strong>Isofix Points:</strong> For securing your own child seats.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Driver Protocol</h2>
                            <p>Drivers assigned to "Family" bookings are our most senior staff (5+ years tenure). They are instructed to:</p>
                            <ul>
                                <li>Drive 10% below the speed limit.</li>
                                <li>Never smoke or play loud music.</li>
                                <li>Assist with stroller loading/unloading.</li>
                                <li>Accommodate unscheduled bathroom stops at checkpoints.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Female Travelers</h2>
                            <p>We frequently transport unaccompanied females and children. Our drivers are vetted, background-checked, and trained in professional conduct to ensure a secure and respectful environment.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FAMILY RIDE
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>SERVICE SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Vehicles:</strong> Yukon / Staria</li>
                                <li><strong>Driver:</strong> Senior / Vetted</li>
                                <li><strong>Child Seats:</strong> Bring Your Own</li>
                                <li><strong>Stops:</strong> Flexible</li>
                                <li><strong>Price:</strong> Standard SUV Rate</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    BOOK NOW
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
