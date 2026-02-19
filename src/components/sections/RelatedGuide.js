
import Link from 'next/link';

export default function RelatedGuide() {
    return (
        <section className="section" style={{ padding: '0 0 4rem 0' }}>
            <div className="container">
                <div style={{
                    background: '#f8f9fa',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1rem'
                }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Want to know the full 2026 Price Breakdown?</h3>
                    <p style={{ margin: 0, color: '#6c757d' }}>
                        We have published a complete guide on taxi fares, hidden costs, and vehicle types for the Saudi-Bahrain crossing.
                    </p>
                    <Link href="/blog/cost-guide-2026" className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
                        Read the 2026 Cost Guide
                    </Link>
                </div>
            </div>
        </section>
    );
}
