import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';
import Image from 'next/image';

export const metadata = {
    title: "King Fahd Causeway Guide 2026 | Traffic, Fees, Requirements & Insurance",
    description: "The complete 2026 guide to crossing the King Fahd Causeway. Real-time traffic tips, toll fees (25 SAR), insurance requirements, visa rules, and best times to travel from Saudi Arabia to Bahrain.",
    keywords: ["King Fahd Causeway traffic", "Saudi Bahrain Causeway fees", "Causeway insurance 2026", "Bahrain visa on arrival", "crossing King Fahd Causeway rules"],
    alternates: {
        canonical: 'https://dammamtobahrain.com/blog/causeway-traffic-guide',
    },
};

const guideFAQs = [
    {
        question: "How much is the King Fahd Causeway toll fee in 2026?",
        answer: "The toll fee is 25 SAR (or 2.5 BHD) for passenger vehicles. This is paid at the toll booth on the departure side. Payment can be made via cash, card (Mada/Visa/Mastercard), or the 'Jesr' app."
    },
    {
        question: "What documents do I need to cross from Saudi to Bahrain?",
        answer: "You need a valid passport (minimum 6 months validity). GCC nationals can use their National ID card. Residents (Iqama holders) must have a valid Exit-Reentry visa or multi-entry visa. Vehicle owners need a valid vehicle registration (Istimara) and if the car is not in your name, a driving authorization from Absher is mandatory."
    },
    {
        question: "Do I need extra car insurance for Bahrain?",
        answer: "Yes. Your Saudi insurance does not cover Bahrain. You must purchase causeway insurance at the border cabins (United Insurance) or online via the 'United Insurance' website. Rates start from approximately 15 SAR for short visits."
    },
    {
        question: "What is the best time to cross the causeway?",
        answer: "The 'Golden Windows' are Tuesday and Wednesday between 9 AM and 11 AM, when crossing takes under 30 minutes. The worst times are Thursday evenings (2 PM - 10 PM) and Saturday afternoons (1 PM - 9 PM) where delays can exceed 2 hours."
    },
    {
        question: "Is there a VIP lane or Fast Track?",
        answer: "Yes, there is a dedicated lane for diplomats and specific membership card holders. Our premium taxi service often has access to expedited processing lanes or optimized routes to minimize wait times."
    }
];

export default function CausewayGuidePage() {
    return (
        <>
            <SchemaMarkup type="article" data={{
                headline: "The Ultimate King Fahd Causeway Guide 2026",
                datePublished: "2026-02-20",
                author: "Dammam to Bahrain Taxi",
                image: "https://dammamtobahrain.com/images/causeway-guide.jpg",
                faqs: guideFAQs,
                breadcrumbs: [
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' },
                    { name: 'Causeway Guide', url: '/blog/causeway-traffic-guide' }
                ]
            }} />

            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="blog-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>Travel Guide</span>
                        <h1 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>The Ultimate Guide to King Fahd Causeway (2026 Edition)</h1>
                        <p style={{ color: '#666', fontSize: '1.1rem' }}>Traffic hacks, hidden fees, insurance rules, and everything you need to know before driving from Saudi Arabia to Bahrain.</p>
                    </div>

                    <div className="blog-content" style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', lineHeight: '1.8', color: '#333' }}>
                        <p>
                            Crossing the 25-kilometer King Fahd Causeway is the gateway to a weekend of relaxation in Bahrain. But for the unprepared, it can become a bottleneck of frustration.
                            Whether you are a first-time visitor or a weekly commuter from Al Khobar, this 2026 guide covers every regulation, fee, and tip to ensure your journey is smooth.
                        </p>

                        <div style={{ background: '#f8f9fa', padding: '2rem', borderLeft: '4px solid var(--color-primary)', margin: '2rem 0' }}>
                            <h3 style={{ marginTop: '0', fontFamily: 'Arial, sans-serif' }}>Quick Facts (2026)</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>💰 <strong>Toll Fee:</strong> 25 SAR / 2.5 BHD (One Way)</li>
                                <li style={{ marginBottom: '0.5rem' }}>📄 <strong>Insurance:</strong> Mandatory (United Insurance)</li>
                                <li style={{ marginBottom: '0.5rem' }}>⏱️ <strong>Avg. Crossing Time:</strong> 45-60 mins (Off-Peak)</li>
                                <li>🌍 <strong>Length:</strong> 25 km (15.5 miles)</li>
                            </ul>
                        </div>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '3rem' }}>1. Required Documents Check</h2>
                        <p>Before you even leave your driveway in Dammam or Khobar, ensure you have these physical documents. Digital copies are predominantly accepted in 2026, but hard copies remain a safe backup.</p>

                        <h3 style={{ fontFamily: 'Arial, sans-serif' }}>For Passengers</h3>
                        <ul>
                            <li><strong>Passport:</strong> Must be valid for at least 6 months.</li>
                            <li><strong>National ID:</strong> For GCC citizens (Saudi, Kuwaiti, etc.).</li>
                            <li><strong>Iqama (Residents):</strong> Must be valid.</li>
                            <li><strong>Visa/Exit-Reentry:</strong>
                                <ul>
                                    <li>Residents: Active Exit-Reentry visa (Single or Multiple).</li>
                                    <li>Visitors: Multiple-entry tourist visa (check validity).</li>
                                </ul>
                            </li>
                        </ul>

                        <h3 style={{ fontFamily: 'Arial, sans-serif' }}>For Vehicles</h3>
                        <ul>
                            <li><strong>Vehicle Registration (Istimara):</strong> Must be valid and original card present.</li>
                            <li><strong>Driving Authorization (Tafweed):</strong> If the car is not in your name (e.g., bank leased, company car, or friend's car), you MUST have an active authorization via Absher.</li>
                            <li><strong>Saudi Driving License:</strong> Valid.</li>
                        </ul>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '3rem' }}>2. Causeway Insurance (United Insurance)</h2>
                        <p>
                            Your standard Saudi vehicle insurance (Tawuniya, Malath, etc.) <strong>does not cover you in Bahrain</strong>. You must purchase third-party liability insurance specific to Bahrain.
                        </p>
                        <p>
                            <strong>Where to buy:</strong>
                            <br />
                            1. <strong>Booths:</strong> Drive-through booths are available after Saudi passport control (can have long queues).
                            <br />
                            2. <strong>Online (Recommended):</strong> Use the 'United Insurance' app or website to purchase before you travel. You can buy policies for:
                        </p>
                        <ul>
                            <li>3 Days (Weekend trip)</li>
                            <li>10 Days</li>
                            <li>1 Month (Frequent traveler)</li>
                            <li>6 Months / 1 Year (Commuter)</li>
                        </ul>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '3rem' }}>3. Traffic 101: When to Travel</h2>
                        <p>
                            Traffic volume changes drastically by the hour. Based on our fleet data from over 15,000 trips, here is the cheat sheet:
                        </p>

                        <div className="traffic-guide-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                            <div style={{ background: '#ffebee', padding: '1.5rem', borderRadius: '8px' }}>
                                <h4 style={{ color: '#c62828', marginTop: 0 }}>🚫 THE RED ZONE (Avoid)</h4>
                                <ul style={{ fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
                                    <li><strong>Thursday:</strong> 2:00 PM - 10:00 PM</li>
                                    <li><strong>Friday:</strong> 10:00 AM - 2:00 PM</li>
                                    <li><strong>Saturday:</strong> 1:00 PM - 9:00 PM (Return)</li>
                                </ul>
                            </div>
                            <div style={{ background: '#e8f5e9', padding: '1.5rem', borderRadius: '8px' }}>
                                <h4 style={{ color: '#2e7d32', marginTop: 0 }}>✅ THE GREEN ZONE (Go)</h4>
                                <ul style={{ fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
                                    <li><strong>Sun-Wed:</strong> 8:00 AM - 3:00 PM</li>
                                    <li><strong>Late Night:</strong> After 11:30 PM (Daily)</li>
                                    <li><strong>Friday Morning:</strong> Before 9:00 AM</li>
                                </ul>
                            </div>
                        </div>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '3rem' }}>4. The Crossing Procedure (Step-by-Step)</h2>
                        <ol style={{ paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem' }}><strong>Toll Gate (Saudi Side):</strong> Pay 25 SAR. Keep the receipt.</li>
                            <li style={{ marginBottom: '1rem' }}><strong>Saudi Passport Control:</strong> Hand over passports/Iqamas. Verify biometrics if asked.</li>
                            <li style={{ marginBottom: '1rem' }}><strong>Vehicle Customs (Saudi):</strong> Quick visual check. Verification of Tafweed if applicable.</li>
                            <li style={{ marginBottom: '1rem' }}><strong>The Bridge Drive:</strong> 12km drive over the water to the border island.</li>
                            <li style={{ marginBottom: '1rem' }}><strong>Bahrain Passport Control:</strong> Entry stamp. Visa on Arrival processing happens here (pay via card/cash).</li>
                            <li style={{ marginBottom: '1rem' }}><strong>Bahrain Customs:</strong> Vehicle inspection. Declare any goods above limits.</li>
                            <li style={{ marginBottom: '1rem' }}><strong>Insurance Check:</strong> Show your United Insurance policy (digital or paper).</li>
                            <li><strong>Welcome to Bahrain!</strong> Proceed to Manama (approx. 20-30 mins).</li>
                        </ol>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '3rem' }}>Skip the Stress: Book a Private Transfer</h2>
                        <p>
                            Why handle the driving, authorization forms, and insurance queues yourself? Our <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Premium Taxi Service</Link> handles everything.
                            Our drivers perform the vehicle authorization, hold annual insurance policies, and know exactly which lanes move fastest. You simply sit back, connect to Wi-Fi, and enjoy the view.
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/booking/" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                            BOOK A HASSLE-FREE RIDE
                        </Link>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                            Available 24/7 from Dammam, Khobar, Dhahran, and Jubail.
                        </p>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
                        <h3 style={{ marginTop: 0, borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Related Resources</h3>
                        <ul className="related-links" style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
                            <li><span style={{ marginRight: '10px' }}>📄</span> <Link href="/blog/cost-guide-2026" style={{ textDecoration: 'underline' }}>2026 Taxi Price Guide: Dammam to Bahrain</Link></li>
                            <li><span style={{ marginRight: '10px' }}>🛂</span> <Link href="/services/visa-run" style={{ textDecoration: 'underline' }}>Need a Visa Stamp? Book a Visa Run</Link></li>
                            <li><span style={{ marginRight: '10px' }}>📍</span> <Link href="/locations/al-khobar" style={{ textDecoration: 'underline' }}>Al Khobar to Bahrain Taxi Service</Link></li>
                        </ul>
                    </div>

                    <div className="author-bio" style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                        <div style={{ width: '60px', height: '60px', background: '#ccc', borderRadius: '50%', flexShrink: 0 }}></div>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Written by the Operations Team</p>
                            <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
                                Dammam to Bahrain Taxi | Specialized in cross-border logistics since 2018.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ExpertInsight
                text="The biggest mistake we see travelers make is ignoring the 'Tafweed' (Vehicle Authorization). If you are driving a car that is under a bank lease or a company name, and you don't have the active Absher authorization, you WILL be turned back at the Saudi border. It happens every single day. Our taxi service eliminates this risk completely as our fleet carries commercial cross-border permits."
                author="Chief Fleet Manager"
                cityName="Saudi-Bahrain Border"
            />

            <PageFAQ faqs={guideFAQs} cityName="King Fahd Causeway" />
            <TrustBar clientsServed="5,000+" />
            <LastUpdated date="February 20, 2026" />
        </>
    );
}
