import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dammam to Bahrain Taxi | Reliable Cross-Border Transport",
  description: "The trusted taxi service connecting Saudi Arabia and Bahrain. Reliable, safe, and comfortable executive transport for business and leisure travelers.",
  keywords: "taxi dammam to bahrain, al khobar to bahrain taxi, jubail to bahrain transport, saudi bahrain taxi, king fahd causeway taxi, airport transfer dammam bahrain",
};

export default function Home() {
  return (
    <>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: 'black', color: 'white', padding: '10px', border: '2px solid white', zIndex: 999 }}>
        <a href="https://wa.me/13073464572" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>WHATSAPP US</a>
      </div>



      {/* Hero Section */}
      <section style={{ borderBottom: '2px solid #000', padding: '0 0 4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontFamily: '"Arial Black", sans-serif', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Dammam to Bahrain
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '3rem', borderBottom: '1px solid #000', display: 'inline-block', paddingBottom: '1rem' }}>
            EST. 2026 — The Definitive Cross-Border Transport Service
          </h2>

          <div style={{ border: '2px solid #000', padding: '15px', display: 'inline-block', maxWidth: '100%' }}>
            <Image
              src="/images/hero.png"
              alt="Classic Black Luxury Sedan on King Fahd Causeway"
              width={1000}
              height={600}
              style={{ display: 'block', maxWidth: '100%', height: 'auto', filter: 'grayscale(100%) contrast(110%)' }}
              priority
            />
          </div>

          <p style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 2rem', fontSize: '1.4rem', lineHeight: '1.8', fontFamily: 'Georgia, serif' }}>
            <strong>We provide a direct link between nations.</strong> <br />
            Crossing the King Fahd Causeway requires experience, patience, and a reliable vehicle. We offer the trusted executive taxi service connecting The Kingdom of Saudi Arabia and The Kingdom of Bahrain. No fuss, just professional driving.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact-us" className="btn btn-primary" style={{ marginRight: '1rem', padding: '15px 50px', fontSize: '1.1rem' }}>
              BOOK A RIDE
            </Link>
            <Link href="/services" className="btn" style={{ padding: '15px 50px', fontSize: '1.1rem' }}>
              VIEW RATES
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Content Section - SEO Rich */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

            {/* Main Article Column */}
            <div>
              <h2 style={{ fontSize: '2.5rem', borderBottom: '4px solid #000', paddingBottom: '10px', marginBottom: '2rem' }}>THE JOURNEY EXPLAINED</h2>

              <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'justify' }}>
                <p>
                  Traveling between Saudi Arabia and Bahrain is more than just a commute; it is a journey across one of the engineering marvels of the modern world, the King Fahd Causeway. For decades, this 25-kilometer bridge has served as a vital artery of commerce, tourism, and family connection between our two great nations.
                </p>
                <p>
                  However, for the uninitiated, the journey can be fraught with complexities. Border procedures, insurance mandates, custom inspections, and the sheer volume of traffic during peak hours can turn a simple trip into a stressful ordeal. This is where <strong>Dammam to Bahrain Taxi</strong> steps in. We do not merely drive you from point A to point B; we manage the entire logistics of your cross-border transit.
                </p>

                <h3 style={{ marginTop: '2rem', fontSize: '1.5rem', textTransform: 'uppercase' }}>Expertise on the Causeway</h3>
                <p>
                  Our drivers are not just skilled chauffeurs; they are experts in causeway protocols. They know the peak hours to avoid, the correct lanes to choose, and the precise documentation required for every passenger type—be it a GCC national, a resident with an Iqama, or an international visitor on a tourist visa. We ensure that you never have to guess or worry about the details of immigration and customs.
                </p>

                <h3 style={{ marginTop: '2rem', fontSize: '1.5rem', textTransform: 'uppercase' }}>Safety and Privacy</h3>
                <p>
                  In an era where privacy is a luxury, our service guarantees discretion. Our vehicles are tinted according to legal standards to provide privacy for families and business executives alike. Furthermore, safety is our non-negotiable priority. Every vehicle in our fleet undergoes rigorous weekly mechanical inspections. Tires, brakes, and air conditioning systems are checked to ensure they can withstand the heat and demand of long-distance highway travel.
                </p>
                <p>
                  We understand that our clients include solo female travelers, families with young children, and high-profile executives. Our drivers are trained to be respectful, professional, and helpful, ensuring that you feel secure and comfortable throughout the 45-60 minute crossing.
                </p>

                <h3 style={{ marginTop: '2rem', fontSize: '1.5rem', textTransform: 'uppercase' }}>Easy Transport</h3>
                <p>
                  We cover the entire Eastern Province, including <strong>Dammam, Al Khobar, Jubail, Ras Tanura</strong>, and remote industrial areas like <Link href="/locations" style={{ textDecoration: 'underline' }}>Tanajib and Haradh</Link>.
                </p>
                <p>
                  Whether you are departing from the bustling corniche of Al Khobar, the industrial heartland of Jubail, or the diplomat quarters of Riyadh, our coverage is comprehensive. We offer door-to-door service that eliminates the need for parking, rental car insurance, or the fatigue of driving yourself. You can simply sit back, connect to your work, or enjoy the view of the Arabian Gulf as we ferry you swiftly to your destination in Manama, Juffair, or Seef District.
                </p>
              </div>
            </div>

            {/* Sidebar Column */}
            <div style={{ borderLeft: '1px solid #000', paddingLeft: '2rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ background: '#000', color: '#fff', padding: '10px', textAlign: 'center', marginBottom: '1rem' }}>QUICK FACTS</h3>
                <ul style={{ listStyle: 'none', fontFamily: 'Arial, sans-serif', fontSize: '0.95rem', lineHeight: '2' }}>
                  <li style={{ borderBottom: '1px solid #ccc' }}><strong>Distance:</strong> ~50km (Khobar to Manama)</li>
                  <li style={{ borderBottom: '1px solid #ccc' }}><strong>Avg Time:</strong> 60 Minutes</li>
                  <li style={{ borderBottom: '1px solid #ccc' }}><strong>Border:</strong> King Fahd Causeway</li>
                  <li style={{ borderBottom: '1px solid #ccc' }}><strong>Currency:</strong> SAR & BHD Accepted</li>
                  <li style={{ borderBottom: '1px solid #ccc' }}><strong>Service:</strong> 24/7/365</li>
                </ul>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', borderBottom: '2px solid #000', marginBottom: '1rem' }}>POPULAR DESTINATIONS</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Bahrain City Centre:</strong> The top shopping and leisure destination.</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Juffair:</strong> Known for its vibrant dining and nightlife.</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Bahrain Airport (BAH):</strong> Direct terminal drop-offs.</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Diplomatic Area:</strong> For embassy visits and business meetings.</p>
              </div>

              <div style={{ background: '#f0f0f0', padding: '1.5rem', border: '1px solid #000', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>NEED HELP?</h3>
                <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Our support team is available round the clock to answer your queries.</p>
                <Link href="/contact-us" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Contact Support &rarr;</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section - Grid Box */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="grid-3">
            <ServiceCard title="FROM AL KHOBAR" description="Direct pickup from your doorstep in Al Khobar. We handle all causeway procedures efficiently." link="/locations/al-khobar" />
            <ServiceCard title="FROM JUBAIL" description="Executive transport from Jubail Industrial City. Ideal for business professionals." link="/locations/jubail" />
            <ServiceCard title="FROM RIYADH" description="Long-distance travel in comfort. Enjoy a stress-free journey from the capital." link="/locations/riyadh" />
            <ServiceCard title="AIRPORT TRANSFERS" description="Pickup and drop-off at Dammam (DMM) and Bahrain (BAH) International Airports." link="/contact-us" />
            <ServiceCard title="BAHRAIN RETURN" description="Returning to KSA? We arrange quick pickup from anywhere in Bahrain." link="/locations/bahrain" />
            <ServiceCard title="CUSTOM TOURS" description="Hourly rates available for sightseeing and business meetings." link="/contact-us" />
          </div>
        </div>
      </section>

      {/* Why Us - Simple Lists */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', border: '2px solid #000' }}>
            <div style={{ flex: '1 1 300px', padding: '3rem', borderRight: '1px solid #000' }}>
              <h3>RELIABILITY</h3>
              <p>Our drivers are vetted, experienced, and punctual. We value your time above all else. We monitor traffic patterns on the bridge to ensure accurate pickup times.</p>
            </div>
            <div style={{ flex: '1 1 300px', padding: '3rem', borderRight: '1px solid #000' }}>
              <h3>COMFORT</h3>
              <p>Our fleet consists of clean, air-conditioned sedans and SUVs (Lexus, GMC, Hyundai). You can expect a smoke-free, fresh-smelling environment every time.</p>
            </div>
            <div style={{ flex: '1 1 300px', padding: '3rem' }}>
              <h3>24/7 SERVICE</h3>
              <p>Day or night, we are available. Whether you have a 3 AM flight or a late-night meeting, pre-book your ride to ensure availability during peak hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NLP & PAA Optimized */}
      <section className="section" style={{ background: '#f9f9f9', borderTop: '2px solid #000', borderBottom: '2px solid #000' }}>
        <div className="container">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>How much is a taxi from Dammam to Bahrain?</h3>
              <p>Prices typically range from <strong>300 SAR to 500 SAR</strong> depending on the vehicle type (Sedan vs. GMC) and exact pickup location. We offer fixed-rate fares with no hidden surcharges.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Do I need a visa to enter Bahrain from Saudi Arabia?</h3>
              <p>GCC nationals do not need a visa. Residents (Iqama holders) and international visitors typically need a visa, which can often be obtained on arrival at the King Fahd Causeway or online (eVisa). Our drivers can assist you with the procedure.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>How long does it take to cross the King Fahd Causeway?</h3>
              <p>The drive itself takes about 25 minutes, but border control can take anywhere from <strong>45 minutes to 2 hours</strong> depending on traffic. We monitor traffic patterns to recommend the best departure times.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Can you pick me up from Dammam Airport (DMM)?</h3>
              <p>Yes, we provide 24/7 meet-and-greet services at King Fahd International Airport (DMM). Our driver will wait for you at the arrivals hall with a name sign.</p>
            </div>

          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much is a taxi from Dammam to Bahrain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Prices typically range from 300 SAR to 500 SAR depending on the vehicle type (Sedan vs. GMC) and exact pickup location. We offer fixed-rate fares with no hidden surcharges."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa to enter Bahrain from Saudi Arabia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GCC nationals do not need a visa. Residents and international visitors typically need a visa, obtainable on arrival or online. Check the latest regulations on the Bahrain eVisa website."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to cross the King Fahd Causeway?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The crossing typically takes 45 minutes to 2 hours depending on border traffic. Weekends (Thursday/Saturday) are usually busier than weekdays."
                }
              },
              {
                "@type": "Question",
                "name": "Can you pick me up from Dammam Airport (DMM)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in airport transfers from Dammam Airport (DMM) to any location in Bahrain. We track your flight to ensure timely pickup."
                }
              }
            ]
          })
        }}
      />

      {/* CTA - Plain Box */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ textAlign: 'center', border: '5px double #000', padding: '3rem' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '1rem' }}>Ready to Travel?</h2>
          <p>Contact us by phone or email to secure your booking.</p>
          <br />
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '15px 40px' }}>
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, description, link }) {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3>{title}</h3>
      <p style={{ flexGrow: 1, fontSize: '0.95rem' }}>{description}</p>
      <Link href={link} style={{ textDecoration: 'underline', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '1rem' }}>
        Read More &gt;
      </Link>
    </div>
  );
}
