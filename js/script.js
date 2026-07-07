// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Set active link
function setActiveLink() {
    const currentLocation = location.pathname;
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentLocation || 
            (currentLocation.includes(link.getAttribute('href')) && link.getAttribute('href') !== 'pages/login.html')) {
            link.classList.add('active');
        }
    });
}

setActiveLink();

// Storage helpers
const StorageHelper = {
    // User Authentication
    setUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    },
    
    getUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },
    
    logout() {
        localStorage.removeItem('currentUser');
    },
    
    isLoggedIn() {
        return !!this.getUser();
    },
    
    // Recruitment
    saveRecruitment(data) {
        const recruitments = JSON.parse(localStorage.getItem('recruitments') || '[]');
        const id = Date.now().toString();
        const newRecruitment = {
            id,
            ...data,
            status: 'Pending',
            createdAt: new Date().toLocaleDateString('id-ID')
        };
        recruitments.push(newRecruitment);
        localStorage.setItem('recruitments', JSON.stringify(recruitments));
        return id;
    },
    
    getRecruitmentById(id) {
        const recruitments = JSON.parse(localStorage.getItem('recruitments') || '[]');
        return recruitments.find(r => r.id === id);
    },
    
    getAllRecruitments() {
        return JSON.parse(localStorage.getItem('recruitments') || '[]');
    },
    
    // Drivers
    getDrivers() {
        const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
        if (drivers.length === 0) {
            // Initialize with sample data
            const sampleDrivers = [
                { id: 1, name: 'Budi Santoso', phone: '+62 812 3456 7890', status: 'Aktif', joinDate: '2023-01-15' },
                { id: 2, name: 'Ahmad Hidayat', phone: '+62 813 9876 5432', status: 'Aktif', joinDate: '2023-02-20' },
                { id: 3, name: 'Roni Wijaya', phone: '+62 814 5555 6666', status: 'Aktif', joinDate: '2023-03-10' }
            ];
            localStorage.setItem('drivers', JSON.stringify(sampleDrivers));
            return sampleDrivers;
        }
        return drivers;
    },
    
    // Events
    getEvents() {
        const events = JSON.parse(localStorage.getItem('events') || '[]');
        if (events.length === 0) {
            const sampleEvents = [
                { id: 1, title: 'Workshop Keselamatan Berkendara', date: '2024-07-15', location: 'Kantor Pusat', description: 'Workshop tentang tips keselamatan berkendara' },
                { id: 2, title: 'Gathering Driver Tahunan', date: '2024-08-20', location: 'Hotel Merdeka', description: 'Acara gathering tahunan untuk semua driver' },
                { id: 3, title: 'Training Customer Service', date: '2024-09-10', location: 'Training Center', description: 'Pelatihan customer service terpadu' }
            ];
            localStorage.setItem('events', JSON.stringify(sampleEvents));
            return sampleEvents;
        }
        return events;
    },
    
    // Announcements
    getAnnouncements() {
        const announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
        if (announcements.length === 0) {
            const sampleAnnouncements = [
                { id: 1, title: 'Update Sistem Baru', date: '2024-07-01', content: 'Sistem tracking baru telah diluncurkan' },
                { id: 2, title: 'Libur Idul Fitri', date: '2024-06-25', content: 'Kantor tutup untuk libur Idul Fitri' },
                { id: 3, title: 'Promo Bonus Driver', date: '2024-06-20', content: 'Driver aktif akan mendapatkan bonus tambahan' }
            ];
            localStorage.setItem('announcements', JSON.stringify(sampleAnnouncements));
            return sampleAnnouncements;
        }
        return announcements;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageHelper;
}
