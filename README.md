<<<<<<< HEAD
# Portofolio Web Modern & Berstandar Web (Web Standards Compliant)

Aplikasi Web Portofolio Profesional yang dibangun dari awal (*from scratch*) dengan arsitektur modern **React + Vite**, mematuhi standar konsorsium web internasional (**W3C HTML5 Semantic**, **WCAG 2.1 Accessibility**, dan **Core Web Vitals**).

---

## 🏛️ Kaidah & Standar Web yang Diterapkan

Struktur proyek ini dirancang berdasarkan praktik terbaik industri (*industry best practices*):

### 1. Semantik HTML5 Penuh (Tanpa "Div Soup")
- Menggunakan elemen landmark terstandar: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Hierarki judul terstruktur ketat: hanya satu tag `<h1>` per halaman (di Hero section), diikuti `<h2>` untuk setiap seksi, dan `<h3>`/`<h4>` untuk subkomponen.
- Penggunaan elemen semantik data seperti `<time>` untuk penanggalan riwayat karir dan `<ol>` untuk urutan linimasa.

### 2. Aksesibilitas Web (A11y - WCAG 2.1 Level AA)
- **Skip to Content Link**: Tautan pintas tersembunyi yang langsung fokus ke `#main-content` saat pengguna menekan tombol `Tab`.
- **Keyboard Navigation**: Status `:focus-visible` dengan outline kontras tinggi yang jelas.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-label`, dan `aria-hidden="true"` pada ikon dekoratif.
- **Form Semantics**: Setiap input dan textarea terhubung secara eksplisit dengan `<label htmlFor="...">`.

### 3. Optimasi SEO & Performa
- **Meta Tags Komprehensif**: Judul unik, deskripsi meta, kata kunci, author, dan robots index.
- **Social Sharing Ready**: Open Graph protocol (`og:title`, `og:description`, `og:image`) dan Twitter Card.
- **Font Preconnect**: Hubungan preconnect ke `fonts.googleapis.com` dan `fonts.gstatic.com` untuk mempercepat pemuatan font *Plus Jakarta Sans* & *JetBrains Mono*.

### 4. Sistem Desain Modular (CSS Design Tokens)
- Seluruh nilai warna, tipografi, spasi, radius, dan bayangan dikelola melalui **CSS Custom Properties** (`var(--...)`) di `src/styles/variables.css`.
- Desain *Dark Theme* estetis dengan efek *glassmorphism* modern dan mikro-animasi yang halus (*reduced-motion friendly*).

---

## 📁 Struktur Direktori Proyek

```text
portfolio-web/
├── index.html                   # Dokumen HTML5 semantik, SEO meta & OpenGraph
├── package.json                 # Konfigurasi dependensi (React 18 + Vite)
├── vite.config.js               # Konfigurasi server & bundler Vite
├── README.md                    # Dokumentasi lengkap proyek
├── public/
│   └── favicon.svg              # Favicon SVG modern resolusi tinggi
└── src/
    ├── main.jsx                 # Entry point aplikasi React
    ├── App.jsx                  # Komposisi utama layout dan landmark semantik
    ├── styles/                  # Arsitektur CSS Design Tokens
    │   ├── variables.css        # Token desain: warna, jarak, font, bayangan
    │   ├── reset.css            # Modern CSS Reset cross-browser
    │   ├── animations.css       # Keyframes mikro-animasi & efek halus
    │   └── global.css           # Utilitas layout, card glassmorphism, buttons
    ├── data/
    │   └── portfolioData.js     # Data portofolio terpusat (mudah disunting)
    └── components/              # Komponen modular mandiri
        ├── Navbar/              # Navigasi responsif + mobile drawer + A11y
        ├── Hero/                # Banner utama dengan h1 & showcase kode
        ├── About/               # Profil, statistik & pilar filosofi web
        ├── Skills/              # Tab kemampuan teknis & progress bar
        ├── Projects/            # Kartu proyek artikel semantik & filter kategori
        ├── Experience/          # Linimasa karir berurutan dengan <ol> & <time>
        ├── Contact/             # Formulir pesan tervalidasi & tautan sosial
        └── Footer/              # Hak cipta, lencana kepatuhan & back to top
```

---

## 🚀 Cara Menjalankan Proyek

### 1. Buka Terminal di Folder Proyek
Jalankan terminal dan arahkan ke direktori proyek ini:
```bash
cd "C:\Users\ASUS\.gemini\antigravity-ide\scratch\portfolio-web"
```

### 2. Pasang Dependensi
Pastikan [Node.js](https://nodejs.org) sudah terpasang, lalu jalankan:
```bash
npm install
```

### 3. Jalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser pada alamat yang ditampilkan di terminal (biasanya `http://localhost:3000`).

### 4. Membangun Paket Produksi (Production Build)
Untuk menghasilkan bundle siap rilis (*optimized production build*):
```bash
npm run build
```

---

## ✏️ Cara Mengubah Data Portofolio
Anda dapat memperbarui seluruh isi portofolio (nama, bio, sosial media, proyek, keahlian, dan riwayat pekerjaan) hanya dengan mengedit satu file terpusat:
👉 `src/data/portfolioData.js`
Semua komponen akan langsung terupdate secara otomatis tanpa perlu mengubah struktur HTML atau JSX.
=======
# Hanifportofolio
PORTOFOLIO
>>>>>>> b60efcfa827d54a09a3e4a1740995a54050baa96
