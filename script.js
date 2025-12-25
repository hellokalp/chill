/* script.js */

// 1. Navbar Glass Effect on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Parallax Effect for Hero Video
const heroVideo = document.querySelector('.hero-video');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    if (heroVideo) {
        // Move video at half speed of scroll
        heroVideo.style.transform = `scale(1.1) translateY(${scrollValue * 0.5}px)`;
    }
});

// 3. Staggered Scroll Animations (Fade Up)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once visible to save resources
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach((el, index) => {
    // Auto-add stagger delays if siblings are in a grid
    if(el.parentElement.classList.contains('grid')) {
        el.style.transitionDelay = `${index * 100}ms`; 
    }
    observer.observe(el);
});

// 4. 3D Tilt Effect for Cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation (max 10 degrees)
        const xRotation = -((y - rect.height / 2) / rect.height * 10);
        const yRotation = ((x - rect.width / 2) / rect.width * 10);

        // Apply CSS Variable for spotlight effect
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Apply 3D Transform
        card.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        // Reset transform
        card.style.transform = `perspective(1000px) scale(1) rotateX(0) rotateY(0)`;
    });
});

// 5. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle){
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon (optional logic if using FontAwesome)
        const icon = menuToggle.querySelector('i');
        if(icon) icon.classList.toggle('fa-times');
    });
}
