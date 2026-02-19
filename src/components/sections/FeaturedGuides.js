
import Link from 'next/link';
import Image from 'next/image';

const guides = [
    {
        title: "Dammam to Bahrain Taxi Cost Guide 2026",
        description: "The complete breakdown of taxi fares, hidden costs, and vehicle types for your journey.",
        link: "/blog/cost-guide-2026",
        badge: "Essential Reading"
    },
    {
        title: "Bus vs. Taxi vs. Uber: The 2026 Showdown",
        description: "We compare SAPTCO, Uber, and private taxis on price, speed, and comfort. Don't book until you read this.",
        link: "/blog/dammam-to-bahrain-bus-vs-taxi",
        badge: "New Comparison"
    }
];

export default function FeaturedGuides() {
    return (
        <section className="section" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="section-title">
                    <span>Expert Advice</span>
                    <h2>Essential Travel Guides</h2>
                    <p>Make informed decisions for your cross-border journey.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {guides.map((guide, index) => (
                        <Link href={guide.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card guide-card" style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                background: '#fff',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid #e9ecef',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '99px',
                                    background: 'var(--color-accent)',
                                    color: '#000',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem',
                                    width: 'fit-content'
                                }}>
                                    {guide.badge}
                                </span>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                                    {guide.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', flex: 1 }}>
                                    {guide.description}
                                </p>
                                <span style={{
                                    marginTop: '1.5rem',
                                    color: 'var(--color-primary)',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Read Guide <span>→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
