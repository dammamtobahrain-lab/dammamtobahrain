import { MapPin, Building, Route, School, Landmark } from 'lucide-react';

export default function LocalGuide({ landmarks, neighborhoods, highways, cityName, seasonalDemand, regulations }) {
    if (!landmarks && !neighborhoods && !highways) return null;

    return (
        <section className="local-guide-section">
            <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Local Area Guide
            </span>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                Know Your Area: {cityName}
            </h2>

            {landmarks && landmarks.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3><Landmark size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Key Landmarks & Points of Interest</h3>
                    <div className="landmarks-grid">
                        {landmarks.map((item, i) => (
                            <div key={i} className="landmark-item">
                                <MapPin size={16} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {neighborhoods && neighborhoods.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3><Building size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Neighborhoods We Serve</h3>
                    <div className="landmarks-grid">
                        {neighborhoods.map((item, i) => (
                            <div key={i} className="landmark-item">
                                <Building size={16} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {highways && highways.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3><Route size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Highways & Access Roads</h3>
                    <div className="landmarks-grid">
                        {highways.map((item, i) => (
                            <div key={i} className="landmark-item">
                                <Route size={16} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {seasonalDemand && (
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Seasonal Demand Patterns</h3>
                    <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>{seasonalDemand}</p>
                </div>
            )}

            {regulations && (
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Local Regulations & Requirements</h3>
                    <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>{regulations}</p>
                </div>
            )}
        </section>
    );
}
