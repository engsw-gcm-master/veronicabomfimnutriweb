/* =============================================
   VERÔNICA BOMFIM — JAVASCRIPT PRINCIPAL
   ============================================= */

/* ----- Menu mobile ----- */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:rgba(250,247,242,0.98);padding:2rem;gap:1.5rem;border-bottom:1px solid #e8d5a3;z-index:99;backdrop-filter:blur(8px);';
  }
}

/* Fechar menu ao clicar em link */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (window.innerWidth < 900) links.style.display = 'none';
  });
});

/* ----- Animação de entrada dos cards ----- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.servico-card, .receita-card, .artigo-card').forEach(el => {
  el.style.cssText += 'opacity:0;transform:translateY(20px);transition:opacity 0.6s ease,transform 0.6s ease,box-shadow 0.3s;';
  observer.observe(el);
});
