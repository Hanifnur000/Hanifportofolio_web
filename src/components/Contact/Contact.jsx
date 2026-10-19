import React, { useState } from 'react';
import './Contact.css';

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Maintenance / Field Engineer Opportunity',
    message: ''
  });
  const [status, setStatus] = useState({ submitted: false, message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitted: false, message: 'Harap isi nama, email/kontak, dan pesan Anda.' });
      return;
    }
    setStatus({
      submitted: true,
      message: 'Pesan Anda berhasil dicatat. Terima kasih telah menghubungi Hanif Nurrohman.'
    });
    setFormData({ name: '', email: '', topic: 'Maintenance / Field Engineer Opportunity', message: '' });
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Informasi Kontak & Kolaborasi">
      <div className="container">

        <header className="section-header">
          <span className="section-tag">05 / INFORMASI KONTAK</span>
          <h2 className="section-title">Saluran Komunikasi Langsung</h2>
          <p className="section-subtitle">
            Terbuka untuk diskusi penempatan karir, rekrutmen industri manufaktur, dan konsultasi teknis instrumentasi kontrol.
          </p>
        </header>

        <div className="contact-grid">
          {/* Left Column: Direct Official Contact Info */}
          <div className="contact-info-panel flat-card">
            <h3 className="contact-panel-title">Kontak &amp; Ketersediaan</h3>
            <p className="contact-panel-desc">
              Silakan hubungi melalui saluran surel resmi, WhatsApp, atau unduh berkas Curriculum Vitae lengkap.
            </p>

            <dl className="contact-details-list">
              <div className="contact-detail-row">
                <dt>Alamat Surel</dt>
                <dd>
                  <a href={`mailto:${personal.email}`} className="contact-link">
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-copy-mono"
                    title="Salin alamat email"
                  >
                    {copied ? '[ Tersalin ]' : '[ Salin ]'}
                  </button>
                </dd>
              </div>

              <div className="contact-detail-row">
                <dt>Telepon / WhatsApp</dt>
                <dd>
                  <a href="https://wa.me/628995900121" target="_blank" rel="noopener noreferrer" className="contact-link">
                    {personal.phone}
                  </a>
                </dd>
              </div>

              <div className="contact-detail-row">
                <dt>Lokasi Domisili</dt>
                <dd>{personal.location}</dd>
              </div>

              <div className="contact-detail-row">
                <dt>Status &amp; Ketersediaan</dt>
                <dd className="status-highlight">
                  {personal.statusBadge}
                </dd>
              </div>
            </dl>

            <div className="contact-docs-action">
              <span className="docs-label">BERKAS RESMI:</span>
              <a href={personal.cvLink} download className="btn btn-secondary btn-mono">
                Unduh CV Hanif Nurrohman (PDF)
              </a>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="contact-form-panel flat-card">
            <h3 className="contact-panel-title">Kirim Pesan / Tawaran Karir</h3>

            {status.message && (
              <div
                className={`form-alert ${status.submitted ? 'success' : 'error'}`}
                role="alert"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Nama Lengkap / Perusahaan <span className="req">*</span></label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    aria-required="true"
                    placeholder="Nama Anda atau Instansi"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Alamat Email / Nomor Kontak <span className="req">*</span></label>
                  <input
                    type="text"
                    id="contact-email"
                    name="email"
                    required
                    aria-required="true"
                    placeholder="email@perusahaan.com / No. HP"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-topic">Fokus Keperluan</label>
                <select
                  id="contact-topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                >
                  <option value="Maintenance / Field Engineer Opportunity">Peluang Posisi Maintenance / Field Engineer</option>
                  <option value="Commissioning Engineer Opportunity">Peluang Posisi Commissioning Engineer</option>
                  <option value="Industrial Automation Consultation">Diskusi / Konsultasi Otomasi &amp; PLC</option>
                  <option value="General Inquiry">Keperluan Umum Lainnya</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Isi Pesan <span className="req">*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  aria-required="true"
                  placeholder="Tuliskan pesan, rincian tawaran karir, atau pertanyaan Anda..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
