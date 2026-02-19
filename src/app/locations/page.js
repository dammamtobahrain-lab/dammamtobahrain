import LocationsGrid from '@/components/LocationsGrid';
import PageHero from '@/components/ui/PageHero';
import TrustBar from '@/components/sections/TrustBar';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import LastUpdated from '@/components/sections/LastUpdated';

export const metadata = {
    title: "All Service Locations | 47+ Pickup Points | Dammam to Bahrain Taxi",
    description: "Complete list of 47+ pickup locations across Saudi Arabia. Al Khobar, Dammam, Jubail, Riyadh, Dhahran, Qatif, Hofuf, and remote oil field locations. All routes to Bahrain.",
};

export default function LocationsIndex() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Locations', href: '/locations/' },
                ],
            }} />

            <PageHero
                title="Service Locations"
                subtitle="We cover the entire Eastern Province and beyond. Select your pickup point."
                label="AREA COVERAGE"
            />
            <div className="section">
                <div className="container">
                    <LocationsGrid />
                </div>
            </div>

            <TrustBar clientsServed="500+" />

            <div className="container">
                <LastUpdated date="February 19, 2026" />
            </div>
        </>
    );
}
