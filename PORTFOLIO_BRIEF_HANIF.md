# PORTFOLIO_BRIEF.md: Hanif Nurrohman

> Brief ini sudah diisi dari CV. Simpan di root folder proyek, lalu minta agent Antigravity:
> *"Baca PORTFOLIO_BRIEF_HANIF.md, buat implementation plan dulu, tunggu persetujuan saya, baru bangun."*
> Bagian bertanda **TODO** adalah data yang belum ada di CV. Agent dilarang mengarang isinya.

---

## 0. Cara Kerja dengan Agent

1. Mulai di mode **Planning**: minta rencana implementasi dan daftar tugas sebelum kode.
2. Review rencana, koreksi arah desain di tahap ini.
3. Bangun **per section**: Hero, Tentang, Proyek, Keahlian, Pengalaman, Kontak.
4. Setelah tiap section, minta agent menjalankan situs di browser, ambil screenshot desktop dan mobile, lalu perbaiki yang rusak.
5. Beri feedback spesifik ("judul hero kurang besar"), bukan umum ("kurang bagus").
6. Di akhir, jalankan checklist bagian 11.

---

## 1. Ringkasan Proyek

| Item | Isi |
|---|---|
| Jenis | Web portofolio pribadi, single page multi-section |
| Tujuan utama | Mendapat pekerjaan di bidang **Maintenance, Commissioning, atau Field Engineer** (otomasi industri / instrumentasi) |
| Audiens | Recruiter dan engineer manager di perusahaan manufaktur, otomasi, dan instrumentasi |
| Bahasa konten | Indonesia (utama). Versi Inggris opsional lewat tombol pengalih |
| Kesan yang diinginkan | Minimalis, rapi, dapat diandalkan. Putih dan abu, tanpa gradasi, terasa buatan tangan |
| Yang harus tersampaikan dalam 10 detik | Lulusan D4 UGM (IPK 3.77), sudah menangani PLC Siemens, machine vision, dan dashboard monitoring di pabrik nyata |

---

## 2. Identitas & Konten (dari CV)

```yaml
nama: "Hanif Nurrohman"
profesi: "Instrumentation & Control Engineer"
tagline: "Mengintegrasikan otomatisasi dan kendali mutu di industri."
lokasi: "Yogyakarta, Indonesia"
email: "[EMAIL_ADDRESS]"
telepon: "+62 899-5900-121"   # catatan: nomor HP di situs publik rawan spam; tampilkan opsional atau di balik tombol "Hubungi"
sosial:
  linkedin: "https://www.linkedin.com/in/hanif-nurrohman/?isSelfProfile=true"
  github: "TODO: isi jika ada, atau hapus"
cv_link: "assets/cv/CV_Hanif_Nurrohman.pdf"   # taruh file CV di folder ini
foto: "assets/foto/foto.png.pdf"
status: "Sedang menjalani Maganghub di PT Satoria Aneka Industri (Agustus 2026 - Februari 2027), terbuka untuk peluang setelahnya"
```

### Tentang saya
Lulusan D4 Teknologi Rekayasa Instrumentasi dan Kontrol, Universitas Gadjah Mada (IPK 3.77/4.00), dengan pengalaman praktis di otomasi industri: integrasi PLC Siemens, sistem machine vision, dan monitoring data berbasis IoT yang ditampilkan ke web dashboard.

Terbiasa bekerja sesuai SOP di lingkungan manufaktur, mulai dari instalasi elektrikal, wiring, troubleshooting elektronika, sampai membaca skematik teknik. Siap berkontribusi di posisi Maintenance, Commissioning, atau Field Engineer, baik dengan sistem kerja dinamis maupun shift.

> Agent: boleh merapikan kalimat, tetapi **jangan menambah klaim** yang tidak ada di CV.

### Angka cepat (untuk strip statistik di bawah hero)
Hanya pakai angka yang ada di CV:
- **3.77 / 4.00** IPK, D4 UGM
- **>150** mahasiswa dibimbing di praktikum (8 kelas, 4 mata kuliah)
- **4 bulan** menyelesaikan sistem kontrol elektrikal yang lolos uji Sucofindo
- **5** pengalaman kerja/magang di industri dan lembaga teknis

---

## 3. Proyek Unggulan (disusun sebagai studi kasus dari pengalaman CV)

Tampilkan sebagai **daftar baris** yang bisa dibuka untuk detail, dengan **dua proyek pertama sebagai unggulan** (baris lebih besar atau terbuka secara default). Format tiap studi kasus: **Masalah, Peran, Solusi, Hasil, Teknologi**.

### 1) Machine Vision untuk Inspeksi Label Infus *(unggulan)*
```yaml
konteks: "PT Satoria Aneka Industri, Plant 1, produk infus"
masalah: "Penghitungan dan inspeksi kualitas label dilakukan manual sehingga presisinya terbatas."
peran: "Merancang dan mengimplementasikan sistem."
solusi: "Machine vision berbasis AI dan kamera industri untuk menghitung dan menginspeksi label secara otomatis."
hasil: "Meningkatkan presisi kontrol kualitas (Quality Control). TODO: tambahkan angka (akurasi, waktu, reject rate) jika ada dan boleh dipublikasikan."
teknologi: ["Machine Vision", "AI", "Kamera industri"]
gambar: "TODO: diagram alur atau ilustrasi (JANGAN pakai foto internal perusahaan tanpa izin)"
```

### 2) Real-time Monitoring PLC Siemens ke Web Dashboard *(unggulan)*
```yaml
konteks: "PT Satoria Aneka Industri"
masalah: "Data performa mesin kurang transparan bagi tim."
peran: "Mengembangkan sistem monitoring."
solusi: "Ekstraksi data dari PLC Siemens lewat interface PG/PC, lalu integrasi ke dashboard website perusahaan."
hasil: "Transparansi data performa mesin secara real-time. TODO: angka jika ada (jumlah mesin, interval data)."
teknologi: ["PLC Siemens", "PG/PC interface", "Web dashboard"]
gambar: "TODO: mockup dashboard bergaya serupa (data dummy), bukan tangkapan layar asli perusahaan"
```

### 3) Desain Ulang Sistem Kontrol Automatic Tissue Processor
```yaml
konteks: "PT Miconos, magang Juni - November 2024"
masalah: "Perangkat membutuhkan sistem kontrol elektrikal yang baru."
peran: "Menganalisis skematik sirkuit dan mendesain ulang sistem kontrol elektrikal."
solusi: "Analisis skematik lalu perancangan sistem kontrol baru."
hasil: "Selesai dalam 4 bulan dan lolos hasil uji oleh PT Sucofindo."
teknologi: ["Analisis skematik", "Sistem kontrol elektrikal", "Wiring & panel"]
gambar: "TODO: diagram blok sederhana buatan sendiri"
```

### 4) Sistem Akuisisi Data Otomatis Uji Meter Gas
```yaml
konteks: "Direktorat Metrologi, magang Sept 2023 - Jan 2024"
masalah: "Input data hasil uji manual lambat dan rawan human error."
peran: "Merancang dan mengimplementasikan sistem akuisisi data otomatis; ikut kalibrasi dan verifikasi meter gas sesuai regulasi nasional."
hasil: "Memangkas waktu input data dan mengeliminasi kesalahan manual (human error). TODO: persentase/waktu jika diketahui."
teknologi: ["Akuisisi data", "Kalibrasi", "Metrologi"]
gambar: "TODO: ilustrasi alur data"
```

### 5) *(Opsional)* OpsWatch Local: Monitor Sistem Real-time
Dibuat sendiri sebagai proyek pribadi: dashboard monitoring yang membaca CPU, RAM, disk, jaringan, dan proses dari laptop lewat backend Python (`psutil`) dan frontend HTML/CSS/JS, lengkap dengan ambang alert dan ekspor CSV. Cocok sebagai bukti kemampuan Python + web dashboard di luar pekerjaan. TODO: unggah kode ke GitHub dan isi tautannya, atau hapus kartu ini.

---

## 4. Keahlian

Kelompokkan, **jangan** pakai bar persentase (tidak bermakna dan sulit dipertanggungjawabkan).

| Kelompok | Isi |
|---|---|
| **Otomasi & Kontrol** | PLC Siemens (integrasi PG/PC, ekstraksi data), PLC Omron, CX-One, Machine Vision |
| **Embedded & IoT** | Arduino, ESP32, C++, mikrokontroler, instrumentasi dan sensor IoT |
| **Software Teknik** | Python, MATLAB, Proteus, MS Excel |
| **Kompetensi Lapangan** | Kalibrasi alat ukur, troubleshooting elektronika, analisis diagram skematik, wiring & panel elektrikal, SOP dan K3 dasar |
| **Bahasa** | Indonesia (mahir), Inggris (kemampuan kerja dasar) |

---

## 5. Pengalaman & Pendidikan

### Pengalaman (urutan terbaru dulu)
```yaml
- periode: "Agustus 2026 - Februari 2027"
  posisi: "Maganghub"
  organisasi: "PT Satoria Aneka Industri, Pasuruan"
  poin:
    - "Merancang dan mengimplementasikan sistem machine vision berbasis AI/kamera industri untuk penghitungan dan inspeksi kualitas label otomatis pada produk infus di Plant 1."
    - "Mengembangkan sistem real-time operational monitoring dengan mengekstrak data dari PLC Siemens via interface PG/PC dan mengintegrasikannya ke dashboard website perusahaan."

- periode: "Januari 2026 - Agustus 2026"
  posisi: "Operator Produksi"
  organisasi: "Mesyo Creative, Yogyakarta"
  poin:
    - "Mengoperasikan, mengkalibrasi, dan merawat berkala mesin cetak sublimasi dan Laser UV ID Card."
    - "Quality Control hasil cetak sebelum distribusi untuk meminimalkan defect rate."
    - "Bertanggung jawab atas preventive maintenance mingguan demi kelancaran alur kerja dan target output harian."

- periode: "Juni 2024 - November 2024"
  posisi: "Magang"
  organisasi: "PT Miconos, Yogyakarta"
  poin:
    - "Menganalisis skematik sirkuit Automatic Tissue Processor dan mendesain ulang sistem kontrol elektrikalnya."
    - "Menyelesaikan sistem dalam 4 bulan dan lolos uji oleh PT Sucofindo."

- periode: "Agustus 2024 - September 2024"
  posisi: "Asisten Praktikum"
  organisasi: "Departemen Teknik Elektro dan Informatika, Yogyakarta"
  poin:
    - "Menyiapkan dan menguji instrumen serta modul sebelum praktikum."
    - "Troubleshooting sirkuit elektronik, kesalahan kode C++, dan simulasi praktikum."
    - "Membimbing dan mengevaluasi >150 mahasiswa dari 8 kelas untuk 4 mata kuliah teknik."

- periode: "September 2023 - Januari 2024"
  posisi: "Magang"
  organisasi: "Direktorat Metrologi, Bandung"
  poin:
    - "Kalibrasi dan verifikasi instrumen meter gas sesuai regulasi nasional."
    - "Merancang sistem akuisisi data otomatis yang memangkas waktu input dan menghilangkan human error."
```

### Pendidikan
```yaml
- gelar: "Sarjana Terapan (D4) Teknologi Rekayasa Instrumentasi dan Kontrol"
  institusi: "Universitas Gadjah Mada"
  periode: "Agustus 2021 - Juli 2025"
  catatan: "IPK 3.77 / 4.00"
- gelar: "SMK Negeri 3 Yogyakarta, Teknik Listrik"
  periode: "Agustus 2017 - Juli 2020"
```

---

## 6. Arah Desain

Tujuan: situs **minimalis, tenang, dan terasa dibuat oleh manusia**, bukan hasil template atau generator. Isinya (proyek dan pengalaman nyata) yang jadi bintang, bukan dekorasi.

### Konsep visual: "Editorial minimalis, putih dan abu"
- Latar putih, elemen pendukung abu, teks hitam arang. Itu saja.
- **Tanpa gradasi.** Semua warna datar (flat).
- **Tanpa bayangan** (box-shadow) dan tanpa efek kaca/blur. Pemisah antar elemen memakai **garis tipis abu** (1px) dan jarak.
- **Tanpa ikon dekoratif, tanpa emoji, tanpa badge/pill berwarna.**
- Tata letak mengandalkan **tipografi, jarak, dan garis**.
- Proyek ditampilkan sebagai **daftar baris** yang dapat di-expand/collapse (Masalah, Peran, Solusi, Hasil, Teknologi).
- Keahlian dikelompokkan **tanpa bar persentase**.
- Tipografi: **IBM Plex Sans** dan **IBM Plex Mono**.
