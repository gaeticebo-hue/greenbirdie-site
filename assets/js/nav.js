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
        <a href="${b}a-propos.html" class="nav-link">À propos</a>
      </li>

    </ul>

    <button class="nav-search" aria-label="Rechercher" title="Rechercher (Ctrl+K)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    </button>

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
    <div class="nav-mobile-section">À propos</div>
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

  // ── Recherche pleine page ──────────────────────────────────────────────
  var IDX = [
    { t: 'Accueil — GREENBIRDIE', u: b+'index.html', d: 'Conseil en énergie indépendant depuis 2005. Achat d\'énergie, performance, photovoltaïque, réglementation.', k: 'énergie conseil achat PPA photovoltaïque réglementation TWh GWc' },
    { t: 'Acheter l\'énergie', u: b+'achat-energie.html', d: 'Stratégie d\'achat, PPA, contrats groupés, consultation fournisseurs.', k: 'achat énergie électricité gaz PPA fournisseur spot couverture contrat groupe VPPA' },
    { t: 'Flexibilité et performance énergétique', u: b+'flexibilite-performance.html', d: 'Audit énergétique, Décret Tertiaire OPERAT, BACS, effacement, stockage, carbone.', k: 'audit Décret Tertiaire OPERAT BACS GTB effacement stockage carbone DADDUE' },
    { t: 'Marchés de flexibilité — Effacement et capacité RTE', u: b+'flexibilite-performance.html#marches', d: 'Mécanisme de capacité, marchés d\'ajustement, effacement diffus, optimisation prix spot.', k: 'effacement capacité RTE ajustement spot agrégateur flexibilité mécanisme' },
    { t: 'Diagnostics BPI — Décarbon\'Action, Éco-Flux, Perf Immo', u: b+'flexibilite-performance.html#diags-bpi', d: 'Diagnostics financés BPI France pour PME et ETI. GREENBIRDIE prestataire agréé.', k: 'BPI diag décarbon éco flux perf immo PME ETI bilan carbone financement' },
    { t: 'Produire son énergie — Photovoltaïque', u: b+'production-energie.html', d: 'Centrale PV en toiture, ombrières de parking, centrales au sol, autoconsommation.', k: 'photovoltaïque solaire toiture ombrière centrale autoconsommation maîtrise œuvre GWc' },
    { t: 'Réglementation énergétique', u: b+'reglementation.html', d: 'Décret Tertiaire, BACS, audits obligatoires DADDUE 2, loi APER, loi LOM, CSRD.', k: 'Décret Tertiaire BACS APER LOM CSRD DADDUE audit réglementation obligation' },
    { t: 'Loi LOM — IRVE et bornes de recharge', u: b+'reglementation.html#lom', d: 'Obligations IRVE pour parkings : véhicules légers et poids lourds (MCS).', k: 'IRVE LOM bornes recharge véhicule électrique parking poids lourd MCS smart charging' },
    { t: 'Audit énergétique obligatoire DADDUE 2', u: b+'reglementation.html#audit-obligatoire', d: 'Seuils 2,75–23,6 GWh (audit) et ≥23,6 GWh (SMÉ). Qualifications OPQIBI 1717 et 1905.', k: 'audit DADDUE GWh seuil SMÉ NF EN 16247 OPQIBI 1717 1905 obligatoire' },
    { t: 'À propos — GREENBIRDIE', u: b+'a-propos.html', d: 'Fondé en 2005, ~50 collaborateurs, 7 agences. OPQIBI, ANAH, APC, ADEME PACT Industrie.', k: 'GREENBIRDIE histoire équipe OPQIBI ANAH APC ADEME certifications Gaëtan COLLIN' },
    { t: 'Références clients et témoignages', u: b+'references.html', d: 'Témoignages : Esset, KIABI, CNRS, Alcyon, SDIS 64, ETS Ducasse. Études de cas.', k: 'références témoignages E.Leclerc Carrefour CNRS KIABI Esset Alcyon études cas' },
    { t: 'Contact — Parler à un expert', u: b+'contact.html', d: 'Contacter GREENBIRDIE pour un diagnostic énergie gratuit.', k: 'contact expert diagnostic Paris téléphone email gratuit' },
    { t: 'Grande distribution — Énergie et OPERAT', u: b+'secteurs/grande-distribution.html', d: 'Achat groupé, Décret Tertiaire, APER ombrières, IRVE multisite.', k: 'grande distribution supermarché E.Leclerc Carrefour LIDL ALDI Décret Tertiaire APER IRVE' },
    { t: 'Logistique et immobilier logistique', u: b+'secteurs/logistique.html', d: 'Entrepôts : photovoltaïque toiture, Décret Tertiaire, autoconsommation.', k: 'logistique entrepôt Prologis photovoltaïque Décret Tertiaire autoconsommation' },
    { t: 'Industrie et ETI', u: b+'secteurs/industrie.html', d: 'Achat HTA/HTB, audit DADDUE 2, effacement industriel, solaire autoconsommation.', k: 'industrie ETI HTA HTB audit DADDUE effacement gaz photovoltaïque CSRD' },
    { t: 'Hôtellerie et tourisme', u: b+'secteurs/hotellerie.html', d: 'Achat groupé hôteliers, Décret Tertiaire, BACS, solaire, stockage ECS.', k: 'hôtellerie hôtel Accor Grape Hospitality Décret Tertiaire BACS achat énergie' },
    { t: 'Tertiaire et immobilier de bureau', u: b+'secteurs/tertiaire.html', d: 'Bureaux et immobilier : Décret Tertiaire, BACS, GTB, audit.', k: 'tertiaire bureaux immobilier Décret Tertiaire BACS GTB audit performance CSRD' },
    { t: 'Santé — Hôpitaux et établissements de soins', u: b+'secteurs/sante.html', d: 'Achat 24h/24, Décret Tertiaire, BACS, solaire, stockage.', k: 'santé hôpital clinique EHPAD énergie Décret Tertiaire BACS solaire stockage' },
    { t: 'Transports — Bus électriques et IRVE', u: b+'secteurs/transports.html', d: 'Bus électriques, IRVE, smart charging, ferroviaire, solaire sur dépôts.', k: 'transports bus électrique IRVE ferroviaire smart charging mobilité dépôt' },
    { t: 'Copropriétés — DTG, PPT, MOE et AMO rénovation', u: b+'secteurs/coproprietes.html', d: 'Diagnostic Technique Global, Plan Pluriannuel de Travaux, AMO ANAH, MaPrimeRénov\'.', k: 'copropriété DTG PPT MOE AMO rénovation ANAH APC MaPrimeRénov syndicat travaux' }
  ];

  function gbSearch(q) {
    if (!q || q.trim().length < 2) return [];
    var terms = q.toLowerCase().trim().split(/\s+/);
    var results = IDX.map(function(p) {
      var hay = (p.t + ' ' + p.d + ' ' + p.k).toLowerCase();
      var score = 0;
      terms.forEach(function(w) {
        if (p.t.toLowerCase().indexOf(w) >= 0) score += 10;
        if (p.d.toLowerCase().indexOf(w) >= 0) score += 4;
        if (p.k.toLowerCase().indexOf(w) >= 0) score += 2;
      });
      return score > 0 ? {p: p, s: score} : null;
    }).filter(Boolean);
    results.sort(function(a, b) { return b.s - a.s; });
    return results.slice(0, 8).map(function(r) { return r.p; });
  }

  // Créer le modal
  var gbModal = document.createElement('div');
  gbModal.id = 'gb-search';
  gbModal.setAttribute('role', 'dialog');
  gbModal.setAttribute('aria-label', 'Recherche');
  gbModal.innerHTML = '<div class="gsb-bd"></div>'
    + '<div class="gsb-box">'
    + '<div class="gsb-hd">'
    + '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;color:var(--muted)"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>'
    + '<input id="gsb-inp" type="text" placeholder="Rechercher une page, un sujet…" autocomplete="off" spellcheck="false">'
    + '<button class="gsb-x" aria-label="Fermer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button>'
    + '</div>'
    + '<div id="gsb-res" aria-live="polite"></div>'
    + '<div class="gsb-ft">Tapez 2 caractères pour lancer &nbsp;·&nbsp; <kbd>Échap</kbd> pour fermer &nbsp;·&nbsp; <kbd>↑↓</kbd> pour naviguer</div>'
    + '</div>';
  document.body.appendChild(gbModal);

  var gbInp = document.getElementById('gsb-inp');
  var gbRes = document.getElementById('gsb-res');

  function gbOpen() {
    gbModal.classList.add('on');
    gbInp.focus();
    document.body.style.overflow = 'hidden';
  }
  function gbClose() {
    gbModal.classList.remove('on');
    gbInp.value = '';
    gbRes.innerHTML = '';
    document.body.style.overflow = '';
  }
  function gbRender(pages) {
    if (!pages.length) {
      gbRes.innerHTML = '<p class="gsb-empty">Aucun résultat pour cette recherche.</p>';
      return;
    }
    gbRes.innerHTML = pages.map(function(p) {
      return '<a href="' + p.u + '" class="gsb-item">'
        + '<span class="gsb-ttl">' + p.t + '</span>'
        + '<span class="gsb-desc">' + p.d + '</span>'
        + '</a>';
    }).join('');
  }

  gbModal.querySelector('.gsb-bd').addEventListener('click', gbClose);
  gbModal.querySelector('.gsb-x').addEventListener('click', gbClose);
  gbInp.addEventListener('input', function() {
    if (this.value.trim().length >= 2) gbRender(gbSearch(this.value));
    else gbRes.innerHTML = '';
  });
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); gbOpen(); }
    if (e.key === 'Escape' && gbModal.classList.contains('on')) gbClose();
  });
  gbInp.addEventListener('keydown', function(e) {
    var items = gbRes.querySelectorAll('.gsb-item');
    if (e.key === 'ArrowDown' && items.length) { e.preventDefault(); items[0].focus(); }
  });
  gbRes.addEventListener('keydown', function(e) {
    var items = Array.from(gbRes.querySelectorAll('.gsb-item'));
    var i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i < items.length - 1) { e.preventDefault(); items[i + 1].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); if (i > 0) items[i - 1].focus(); else gbInp.focus(); }
  });
  document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-search')) { e.preventDefault(); gbOpen(); }
  });

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
