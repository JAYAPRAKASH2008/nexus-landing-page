window.addEventListener('DOMContentLoaded', () => {
  // Target all sections and footer main
  const sections = document.querySelectorAll('section, .footer-main');
  sections.forEach((el, i) => {
    setTimeout(() => el.style.opacity = 1, 400 + i * 180);
    setTimeout(() => el.style.transform = 'translateY(0)', 400 + i * 180);
  });
});
// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.getAttribute('href').charAt(0) === "#") {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});