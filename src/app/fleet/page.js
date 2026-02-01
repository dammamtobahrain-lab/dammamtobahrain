import LocationsGrid from '@/components/LocationsGrid';
import Link from 'next/link';

export const metadata = {
    title: "Our Fleet | Dammam to Bahrain Taxi",
    description: "Explore our premium fleet of vehicles. From the executive Lexus ES to the spacious GMC Yukon XL. Choose the perfect ride for your journey.",
};

export default function FleetPage() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h1 className="section-title">THE GARAGE: OUR FLEET</h1>

                    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
                            A journey across borders demands more than just a car; it requires a vessel of comfort, reliability, and safety. We have meticulously curated our fleet to withstand the demands of the Gulf's highways while providing an oasis of calm for our passengers.
                        </p>

                        {/* Vehicle 1: The Executive Sedan */}
                        <div style={{ border: '2px solid #000', padding: '2rem', marginBottom: '3rem' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: '0.5rem' }}>1. The Executive Sedan</h2>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#444' }}>Featuring the Lexus ES350 & Toyota Camry Limited</p>

                            <p>
                                <strong>The Info:</strong> The backbone of our executive service. These vehicles are chosen for their legendary suspension tuning, which absorbs the harshness of the causeway expansion joints.
                            </p>
                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: '1rem 0' }}>
                                <li><strong>Capacity:</strong> 3 Passengers Comfortably</li>
                                <li><strong>Models:</strong> <Link href="/fleet/camry" style={{ textDecoration: 'underline' }}>Toyota Camry</Link>, <Link href="/fleet/lexus" style={{ textDecoration: 'underline' }}>Lexus ES</Link></li>
                            </ul>

                            <div style={{ textAlign: 'right' }}>
                                <Link href="/fleet/camry" style={{ textDecoration: 'underline', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginRight: '20px' }}>VIEW CAMRY SPECS &rarr;</Link>
                                <Link href="/fleet/lexus" style={{ textDecoration: 'underline', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>VIEW LEXUS SPECS &rarr;</Link>
                            </div>
                        </div>

                        {/* Vehicle 2: The Family Cruiser */}
                        <div style={{ border: '2px solid #000', padding: '2rem', marginBottom: '3rem' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: '0.5rem' }}>2. The Family Cruiser (SUV)</h2>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#444' }}>Featuring the GMC Yukon XL & Chevrolet Tahoe</p>

                            <p>
                                <strong>The Info:</strong> For the long haul from Riyadh or Jubail, nothing beats the American SUV. Known in the region as "The King of the Road," the Yukon offers commanding visibility and massive interior volume.
                            </p>
                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: '1rem 0' }}>
                                <li><strong>Capacity:</strong> 6-7 Passengers</li>
                                <li><strong>Ideal For:</strong> Large families, excessive luggage.</li>
                            </ul>

                            <div style={{ textAlign: 'right' }}>
                                <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>VIEW YUKON DETAIS &rarr;</Link>
                            </div>
                        </div>

                        {/* Vehicle 3: The Group Transporter */}
                        <div style={{ border: '2px solid #000', padding: '2rem', marginBottom: '3rem' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: '0.5rem' }}>3. The Group Transporter</h2>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#444' }}>Featuring the Hyundai Staria</p>

                            <p>
                                <strong>The Info:</strong> Modern, futuristic, and incredibly spacious. The Staria has redefined van travel. It features panoramic windows that offer great views of the causeway bridge.
                            </p>
                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: '1rem 0' }}>
                                <li><strong>Capacity:</strong> 7 Passengers</li>
                                <li><strong>Ideal For:</strong> Corporate teams, tour groups.</li>
                            </ul>

                            <div style={{ textAlign: 'right' }}>
                                <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>VIEW STARIA SPECS &rarr;</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <LocationsGrid />
        </>
    );
}
