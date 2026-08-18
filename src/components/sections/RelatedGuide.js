
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

                <div style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                }}>
                    <span style={{ color: '#6c757d', fontWeight: 700 }}>Explore Our Main Routes:</span>
                    <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Dammam → Bahrain</Link>
                    <Link href="/services/bahrain-to-dammam/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Bahrain → Dammam</Link>
                    <Link href="/services/khobar-to-bahrain/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Khobar ⇄ Bahrain</Link>
                    <Link href="/services/dammam-airport-to-bahrain/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>DMM Airport → Bahrain</Link>
                    <Link href="/services/bahrain-airport-to-dammam/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>BAH Airport → Dammam</Link>
                </div>
            </div>
        </section>
    );
}
