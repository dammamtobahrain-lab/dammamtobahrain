import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ borderTop: '4px solid black' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h3>DAMMAM TO BAHRAIN</h3>
                        <p style={{ fontSize: '0.9rem' }}>
                            Professional taxi services connecting Eastern Province, KSA to Bahrain.
                        </p>
                    </div>
                    <div>
                        <h3>LOCATIONS</h3>
                        <ul style={{ listStyle: 'square', paddingLeft: '1.2rem', lineHeight: '1.8', fontSize: '0.9rem' }}>
                            <li><Link href="/locations/al-khobar">Al Khobar</Link></li>
                            <li><Link href="/locations/jubail">Jubail</Link></li>
                            <li><Link href="/locations/riyadh">Riyadh</Link></li>
                            <li><Link href="/locations/dammam">Dammam Airport</Link></li>
                            <li><Link href="/locations/bahrain">Bahrain Return</Link></li>
                            <li><Link href="/locations/hofuf">Al Ahsa / Hofuf</Link></li>
                            <li><Link href="/locations/ras-tanura">Ras Tanura</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>RESOURCES</h3>
                        <ul style={{ listStyle: 'square', paddingLeft: '1.2rem', lineHeight: '1.8', fontSize: '0.9rem' }}>
                            <li><Link href="/travel-guide">Travel Guide</Link></li>
                            <li><Link href="/fleet">Our Fleet</Link></li>
                            <li><Link href="/corporate">Corporate Accounts</Link></li>
                            <li><Link href="/services">Services & Rates</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>CONTACT</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            <strong>WhatsApp:</strong> +1 (307) 346-4572
                        </p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            <strong>Email:</strong> booking@dammamtobahrain.com
                        </p>
                        <Link href="/booking" className="btn btn-primary" style={{ marginTop: '10px', fontSize: '0.8rem', padding: '10px 20px' }}>
                            BOOK ONLINE
                        </Link>
                    </div>
                </div>

                {/* Clean, Natural SEO Link */}
                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem' }}>
                        Serving all major cities and industrial hubs in the Eastern Province. <Link href="/locations" style={{ textDecoration: 'underline' }}>View Full Coverage Map</Link>
                    </p>
                </div>
                <div style={{ borderTop: '1px solid #000', marginTop: '3rem', paddingTop: '1rem', textAlign: 'center', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <Link href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</Link> |
                        <Link href="/terms-conditions" style={{ margin: '0 10px' }}>Terms & Conditions</Link> |
                        <Link href="/about-us" style={{ margin: '0 10px' }}>About Us</Link>
                    </div>
                    &copy; {new Date().getFullYear()} Dammam to Bahrain Taxi. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
