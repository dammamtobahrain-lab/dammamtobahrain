import Link from 'next/link';
import { Navigation } from 'lucide-react';

export default function NearbyAreas({ areas, cityName }) {
    if (!areas || areas.length === 0) return null;

    return (
        <section style={{ margin: '3rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Nearby Routes
                </span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    Also Serving Areas Near {cityName}
                </h2>
                <p style={{ fontSize: '0.95rem' }}>
                    Driving distances from {cityName} to the King Fahd Causeway and nearby pickup points.
                </p>
            </div>

            <div className="nearby-grid">
                {areas.map((area, i) => (
                    <Link
                        key={i}
                        href={area.slug ? `/locations/${area.slug}/` : '#'}
                        className="nearby-card"
                    >
                        <Navigation size={18} color="var(--color-accent)" />
                        <div className="nearby-info">
                            <p className="nearby-name">{area.name}</p>
                            <p className="nearby-distance">{area.distance} drive · {area.km}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
