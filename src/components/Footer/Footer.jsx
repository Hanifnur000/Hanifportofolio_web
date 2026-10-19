import React from 'react';
import './Footer.css';

export default function Footer({ navLinks, personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <span className="footer-brand-name">{personal.name}</span>
            <span className="footer-brand-role">{personal.title}</span>
            <p className="footer-tagline">
              &ldquo;{personal.tagline}&rdquo;
            </p>
            <div className="footer-status-text">
              {personal.statusBadge}
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigasi Bagian</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-spec-col">
            <h4 className="footer-col-title">Standar Data &amp; Integritas</h4>
            <div className="footer-spec-box">
              <p className="spec-text">
                Portofolio profesional ini disusun secara akurat berdasarkan catatan riil CV. Seluruh metrik studi kasus didasarkan pada implementasi nyata di industri dan institusi teknis.
              </p>
              <a href={personal.cvLink} download className="btn-footer-cv">
                [ Unduh Berkas CV Resmi ]
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} {personal.name} &bull; Yogyakarta, Indonesia. Dibuat dengan pendekatan editorial minimalis.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
          >
            [ Kembali ke Atas &uarr; ]
          </button>
        </div>

      </div>
    </footer>
  );
}
