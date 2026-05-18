'use client';

import LocationsGrid from '@/components/LocationsGrid';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';
import ComparisonTable from '@/components/sections/ComparisonTable';

export default function FleetPageContent() {
    return (
        <>
            <PageHero
                title="The Garage: Our Fleet"
                subtitle="Meticulously curated vehicles to withstand the Gulf's highways while providing an oasis of calm."
                label="PREMIUM VEHICLES"
            />
            <div className="section">
                <div className="container">

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                        <p className="intro-text">
                            A journey across borders demands more than just a car; it requires a vessel of comfort, reliability, and safety. We have meticulously curated our fleet to withstand the demands of the Gulf's highways while providing an oasis of calm for our passengers.
                        </p>

                        <div className="fleet-grid">
                            {/* Vehicle 1: The Executive Sedan */}
                            <div className="fleet-card">
                                <div className="card-header">
                                    <h2>The Executive Sedan</h2>
                                    <span className="subtitle">Standard & Luxury Options</span>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <strong>The Backbone.</strong> Chosen for their legendary suspension tuning, these vehicles absorb the harshness of the causeway expansion joints. Perfect for solo travelers and couples.
                                    </p>
                                    <ul className="specs-list">
                                        <li>👥 <strong>Capacity:</strong> 3 Passengers</li>
                                        <li>🧳 <strong>Luggage:</strong> 2 Large Suitcases</li>
                                        <li>🚗 <strong>Models:</strong> Toyota Camry, Lexus ES</li>
                                    </ul>
                                    <div className="card-actions">
                                        <Link href="https://wa.me/966569487569" className="btn btn-primary">Book Sedan on WhatsApp</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle 2: The Family Cruiser */}
                            <div className="fleet-card">
                                <div className="card-header">
                                    <h2>The Family Cruiser</h2>
                                    <span className="subtitle">Full-Size SUV</span>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <strong>The King of the Road.</strong> For the long haul from Riyadh or Jubail, nothing beats the American SUV. Commanding visibility and massive interior volume for the whole family.
                                    </p>
                                    <ul className="specs-list">
                                        <li>👥 <strong>Capacity:</strong> 6-7 Passengers</li>
                                        <li>🧳 <strong>Luggage:</strong> 6+ Large Suitcases</li>
                                        <li>🚙 <strong>Models:</strong> GMC Yukon XL, Chevy Tahoe</li>
                                    </ul>
                                    <div className="card-actions">
                                        <Link href="https://wa.me/966569487569" className="btn btn-primary">Book SUV on WhatsApp</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle 3: The Group Transporter */}
                            <div className="fleet-card">
                                <div className="card-header">
                                    <h2>The Group Transporter</h2>
                                    <span className="subtitle">Luxury MPV</span>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <strong>Future Travel.</strong> Modern, futuristic, and incredibly spacious. The Staria has redefined van travel with panoramic windows and captain chairs.
                                    </p>
                                    <ul className="specs-list">
                                        <li>👥 <strong>Capacity:</strong> 7 Passengers</li>
                                        <li>🧳 <strong>Luggage:</strong> 4-5 Large Suitcases</li>
                                        <li>🚍 <strong>Models:</strong> Hyundai Staria</li>
                                    </ul>
                                    <div className="card-actions">
                                        <Link href="https://wa.me/966569487569" className="btn btn-primary">Book Staria on WhatsApp</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section bg-light">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="section-title">
                        <span>Side-by-Side</span>
                        <h2>Compare Vehicles</h2>
                    </div>
                    <ComparisonTable
                        cityName="Fleet"
                        headers={['Feature', 'Toyota Camry', 'Lexus ES', 'GMC Yukon XL', 'Hyundai Staria']}
                        rows={[
                            ['Passengers', '3', '3', '6-7', '7'],
                            ['Luggage', '2 Large', '2 Large', '6+ Large', '4-5 Large'],
                            ['Comfort Level', 'Executive', 'Luxury', 'Premium', 'Business'],
                            ['Best For', 'Solo/Couples', 'Executives', 'Families', 'Groups'],
                            ['Noise Level', 'Low', 'Ultra-Low', 'Low', 'Low'],
                            ['Price Range', 'Economy', 'Premium', 'Premium+', 'Group Rate'],
                        ]}
                        highlightRow={2}
                    />
                </div>
            </div>

            <ExpertInsight
                text="We test every vehicle on a 500-kilometer loop before adding it to our fleet: Al Khobar to Bahrain, back to Dammam, then to Jubail and return. This rigorous shakedown ensures the suspension, AC, and noise insulation meet our standards. The Gulf's extreme heat and highway speeds expose any weakness quickly. Only vehicles that pass this real-world endurance test earn a place in our garage."
                author="Fleet Manager, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />

            <PageFAQ
                faqs={[
                    { question: "Can I choose my vehicle?", answer: "Yes. When booking, you can select your preferred vehicle class. Subject to availability, we will assign your exact choice. We recommend booking 12+ hours in advance for specific model requests." },
                    { question: "Are child seats available?", answer: "Yes. We provide infant car seats and booster seats free of charge upon request. Please mention this when booking so we can prepare the appropriate seat for your child's age and weight." },
                    { question: "What year models are in your fleet?", answer: "All vehicles in our fleet are 2024 models or newer. We follow a strict 3-year replacement cycle to ensure modern safety features, pristine interiors, and mechanical reliability." },
                    { question: "Is smoking allowed in the vehicles?", answer: "No. All vehicles are strictly non-smoking. This ensures a clean, odor-free environment for every passenger. Violations may incur a cleaning fee." },
                ]}
                cityName="Fleet"
            />

            <TrustBar clientsServed="500+" />

            <SchemaMarkup
                type="home"
                data={{
                    breadcrumbs: [
                        { name: 'Home', url: '/' },
                        { name: 'Fleet', url: '/fleet' },
                    ],
                    faqs: [
                        { question: "Can I choose my vehicle?", answer: "Yes. When booking, you can select your preferred vehicle class. Subject to availability, we will assign your exact choice. We recommend booking 12+ hours in advance for specific model requests." },
                        { question: "Are child seats available?", answer: "Yes. We provide infant car seats and booster seats free of charge upon request. Please mention this when booking so we can prepare the appropriate seat for your child's age and weight." },
                        { question: "What year models are in your fleet?", answer: "All vehicles in our fleet are 2024 models or newer. We follow a strict 3-year replacement cycle to ensure modern safety features, pristine interiors, and mechanical reliability." },
                        { question: "Is smoking allowed in the vehicles?", answer: "No. All vehicles are strictly non-smoking. This ensures a clean, odor-free environment for every passenger. Violations may incur a cleaning fee." },
                    ],
                }}
            />

            <LastUpdated date="February 19, 2026" />

            <LocationsGrid />

        </>

    );
}
