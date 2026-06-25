/* =========================================================
   GREENBIRDIE — Scripts principaux
   Version 2.0 — 2026
   ========================================================= */

/* ── Navigation mobile ──────────────────────────────────── */
function initNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const overlay   = document.querySelector('.nav-mobile-overlay');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ── FAQ accordion ───────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ── Smooth scroll pour les ancres ──────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── SIRET validation ────────────────────────────────────── */
function validateSiret(input, statusId) {
  input.value = input.value.replace(/\D/g, '').slice(0, 14);
  const val    = input.value;
  const status = document.getElementById(statusId);
  if (!status) return;

  if (val.length === 0) {
    status.textContent = '';
    status.className = 'siret-status';
    return;
  }
  if (val.length < 14) {
    status.textContent = val.length + '/14';
    status.className = 'siret-status invalid';
    return;
  }

  if (luhnSiret(val)) {
    status.textContent = '✓ SIRET valide';
    status.className = 'siret-status valid';
    lookupSirene(input);
  } else {
    status.textContent = '✗ SIRET invalide';
    status.className = 'siret-status invalid';
  }
}

function luhnSiret(siret) {
  if (siret.startsWith('356000000')) return true; // La Poste — exception légale
  let sum = 0;
  for (let i = 0; i < 14; i++) {
    let n = parseInt(siret[i]);
    if (i % 2 === 0) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
  }
  return sum % 10 === 0;
}

function lookupSirene(siretInput) {
  const siret   = siretInput.value;
  const form    = siretInput.closest('form');
  if (!form) return;
  const fieldRS = form.querySelector('[data-siret-fill="raison_sociale"]');
  const fieldAd = form.querySelector('[data-siret-fill="adresse"]');

  if (fieldRS) fieldRS.placeholder = 'Recherche en cours…';

  fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${siret}&page=1&per_page=1`)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const result = data.results && data.results[0];
      if (!result) { resetPlaceholders(fieldRS, fieldAd); return; }
      const nom   = result.nom_raison_sociale || result.nom_complet || '';
      const siege = result.siege || {};
      const addr  = [
        siege.numero_voie, siege.type_voie, siege.libelle_voie,
        siege.code_postal, siege.libelle_commune
      ].filter(Boolean).join(' ');
      fillField(fieldRS, nom);
      fillField(fieldAd, addr);
    })
    .catch(() => { resetPlaceholders(fieldRS, fieldAd); });
}

function fillField(field, value) {
  if (!field) return;
  if (value) {
    field.value = value;
    field.classList.add('filled');
    field.placeholder = '';
  } else {
    resetPlaceholders(field);
  }
}

function resetPlaceholders(fieldRS, fieldAd) {
  if (fieldRS) fieldRS.placeholder = 'Saisir manuellement';
  if (fieldAd) fieldAd.placeholder = 'Saisir manuellement';
}

/* ── Formulaire Netlify ──────────────────────────────────── */
function handleSubmit(e, formId) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('[type="submit"]');
  const successId = formId ? 'success-' + formId : 'form-success';

  if (btn) {
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Envoi en cours…';

    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
    .then(() => {
      form.style.opacity = '0.4';
      form.style.pointerEvents = 'none';
      const success = document.getElementById(successId);
      if (success) success.classList.add('show');
    })
    .catch(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement au 01 44 08 10 50.');
    });
  }
}

/* ── Intersection Observer pour animations ───────────────── */
function initAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

/* ── Active nav link ─────────────────────────────────────── */
function initActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    } else if (href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    }
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFAQ();
  initSmoothScroll();
  initAnimations();
  initActiveNav();
});
