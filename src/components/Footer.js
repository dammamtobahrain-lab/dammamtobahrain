import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Brand Column */}
                    <div>
                        <h3>DAMMAM TO BAHRAIN</h3>
                        <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            The trusted choice for cross-border executive travel. We connect the Kingdom of Saudi Arabia and Bahrain with safety, luxury, and punctuality.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            {/* Social Placeholders */}
                            <Link href="#" aria-label="Facebook"><Facebook size={20} color="white" /></Link>
                            <Link href="#" aria-label="Instagram"><Instagram size={20} color="white" /></Link>
                            <Link href="#" aria-label="Twitter"><Twitter size={20} color="white" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3>QUICK LINKS</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><Link href="/services/">Our Services & Rates</Link></li>
                            <li><Link href="/fleet/">Luxury Fleet</Link></li>
                            <li><Link href="/locations/">All Service Areas</Link></li>
                            <li><Link href="/services/visa-run/">Saudi Visa Run</Link></li>
                            <li><Link href="/travel-guide/">Bahrain Travel Guide</Link></li>
                            <li><Link href="/blog/">Blog & Guides</Link></li>
                            <li><Link href="/contact-us/">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Locations - Internal Linking */}
                    <div>
                        <h3>POPULAR ROUTES</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><Link href="/locations/al-khobar/">Al Khobar to Bahrain Taxi</Link></li>
                            <li><Link href="/locations/dammam/">Dammam to Bahrain Service</Link></li>
                            <li><Link href="/locations/jubail/">Jubail to Bahrain Transfer</Link></li>
                            <li><Link href="/locations/dhahran/">Dhahran Causeway Taxi</Link></li>
                            <li><Link href="/locations/riyadh/">Riyadh to Bahrain Drive</Link></li>
                            <li><Link href="/locations/dammam-airport/">DMM Airport Pickup</Link></li>
                            <li><Link href="/locations/qatif/">Qatif to Bahrain Ride</Link></li>
                            <li><Link href="/locations/hofuf/">Al-Ahsa / Hofuf Taxi</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3>CONTACT US</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc' }}>
                                <Phone size={18} color="var(--color-accent)" />
                                <span>+92 308 0628195</span>
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
                        <Link href="https://wa.me/923080628195" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', border: '1px solid var(--color-accent)', color: 'white' }}>
                            Book via WhatsApp
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#888' }}>
                    <div>
                        &copy; {new Date().getFullYear()} Dammam to Bahrain Taxi. All Rights Reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '10px' }}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms of Service</Link>
                        <Link href="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
