import Link from 'next/link';
import { notFound } from 'next/navigation';

const locations = {
    'al-khobar': {
        title: 'AL KHOBAR TO BAHRAIN TAXI',
        description: 'The preferred choice for residents and business travelers. Our Al Khobar to Bahrain taxi service offers doorstep pickup from all major districts including Rakkah, Al Ulaya, Corniche, and Dhahran.',
        longText: `
      <p>The journey from Al Khobar to Bahrain is one of the most frequent cross-border commutes in the Gulf region. Situated just minutes away from the King Fahd Causeway, Al Khobar serves as the primary gateway to the island nation of Bahrain. Whether you are traveling for a weekend getaway, a business meeting in Manama's financial district, or catching a flight from Bahrain International Airport (BAH), our taxi service provides the most convenient solution.</p>
      
      <h3>Why Choose a Private Taxi?</h3>
      <p>While public buses are available, they often involve long waiting times, multiple stops, and the hassle of carrying luggage through pedestrian immigration lines. Driving your own car can also be burdensome due to the need for causeway insurance, toll fees, and the risk of getting stuck in traffic without the ability to relax. A private taxi eliminates these stressors.</p>
      
      <p>Our drivers pick you up directly from your home or hotel in Al Khobar. You can relax in the back seat of a cool, air-conditioned Lexus or GMC while we navigate the traffic. We handle the paperwork at the customs cabins, allowing you to remain in the vehicle (in most cases) or guiding you swiftly through the passenger halls if required.</p>

      <h3>Districts We Serve</h3>
      <p>We cover every neighborhood in Al Khobar and Dhahran, including:</p>
      <ul>
        <li>Al Ulaya & Al Rakkah</li>
        <li>Al Khobar Corniche & North/South Khobar</li>
        <li>Dhahran (Aramco Camp & King Fahd University)</li>
        <li>Aziziyah & Half Moon Bay</li>
      </ul>

      <h3>The Causeway Experience</h3>
      <p>The 25km drive across the King Fahd Causeway offers stunning views of the Arabian Gulf. The journey typically takes 45-60 minutes, though this can vary during weekends (Thursdays and Saturdays). Our drivers are experienced in predicting traffic patterns and can advise you on the best departure times to ensure you reach your destination on schedule.</p>
    `,
        features: ['Door-to-Door Service', 'Experienced Causeway Drivers', '24/7 Availability', 'Family & Single Sections', 'VIP Lane Access (Subject to availability)']
    },
    'jubail': {
        title: 'JUBAIL TO BAHRAIN TAXI',
        description: 'Reliable executive transport from Jubail Industrial City to Bahrain. We cater to corporate clients, engineers, and families needing safe passage for the 100km+ journey.',
        longText: `
      <p>Jubail Industrial City is the industrial heartbeat of the Kingdom, but it is also a considerable distance from leisure hubs. The trip from Jubail to Bahrain is a popular route for expatriates and locals looking to spend their weekend in a more relaxed environment or needing to catch international flights from Bahrain Airport.</p>
      
      <h3>A Comfortable Long-Distance Ride</h3>
      <p>The distance from Jubail to the Causeway is approximately 100 kilometers, followed by the crossing itself. This 1.5 to 2-hour journey demands a comfortable vehicle. Our fleet includes spacious SUVs like the GMC Yukon and Chevrolet Tahoe, which offer ample legroom and luggage space, ensuring that you arrive in Bahrain feeling refreshed, not fatigued.</p>
      
      <h3>Corporate & Business Travel</h3>
      <p>We understand that many of our Jubail clients are professionals working in the energy and petrochemical sectors. Punctuality and reliability are paramount. We offer scheduled pickups from Royal Commission, Jubail City, and industrial camps. Receipts can be provided for corporate reimbursement purposes.</p>
    `,
        features: ['Business Class Sedans', 'Fixed Corporate Rates', 'Prompt Highway Pickup', 'Spacious SUVs for Luggage']
    },
    'riyadh': {
        title: 'RIYADH TO BAHRAIN TAXI',
        description: 'Travel from the capital to Bahrain in crucial comfort. Our long-distance fleet ensures a relaxing 4-hour journey across the Kingdom\'s highways.',
        longText: `
      <p>The drive from Riyadh to Bahrain is a significant journey, spanning approximately 400 kilometers through the desert landscape of the Eastern Province. For those who prefer not to fly or cannot find a suitable flight, our luxury taxi service offers a viable and comfortable alternative.</p>
      
      <h3>The Alternative to Flying</h3>
      <p>Flights between Riyadh and Bahrain can sometimes be expensive or fully booked, especially during holidays. Furthermore, the time spent traveling to King Khalid International Airport, going through security, flying, and then clearing immigration in Bahrain can often equal the driving time. A private car offers door-to-door convenience that air travel cannot match.</p>
      
      <h3>Luxury Fleet for Long Hauls</h3>
      <p>For a trip of this duration, comfort is non-negotiable. We exclusively use our premium fleet for Riyadh bookings. This includes late-model Lexus ES sedans and large American SUVs. You can expect bottled water, phone chargers, and a smooth ride. We can also arrange for a rest stop halfway at a premium service station if desired.</p>
    `,
        features: ['Luxury SUVs & Sedans', 'Rest Stops Available', 'Professional Long-Distance Drivers', 'Flat Rates Available']
    },
    'bahrain': {
        title: 'BAHRAIN TO SAUDI ARABIA',
        description: 'Return trips from Bahrain to any city in the Eastern Province. We handle airport pickups at BAH International Airport with professional meet and greet.',
        longText: `
      <p>Our service is not one-way. We are fully licensed and insured to pick up passengers from anywhere in the Kingdom of Bahrain and transport them back to Saudi Arabia. Whether you are finishing your vacation or arriving from an international flight, we are there to receive you.</p>
      
      <h3>Bahrain International Airport (BAH) Pickups</h3>
      <p>Arriving at a new airport can be stressful. Our drivers monitor your flight status to ensure they are there when you land. We will meet you at the arrivals hall with a placard bearing your name, assist you with your luggage, and escort you directly to the waiting vehicle. No waiting in long taxi queues.</p>
      
      <h3>Hotel & City Pickups</h3>
      <p> staying in Manama, Juffair, Seef, or Amwaj Islands? We can pick you up directly from your hotel lobby. Just provide us with your location and preferred pickup time. We recommend booking your return trip at least 24 hours in advance, especially during the busy Saturday return rush, to guarantee availability.</p>
    `,
        features: ['Airport Meet & Greet', 'Hotel Pickups', 'Flexible Scheduling', 'Help with Luggage']
    }
};

export function generateMetadata({ params }) {
    const location = locations[params.slug];
    if (!location) return { title: 'Location Not Found' };

    return {
        title: `${location.title} | Premium Transport Service`,
        description: location.description,
    };
}

export default function LocationPage({ params }) {
    const location = locations[params.slug];

    if (!location) {
        notFound();
    }

    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">{location.title}</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

                    {/* Main Content Area */}
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', fontFamily: 'Georgia, serif', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                            {location.description}
                        </p>

                        {/* Injected Long Form HTML Content */}
                        <div
                            style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}
                            dangerouslySetInnerHTML={{ __html: location.longText }}
                        />

                        <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '10px', display: 'inline-block', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Service Highlights</h3>
                        <ul style={{ margin: '0 0 3rem 1.5rem', listStyle: 'square' }}>
                            {location.features.map((feature, idx) => (
                                <li key={idx} style={{ marginBottom: '0.8rem', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div style={{ textAlign: 'center', borderTop: '1px solid #000', paddingTop: '2rem' }}>
                            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>Ready to travel? Secure your booking today.</p>
                            <Link href="/contact-us" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                                BOOK THIS ROUTE
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
