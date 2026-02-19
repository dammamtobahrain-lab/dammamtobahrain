import Link from "next/link";
import Button from "@/components/ui/Button";

// Reusable Page Hero Component
// Standardizes the "Hero" look across all inner pages to match the Home Page (2-column layout)
// Props:
// - title: Main H1 text
// - subtitle: Supporting text
// - image: Background image (optional, defaults to standard)
// - label: Small label (e.g. "SERVICE AREA")

export default function PageHero({
    title,
    subtitle,
    label = "PREMIUM TRANSPORT",
    image = "/images/hero.png", // Default image if none provided
    ctaText = "Book Now",
    ctaLink = "https://wa.me/13073464572"
}) {
    return (
        <section className="section" style={{ paddingBottom: '0', background: '#fafafa' }}>
            <div className="container">
                <div className="grid-hero">

                    {/* Left Content */}
                    <div style={{ maxWidth: '600px' }}>
                        <div className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                            <span className="animate-fade-up" style={{
                                display: 'block',
                                color: 'var(--color-text-muted)',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}>
                                {label}
                            </span>

                            <h1 className="animate-fade-up delay-100" style={{ marginBottom: '1rem', fontSize: '3rem', lineHeight: '1.2' }}>
                                {title}
                            </h1>

                            <p className="animate-fade-up delay-200" style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                {subtitle}
                            </p>
                        </div>

                        <div className="hero-cta-group animate-fade-up delay-300">
                            <Button href={ctaLink}>
                                {ctaText}
                            </Button>

                            {/* Optional: Add Secondary Button if needed later */}
                        </div>

                        {/* Social Proof - Consistent with Home */}
                        <div className="animate-fade-up delay-300" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                                ))}
                            </div>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                                5.0/5 Trust Rating
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', background: 'var(--color-background-alt)', borderRadius: '50%', zIndex: -1 }}></div>
                        {/* Fallback frame if image missing, or use Next Image */}
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: '#ddd',
                            borderRadius: '8px',
                            backgroundImage: 'url(/images/hero.png)', /* Fallback */
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            {/* If we had specific images per page, we'd map them here. For now, using a generic placeholder style or specific image if user has one. */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
