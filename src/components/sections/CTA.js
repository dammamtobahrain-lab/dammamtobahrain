import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CTA() {
    return (
        <section className="section" style={{ background: 'var(--color-accent)', color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                    Ready for an Executive Journey?
                </h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'rgba(255,255,255,0.9)' }}>
                    Join hundreds of satisfied travelers who choose reliability, comfort, and speed.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button href="/booking/" style={{ background: 'white', color: 'var(--color-accent)' }}>
                        Book Now
                    </Button>
                    <Button href="/contact-us/" variant="outline" style={{ borderColor: 'white', color: 'white' }}>
                        Contact Support
                    </Button>
                </div>
            </div>
        </section>
    );
}
