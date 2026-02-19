import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Editorial from "@/components/sections/Editorial";
import CTA from "@/components/sections/CTA";
import SocialProof from "@/components/sections/SocialProof";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import TrustBar from "@/components/sections/TrustBar";
import LocalMarketData from "@/components/sections/LocalMarketData";
import SchemaMarkup from "@/components/sections/SchemaMarkup";
import FeaturedGuides from "@/components/sections/FeaturedGuides";
import LastUpdated from "@/components/sections/LastUpdated";
import Link from "next/link";

export const metadata = {
  title: "Dammam to Bahrain Taxi | Luxury Executive Transport 2026",
  description: "Premium chauffeur service connecting Saudi Arabia and Bahrain via King Fahd Causeway. 24/7 airport transfers, corporate travel, and family transport. Trusted by 500+ executives. Book now.",
  keywords: ["taxi dammam to bahrain", "khobar to bahrain taxi", "bahrain airport transfer", "saudi bahrain causeway taxi", "vip taxi saudi arabia", "jubail to bahrain taxi", "king fahd causeway taxi", "private car bahrain"],
};

const homeMarketData = {
  avgFare: '250 SAR',
  monthlyTrips: '1,200+',
  peakHours: 'Thu-Sat',
  demandTrend: 'Growing',
  avgDuration: '45-90 min',
};

const popularRoutes = [
  { name: 'Al Khobar to Bahrain', slug: 'al-khobar', time: '45 min', price: '250 SAR' },
  { name: 'Dammam to Bahrain', slug: 'dammam', time: '55 min', price: '280 SAR' },
  { name: 'Jubail to Bahrain', slug: 'jubail', time: '1.5 hrs', price: '450 SAR' },
  { name: 'Dhahran to Bahrain', slug: 'dhahran', time: '40 min', price: '250 SAR' },
  { name: 'Riyadh to Bahrain', slug: 'riyadh', time: '4 hrs', price: '1,500 SAR' },
  { name: 'DMM Airport to Bahrain', slug: 'dammam-airport', time: '75 min', price: '350 SAR' },
  { name: 'Qatif to Bahrain', slug: 'qatif', time: '60 min', price: '300 SAR' },
  { name: 'Hofuf to Bahrain', slug: 'hofuf', time: '2 hrs', price: '500 SAR' },
];

export default function Home() {
  return (
    <>
      <SchemaMarkup type="home" data={{
        faqs: [
          { question: 'What if my flight is delayed?', answer: 'We monitor all arrival times at DMM and BAH. Your chauffeur adjusts the pickup time automatically, with no extra fees.' },
          { question: 'How do I pay?', answer: 'We accept all major credit cards, cash (SAR/BHD), and corporate accounts.' },
          { question: 'Is the vehicle private?', answer: 'All bookings are private transfers. The vehicle is exclusively for you and your party.' },
          { question: 'Do I need a visa for Bahrain?', answer: 'GCC nationals enter visa-free. US, UK, and EU passport holders can get an eVisa or visa on arrival.' },
        ],
        breadcrumbs: [{ name: 'Home', href: '/' }],
      }} />

      <Hero />
      <SocialProof />

      {/* Trust Bar */}
      <TrustBar />

      <Services />

      {/* Popular Routes - Internal Linking */}
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="section-title">
            <span>Our Routes</span>
            <h2>Popular Taxi Routes to Bahrain</h2>
            <p>Door-to-door transfers from every major city in the Eastern Province to Bahrain via the King Fahd Causeway.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/locations/${route.slug}/`}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.25rem 1.5rem', background: 'white', border: '1px solid var(--color-border)',
                  borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                className="card"
              >
                <div>
                  <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                    {route.name}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                    {route.time} · From {route.price}
                  </p>
                </div>
                <span style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}>→</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/locations/" className="btn btn-outline">
              View All 45+ Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="section">
        <div className="container">
          <LocalMarketData data={homeMarketData} cityName="Saudi-Bahrain" />
        </div>
      </section>

      <FeaturedGuides />

      <Editorial />
      <Testimonials />
      <FAQ />
      <CTA />

      {/* Last Updated */}
      <div className="container">
        <LastUpdated date="February 19, 2026" />
      </div>
    </>
  );
}
