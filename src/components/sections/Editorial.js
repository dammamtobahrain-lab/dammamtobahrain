import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Editorial() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid-module" style={{ alignItems: 'center' }}>

                    {/* Text Content - Spans 5 columns */}
                    <div className="col-span-12 col-span-6" style={{ paddingRight: '2rem' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Seamless Travel Across Borders</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
                            For the discerning traveler, the journey is as important as the destination. We bridge the gap between Dammam and Bahrain with a fleet of premium vehicles and chauffeurs who understand the nuance of executive travel.
                        </p>
                        <p>
                            Forget the stress of the causeway. Our VIP lane access and immigration expertise ensure your crossing is swift and smooth, allowing you to focus on your business or leisure.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>15k+</h4>
                                <p style={{ fontSize: '0.9rem' }}>Safe Crossings</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>45m</h4>
                                <p style={{ fontSize: '0.9rem' }}>Average Time</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual - Spans 6 columns */}
                    <div className="col-span-12 col-span-6">
                        <div style={{
                            position: 'relative',
                            height: '600px',
                            width: '100%',
                            backgroundColor: '#eee',
                            backgroundImage: 'url(/causeway-view.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            {/* Decorative Grid Element */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-2rem',
                                left: '-2rem',
                                width: '200px',
                                height: '200px',
                                border: '10px solid var(--color-accent)',
                                zIndex: -1
                            }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
