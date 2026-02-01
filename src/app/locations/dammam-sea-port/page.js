import Link from 'next/link';

export const metadata = {
    title: "Dammam Sea Port to Bahrain | Ship Crew Transfer",
    description: "Taxi service from King Abdulaziz Port (Dammam Sea Port) to Bahrain. Transfers for ship crew, marine agents, and customs officers.",
};

export default function DammamPortPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: DAMMAM SEA PORT TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Ship-to-Shore-to-Border.</strong> We specialize in transferring marine crew signing off at King Abdulaziz Port in Dammam and needing to reach Bahrain for their flight home or shore leave.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Gate Access</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Main Gate:</strong> We pick up primarily at the main security gate.</li>
                                <li><strong>Seaman's Club:</strong> Popular pickup spot for crew on shore leave.</li>
                                <li><strong>Customs Center:</strong> For agents clearing cargo.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Marine Agents</h2>
                            <p>We work directly with shipping agents to coordinate crew changes. If you are an agent booking for a captain or crew, please provide the <strong>Gate Pass expiry time</strong> to ensure timely pickup.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Heavy Bags</h2>
                            <p>Seamen often travel with 6-9 months of gear. A standard sedan can sometimes struggle. We recommend our <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Hyundai Staria</Link> or <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>Yukon</Link> for crew movements involving more than 2 people.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK PORT TRANSFER
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Dammam Sea Port</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~75 KM</li>
                                <li><strong>Time:</strong> ~1 hr 15 min</li>
                                <li><strong>Price:</strong> From 120 SAR</li>
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
