/* =============================================
   VERÔNICA BOMFIM — JAVASCRIPT PRINCIPAL
   ============================================= */

/* ----- Menu mobile ----- */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');
  const isActive = links.classList.toggle('active');
  toggle.setAttribute('aria-expanded', isActive);
}

// Teclado no menu toggle
document.querySelector('.menu-toggle')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

/* Fechar menu ao clicar em link */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.classList.remove('active');
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

/* ----- Popup Eventos ----- */
function abrirPopupEventos(e) {
  e.preventDefault();
  document.getElementById('popupEventos').classList.add('ativo');
}

function fecharPopupEventos() {
  document.getElementById('popupEventos').classList.remove('ativo');
}

// Fechar popup ao clicar no overlay
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popupEventos');
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === this) fecharPopupEventos();
    });
  }
});
