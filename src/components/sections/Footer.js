import Link from "next/link";

export default function Footer() {
    return (
        <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '4rem 0 2rem 0' }}>
            <div className="container">
                <div className="grid-module">

                    <div className="col-span-12 col-span-4"> {/* Mobile first: Full, then 4/12 */}
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', letterSpacing: '2px' }}>EXECUTIVE CAUSEWAY</h3>
                        <p style={{ opacity: 0.7, lineHeight: '1.8', maxWidth: '300px' }}>
                            The premier executive transport service connecting Saudi Arabia and Bahrain. Reliability, luxury, and privacy guaranteed for the modern leader.
                        </p>
                    </div>

                    <div className="col-span-12 col-span-2">
                        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link href="/about" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>About Us</Link></li>
                            <li><Link href="/services" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Services</Link></li>
                            <li><Link href="/fleet" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Our Fleet</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-12 col-span-2">
                        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Support</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link href="/faq" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>FAQ</Link></li>
                            <li><Link href="/contact" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Contact</Link></li>
                            <li><Link href="/policy" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Booking Policy</Link></li>
                        </ul>
                    </div>


                    <div className="col-span-12 col-span-2">
                        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link href="/blog/causeway-traffic-guide" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Traffic Guide</Link></li>
                            <li><Link href="/services/student-transport" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Student Rides</Link></li>
                            <li><Link href="/services/pet-transport" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Pet Taxi</Link></li>
                            <li><Link href="/services/visa-run" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>Visa Run</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-12 col-span-2">

                        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Contact</h4>
                        <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>+1 (307) 346-4572</p>
                        <p style={{ opacity: 0.7 }}>bookings@dammam-taxi.com</p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            {/* Social Icons Placeholder */}
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Dammam to Bahrain Taxi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
