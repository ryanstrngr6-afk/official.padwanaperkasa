# Padataran Wana Perkasa - Website Official

![Logo](assets/logo.png)

Website resmi PT. Padataran Wana Perkasa - Perusahaan Transportasi Profesional

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi & Setup](#instalasi--setup)
- [Panduan Penggunaan](#panduan-penggunaan)
- [Akun Demo](#akun-demo)
- [Teknologi](#teknologi)
- [Kontribusi](#kontribusi)

## 🎯 Tentang Proyek

Proyek ini adalah website official untuk PT. Padataran Wana Perkasa yang diluncurkan pada tahun 2009. Website ini berfungsi sebagai portal utama untuk:
- Pendaftaran driver baru (Recruitment)
- Informasi driver aktif
- Event dan acara perusahaan
- Dashboard untuk Driver, Admin, dan Super Admin
- Pengumuman dan berita terbaru
- FAQ dan SOP

## ✨ Fitur Utama

### Untuk Publik (Non-Login)
- ✅ Halaman Beranda
- ✅ Tentang Kami
- ✅ Form Recruitment
- ✅ Cek Status Pendaftaran
- ✅ Daftar Driver Aktif
- ✅ Event & Acara
- ✅ Pengumuman
- ✅ SOP (Standar Operasional Prosedur)
- ✅ FAQ (Pertanyaan yang Sering Diajukan)

### Untuk Driver (Setelah Login)
- 📊 Dashboard Driver
- 👤 Profil Pribadi
- 📋 Riwayat Pesanan
- 📈 Laporan Performa
- 💰 Riwayat Pembayaran
- 📄 Manajemen Dokumen

### Untuk Admin
- 🏢 Dashboard Admin
- 👥 Manajemen Driver
- 📦 Manajemen Order
- 📝 Manajemen Recruitment
- 📅 Manajemen Event
- 📊 Laporan & Analitik
- 📢 Manajemen Pengumuman

### Untuk Super Admin
- 🔐 Dashboard Super Admin
- 👨‍💼 Manajemen Admin
- 👥 Manajemen Driver
- 📊 Order & Revenue
- 📈 Laporan Komprehensif
- ⚙️ Pengaturan Sistem
- 📜 Activity Log

## 📁 Struktur Proyek

```
official.padwanaperkasa/
├── index.html                          # Halaman utama (Beranda)
├── styles/
│   └── style.css                       # CSS utama
├── js/
│   └── script.js                       # JavaScript utama
├── assets/
│   └── logo.png                        # Logo perusahaan
├── pages/
│   ├── tentang-kami.html              # Halaman Tentang Kami
│   ├── pengumuman.html                # Halaman Pengumuman
│   ├── sop.html                       # Halaman SOP
│   ├── faq.html                       # Halaman FAQ
│   ├── login.html                     # Halaman Login
│   ├── recruitment/
│   │   ├── form.html                  # Form Recruitment
│   │   ├── success.html               # Halaman Sukses
│   │   └── cek-status.html            # Cek Status Pendaftaran
│   ├── driver/
│   │   ├── driver-aktif.html          # Daftar Driver Aktif
│   │   └── profil-driver.html         # Profil Driver
│   └── event/
│       ├── semua-event.html           # Semua Event
│       └── detail-event.html          # Detail Event
├── dashboard/
│   ├── driver-dashboard.html          # Dashboard Driver
│   ├── admin-dashboard.html           # Dashboard Admin
│   └── super-admin-dashboard.html     # Dashboard Super Admin
└── README.md                          # File ini
```

## 🚀 Instalasi & Setup

### Kebutuhan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text Editor (VS Code, Sublime Text, dll)
- Git (opsional)

### Cara Menjalankan

#### Metode 1: Buka Langsung
1. Download atau clone repository ini
2. Buka file `index.html` di browser
3. Website siap digunakan!

#### Metode 2: Menggunakan Local Server (Disarankan)

**Dengan Python:**
```bash
# Python 3
python -m http.server 8000

# atau Python 2
python -m SimpleHTTPServer 8000
```

**Dengan Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

**Dengan VS Code Live Server Extension:**
1. Install Live Server extension di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

Setelah itu, buka browser dan akses:
```
http://localhost:8000 (untuk Python)
http://localhost:8080 (untuk http-server)
http://127.0.0.1:5500 (untuk VS Code Live Server)
```

## 📖 Panduan Penggunaan

### Untuk Pengunjung Publik

1. **Beranda**
   - Lihat overview website dan fitur utama
   - Klik tombol "Daftar Sekarang" untuk mendaftar

2. **Tentang Kami**
   - Pelajari visi, misi, dan nilai-nilai perusahaan

3. **Recruitment**
   - Isi form pendaftaran dengan data lengkap
   - Setelah submit, catat ID pendaftaran Anda
   - Gunakan ID untuk cek status di halaman "Cek Status"

4. **Driver Aktif**
   - Lihat daftar driver profesional kami
   - Klik "Lihat Profil" untuk informasi detail

5. **Event**
   - Lihat semua event yang akan datang
   - Klik event untuk detail lengkap

6. **FAQ & SOP**
   - Cari jawaban atas pertanyaan umum
   - Pelajari standar operasional prosedur

### Untuk Driver (Setelah Login)

1. **Login**
   - Gunakan akun demo atau akun yang sudah terdaftar
   - Pilih "Driver" di dropdown Login Sebagai
   - Klik "Masuk"

2. **Dashboard**
   - Lihat statistik order, rating, dan pendapatan
   - Monitor pesanan terbaru

3. **Menu Sidebar**
   - Klik menu untuk melihat berbagai fitur
   - Profil Saya: Edit data pribadi dan kendaraan
   - Pesanan: Lihat riwayat pesanan
   - Performa: Monitor performa driving
   - Pembayaran: Lihat riwayat pembayaran
   - Dokumen: Kelola dokumen penting

4. **Logout**
   - Klik "Logout" di menu sidebar untuk keluar

### Untuk Admin

1. **Login**
   - Gunakan akun demo admin
   - Pilih "Admin" di dropdown Login Sebagai

2. **Dashboard Admin**
   - Lihat statistik: Total Driver, Order, Pendapatan
   - Monitor order terbaru

3. **Manajemen**
   - Driver: Kelola data driver
   - Order: Kelola order dari sistem
   - Recruitment: Review pendaftaran driver baru
   - Event: Buat dan kelola event
   - Laporan: Lihat analitik bisnis
   - Pengumuman: Kirim pengumuman ke driver

### Untuk Super Admin

1. **Login**
   - Gunakan akun demo super admin
   - Pilih "Super Admin" di dropdown Login Sebagai

2. **Dashboard Super Admin**
   - Akses penuh ke semua fitur
   - Lihat ringkasan kinerja keseluruhan
   - Monitor pertumbuhan dan metrik penting

3. **Menu Khusus**
   - Manajemen Admin: Kelola akun admin
   - Order & Revenue: Analisis revenue
   - Laporan Komprehensif: Laporan detail
   - Pengaturan Sistem: Konfigurasi sistem
   - Activity Log: Monitor aktivitas pengguna

## 🔐 Akun Demo

Gunakan akun berikut untuk testing:

| Role | Email | Password |
|------|-------|----------|
| Driver | driver@test.com | 123456 |
| Admin | admin@test.com | 123456 |
| Super Admin | superadmin@test.com | 123456 |

**Catatan:** Ini hanya untuk testing. Di production, gunakan sistem autentikasi yang aman!

## 🛠️ Teknologi

Website ini dibangun menggunakan:

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsif design
- **JavaScript (Vanilla)** - Interaktivitas dan logika
- **LocalStorage** - Penyimpanan data di browser
- **Font Awesome 6.4.0** - Icon library

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

Website ini fully responsive dan dapat diakses dari:
- Desktop
- Tablet
- Mobile Phone

## 💾 Data Storage

Data disimpan menggunakan **LocalStorage** (browser storage):
- Data akan hilang jika cache browser dihapus
- Untuk production, gunakan database backend (MySQL, MongoDB, dll)

## 🔧 Customization

### Mengubah Warna

Edit file `styles/style.css` dan ubah variabel CSS:

```css
:root {
    --primary-color: #1a4d3e;      /* Warna hijau utama */
    --accent-color: #d4af37;       /* Warna emas aksen */
    /* ... warna lainnya ... */
}
```

### Menambah Halaman Baru

1. Buat file HTML baru di folder `pages/`
2. Copy template dari halaman existing
3. Update navbar link di halaman lain
4. Update `js/script.js` jika perlu

### Mengubah Logo

Ganti file `assets/logo.png` dengan logo baru Anda.

## 📝 File Penting

- `index.html` - Entry point utama
- `styles/style.css` - Semua styling
- `js/script.js` - Logika utama dan storage helper
- `pages/login.html` - Sistem login

## 🤝 Kontribusi

Untuk kontribusi:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📧 Kontak & Support

- Email: info@padwanaperkasa.com
- Phone: +62 123 4567 8900
- Website: www.padwanaperkasa.com

## 📄 Lisensi

Proyek ini adalah milik PT. Padataran Wana Perkasa. Semua hak dilindungi © 2024.

## 🎓 Developer Notes

### Struktur LocalStorage

```javascript
// User Login
localStorage.setItem('currentUser', JSON.stringify({
    email: 'user@example.com',
    role: 'driver',
    loginTime: '7/7/2026, 10:00:00 AM'
}));

// Recruitments
localStorage.setItem('recruitments', JSON.stringify([...]));

// Drivers
localStorage.setItem('drivers', JSON.stringify([...]));

// Events
localStorage.setItem('events', JSON.stringify([...]));

// Announcements
localStorage.setItem('announcements', JSON.stringify([...]));
```

### Helper Functions (StorageHelper)

Ada di `js/script.js`:

```javascript
StorageHelper.setUser(user)          // Set user login
StorageHelper.getUser()              // Get user yang login
StorageHelper.logout()               // Logout user
StorageHelper.isLoggedIn()           // Check login status
StorageHelper.saveRecruitment(data)  // Simpan recruitment
StorageHelper.getRecruitmentById(id) // Ambil recruitment by ID
StorageHelper.getDrivers()           // Ambil semua drivers
StorageHelper.getEvents()            // Ambil semua events
StorageHelper.getAnnouncements()     // Ambil semua announcements
```

## 🐛 Troubleshooting

### Masalah: Halaman tidak muncul
- **Solusi**: Pastikan membuka file melalui local server, bukan langsung membuka file HTML

### Masalah: Login tidak berhasil
- **Solusi**: Gunakan akun demo yang sudah disediakan, atau periksa console browser untuk error

### Masalah: Data hilang setelah refresh
- **Solusi**: Normal! LocalStorage hanya menyimpan data selama session. Gunakan backend database untuk persistent storage.

### Masalah: Responsive tidak berfungsi
- **Solusi**: Pastikan viewport meta tag ada di HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## 📚 Referensi

- [MDN Web Docs - LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Font Awesome Icons](https://fontawesome.com/)
- [CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

---

**Dibuat dengan ❤️ oleh Padataran Wana Perkasa**

Versi: 1.0.0  
Terakhir diupdate: Juli 2026
