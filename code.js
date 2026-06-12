// Interaktivitas Navigasi Responsif (Mobile Menu Toggle)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    menu.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuLinks.classList.remove('active');
        });
    });
});
