// === JDC enhancements (safe) ===
(function(){
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));
  }
  function wireModal(){
    const buttons = [document.getElementById('contactBtn'), document.getElementById('contactBtnHero')].filter(Boolean);
    const modal = document.getElementById('contactModal');
    const closeBtn = modal ? modal.querySelector('.close') : null;
    buttons.forEach(btn => btn && btn.addEventListener('click', (e) => { e.preventDefault(); modal.classList.add('show'); }));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
  }
  document.addEventListener('DOMContentLoaded', wireModal);

  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn && exploreBtn.getAttribute('href') === '#solutions') {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('solutions');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();