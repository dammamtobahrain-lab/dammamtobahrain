import Link from "next/link";
import { Car, Building2, Plane, Map, Users, FileCheck, ArrowRight, Star, Briefcase, ShieldCheck, Clock, GraduationCap, PawPrint } from "lucide-react";

export default function Services() {
    return (
        <section className="section section-alt">
            <div className="container">
                <div className="section-title">
                    <span>Premium Services</span>
                    <h2>Tailored For Your Travel Needs</h2>
                </div>

                <div className="grid-module">

                    {/* Featured Service - Spans 8 columns (Asymmetric Grid) */}
                    <div className="card col-span-8" style={{ background: 'var(--color-primary)', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '3rem' }}>
                        <div className="card-icon" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--color-accent)', minWidth: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Plane size={40} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>Airport Transfers (VIP)</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Direct pickup from Dammam (DMM) or Bahrain (BAH) arrivals with zero waiting time. We monitor your flight status and manage your luggage, ensuring a seamless transition from air to road.
                            </p>
                        </div>
                    </div>

                    {/* Corporate Service - Spans 4 columns */}
                    <div className="card col-span-4">
                        <div className="card-icon"><Building2 size={24} /></div>
                        <h3>Corporate Travel</h3>
                        <p>Optimized for punctuality. We understand the value of your time during business trips to Manama.</p>
                        <Link href="/locations/jubail" className="btn-link">Learn more <ArrowRight size={16} /></Link>
                    </div>

                    {/* Row 2: Family, Student, Pet */}

                    <div className="card col-span-4">
                        <div className="card-icon"><Users size={24} /></div>
                        <h3>Family Transport</h3>
                        <p>Spacious GMC Yukons with privacy tinting and child seats available upon request.</p>
                        <Link href="/services/family-taxi" className="btn-link">Book SUV <ArrowRight size={16} /></Link>
                    </div>

                    <div className="card col-span-4">
                        <div className="card-icon"><GraduationCap size={24} /></div>
                        <h3>Student Commute</h3>
                        <p>Safe, reliable weekly transport for university students. 20% discount for semester bookings.</p>
                        <Link href="/services/student-transport" className="btn-link">View Rates <ArrowRight size={16} /></Link>
                    </div>

                    <div className="card col-span-4">
                        <div className="card-icon"><PawPrint size={24} /></div>
                        <h3>Pet Transport</h3>
                        <p>Specialized pet-friendly vehicles. We handle permit paperwork for your furry friends.</p>
                        <Link href="/services/pet-transport" className="btn-link">Pet Policy <ArrowRight size={16} /></Link>
                    </div>

                    {/* Secondary Features Row - Spans 4 columns each */}
                    <div className="card col-span-4" style={{ background: 'transparent', border: '1px solid var(--color-border)', boxShadow: 'none' }}>
                        <div className="card-icon" style={{ background: 'var(--color-background-alt)' }}><ShieldCheck size={24} /></div>
                        <h3>Secure & Private</h3>
                        <p>GPS tracked fleet with vetted professional drivers.</p>
                    </div>

                    <div className="card col-span-4" style={{ background: 'transparent', border: '1px solid var(--color-border)', boxShadow: 'none' }}>
                        <div className="card-icon" style={{ background: 'var(--color-background-alt)' }}><Clock size={24} /></div>
                        <h3>24/7 Availability</h3>
                        <p>Late night flight? Early morning meeting? We are ready.</p>
                    </div>

                    <div className="card col-span-4" style={{ background: 'transparent', border: '1px solid var(--color-border)', boxShadow: 'none' }}>
                        <div className="card-icon" style={{ background: 'var(--color-background-alt)' }}><FileCheck size={24} /></div>
                        <h3>Visa Assistance</h3>
                        <p>Guidance on causeway visa procedures for all nationalities.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
