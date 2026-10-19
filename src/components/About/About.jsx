import React from 'react';
import './About.css';

export default function About({ personal }) {
  const targetRoles = [
    {
      title: "Maintenance Engineer",
      focus: "Preventive & corrective maintenance mesin industri, troubleshooting elektronika, kalibrasi instrumen, dan kepatuhan SOP."
    },
    {
      title: "Commissioning Engineer",
      focus: "Uji fungsi sistem otomasi baru (PLC Siemens / Omron), validasi wiring & skematik elektrikal, dan sertifikasi kelayakan."
    },
    {
      title: "Field Engineer",
      focus: "Penugasan lapangan, instalasi modul sensor & akuisisi data IoT, serta bridging komunikasi PLC ke antarmuka operator."
    }
  ];

  return (
    <section id="about" className="section about-section" aria-label="Tentang Saya">
      <div className="container">
        
        <header className="section-header">
          <span className="section-tag">01 / TENTANG SAYA</span>
          <h2 className="section-title">Latar Belakang &amp; Kesiapan Kerja</h2>
          <p className="section-subtitle">
            Kombinasi pemahaman teori instrumentasi kontrol dari D4 UGM dan pengalaman praktis di lantai produksi manufaktur.
          </p>
        </header>

        <div className="about-grid">
          {/* Left Column: CV Statement & Values */}
          <article className="about-bio-card flat-card">
            <h3 className="about-card-title">Profil Rekayasa &amp; Operasional</h3>
            <p className="about-paragraph">
              {personal.about1}
            </p>
            <p className="about-paragraph">
              {personal.about2}
            </p>

            <div className="about-meta-list">
              <div className="meta-row">
                <span className="meta-label">Institusi Pendidikan</span>
                <span className="meta-val">Universitas Gadjah Mada (UGM)</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Program Studi</span>
                <span className="meta-val">D4 Rekayasa Instrumentasi &amp; Kontrol</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Indeks Prestasi Kumulatif</span>
                <span className="meta-val mono-highlight">3.77 / 4.00</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Lokasi Saat Ini</span>
                <span className="meta-val">{personal.location}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Status Maganghub</span>
                <span className="meta-val">{personal.statusShort}</span>
              </div>
            </div>
          </article>

          {/* Right Column: 3 Field Roles Readiness */}
          <div className="about-roles-col">
            <h3 className="roles-col-title">Fokus Kontribusi Lapangan</h3>
            <div className="roles-list">
              {targetRoles.map((role, idx) => (
                <div key={idx} className="role-card flat-card">
                  <div className="role-num">0{idx + 1}</div>
                  <div className="role-body">
                    <h4 className="role-title">{role.title}</h4>
                    <p className="role-desc">{role.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="work-readiness-box flat-card">
              <div className="readiness-header">KONDISI KERJA YANG DIHARAPKAN</div>
              <p className="readiness-text">
                Terbiasa dengan ritme kerja dinamis, siap bekerja dengan <strong>sistem shift</strong>, mematuhi standar keselamatan kerja (K3), serta siap ditugaskan on-site maupun perjalanan dinas lapangan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
