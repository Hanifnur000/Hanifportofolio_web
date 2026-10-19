import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ navLinks, personal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" aria-label="Hanif Nurrohman - Beranda">
          <span className="brand-name">{personal.name}</span>
          <span className="brand-status-badge">{personal.statusShort}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navigasi Utama">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeHash === link.href ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <a
            href={personal.cvLink}
            download
            className="btn btn-secondary btn-mono btn-cv"
            title="Unduh CV Hanif Nurrohman"
          >
            Unduh CV (PDF)
          </a>
          <a href="#contact" className="btn btn-primary btn-mono">
            Hubungi
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <nav
        id="mobile-nav-menu"
        className={`mobile-nav ${mobileMenuOpen ? 'visible' : ''}`}
        aria-label="Navigasi Mobile"
      >
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`mobile-nav-link ${activeHash === link.href ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-nav-cta">
            <a
              href={personal.cvLink}
              download
              className="btn btn-secondary btn-mono"
              style={{ width: '100%', marginBottom: '8px' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Unduh CV (PDF)
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-mono"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
