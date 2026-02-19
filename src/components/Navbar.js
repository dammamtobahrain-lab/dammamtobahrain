'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Car, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'white', // Fallback/Base
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>

          {/* Logo */}
          <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
              DAMMAM<span style={{ color: 'var(--color-accent)' }}>TAXI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <Link href="/services" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 500 }}>Services</Link>
            <Link href="/fleet" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 500 }}>Fleet</Link>
            <Link href="/locations" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 500 }}>Locations</Link>
            <Link href="/contact-us" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 500 }}>Contact</Link>
            <Link href="/booking/" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }}>
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-menu-btn desktop-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }} // Hidden on desktop via CSS
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu glass-panel" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            borderBottom: '1px solid var(--color-border)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            animation: 'fadeInUp 0.3s ease-out'
          }}>
            <Link href="/" onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Services</Link>
            <Link href="/fleet" onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Fleet</Link>
            <Link href="/locations" onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Locations</Link>
            <Link href="/contact-us" onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Contact</Link>
            <Link href="/booking/" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ textAlign: 'center' }}>
              Book Online
            </Link>
          </div>
        )}
      </header>

      {/* Secondary Info Bar - Elegant & Minimal */}
      <div style={{ background: '#111', color: 'rgba(255,255,255,0.8)', padding: '0.4rem 0', fontSize: '0.75rem', letterSpacing: '0.5px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <span><MapPin size={12} style={{ display: 'inline', marginRight: '4px', color: 'var(--color-accent)' }} /> Serving Dammam, Khobar, Jubail & Bahrain</span>
          <span className="desktop-only"><Phone size={12} style={{ display: 'inline', marginRight: '4px', color: 'var(--color-accent)' }} /> 24/7 Support</span>
        </div>
      </div>
    </>
  );
}

