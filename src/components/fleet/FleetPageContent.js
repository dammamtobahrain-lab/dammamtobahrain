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
                                        <Link href="/fleet/camry" className="btn-outline">View Camry</Link>
                                        <Link href="/fleet/lexus" className="btn-outline">View Lexus</Link>
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
                                        <Link href="/fleet/gmc-yukon" className="btn-outline">View Yukon Details</Link>
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
                                        <Link href="/fleet/hyundai-staria" className="btn-outline">View Staria Details</Link>
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

            <style jsx>{`
                .intro-text {
                    font-family: Georgia, serif;
                    font-size: 1.25rem;
                    line-height: 1.8;
                    margin-bottom: 4rem;
                    text-align: center;
                    color: #444;
                }
                .fleet-grid {
                    display: grid;
                    gap: 3rem;
                }
                .fleet-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .fleet-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
                }
                .card-header {
                    background: #f8fafc;
                    padding: 2rem;
                    border-bottom: 1px solid #e2e8f0;
                }
                .card-header h2 {
                    font-size: 1.5rem;
                    margin: 0 0 0.5rem 0;
                    color: #1e293b;
                }
                .subtitle {
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 0.1em;
                    color: #64748b;
                    font-weight: 600;
                }
                .card-body {
                    padding: 2rem;
                }
                .card-body p {
                    font-size: 1.1rem;
                    color: #475569;
                    margin-bottom: 1.5rem;
                    line-height: 1.7;
                }
                .specs-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 2rem 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }
                .specs-list li {
                    font-size: 1rem;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .card-actions {
                    display: flex;
                    gap: 1rem;
                }
                .btn-outline {
                    display: inline-block;
                    padding: 0.8rem 1.5rem;
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: 600;
                    transition: all 0.2s;
                }
                .btn-outline:hover {
                    background: var(--color-primary);
                    color: #fff;
                }
                .bg-light {
                    background: #f8f9fa;
                    padding: 5rem 0;
                }
            `}</style>
        </>
    );
}
