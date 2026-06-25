/**
 * nav.js — Navigation GREENBIRDIE injectée sur toutes les pages
 * Modifier ce fichier unique suffit à mettre à jour le menu partout.
 */
(function () {
  // ── Détection du chemin de base ────────────────────────────────────────
  // Fonctionne aussi bien en file:// qu'en HTTP (GitHub Pages, Netlify)
  const href = window.location.href;
  const inSecteurs = /[/\\]secteurs[/\\]/.test(href);
  const b = inSecteurs ? '../' : '';   // préfixe pour les liens

  // ── Template du menu ───────────────────────────────────────────────────
  const navHTML = `
<nav class="nav" role="navigation" aria-label="Navigation principale">
  <div class="nav-inner">
    <a href="${b}index.html" class="nav-logo" aria-label="GREENBIRDIE — Accueil">
      <img src="${b}assets/images/logo-greenbirdie.png" alt="GREENBIRDIE"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span style="display:none;font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#1a1a1a;letter-spacing:-0.5px;">GREENBIRDIE</span>
    </a>

    <ul class="nav-menu" role="list">

      <li class="nav-item">
        <a href="${b}achat-energie.html" class="nav-link">
          Acheter l'énergie
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-section">Stratégies</div>
          <a href="${b}achat-energie.html#strategie">Stratégie d'achat</a>
          <a href="${b}achat-energie.html#contrats-groupes">Contrats groupes</a>
          <a href="${b}achat-energie.html#ppa">PPA et PPA multiacheteurs</a>
          <a href="${b}achat-energie.html#vppa">VPPA et couverture financière</a>
          <div class="nav-dropdown-section">Opérationnel</div>
          <a href="${b}achat-energie.html#consultation">Consultation fournisseurs</a>
          <a href="${b}achat-energie.html#suivi">Suivi des marchés et budgets</a>
        </div>
      </li>

      <li class="nav-item">
        <a href="${b}flexibilite-performance.html" class="nav-link">
          Consommer au bon moment
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-section">Performance</div>
          <a href="${b}flexibilite-performance.html#audit">Audit et performance énergétique</a>
          <a href="${b}flexibilite-performance.html#decret-tertiaire">Décret Tertiaire et OPERAT</a>
          <a href="${b}flexibilite-performance.html#bacs">Décret BACS et GTB</a>
          <div class="nav-dropdown-section">Valorisation</div>
          <a href="${b}flexibilite-performance.html#effacement">Effacement et flexibilité</a>
          <a href="${b}flexibilite-performance.html#stockage">Stockage électrique et thermique</a>
          <a href="${b}flexibilite-performance.html#carbone">Performance carbone</a>
        </div>
      </li>

      <li class="nav-item">
        <a href="${b}production-energie.html" class="nav-link">
          Produire son énergie
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-section">Installations</div>
          <a href="${b}production-energie.html#toiture">Photovoltaïque en toiture</a>
          <a href="${b}production-energie.html#ombriere">Ombrières de parking</a>
          <a href="${b}production-energie.html#sol">Centrales au sol</a>
          <div class="nav-dropdown-section">Services</div>
          <a href="${b}production-energie.html#autoconsommation">Autoconsommation</a>
          <a href="${b}production-energie.html#moe">Maîtrise d'œuvre</a>
          <a href="${b}production-energie.html#valorisation">Valorisation de la production</a>
        </div>
      </li>

      <li class="nav-item">
        <a href="${b}reglementation.html" class="nav-link">Réglementation</a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
          Secteurs
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-section">Industrie &amp; Commerce</div>
          <a href="${b}secteurs/grande-distribution.html">Grande distribution</a>
          <a href="${b}secteurs/logistique.html">Logistique et immobilier</a>
          <a href="${b}secteurs/industrie.html">Industrie et ETI</a>
          <div class="nav-dropdown-section">Services &amp; Transports</div>
          <a href="${b}secteurs/hotellerie.html">Hôtellerie et tourisme</a>
          <a href="${b}secteurs/tertiaire.html">Tertiaire et immobilier</a>
          <a href="${b}secteurs/sante.html">Santé</a>
          <a href="${b}secteurs/transports.html">Transports</a>
          <div class="nav-dropdown-section">Habitat</div>
          <a href="${b}secteurs/coproprietes.html">Copropriétés</a>
        </div>
      </li>

      <li class="nav-item">
        <a href="${b}a-propos.html" class="nav-link">GREENBIRDIE</a>
      </li>

    </ul>

    <a href="${b}contact.html" class="nav-cta">
      Parler à un expert
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>

    <button class="nav-hamburger" aria-label="Ouvrir le menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="nav-mobile-overlay" role="dialog" aria-label="Menu mobile">
  <ul>
    <li><a href="${b}achat-energie.html">Acheter l'énergie</a></li>
    <li><a href="${b}flexibilite-performance.html">Consommer au bon moment</a></li>
    <li><a href="${b}production-energie.html">Produire son énergie</a></li>
    <li><a href="${b}reglementation.html">Réglementation</a></li>
    <div class="nav-mobile-section">Secteurs</div>
    <li><a href="${b}secteurs/grande-distribution.html">Grande distribution</a></li>
    <li><a href="${b}secteurs/logistique.html">Logistique</a></li>
    <li><a href="${b}secteurs/hotellerie.html">Hôtellerie</a></li>
    <li><a href="${b}secteurs/industrie.html">Industrie et ETI</a></li>
    <li><a href="${b}secteurs/tertiaire.html">Tertiaire</a></li>
    <li><a href="${b}secteurs/sante.html">Santé</a></li>
    <li><a href="${b}secteurs/transports.html">Transports</a></li>
    <li><a href="${b}secteurs/coproprietes.html">Copropriétés</a></li>
    <div class="nav-mobile-section">GREENBIRDIE</div>
    <li><a href="${b}a-propos.html">À propos</a></li>
    <li><a href="${b}contact.html">Contact</a></li>
  </ul>
</div>`;

  // ── Injection ──────────────────────────────────────────────────────────
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  } else {
    // Fallback : insertion en tête de body si pas de placeholder
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  // ── Page active — surlignage du lien courant ───────────────────────────
  const current = window.location.href.split('#')[0].split('?')[0];
  document.querySelectorAll('.nav-link, .nav-dropdown a').forEach(function (link) {
    const linkHref = link.href.split('#')[0].split('?')[0];
    if (linkHref && linkHref !== window.location.origin + '/' && current.endsWith(linkHref.split('/').pop())) {
      link.classList.add('active');
      const parentItem = link.closest('.nav-item');
      if (parentItem) {
        const parentLink = parentItem.querySelector(':scope > .nav-link');
        if (parentLink && parentLink !== link) parentLink.classList.add('active');
      }
    }
  });

})();
