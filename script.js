// Smooth fade-up animation on scroll
const faders = document.querySelectorAll('.fade-up');
const options = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = 'translateY(40px)';
  fader.style.transition = 'opacity 1s ease, transform 1s ease';
  appearOnScroll.observe(fader);
});
