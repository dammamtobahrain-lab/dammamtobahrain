export default function SocialProof() {
    return (
        <section className="section" style={{ padding: '2rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Trusted Professional Chauffeurs</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6, grayscale: '100%' }}>
                    {/* Ideally replace with real logos of companies or partners */}
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Saudi Aramco</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SABIC</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Bahrain Airport</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Marriott</span>
                </div>
            </div>
        </section>
    );
}
