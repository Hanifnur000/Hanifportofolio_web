import React, { useState } from 'react';
import './Projects.css';

// Ilustrasi SVG inline per kategori proyek
const ProjectIllustration = ({ tag }) => {
  const illustrations = {
    vision: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Background grid */}
        <rect width="320" height="160" fill="#0a0a0a"/>
        <line x1="0" y1="40" x2="320" y2="40" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="0" y1="80" x2="320" y2="80" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="0" y1="120" x2="320" y2="120" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="80" y1="0" x2="80" y2="160" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="160" y1="0" x2="160" y2="160" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="240" y1="0" x2="240" y2="160" stroke="#1a1a1a" strokeWidth="1"/>
        {/* Conveyor belt */}
        <rect x="20" y="105" width="280" height="8" rx="2" fill="#222"/>
        {/* Bottles */}
        <rect x="50" y="75" width="22" height="32" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
        <rect x="55" y="70" width="12" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <rect x="110" y="75" width="22" height="32" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
        <rect x="115" y="70" width="12" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <rect x="170" y="75" width="22" height="32" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
        <rect x="175" y="70" width="12" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <rect x="230" y="75" width="22" height="32" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
        <rect x="235" y="70" width="12" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        {/* Detection boxes (AI) */}
        <rect x="46" y="66" width="30" height="44" rx="1" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2"/>
        <rect x="106" y="66" width="30" height="44" rx="1" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2"/>
        <rect x="166" y="66" width="30" height="44" rx="1" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2"/>
        {/* Camera */}
        <rect x="135" y="15" width="50" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <circle cx="160" cy="30" r="8" fill="#111" stroke="#444" strokeWidth="1"/>
        <circle cx="160" cy="30" r="4" fill="#222" stroke="#555" strokeWidth="1"/>
        <line x1="160" y1="45" x2="160" y2="65" stroke="#333" strokeWidth="1.5"/>
        {/* Labels: OK / WARN */}
        <text x="46" y="62" fontFamily="monospace" fontSize="7" fill="#22c55e">OK</text>
        <text x="106" y="62" fontFamily="monospace" fontSize="7" fill="#22c55e">OK</text>
        <text x="163" y="62" fontFamily="monospace" fontSize="7" fill="#f59e0b">WARN</text>
        {/* Counter readout */}
        <rect x="230" y="20" width="72" height="28" rx="2" fill="#111" stroke="#2a2a2a"/>
        <text x="239" y="30" fontFamily="monospace" fontSize="7" fill="#6b7280">COUNTED</text>
        <text x="239" y="43" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#22c55e">0247</text>
      </svg>
    ),
    plc: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="320" height="160" fill="#0a0a0a"/>
        {/* Dashboard frame */}
        <rect x="15" y="15" width="290" height="130" rx="3" fill="#111" stroke="#1f1f1f" strokeWidth="1"/>
        {/* Header bar */}
        <rect x="15" y="15" width="290" height="18" rx="3" fill="#161616"/>
        <text x="25" y="27" fontFamily="monospace" fontSize="7" fill="#4b5563">OPERATIONAL MONITOR — PT SATORIA ANEKA INDUSTRI</text>
        <circle cx="295" cy="24" r="3" fill="#22c55e"/>
        {/* Line chart */}
        <polyline points="30,90 55,75 80,85 105,60 130,70 155,55 180,65 205,50 230,60 255,48 280,55" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <polyline points="30,90 55,75 80,85 105,60 130,70 155,55 180,65 205,50 230,60 255,48 280,55 280,130 30,130" fill="#22c55e" fillOpacity="0.05"/>
        {/* Y-axis labels */}
        <text x="18" y="50" fontFamily="monospace" fontSize="6" fill="#374151">100%</text>
        <text x="20" y="80" fontFamily="monospace" fontSize="6" fill="#374151">50%</text>
        <text x="22" y="110" fontFamily="monospace" fontSize="6" fill="#374151">0%</text>
        {/* Stat boxes */}
        <rect x="30" y="38" width="55" height="22" rx="2" fill="#161616" stroke="#1f1f1f"/>
        <text x="38" y="47" fontFamily="monospace" fontSize="6" fill="#6b7280">RPM</text>
        <text x="38" y="56" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#e5e7eb">1,450</text>
        <rect x="95" y="38" width="55" height="22" rx="2" fill="#161616" stroke="#1f1f1f"/>
        <text x="103" y="47" fontFamily="monospace" fontSize="6" fill="#6b7280">TEMP</text>
        <text x="103" y="56" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#f59e0b">62.4°C</text>
        <rect x="160" y="38" width="55" height="22" rx="2" fill="#161616" stroke="#1f1f1f"/>
        <text x="167" y="47" fontFamily="monospace" fontSize="6" fill="#6b7280">PRESSURE</text>
        <text x="167" y="56" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#22c55e">2.1 bar</text>
        <rect x="225" y="38" width="60" height="22" rx="2" fill="#161616" stroke="#1f1f1f"/>
        <text x="233" y="47" fontFamily="monospace" fontSize="6" fill="#6b7280">STATUS</text>
        <text x="233" y="56" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#22c55e">RUN</text>
        {/* Axis lines */}
        <line x1="30" y1="120" x2="290" y2="120" stroke="#1f1f1f" strokeWidth="1"/>
        <line x1="30" y1="38" x2="30" y2="120" stroke="#1f1f1f" strokeWidth="1"/>
        {/* PLC label */}
        <text x="230" y="140" fontFamily="monospace" fontSize="7" fill="#374151">SIEMENS S7 • PG/PC INTERFACE</text>
      </svg>
    ),
    circuit: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="320" height="160" fill="#0a0a0a"/>
        {/* PCB traces */}
        <line x1="40" y1="80" x2="100" y2="80" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="100" y1="80" x2="100" y2="50" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="100" y1="50" x2="160" y2="50" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="160" y1="50" x2="160" y2="80" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="160" y1="80" x2="220" y2="80" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="220" y1="80" x2="220" y2="110" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="220" y1="110" x2="280" y2="110" stroke="#d97706" strokeWidth="1.5"/>
        {/* Capacitors */}
        <rect x="90" y="73" width="5" height="14" fill="#b45309"/>
        <rect x="97" y="73" width="5" height="14" fill="#b45309"/>
        {/* Resistors */}
        <rect x="130" y="45" width="20" height="10" rx="1" fill="#1f1f1f" stroke="#d97706" strokeWidth="1"/>
        <text x="134" y="53" fontFamily="monospace" fontSize="5" fill="#d97706">10K</text>
        {/* IC XL4016 chip */}
        <rect x="155" y="60" width="50" height="35" rx="2" fill="#1a1a1a" stroke="#d97706" strokeWidth="1.5"/>
        <text x="163" y="75" fontFamily="monospace" fontSize="7" fill="#d97706">IC</text>
        <text x="160" y="86" fontFamily="monospace" fontSize="6" fill="#6b7280">XL4016</text>
        {/* IC pins */}
        <line x1="155" y1="68" x2="148" y2="68" stroke="#d97706" strokeWidth="1"/>
        <line x1="155" y1="76" x2="148" y2="76" stroke="#d97706" strokeWidth="1"/>
        <line x1="155" y1="84" x2="148" y2="84" stroke="#d97706" strokeWidth="1"/>
        <line x1="205" y1="68" x2="212" y2="68" stroke="#d97706" strokeWidth="1"/>
        <line x1="205" y1="76" x2="212" y2="76" stroke="#d97706" strokeWidth="1"/>
        <line x1="205" y1="84" x2="212" y2="84" stroke="#d97706" strokeWidth="1"/>
        {/* Inductor coil */}
        <path d="M230 107 Q236 100 242 107 Q248 114 254 107 Q260 100 266 107 Q272 114 278 107" stroke="#d97706" strokeWidth="1.5" fill="none"/>
        {/* Labels */}
        <text x="18" y="84" fontFamily="monospace" fontSize="6" fill="#6b7280">VIN</text>
        <text x="286" y="114" fontFamily="monospace" fontSize="6" fill="#6b7280">VOUT</text>
        <text x="80" y="140" fontFamily="monospace" fontSize="7" fill="#4b5563">BUCK-CONVERTER • TKDN SUBSTITUSI IMPOR</text>
      </svg>
    ),
    data: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="320" height="160" fill="#0a0a0a"/>
        {/* Spreadsheet grid */}
        <rect x="15" y="15" width="175" height="130" rx="2" fill="#111" stroke="#1f1f1f"/>
        {/* Column headers */}
        <rect x="15" y="15" width="175" height="16" fill="#161616"/>
        <text x="20" y="26" fontFamily="monospace" fontSize="6" fill="#6b7280">  A         B         C</text>
        {/* Row cells */}
        {[35, 52, 69, 86, 103, 120, 137].map((y, i) => (
          <g key={y}>
            <line x1="15" y1={y} x2="190" y2={y} stroke="#1a1a1a" strokeWidth="0.5"/>
            <text x="20" y={y + 11} fontFamily="monospace" fontSize="6" fill="#374151">{`SN-${1001 + i}`}</text>
            <text x="65" y={y + 11} fontFamily="monospace" fontSize="6" fill={i === 2 ? "#ef4444" : "#22c55e"}>{i === 2 ? "FAIL" : "PASS"}</text>
            <text x="120" y={y + 11} fontFamily="monospace" fontSize="6" fill="#6b7280">{`${(0.98 - i * 0.001).toFixed(3)} m³/h`}</text>
          </g>
        ))}
        <line x1="57" y1="15" x2="57" y2="145" stroke="#1a1a1a" strokeWidth="0.5"/>
        <line x1="110" y1="15" x2="110" y2="145" stroke="#1a1a1a" strokeWidth="0.5"/>
        {/* Flow arrow */}
        <line x1="195" y1="80" x2="215" y2="80" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)"/>
        <text x="196" y="74" fontFamily="monospace" fontSize="6" fill="#3b82f6">AUTO</text>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6"/>
          </marker>
        </defs>
        {/* Meter gas illustration */}
        <rect x="218" y="45" width="80" height="70" rx="4" fill="#161616" stroke="#1f2937"/>
        <circle cx="258" cy="80" r="24" fill="#111" stroke="#374151" strokeWidth="1.5"/>
        <path d="M258 56 A24 24 0 0 1 282 80" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <line x1="258" y1="80" x2="270" y2="65" stroke="#e5e7eb" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="258" cy="80" r="3" fill="#374151"/>
        <text x="238" y="115" fontFamily="monospace" fontSize="6" fill="#6b7280">GAS METER</text>
        <text x="30" y="152" fontFamily="monospace" fontSize="7" fill="#4b5563">AKUISISI DATA • KALIBRASI • METROLOGI NASIONAL</text>
      </svg>
    ),
    iot: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="320" height="160" fill="#0a0a0a"/>
        {/* Wristband */}
        <rect x="50" y="55" width="85" height="55" rx="12" fill="#1a1a1a" stroke="#374151" strokeWidth="1.5"/>
        <rect x="62" y="65" width="61" height="35" rx="4" fill="#111" stroke="#1f2937"/>
        {/* Heart rate display */}
        <polyline points="65,85 73,85 77,73 83,97 89,77 95,85 103,85 110,85 115,79 120,90 123,85" stroke="#ef4444" strokeWidth="1.5" fill="none"/>
        <text x="66" y="96" fontFamily="monospace" fontSize="5" fill="#6b7280">HR: 72bpm  SpO2: 98%</text>
        {/* Band straps */}
        <rect x="32" y="65" width="20" height="12" rx="4" fill="#1a1a1a" stroke="#374151"/>
        <rect x="133" y="65" width="20" height="12" rx="4" fill="#1a1a1a" stroke="#374151"/>
        {/* WiFi signal lines */}
        <path d="M165,80 Q180,65 195,80" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M160,75 Q180,57 200,75" stroke="#3b82f6" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M155,70 Q180,50 205,70" stroke="#3b82f6" strokeWidth="0.75" fill="none" strokeLinecap="round" opacity="0.3"/>
        <circle cx="180" cy="82" r="2" fill="#3b82f6"/>
        {/* Google Sheets icon (simplified) */}
        <rect x="215" y="40" width="80" height="90" rx="4" fill="#161616" stroke="#1f2937"/>
        <rect x="215" y="40" width="80" height="16" rx="4" fill="#1a3a1a"/>
        <text x="225" y="51" fontFamily="monospace" fontSize="6" fill="#22c55e">Google Sheets</text>
        {/* Sheet rows */}
        {[62, 76, 90, 104, 118].map((y, i) => (
          <g key={y}>
            <line x1="215" y1={y} x2="295" y2={y} stroke="#1a1a1a" strokeWidth="0.5"/>
            <rect x="220" y={y + 3} width={20 + i * 5} height="6" rx="1" fill="#1a2a1a"/>
          </g>
        ))}
        <text x="60" y="148" fontFamily="monospace" fontSize="7" fill="#4b5563">ESP32 • SENSOR IoT • REAL-TIME MONITORING</text>
      </svg>
    ),
  };
  return (
    <div className="project-illustration" aria-hidden="true">
      {illustrations[tag] || illustrations['data']}
    </div>
  );
};

export default function Projects({ projects }) {
  // Proyek 1 dan 2 terbuka secara default sebagai proyek unggulan
  const [expandedIds, setExpandedIds] = useState(['pro-1', 'pro-2']);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(projects.map((p) => p.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  return (
    <section id="projects" className="section projects-section" aria-label="Studi Kasus Proyek Unggulan">
      <div className="container">

        <header className="section-header">
          <div className="header-flex-row">
            <div>
              <span className="section-tag">02 / STUDI KASUS TEKNIK</span>
              <h2 className="section-title">Proyek &amp; Implementasi Nyata</h2>
              <p className="section-subtitle">
                Disusun berdasarkan pengalaman CV: integrasi PLC, machine vision, perancangan sistem kontrol, dan akuisisi data.
              </p>
            </div>
            
            <div className="accordion-controls">
              <button type="button" onClick={expandAll} className="btn-toggle-all">
                [ Buka Semua ]
              </button>
              <button type="button" onClick={collapseAll} className="btn-toggle-all">
                [ Tutup Semua ]
              </button>
            </div>
          </div>
        </header>

        {/* List of Expandable Project Rows */}
        <div className="projects-rows-list" role="region" aria-label="Daftar Baris Studi Kasus Proyek">
          {projects.map((project, idx) => {
            const isExpanded = expandedIds.includes(project.id);
            const isFeatured = project.featured;

            return (
              <article
                key={project.id}
                className={`project-row-item ${isExpanded ? 'expanded' : ''} ${isFeatured ? 'featured' : ''}`}
              >
                {/* Row Header Trigger */}
                <button
                  type="button"
                  className="row-header"
                  onClick={() => toggleExpand(project.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`project-details-${project.id}`}
                >
                  <div className="row-header-main">
                    <span className="row-num">0{idx + 1}</span>
                    <div className="row-titles">
                      <div className="row-meta">
                        <span className="row-context">{project.context}</span>
                        {isFeatured && (
                          <span className="featured-tag">UNGGULAN</span>
                        )}
                      </div>
                      <h3 className="row-title">{project.title}</h3>
                    </div>
                  </div>

                  <div className="row-toggle-indicator">
                    <span className="indicator-text">
                      {isExpanded ? 'Tutup Detail' : 'Buka Detail'}
                    </span>
                    <span className="indicator-symbol">
                      {isExpanded ? '[ − ]' : '[ + ]'}
                    </span>
                  </div>
                </button>

                {/* Expandable Case Study Details */}
                {isExpanded && (
                  <div id={`project-details-${project.id}`} className="row-details">

                    {/* Visual Illustration Strip */}
                    {project.imageTag && (
                      <ProjectIllustration tag={project.imageTag} />
                    )}

                    <div className="case-study-grid">
                      
                      <div className="case-item">
                        <span className="case-label">MASALAH:</span>
                        <p className="case-content">{project.problem}</p>
                      </div>

                      <div className="case-item">
                        <span className="case-label">PERAN:</span>
                        <p className="case-content">{project.role}</p>
                      </div>

                      <div className="case-item highlight-solusi">
                        <span className="case-label">SOLUSI:</span>
                        <p className="case-content">{project.solution}</p>
                      </div>

                      <div className="case-item highlight-hasil">
                        <span className="case-label">HASIL:</span>
                        <p className="case-content">{project.result}</p>
                      </div>

                    </div>

                    {/* Tech Stack Footer */}
                    <div className="case-tech-footer">
                      <span className="tech-label">TEKNOLOGI DIGUNAKAN:</span>
                      <div className="tech-tags-list">
                        {project.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
