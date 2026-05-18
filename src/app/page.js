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
import SEOContent from "@/components/sections/SEOContent";
import Link from "next/link";
import { Clock, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Saudi to Bahrain Private Car | Taxi & Executive Chauffeur 2026",
  description: "Book an executive private car or taxi from Dammam, Khobar, or Riyadh to Bahrain. Professional chauffeurs, 24/7 service, and swift border crossing via King Fahd Causeway.",
  keywords: ["taxi saudi to bahrain", "private car khobar to bahrain", "chauffeur dammam to bahrain", "dmm airport to bahrain taxi", "riyadh to bahrain taxi", "saudi bahrain causeway taxi", "vip car service saudi", "private chauffeur bahrain"],
};

const homeMarketData = {
  monthlyTrips: '1,200+',
  peakHours: 'Thu-Sat',
  demandTrend: 'Growing',
  avgDuration: '45-90 min',
};

const popularRoutes = [
  { name: 'Al Khobar to Bahrain Taxi', slug: 'al-khobar', time: '45 min' },
  { name: 'Dammam to Bahrain Transfer', slug: 'dammam', time: '55 min' },
  { name: 'Jubail to Bahrain Private Car', slug: 'jubail', time: '1.5 hrs' },
  { name: 'Dhahran to Bahrain Taxi', slug: 'dhahran', time: '40 min' },
  { name: 'Riyadh to Bahrain Chauffeur', slug: 'riyadh', time: '4 hrs' },
  { name: 'DMM Airport Transfer', slug: 'dammam-airport', time: '75 min' },
  { name: 'Qatif to Bahrain Taxi', slug: 'qatif', time: '60 min' },
  { name: 'Hofuf to Bahrain Taxi', slug: 'hofuf', time: '2 hrs' },
];

export default function Home() {
  return (
    <>
      <SchemaMarkup type="home" data={{
        faqs: [
          { question: 'What is the taxi fare from Riyadh to Bahrain?', answer: 'The private transfer fare from Riyadh to Bahrain starts at 1,500 SAR. This is a fixed price including the King Fahd Causeway toll and fuel, with zero hidden extras.' },
          { question: 'Is there an executive car from Al Khobar to Bahrain?', answer: 'Yes, we specialize in luxury private transfers from Al Khobar and Dhahran to Bahrain. Our fleet includes VIP Lexus ES and GMC Yukon XL vehicles for executive travelers.' },
          { question: 'Do you offer airport taxi from DMM to Bahrain hotels?', answer: 'We provide door-to-door chauffeurs from King Fahd International Airport (DMM) directly to any hotel or residence in Bahrain, 24/7.' },
          { question: 'Can I pay the driver in cash?', answer: 'Yes, we offer total payment flexibility. You can pay your chauffeur in cash (SAR, BHD) or using any major credit/debit card after reaching your destination.' },
        ],
        breadcrumbs: [{ name: 'Home', href: '/' }],
      }} />

      <Hero />

      {/* Urgency & Status Bar */}
      <div className="urgency-status-bar">
        <div className="container">
            <div className="urgency-inner">
                <p className="urgency-text">
                    <span style={{ color: '#ff3b30' }}>●</span> 14 Drivers Available Today — <strong>Peak Hours Filling Fast</strong>
                </p>
                <span className="urgency-causeway">Causeway: OPEN</span>
                <Link href="https://wa.me/966569487569" className="urgency-link">SECURE YOUR SLOT →</Link>
            </div>
        </div>
      </div>

      <SocialProof />
      <TrustBar />
      <Services />
      
      <SEOContent />

      {/* Popular Routes - Conversion Directory */}
      <section className="section route-section">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: '900', letterSpacing: '2.5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Verified Causeway Routes</span>
            <h2 style={{ fontWeight: '950', marginTop: '1rem', letterSpacing: '-1.5px' }}>Why Wait for Uber?<br /><span className="text-gradient-gold">Saudi to Bahrain Private Cars</span></h2>
            <p style={{ maxWidth: '750px', margin: '0.75rem auto 0 auto', fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6' }}>
                All-inclusive seamless service. Bridge tolls, fuel, and wait times already covered. <strong>No Prepayment — Pay Only After Arrival.</strong>
            </p>
          </div>

          <div className="route-grid">
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/locations/${route.slug}/`}
                className="route-card"
              >
                <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
                    <div className="quick-book-btn">
                        <ArrowRight size={22} strokeWidth={3} />
                    </div>
                </div>
                
                <div>
                   <div className="route-badges">
                        <span className="route-badge-verified">VERIFIED ROUTE</span>
                        <span className="route-badge-fixed" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}>FAST TRACK</span>
                   </div>
                   <h3>{route.name}</h3>
                </div>

                <div className="route-card-footer">
                  <div className="route-meta">
                    <span><Clock size={16} strokeWidth={3} /> {route.time} Crossing</span>
                    <span style={{ color: '#2e7d32' }}><ShieldCheck size={16} strokeWidth={3} /> Bridge Tolls Incl.</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-primary)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        GET QUOTE
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link href="/locations/" className="btn btn-primary route-explore-btn">
                EXPLORE ALL 45+ DESTINATIONS
            </Link>
            <p style={{ marginTop: '2rem', fontWeight: '900', color: '#6b7280', fontSize: '1rem' }}>
                <span style={{ color: '#52c41a' }}>✓</span> Secure your chauffeur online in 60 seconds
            </p>
          </div>
        </div>
      </section>

      <LocalMarketData data={homeMarketData} cityName="Saudi-Bahrain Corridor" />

      <FeaturedGuides />

      <Editorial />
      <Testimonials />
      <FAQ />
      <CTA />

      {/* Verification Footer */}
      <div className="container verification-footer">
        <div className="verification-status">
            <div className="verification-dot"></div>
            <p className="verification-label">
                Real-time Causeway Status Verified 1m ago
            </p>
        </div>
        <LastUpdated date="April 3, 2026" />
        <p className="verification-detail">
            <strong>Border Crossing Guarantee:</strong> We track King Fahd Causeway traffic live. If you book for a peak hour, our dispatch team will call to ensure your crossing is optimized for minimum wait time.
        </p>
      </div>
    </>
  );
}
