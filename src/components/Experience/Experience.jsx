import React from 'react';
import './Experience.css';

export default function Experience({ experience, education }) {
  return (
    <section id="experience" className="section experience-section" aria-label="Riwayat Pengalaman & Pendidikan">
      <div className="container">

        <header className="section-header">
          <span className="section-tag">04 / REKAM JEJAK</span>
          <h2 className="section-title">Pengalaman Industri &amp; Pendidikan</h2>
          <p className="section-subtitle">
            Rekam jejak praktis di lingkungan manufaktur nyata, lembaga metrologi nasional, perancangan sistem kontrol, dan bimbingan laboratorium teknik.
          </p>
        </header>

        <div className="experience-layout-grid">
          
          {/* Main Column: Work Experience */}
          <div className="work-experience-col">
            <h3 className="column-title">PENGALAMAN KERJA &amp; MAGANG</h3>
            
            <div className="experience-list">
              {experience.map((item, index) => (
                <article key={index} className="experience-card flat-card">
                  <header className="exp-card-header">
                    <div className="exp-role-group">
                      <h4 className="exp-role">{item.role}</h4>
                      <span className="exp-org">{item.organization}</span>
                    </div>
                    <span className="exp-period-badge">{item.period}</span>
                  </header>

                  <ul className="exp-points-list">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="exp-point-item">
                        <span className="bullet-dash">—</span>
                        <span className="point-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Side Column: Formal Education */}
          <div className="education-col">
            <h3 className="column-title">RIWAYAT PENDIDIKAN</h3>

            <div className="education-list">
              {education && education.map((edu, idx) => (
                <article key={idx} className="education-card flat-card">
                  <span className="edu-period">{edu.period}</span>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <div className="edu-institution">{edu.institution}</div>
                  {edu.note && (
                    <div className="edu-note-badge">{edu.note}</div>
                  )}
                </article>
              ))}
            </div>

            {/* Cert & Competence Summary */}
            <div className="competence-badge-box flat-card">
              <span className="box-label">SERTIFIKASI &amp; UJI FUNGSI</span>
              <p className="box-desc">
                Telah menyelesaikan rancang bangun sistem kontrol elektrikal dengan sertifikasi kelayakan resmi dari <strong>PT Sucofindo</strong> (2024).
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
