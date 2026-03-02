import BookingForm from '../../components/BookingForm';
import TrustBar from '@/components/sections/TrustBar';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageHero from '@/components/ui/PageHero';

export const metadata = {
    title: "Book Your Ride | Saudi Arabia to Bahrain Taxi | Instant Confirmation",
    description: "Book a private taxi from Dammam, Al Khobar, Jubail, or Riyadh to Bahrain. Instant confirmation, no hidden fees, free cancellation up to 24 hours. Choose from Camry, Lexus ES, GMC Yukon, or Hyundai Staria.",
};

export default function BookingPage() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Booking', href: '/booking/' },
                ],
            }} />

            <PageHero
                title="Secure Your Ride"
                subtitle="Premium chauffeur service to Bahrain. Experience the comfort of private travel with 24/7 support."
                label="BOOKING"
                ctaText="Book via WhatsApp"
                ctaLink="https://wa.me/923080628195"
            />

            <section className="section" style={{ background: '#f9f9f9', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '4rem 2rem', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Instant WhatsApp Booking</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                            For the fastest service, please send us your pickup details and destination directly on WhatsApp. Our dispatch team is online 24/7 to confirm your ride and vehicle.
                        </p>
                        <a href="https://wa.me/923080628195" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', background: '#25D366', borderColor: '#25D366' }}>
                            START CHAT NOW
                        </a>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: '#888', fontSize: '0.9rem' }}>
                            <span>✓ No Prepayment Required</span>
                            <span>✓ Instant Confirmation</span>
                            <span>✓ 24/7 Dispatch</span>
                        </div>
                    </div>
                </div>
            </section>
            <TrustBar clientsServed="500+" />
        </>
    );
}
