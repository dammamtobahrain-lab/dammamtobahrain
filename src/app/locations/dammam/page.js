import Link from 'next/link';

export const metadata = {
    title: "Dammam Airport (DMM) to Bahrain | Transfer Guide",
    description: "Official guide for transferring from King Fahd International Airport to Bahrain. Meet and greet procedures, luggage handling, and visa info.",
};

export default function DammamPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: DAMMAM AIRPORT TRANSFERS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>King Fahd International Airport (DMM) is a strategic entry point for travelers heading to Bahrain.</strong> This guide explains how to transition smoothly from your flight to a waiting private car for the final leg of your journey.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Why Land in Dammam for Bahrain?</h2>
                            <p>Many savvy travelers choose DMM over Bahrain International Airport (BAH) because flight fares can often be significantly cheaper. Additionally, DMM offers different connection options. The transfer from DMM to Manama takes approximately <strong>75 to 90 minutes</strong>, making it a viable alternative.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Pickup Procedure</h2>
                            <ol style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Flight Tracking:</strong> Provide us with your flight number (e.g., SV1120). Our team monitors actual landing times.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Arrivals Hall:</strong> After clearing Saudi immigration and collecting your bags, exit into the main Arrivals area.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Meet & Greet:</strong> Your driver will be waiting with a name sign (if requested) or will coordinate via WhatsApp to meet you at the curbside pickup zone.</li>
                            </ol>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Transit Visas & Regulations</h2>
                            <p><strong>Important:</strong> To land in Dammam, you must have a valid visa to enter Saudi Arabia (Tourist e-Visa, Business, or Residence). You cannot transfer "airside" directly to a car without officially entering KSA borders first. Please ensure your Saudi visa allows for multiple entries if you plan to return the same way.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Luggage Capacity</h2>
                            <p>International travel often means heavy luggage. Please be specific about your bag count when booking.</p>
                            <ul>
                                <li><strong>Sedan:</strong> Max 2 Large Suitcases.</li>
                                <li><strong>SUV (Yukon/Tahoe):</strong> Max 6 Large Suitcases.</li>
                            </ul>
                            <p>If you have excessive luggage, we may need to dispatch a larger van or a second vehicle.</p>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK AIRPORT TRANSFER
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AIRPORT FACTS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Code:</strong> DMM (King Fahd Int'l)</li>
                                <li><strong>To Bahrain:</strong> ~100 KM</li>
                                <li><strong>Drive Time:</strong> ~1.5 Hours</li>
                                <li><strong>Meeting Point:</strong> Arrivals Lvl 1</li>
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
