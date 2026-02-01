import Link from 'next/link';

export const metadata = {
    title: "Al Khobar to Bahrain Taxi | How to Book & Price Guide",
    description: "Learn how to book a taxi from Al Khobar to Bahrain. Includes step-by-step guide, pricing details, and pickup locations in Rakkah, Corniche, and Dhahran.",
};

export default function KhobarPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: AL KHOBAR TO BAHRAIN TAXI Travel</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Looking for a seamless way to travel from Al Khobar to Bahrain?</strong> This comprehensive guide covers everything you need to know about booking private transport, from pickup points in Dhahran and Corniche to crossing the King Fahd Causeway.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>How to Book a Taxi from Al Khobar</h2>
                            <p>Booking a private car for your trip is straightforward, but knowing the process can save you time. Here is the step-by-step procedure typically used by our clients:</p>
                            <ol style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Determine Your Pickup Point:</strong> Whether you are in Al-Ulaya, Rakkah, or near the Khobar Corniche, define your exact location.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Choose Your Vehicle:</strong> Select a standard sedan for solo travel or a GMC Yukon for family trips with luggage.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Schedule Your Time:</strong> Factor in causeway traffic. Weekday mornings are best for speed.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Confirm via WhatsApp:</strong> Use our booking form to get immediate confirmation.</li>
                            </ol>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Understanding the Costs</h2>
                            <p>The cost of a taxi from Al Khobar to Bahrain depends largely on the vehicle type and the final destination in Bahrain (e.g., Manama vs. Durrat Al Bahrain). Generally, prices start from <strong>300 SAR</strong> for a one-way trip in a sedan. This fee includes the 25 SAR bridge toll but excludes personal visa fees.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Route: Crossing the King Fahd Causeway</h2>
                            <p>The 25km journey is a scenic drive over the Arabian Gulf. It typically takes 45-60 minutes. However, during peak times like Thursday evenings, this can extend to 2 hours. Our experienced drivers know the best lanes and times to travel to minimize your wait.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Why Avoid Public Buses?</h2>
                            <p>While public transport (SAPTCO) is available, it requires passengers to disembark at both Saudi and Bahraini immigration for processing. This adds significant time and physical effort to the journey. With a private taxi, you often remain comfortably seated inside the vehicle while the driver handles your passports at the drive-through cabins.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Service Areas in Al Khobar</h2>
                            <p>We provide door-to-door pickup from all major districts, including:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li><strong>Al Rakkah & Al-Khalidiyah:</strong> Popular residential areas.</li>
                                <li><strong>Al-Hizam Al-Thahabi:</strong> The Golden Belt district.</li>
                                <li><strong>Dhahran:</strong> Including King Fahd University (KFUPM) and Aramco Camp.</li>
                                <li><strong>Khobar Corniche:</strong> Hotels and sea-view apartments.</li>
                            </ul>

                            <div style={{ background: '#f0f0f0', padding: '1.5rem', borderLeft: '4px solid #000', margin: '2rem 0' }}>
                                <p style={{ margin: 0, fontStyle: 'italic' }}><strong>Pro Tip:</strong> If traveling on a weekend, try to leave before 10:00 AM to beat the rush hour traffic on the bridge.</p>
                            </div>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                START BOOKING PROCESS
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AT A GLANCE</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Service:</strong> Private Taxi / Chauffeur</li>
                                <li><strong>Route:</strong> Khobar ➔ Bahrain</li>
                                <li><strong>Avg. Time:</strong> 50 Minutes</li>
                                <li><strong>Starting Price:</strong> 300 SAR</li>
                                <li><strong>Bridge Toll:</strong> Included</li>
                                <li><strong>Insurance:</strong> Included</li>
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
