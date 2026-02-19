import LocationsGrid from '@/components/LocationsGrid';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "Corporate Taxi Accounts | Business Transport Saudi-Bahrain 2026",
    description: "Corporate transport solutions for companies in KSA and Bahrain. Monthly invoicing, priority causeway dispatch, executive chauffeur fleet. Serving Aramco, SABIC, and 50+ corporate clients.",
};

export default function CorporatePage() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h1 className="section-title">CORPORATE SOLUTIONS</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <p>
                                Business between the Eastern Province and Bahrain is the economic engine of the region. We understand that for corporate clients, reliability is not a luxury—it is an operational necessity. We offer customized transport solutions for companies requiring frequent cross-border mobility.
                            </p>

                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginTop: '2rem', borderBottom: '1px solid #000', paddingBottom: '5px' }}>The Corporate Advantage</h3>
                            <p>
                                By opening a corporate account with Dammam to Bahrain Taxi, your organization gains access to:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: '1rem 0' }}>
                                <li><strong>Monthly Invoicing:</strong> Reduce petty cash handling. We provide a single consolidated invoice at the end of the month with detailed trip logs.</li>
                                <li><strong>Priority Dispatch:</strong> During peak times (Thursday evenings), corporate bookings take precedence in our allocation system.</li>
                                <li><strong>Fixed Rate Cards:</strong> Inflation-proof pricing locked in for the contract duration.</li>
                                <li><strong>VIP Lane Access:</strong> For eligible executives, we utilize the VIP causeway lanes (subject to individual diplomatic eligibility).</li>
                            </ul>

                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginTop: '2rem', borderBottom: '1px solid #000', paddingBottom: '5px' }}>Who We Serve</h3>
                            <p>
                                Our current portfolio includes:
                            </p>
                            <ul>
                                <li><strong>Oil & Gas Service Companies:</strong> Transporting engineers from Al Khobar to rigs/offices in Bahrain.</li>
                                <li><strong>Consultancy Firms:</strong> Moving consultants between Riyadh and Manama.</li>
                                <li><strong>Event Organizers:</strong> Shuttle services for conferences and exhibitions at the Bahrain Exhibition World.</li>
                            </ul>

                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginTop: '2rem', borderBottom: '1px solid #000', paddingBottom: '5px' }}>Open an Account</h3>
                            <p>
                                To onboard your company, we require:
                            </p>
                            <ol>
                                <li>Commercial Registration (CR) Copy.</li>
                                <li>Authorized Signatory Letter.</li>
                                <li>Estimated Monthly Volume.</li>
                            </ol>
                            <p>
                                Contact our sales manager directly at <strong style={{ fontFamily: 'Arial, sans-serif' }}>corporate@dammamtobahrain.com</strong> to discuss rates.
                            </p>

                            <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px dashed #000', textAlign: 'center' }}>
                                <h4 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '0.5rem' }}>IMMEDIATE BUSINESS REQUEST?</h4>
                                <p style={{ margin: 0 }}>You can book a "Guest Trip" instantly without an account.</p>
                                <a href="/booking" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>BOOK BUSINESS RIDE</a>
                            </div>

                        </div>

                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', height: 'fit-content' }}>
                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.5rem' }}>Service Inquiry</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.8rem', fontFamily: 'Arial, sans-serif' }}>COMPANY NAME</label>
                                    <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #000' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.8rem', fontFamily: 'Arial, sans-serif' }}>CONTACT PERSON</label>
                                    <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #000' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.8rem', fontFamily: 'Arial, sans-serif' }}>BUSINESS EMAIL</label>
                                    <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #000' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.8rem', fontFamily: 'Arial, sans-serif' }}>EST. TRIPS PER MONTH</label>
                                    <select style={{ width: '100%', padding: '10px', border: '1px solid #000' }}>
                                        <option>1 - 5 Trips</option>
                                        <option>5 - 20 Trips</option>
                                        <option>20+ Trips</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: '1rem' }}>REQUEST PROPOSAL</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* Expert Insight */}
            <div className="section" style={{ padding: '0 0 2rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <ExpertInsight
                        text="We serve over 50 corporate clients across the Eastern Province, from multinational energy companies to boutique consultancy firms. The key to corporate transport is consistency — same high standard, every single trip. Our corporate clients value our monthly invoicing system, which eliminates petty cash hassles and provides clean audit trails for expense reporting."
                        cityName="Corporate"
                        author="Corporate Sales Manager, Dammam to Bahrain Taxi"
                    />
                </div>
            </div>

            <TrustBar clientsServed="50+ companies" />

            <LocationsGrid />

            <SchemaMarkup type="service" data={{
                serviceName: 'Corporate Taxi Service',
                serviceDescription: 'Corporate transport solutions with monthly invoicing, priority dispatch, and executive fleet access.',
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Corporate', href: '/corporate/' },
                ],
            }} />

            <div className="container">
                <LastUpdated date="February 19, 2026" />
            </div>
        </>
    );
}
