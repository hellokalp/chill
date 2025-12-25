/* script.js */
// Loader Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    });
});

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animations (Intersection Observer)
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
