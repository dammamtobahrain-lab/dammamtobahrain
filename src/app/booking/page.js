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
                subtitle="Premium chauffeur service to Bahrain. Instant confirmation & reliable scheduling."
                label="BOOK ONLINE"
                ctaText="Book via WhatsApp"
                ctaLink="https://wa.me/13073464572"
            />

            <BookingForm />
            <TrustBar clientsServed="500+" />
        </>
    );
}
