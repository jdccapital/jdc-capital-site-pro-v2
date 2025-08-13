
// Uniform pages: hamburger + modal + explore-more
(function(){
  // Hamburger toggler
  document.addEventListener('click', function(e){
    if (e.target.closest('.hamburger')) {
      document.body.classList.toggle('nav-open');
    }
  });
  // Open modal on any "Contact" or "Talk to Us"
  document.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if (!a) return;
    const text = (a.textContent||'').trim().toLowerCase();
    if (text === 'contact' || text === 'talk to us'){
      e.preventDefault();
      document.getElementById('contactModal')?.classList.add('show');
    }
  });
  // Close modal
  document.addEventListener('click', function(e){
    if (e.target.classList && e.target.classList.contains('close')){
      document.getElementById('contactModal')?.classList.remove('show');
    }
    if (e.target.id === 'contactModal'){
      document.getElementById('contactModal')?.classList.remove('show');
    }
  });
  // "Explore more →" beside solution titles on Home
  const map = [
    {match:/private\s*credit/i, href:'private-credit.html'},
    {match:/commodity\s*trade\s*finance/i, href:'trade-finance.html'},
    {match:/esg\s*projects?/i, href:'esg-projects.html'}
  ];
  document.querySelectorAll('h2, h3').forEach(h=>{
    const t = (h.textContent||'').trim();
    map.forEach(m=>{
      if (m.match.test(t) && !h.querySelector('.explore-inline')){
        const a = document.createElement('a');
        a.href = m.href;
        a.className = 'explore-inline';
        a.textContent = ' Explore more →';
        h.appendChild(a);
      }
    });
  });
})();
