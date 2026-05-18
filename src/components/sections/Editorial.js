import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Editorial() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid-module" style={{ alignItems: 'center' }}>

                    {/* Text Content - Spans 5 columns */}
                    <div className="col-span-12 col-span-6" style={{ paddingRight: '0' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Seamless Travel Across Borders</h2>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.65' }}>
                            For the discerning traveler, the journey is as important as the destination. We bridge the gap between Dammam and Bahrain with a fleet of premium vehicles and chauffeurs who understand the nuance of executive travel.
                        </p>
                        <p>
                            Forget the stress of the causeway. Our VIP lane access and immigration expertise ensure your crossing is swift and smooth, allowing you to focus on your business or leisure.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--color-accent)', fontWeight: '800' }}>15k+</h4>
                                <p style={{ fontSize: '0.9rem' }}>Safe Crossings</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--color-accent)', fontWeight: '800' }}>45m</h4>
                                <p style={{ fontSize: '0.9rem' }}>Average Time</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual - Spans 6 columns */}
                    <div className="col-span-12 col-span-6" style={{ position: 'relative', height: 'clamp(300px, 50vh, 600px)', width: '100%', marginTop: '3rem' }}>
                        <div style={{
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <img 
                                src="/causeway-view.jpg" 
                                alt="Aerial view of King Fahd Causeway connecting Saudi Arabia and Bahrain" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                            />
                            {/* Decorative Grid Element */}
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                background: 'rgba(255,255,255,0.9)',
                                backdropFilter: 'blur(10px)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>KING FAHD CAUSEWAY</p>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>The Gateway to Bahrain</p>
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-1rem',
                            left: '-1rem',
                            width: '150px',
                            height: '150px',
                            border: '10px solid var(--color-accent)',
                            zIndex: -1,
                            borderRadius: '12px'
                        }} className="desktop-only"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
