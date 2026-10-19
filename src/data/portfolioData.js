export const portfolioData = {
  personal: {
    name: "Hanif Nurrohman",
    title: "Instrumentation & Control Engineer",
    tagline: "Mengintegrasikan otomatisasi dan kendali mutu di industri.",
    about1: "Lulusan D4 Teknologi Rekayasa Instrumentasi dan Kontrol Universitas Gadjah Mada (IPK 3.77/4.00), dengan pengalaman praktis dalam proyek otomasi industri, integrasi PLC Siemens, sistem machine vision, dan monitoring data berbasis IoT yang ditampilkan ke web dashboard.",
    about2: "Terbiasa bekerja sesuai SOP di lingkungan manufaktur, mulai dari instalasi elektrikal, wiring, troubleshooting elektronika, sampai membaca skematik teknik. Siap berkontribusi di posisi Maintenance, Commissioning, atau Field Engineer—baik dengan sistem kerja dinamis maupun shift.",
    location: "Yogyakarta, Indonesia",
    email: "hanifnr123@gmail.com",
    phone: "+62 899-5900-121",
    statusBadge: "Sedang menjalani Maganghub di PT Satoria Aneka Industri (Agustus 2026–Februari 2027); terbuka untuk peluang setelahnya.",
    statusShort: "Maganghub @ PT Satoria Aneka Industri",
    cvLink: "assets/cv/CV_Hanif_Nurrohman.pdf",
    initials: "HN",
    socials: [
      { name: "Email", url: "mailto:hanifnr123@gmail.com", type: "email" },
      { name: "Telepon / WA", url: "https://wa.me/628995900121", type: "phone" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/hanif-nurrohman/?isSelfProfile=true", note: "LinkedIn", type: "linkedin" }
    ],
    stats: [
      {
        value: "3.77 / 4.00",
        label: "IPK, D4 UGM",
        desc: "Teknologi Rekayasa Instrumentasi dan Kontrol"
      },
      {
        value: "5+",
        label: "Pengalaman Industri & Teknis",
        desc: "Manufaktur, metrologi, lab otomasi & praktikum"
      }
    ],
    rolesTarget: [
      "Maintenance Engineer",
      "Commissioning Engineer",
      "Field Engineer"
    ]
  },

  navLinks: [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Kontak", href: "#contact" }
  ],

  projects: [
    {
      id: "pro-1",
      title: "Machine Vision untuk Counting & Inspeksi Label Infus",
      context: "PT Satoria Aneka Industri — Plant 1, produk infus",
      featured: true,
      imageTag: "vision",
      problem: "Penghitungan dan inspeksi kualitas label dilakukan secara manual, sehingga presisi dan kecepatannya terbatas.",
      role: "Merancang dan mengimplementasikan sistem machine vision secara end-to-end.",
      solution: "Machine vision berbasis AI dengan kamera industri untuk menghitung dan menginspeksi label secara otomatis pada lini produksi.",
      result: "Meningkatkan presisi dan konsistensi kontrol kualitas (Quality Control) pada produk infus.",
      technologies: ["Machine Vision", "AI", "Kamera Industri"]
    },
    {
      id: "pro-2",
      title: "Real-time Monitoring PLC Siemens ke Web Dashboard",
      context: "PT Satoria Aneka Industri",
      featured: true,
      imageTag: "plc",
      problem: "Data performa mesin hanya dapat dipantau secara lokal di area kerja.",
      role: "Mengembangkan sistem monitoring operasional berbasis web.",
      solution: "Mengekstrak data dari PLC Siemens via interface PG/PC, lalu mengintegrasikannya ke dashboard website perusahaan.",
      result: "Data performa mesin dapat dipantau secara real-time dari mana saja.",
      technologies: ["PLC Siemens", "PG/PC Interface", "Web Dashboard"]
    },
    {
      id: "pro-3",
      title: "Riset Substitusi Impor untuk Automatic Tissue Processor",
      context: "PT Miconos — Magang, Juni–November 2024",
      featured: false,
      imageTag: "circuit",
      problem: "Tingkat TKDN rendah akibat ketergantungan komponen impor pada Automatic Tissue Processor.",
      role: "Menganalisis skematik sirkuit dan mendesain ulang sistem kontrol elektrikal Buck-Converter.",
      solution: "Analisis skematik, kemudian perancangan ulang sistem Buck-Converter menggunakan IC XL4016.",
      result: "Perancangan selesai dalam 4 bulan dan lolos uji oleh PT Sucofindo.",
      technologies: ["Analisis Skematik", "Sistem Kontrol Elektrikal", "Desain PCB"]
    },
    {
      id: "pro-4",
      title: "Sistem Akuisisi Data Otomatis untuk Uji Meter Gas",
      context: "Direktorat Metrologi — Magang, September 2023–Januari 2024",
      featured: false,
      imageTag: "data",
      problem: "Input data hasil uji masih dilakukan secara manual, sehingga rawan kesalahan.",
      role: "Merancang dan mengimplementasikan sistem akuisisi data otomatis, serta melakukan kalibrasi dan verifikasi meter gas sesuai regulasi nasional.",
      solution: "Perancangan dan implementasi alur akuisisi data otomatis berbasis Excel untuk instrumen pengujian meter gas.",
      result: "Memangkas waktu input data dan mengeliminasi kesalahan manual (human error).",
      technologies: ["Akuisisi Data", "Kalibrasi", "Metrologi"]
    },
    {
      id: "pro-5",
      title: "Gelang IoT untuk Pemantauan Tanda Vital dengan Integrasi Google Sheets",
      context: "Proyek Tugas Akhir",
      featured: false,
      imageTag: "iot",
      problem: "Kebutuhan pemantauan parameter tanda vital untuk deteksi dini gangguan kesehatan secara portabel.",
      role: "Merancang dan mengimplementasikan perangkat keras (hardware) dan perangkat lunak (software).",
      solution: "Gelang IoT yang mengirim data tanda vital ke Google Sheets, sekaligus menampilkan ringkasan kondisi kesehatan pada dashboard monitoring.",
      result: "Visualisasi data tanda vital secara real-time dengan ringkasan kondisi kesehatan pengguna.",
      technologies: ["Gelang IoT", "Pemantauan Tanda Vital", "Google Sheets API"]
    }
  ],

  skills: [
    {
      group: "Otomasi & Kontrol",
      items: [
        "PLC Siemens (integrasi PG/PC, ekstraksi data)",
        "PLC Omron",
        "Machine Vision"
      ]
    },
    {
      group: "Embedded & IoT",
      items: [
        "Mikrokontroler",
        "Arduino",
        "ESP32",
        "C++",
        "Instrumentasi & Sensor IoT"
      ]
    },
    {
      group: "Software Teknik",
      items: [
        "EasyEDA",
        "KiCad",
        "Python",
        "MATLAB",
        "Proteus",
        "Autodesk",
        "MS Excel"
      ]
    },
    {
      group: "Kompetensi Lapangan",
      items: [
        "Kalibrasi alat ukur",
        "Troubleshooting elektronika",
        "Analisis diagram skematik",
        "Wiring & panel elektrikal",
        "SOP dan K3 dasar"
      ]
    },
    {
      group: "Bahasa",
      items: [
        "Indonesia (mahir)",
        "Inggris (kemampuan kerja dasar)"
      ]
    }
  ],

  experience: [
    {
      period: "Agustus 2026–Februari 2027",
      role: "Maganghub",
      organization: "PT Satoria Aneka Industri, Pasuruan",
      points: [
        "Merancang dan mengimplementasikan sistem machine vision berbasis AI/kamera industri untuk penghitungan dan inspeksi kualitas label otomatis pada produk infus di Plant 1.",
        "Mengembangkan sistem real-time operational monitoring dengan mengekstrak data dari PLC Siemens via interface PG/PC dan mengintegrasikannya ke dashboard website perusahaan."
      ]
    },
    {
      period: "Januari 2026–Agustus 2026",
      role: "Operator Produksi",
      organization: "Mesyo Creative, Yogyakarta",
      points: [
        "Mengoperasikan, mengkalibrasi, dan merawat mesin cetak sublimasi dan Laser UV ID Card secara berkala.",
        "Melakukan Quality Control hasil cetak sebelum distribusi untuk meminimalkan defect rate.",
        "Bertanggung jawab atas preventive maintenance mingguan demi kelancaran alur kerja dan tercapainya target output harian."
      ]
    },
    {
      period: "Juni 2024–November 2024",
      role: "Magang",
      organization: "PT Miconos, Yogyakarta",
      points: [
        "Menganalisis skematik sirkuit Automatic Tissue Processor dan mendesain ulang sistem kontrol elektrikalnya.",
        "Menyelesaikan sistem dalam 4 bulan; lolos uji oleh PT Sucofindo."
      ]
    },
    {
      period: "Agustus 2024–September 2024",
      role: "Asisten Praktikum",
      organization: "Departemen Teknik Elektro dan Informatika, UGM",
      points: [
        "Menyiapkan dan menguji instrumen serta modul sebelum praktikum dimulai.",
        "Melakukan troubleshooting sirkuit elektronik, kesalahan kode C++, dan simulasi praktikum.",
        "Membimbing dan mengevaluasi >150 mahasiswa dari 8 kelas untuk 4 mata kuliah teknik."
      ]
    },
    {
      period: "September 2023–Januari 2024",
      role: "Magang",
      organization: "Direktorat Metrologi, Bandung",
      points: [
        "Kalibrasi dan verifikasi instrumen meter gas sesuai regulasi nasional.",
        "Merancang sistem akuisisi data otomatis yang memangkas waktu input dan menghilangkan human error."
      ]
    }
  ],

  education: [
    {
      degree: "Sarjana Terapan (D4) Teknologi Rekayasa Instrumentasi dan Kontrol",
      institution: "Universitas Gadjah Mada (UGM)",
      period: "Agustus 2021–Juli 2025",
      note: "IPK 3.77 / 4.00"
    },
    {
      degree: "SMK Negeri 3 Yogyakarta — Teknik Instalasi & Ketenagalistrikan",
      institution: "SMKN 3 Yogyakarta",
      period: "Agustus 2017–Juli 2020",
      note: "Teknik Listrik"
    }
  ]
};
