// Menú hamburguesa (solo mobile por CSS)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Modal de contacto
function wireModal() {
  const buttons = [document.getElementById('contactBtn'), document.getElementById('contactBtnHero')].filter(Boolean);
  const modal = document.getElementById('contactModal');
  const closeBtn = modal ? modal.querySelector('.close') : null;

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('show');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
}
document.addEventListener('DOMContentLoaded', wireModal);

// Scroll suave a #solutions desde el CTA
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', (e) => {
    if (exploreBtn.getAttribute('href') === '#solutions') {
      e.preventDefault();
      const target = document.getElementById('solutions');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
