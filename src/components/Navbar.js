'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo">
          <Image src="/logo.svg" alt="Dammam to Bahrain Taxi" width={200} height={40} priority />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="nav-item" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/fleet" className="nav-item" onClick={() => setIsOpen(false)}>Fleet</Link>
          <Link href="/corporate" className="nav-item" onClick={() => setIsOpen(false)}>Corporate</Link>
          {/* Guide/Blog Link Removed */}
          <Link href="/contact-us" className="nav-item" onClick={() => setIsOpen(false)}>Contact</Link>

          <Link href="/booking" className="btn btn-primary" style={{ borderRadius: 0 }} onClick={() => setIsOpen(false)}>
            Book Now
          </Link>
        </div>
      </div>

      {/* Locations Bar */}
      <div className="container" style={{ borderTop: '1px solid #000', marginTop: '10px', paddingTop: '10px', fontSize: '0.9rem', display: 'flex', gap: '20px', fontFamily: 'Arial, sans-serif', flexWrap: 'wrap' }}>
        <span><strong><Link href="/locations">LOCATIONS:</Link></strong></span>
        <Link href="/locations/al-khobar">Al Khobar</Link> |
        <Link href="/locations/jubail">Jubail</Link> |
        <Link href="/locations/riyadh">Riyadh</Link> |
        <Link href="/locations/dammam">Dammam Airport</Link> |
        <Link href="/locations/bahrain">Bahrain</Link>
      </div>
    </nav>
  );
}
