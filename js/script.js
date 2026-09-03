(() => {
  'use strict';

  /* Ano no rodapé */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Header: sombra ao rolar */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  const closeMenu = () => {
    if (!navToggle || !navMenu) return;
    navToggle.classList.remove('is-active');
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* Botão flutuante do WhatsApp: aparece após rolar a hero */
  const waFloat = document.querySelector('.whatsapp-float');
  if (waFloat) {
    const toggleFloat = () => {
      waFloat.classList.toggle('is-visible', window.scrollY > 400);
    };
    toggleFloat();
    window.addEventListener('scroll', toggleFloat, { passive: true });
  }

  /* Animação de revelação ao entrar na tela */
  const revealTargets = document.querySelectorAll(
    '.feature-card, .product-card, .step'
  );
  revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-revealed'));
  }

  /* Rastreamento básico dos cliques em CTAs do WhatsApp (Google Analytics, se presente) */
  document.querySelectorAll('[data-wa-cta]').forEach((el) => {
    el.addEventListener('click', () => {
      const ctaId = el.getAttribute('data-wa-cta');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', { cta_id: ctaId });
      }
    });
  });
})();
