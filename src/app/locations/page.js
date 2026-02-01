import LocationsGrid from '@/components/LocationsGrid';

export const metadata = {
    title: "Service Locations | Dammam to Bahrain Taxi",
    description: "Complete list of pickup locations across Saudi Arabia. From major cities to remote oil fields.",
};

export default function LocationsIndex() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE LOCATIONS</h1>
                <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    We cover the entire Eastern Province and beyond. Select your pickup point.
                </p>
                <LocationsGrid />
            </div>
        </div>
    );
}
