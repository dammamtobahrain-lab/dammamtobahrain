import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Brand Column */}
                    <div>
                        <h3>DAMMAM TO BAHRAIN</h3>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.65' }}>
                            The trusted choice for cross-border executive travel. Connecting Saudi Arabia and Bahrain with safety, luxury, and punctuality since 2018.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <Link href="https://www.facebook.com/dammamtobahrain" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#ccc', fontSize: '0.85rem', textDecoration: 'none' }}>Facebook</Link>
                            <Link href="https://www.instagram.com/dammamtobahrain" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#ccc', fontSize: '0.85rem', textDecoration: 'none' }}>Instagram</Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3>QUICK LINKS</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><Link href="/fare-calculator/">Fare Calculator</Link></li>
                            <li><Link href="/booking/">Book a Ride</Link></li>
                            <li><Link href="/services/">Our Services</Link></li>
                            <li><Link href="/fleet/">Luxury Fleet</Link></li>
                            <li><Link href="/locations/">All Service Areas</Link></li>
                            <li><Link href="/causeway-traffic/">Causeway Traffic</Link></li>
                            <li><Link href="/drivers/">Our Drivers</Link></li>
                            <li><Link href="/about-us/">About Us</Link></li>
                            <li><Link href="/faq/">FAQ</Link></li>
                            <li><Link href="/blog/">Blog & Guides</Link></li>
                            <li><Link href="/destinations/">Bahrain Destinations</Link></li>
                            <li><Link href="/reviews/">Customer Reviews</Link></li>
                            <li><Link href="/contact-us/">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Popular Routes */}
                    <div>
                        <h3>POPULAR ROUTES</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><Link href="/locations/al-khobar/">Al Khobar → Bahrain</Link></li>
                            <li><Link href="/locations/dammam/">Dammam → Bahrain</Link></li>
                            <li><Link href="/locations/jubail/">Jubail → Bahrain</Link></li>
                            <li><Link href="/locations/dhahran/">Dhahran → Bahrain</Link></li>
                            <li><Link href="/locations/riyadh/">Riyadh → Bahrain</Link></li>
                            <li><Link href="/locations/dammam-airport/">DMM Airport Pickup</Link></li>
                            <li><Link href="/locations/qatif/">Qatif → Bahrain</Link></li>
                            <li><Link href="/locations/hofuf/">Hofuf → Bahrain</Link></li>
                            <li><Link href="/routes/riyadh-to-bahrain-airport/">Riyadh → Bahrain Airport</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3>CONTACT US</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc' }}>
                                <Phone size={18} color="var(--color-accent)" />
                                <span>+966 56 948 7569</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc' }}>
                                <Mail size={18} color="var(--color-accent)" />
                                <span>booking@dammamtobahrain.com</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc' }}>
                                <Clock size={18} color="var(--color-accent)" />
                                <span>24/7 Operations</span>
                            </li>
                        </ul>
                        <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', border: '1px solid var(--color-accent)', color: 'white' }}>
                            Book via WhatsApp
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center', fontSize: '0.85rem', color: '#888', textAlign: 'center' }}>
                    <div style={{ width: '100%' }}>
                        &copy; {new Date().getFullYear()} Dammam to Bahrain Taxi. All Rights Reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/privacy-policy/">Privacy Policy</Link>
                        <Link href="/terms-conditions/">Terms of Service</Link>
                        <Link href="/faq/">FAQ</Link>
                        <Link href="/about-us/">About Us</Link>
                        <Link href="/sitemap.xml">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
