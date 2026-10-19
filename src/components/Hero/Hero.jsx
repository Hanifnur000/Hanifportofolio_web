import React from 'react';
import './Hero.css';

export default function Hero({ personal }) {
  return (
    <section id="hero" className="hero-section" aria-label="Pengenalan Utama">
      <div className="container">
        
        {/* Status Bar / Eyebrow */}
        <div className="hero-status-eyebrow">
          <span className="status-label">STATUS AKTIF:</span>
          <span className="status-text">{personal.statusBadge}</span>
        </div>

        <div className="hero-main-grid">
          {/* Main Editorial Pitch */}
          <div className="hero-content">
            <span className="hero-pretitle">{personal.title}</span>
            <h1 className="hero-name">{personal.name}</h1>
            
            <p className="hero-tagline">
              &ldquo;{personal.tagline}&rdquo;
            </p>

            <p className="hero-summary">
              Lulusan D4 Teknologi Rekayasa Instrumentasi dan Kontrol UGM (IPK 3.77/4.00) dengan rekam jejak praktis otomasi industri: integrasi PLC Siemens via interface PG/PC, implementasi machine vision berbasis AI, serta monitoring operasional real-time di fasilitas manufaktur.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Lihat Studi Kasus Proyek
              </a>
              <a href="#contact" className="btn btn-secondary">
                Informasi Kontak
              </a>
              <a href={personal.cvLink} download className="btn btn-secondary btn-mono">
                Unduh CV (PDF)
              </a>
            </div>
          </div>

          {/* Profile Overview Card (Datasheet style) */}
          <aside className="hero-datasheet" aria-label="Ringkasan Kompetensi">
            <div className="datasheet-header">
              <span className="datasheet-tag">RINGKASAN PROFIL TEKNIK</span>
              <span className="datasheet-initials">{personal.initials}</span>
            </div>
            
            <dl className="datasheet-list">
              <div className="datasheet-row">
                <dt>Pendidikan Terakhir</dt>
                <dd>D4 Rekayasa Instrumentasi &amp; Kontrol, UGM</dd>
              </div>
              <div className="datasheet-row">
                <dt>Indeks Prestasi Kumulatif</dt>
                <dd className="mono-highlight">3.77 / 4.00</dd>
              </div>
              <div className="datasheet-row">
                <dt>Penugasan Terkini</dt>
                <dd>Maganghub di PT Satoria Aneka Industri</dd>
              </div>
              <div className="datasheet-row">
                <dt>Target Posisi</dt>
                <dd>Maintenance, Commissioning, atau Field Engineer</dd>
              </div>
              <div className="datasheet-row">
                <dt>Kesiapan Kerja</dt>
                <dd>Tersedia sistem shift, kerja dinamis, &amp; SOP manufaktur</dd>
              </div>
              <div className="datasheet-row">
                <dt>Domisili</dt>
                <dd>{personal.location}</dd>
              </div>
            </dl>
          </aside>
        </div>

        {/* Quick Numbers Strip (Angka Cepat dari CV) */}
        <div className="hero-stats-strip" aria-label="Statistik Kunci CV">
          <div className="stats-header-label">DATA RESMI DARI CV</div>
          <div className="stats-grid">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="stat-cell">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-title">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
