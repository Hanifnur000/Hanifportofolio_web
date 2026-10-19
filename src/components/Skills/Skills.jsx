import React from 'react';
import './Skills.css';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section skills-section" aria-label="Keahlian Teknis">
      <div className="container">

        <header className="section-header">
          <span className="section-tag">03 / KEAHLIAN TEKNIS</span>
          <h2 className="section-title">Matriks Kompetensi &amp; Instrumen</h2>
          <p className="section-subtitle">
            Dikelompokkan berdasarkan domain rekayasa tanpa persentase subjektif; fokus pada instrumen, perangkat keras, dan perangkat lunak yang telah teruji di industri.
          </p>
        </header>

        {/* Competency Matrix Table */}
        <div className="skills-matrix-table" role="table" aria-label="Tabel Keahlian Teknis">
          {skills.map((group, idx) => (
            <div key={idx} className="matrix-row" role="row">
              <div className="matrix-group-col" role="rowheader">
                <span className="group-num">0{idx + 1}</span>
                <span className="group-name">{group.group}</span>
              </div>
              <div className="matrix-items-col" role="cell">
                <div className="matrix-tags-wrap">
                  {group.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="competency-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standards & Field Discipline Note */}
        <aside className="skills-footnote flat-card">
          <div className="footnote-header">STANDAR LAPANGAN &amp; KESELAMATAN (K3):</div>
          <p className="footnote-body">
            Setiap implementasi kelistrikan, wiring panel, dan kalibrasi instrumen dieksekusi mengacu pada SOP industri, pembacaan diagram skematik standar DIN/IEC, serta regulasi verifikasi metrologi nasional.
          </p>
        </aside>

      </div>
    </section>
  );
}
