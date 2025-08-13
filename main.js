
document.addEventListener('DOMContentLoaded',()=>{
  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // hamburger
  const burger = document.getElementById('burger');
  const links = document.getElementById('nav-links');
  if(burger){
    burger.addEventListener('click',()=>{
      links.classList.toggle('show');
    });
  }

  // contact modal (FormSubmit to info@)
  const fabBtns = document.querySelectorAll('[data-contact]');
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('modal-close');
  fabBtns.forEach(btn=>btn.addEventListener('click',(e)=>{ e.preventDefault(); modal.classList.add('show'); }));
  closeBtn?.addEventListener('click',()=>modal.classList.remove('show'));
  modal?.addEventListener('click',(e)=>{ if(e.target===modal){ modal.classList.remove('show'); } });

  const form = document.getElementById('contact-form');
  const ok = document.getElementById('success');
  const err = document.getElementById('error');
  form?.addEventListener('submit', async (e)=>{
    e.preventDefault();
    ok.style.display='none'; err.style.display='none';
    const data = new FormData(form);
    try{
      const res = await fetch('https://formsubmit.co/ajax/info@jdc-capital.com',{ method:'POST', body:data });
      if(res.ok){
        ok.style.display='block';
        form.reset();
      }else{
        err.style.display='block';
      }
    }catch(_){ err.style.display='block'; }
  });
});

// JDC wiring: modal + learn more
(function(){
  function openModal(e){ const m=document.getElementById('contactModal'); if(m){ e&&e.preventDefault(); m.classList.add('show'); } }
  function closeModal(){ document.getElementById('contactModal')?.classList.remove('show'); }
  document.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(!a) return;
    const txt=(a.textContent||'').trim().toLowerCase();
    if(txt==='contact' || txt==='talk to us'){ openModal(e); }
  }, true);
  document.addEventListener('click', function(e){
    if(e.target.classList && e.target.classList.contains('close')) closeModal();
    if(e.target.id==='contactModal') closeModal();
  }, true);

  // Add "Learn more →" next to each solution title on Home
  const map=[
    {re:/private\s*credit/i, href:'private-credit.html'},
    {re:/commodity\s*trade\s*finance/i, href:'trade-finance.html'},
    {re:/esg\s*projects?/i, href:'esg-projects.html'}
  ];
  document.querySelectorAll('#solutions h3, #solutions h2, .solutions h3, .solutions h2').forEach(h=>{
    const t=(h.textContent||'').trim();
    map.forEach(m=>{
      if(m.re.test(t) && !h.querySelector('.explore-inline')){
        const a=document.createElement('a');
        a.className='explore-inline';
        a.textContent=' Learn more →';
        a.href=m.href;
        h.appendChild(a);
      }
    });
  });
})();
