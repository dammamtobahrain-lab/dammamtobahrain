import Link from 'next/link';

export const metadata = {
    title: "Bahrain Hotel Transfers | Door-to-Lobby Taxi",
    description: "Direct transfers to all major hotels in Bahrain including Four Seasons, Ritz Carlton, Sofitel Zallaq, and The Art Hotel.",
};

export default function HotelTransfersPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">DESTINATION: HOTEL TRANSFERS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Start your vacation at the lobby door.</strong> We provide direct transfers to all 5-star and 4-star properties in Bahrain. No need to switch taxis at the border or drag luggage through bus terminals.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Key Hotel Zones We Serve</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Bahrain Bay:</strong> Four Seasons, Wyndham Grand.</li>
                                <li><strong>Seef District:</strong> Ritz Carlton, Jumeirah Royal Saray.</li>
                                <li><strong>Zallaq (South):</strong> Sofitel Bahrain, Al Areen Palace.</li>
                                <li><strong>Amwaj/Diyar:</strong> The Art Hotel, Vida Beach Resort.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Check-in / Check-out Sync</h2>
                            <p>Hotels typically have a 3:00 PM check-in and 12:00 PM check-out.</p>
                            <ul>
                                <li><strong>Arrival:</strong> We aim to get you to Bahrain by 2:00 PM so you can enjoy a late lunch while waiting for your room.</li>
                                <li><strong>Departure:</strong> We pick you up at 12:00 PM sharp to avoid late checkout fees, getting you back to Saudi for the start of the work week.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Resort Access</h2>
                            <p>Some resorts like <strong>Sofitel Zallaq</strong> are far from the city center (30 mins south). Local taxis can be scarce there. Our service ensures your driver is confirmed for your return trip.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK HOTEL TRANSFER
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>POPULAR HOTELS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li>Four Seasons (Bay)</li>
                                <li>Ritz Carlton (Seef)</li>
                                <li>Sofitel (Zallaq)</li>
                                <li>Wyndham (Juffair)</li>
                                <li>InterContinental (City)</li>
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
