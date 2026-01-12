document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const closeBtn = document.querySelector('.menu-close-btn');
    const body = document.body;

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeMenu();
        });
    }

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') &&
            !navList.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');

        if (navList.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
        body.style.overflow = '';
    }
});
