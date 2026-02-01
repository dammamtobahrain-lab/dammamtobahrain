import Link from 'next/link';

export const metadata = {
    title: "Saudi Visa Run to Bahrain | Turnaround Taxi Service",
    description: "Same-day visa run taxi service to Bahrain. Renew your Saudi tourist or visit visa with a quick border crossing trip.",
};

export default function VisaRunPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: SAUDI VISA RUN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Need to renew your Saudi Visit Visa?</strong> Thousands of expatriates and tourists use the King Fahd Causeway for their "Visa Run" every month. We offer a specialized, hassle-free turnaround service designed specifically for this purpose.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>How It Works</h2>
                            <ol style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Pickup:</strong> We collect you from your home in Khobar, Dammam, or Riyadh.</li>
                                <li style={{ marginBottom: '10px' }}><strong>The Exit:</strong> We drive you to the Saudi Passport Control to stamp you "EXIT".</li>
                                <li style={{ marginBottom: '10px' }}><strong>The U-Turn:</strong> We drive you across the bridge to Bahrain. You can choose to enter Bahrain for a coffee (1-hour stop) or, in some cases, perform an immediate U-turn (subject to current border rules).</li>
                                <li style={{ marginBottom: '10px' }}><strong>The Re-Entry:</strong> We drive you back to Saudi Passport Control to stamp you "ENTRY", activating your new visa duration.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Drop-off:</strong> We take you back home.</li>
                            </ol>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Why Book a Private Taxi?</h2>
                            <p>Doing a visa run on a public bus is exhausting. You have to offload your luggage, navigate immigration halls on foot, wait for the bus to reload, and repeat the process four times (Saudi Exit, Bahrain Entry, Bahrain Exit, Saudi Entry). With our private car service:</p>
                            <ul style={{ listStyle: 'square', paddingLeft: '20px' }}>
                                <li>Your AC is always on.</li>
                                <li>You stay in the car (mostly).</li>
                                <li>The driver guides you on which window to use.</li>
                                <li>It turns a 6-hour ordeal into a 2-hour breeze.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pricing</h2>
                            <p>Since this is a round-trip service with waiting time included, we offer a flat "Visa Run Package" starting from <strong>550 SAR</strong> (from Khobar/Dammam). This includes up to 2 hours of waiting time in Bahrain if you wish to grab lunch.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK VISA RUN
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>PACKAGE DETAILS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Type:</strong> Round Trip (Same Day)</li>
                                <li><strong>Wait Time:</strong> 2 Hours Included</li>
                                <li><strong>Total Duration:</strong> ~3-4 Hours</li>
                                <li><strong>Requirement:</strong> Valid Passport</li>
                                <li><strong>Price:</strong> Flat Rate</li>
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
