/* GREENBIRDIE — page d'accueil 360° : démonstrations interactives, cas simulés, formulaire de diagnostic. */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const NF0 = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });
  const NF1 = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 });
  const k = v => NF0.format(Math.round(v)).replace(/[  ]/g, ' ') + ' k€';
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const NS = 'http://www.w3.org/2000/svg';

  /* ───────── navigation mobile (même comportement que main.js sur les autres pages) ───────── */
  (function initNav() {
    const hamburger = $('.nav-hamburger'), overlay = $('.nav-mobile-overlay');
    if (!hamburger || !overlay) return;
    hamburger.addEventListener('click', () => {
      const open = overlay.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      overlay.classList.remove('open'); document.body.style.overflow = ''; hamburger.setAttribute('aria-expanded', false);
    }));
  })();

  /* ───────── helpers SVG ───────── */
  const el = (n, a, p) => { const e = document.createElementNS(NS, n); for (const key in a) e.setAttribute(key, a[key]); if (p) p.appendChild(e); return e; };
  const txt = (p, x, y, s, a) => { const t = el('text', Object.assign({ x, y }, a || {}), p); t.textContent = s; return t; };
  const defs = (svg, id) => {
    const d = el('defs', {}, svg), p = el('pattern', { id, width: 8, height: 8, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, d);
    el('rect', { width: 8, height: 8, fill: '#fff' }, p); el('rect', { width: 4, height: 8, fill: css('--sun') }, p);
  };
  const defsRed = (svg, id) => {
    const d = el('defs', {}, svg), p = el('pattern', { id, width: 8, height: 8, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, d);
    el('rect', { width: 8, height: 8, fill: '#fff' }, p); el('rect', { width: 4, height: 8, fill: '#C0392B' }, p);
  };

  /* ───────── Écran 2 : silos (journée type, formes illustratives) ───────── */
  let siloMode = 'silo';
  function drawSilo() {
    const svg = $('#siloSvg'); svg.innerHTML = '';
    el('title', { id: 'siloT' }, svg).textContent = 'Journée type : consommation, production solaire et bloc de couverture';
    el('desc', { id: 'siloD' }, svg).textContent = siloMode === 'silo'
      ? 'Le bloc acheté est trop grand à midi : le surplus de couverture est revendu au prix du marché.'
      : 'Le bloc est recalé sur la consommation nette après solaire : plus de surplus.';
    defsRed(svg, 'hRed');
    const X0 = 44, X1 = 508, Y0 = 250, Y1 = 30, Vmax = 150;
    const X = h => X0 + (X1 - X0) * h / 24, Y = v => Y0 - (Y0 - Y1) * v / Vmax;
    const load = h => 100 + 30 * Math.max(0, Math.sin(Math.PI * (h - 6) / 14)) * (h >= 6 && h <= 20 ? 1 : 0);
    const pv = h => 85 * Math.max(0, Math.sin(Math.PI * (h - 7) / 12)) * (h >= 7 && h <= 19 ? 1 : 0);
    const net = h => load(h) - pv(h);
    const block = siloMode === 'silo' ? 100 : 55;
    const hs = Array.from({ length: 97 }, (_, i) => i / 4);
    for (let v = 0; v <= 150; v += 50) { el('line', { x1: X0, x2: X1, y1: Y(v), y2: Y(v), stroke: css('--line') }, svg); txt(svg, X0 - 8, Y(v) + 5, v, { 'text-anchor': 'end', 'font-size': 14, fill: css('--muted') }); }
    txt(svg, 14, 16, 'Puissance (unités arbitraires)', { 'font-size': 13, fill: css('--muted') });
    [0, 6, 12, 18, 24].forEach(h => txt(svg, X(h), Y0 + 20, h + ' h', { 'text-anchor': h === 24 ? 'end' : h === 0 ? 'start' : 'middle', 'font-size': 14, fill: css('--muted') }));
    // consommation nette à acheter
    el('path', { d: 'M' + hs.map(h => X(h).toFixed(1) + ',' + Y(net(h)).toFixed(1)).join(' L') + ' L' + X(24) + ',' + Y0 + ' L' + X(0) + ',' + Y0 + 'Z', fill: css('--c-pilot'), opacity: .35 }, svg);
    // solaire (au-dessus de la consommation nette, jusqu'à la consommation brute)
    el('path', { d: 'M' + hs.map(h => X(h).toFixed(1) + ',' + Y(load(h)).toFixed(1)).join(' L') + ' L' + hs.slice().reverse().map(h => X(h).toFixed(1) + ',' + Y(net(h)).toFixed(1)).join(' L') + 'Z', fill: css('--c-prod'), stroke: css('--c-syn-line'), 'stroke-width': 1 }, svg);
    // surplus de couverture : bloc au-dessus de la consommation nette
    const seg = hs.filter(h => block > net(h));
    if (seg.length) el('path', { d: 'M' + seg.map(h => X(h).toFixed(1) + ',' + Y(block).toFixed(1)).join(' L') + ' L' + seg.slice().reverse().map(h => X(h).toFixed(1) + ',' + Y(net(h)).toFixed(1)).join(' L') + 'Z', fill: 'url(#hRed)', stroke: '#A32D1F', 'stroke-width': 1 }, svg);
    el('line', { x1: X0, x2: X1, y1: Y(block), y2: Y(block), stroke: css('--c-syn-line'), 'stroke-width': 2.5, 'stroke-dasharray': '7 5' }, svg);
    txt(svg, X0 + 6, Y(block) - 7, 'Bloc acheté : ' + block, { 'text-anchor': 'start', 'font-size': 15, 'font-weight': 700, fill: css('--ink') });
    if (seg.length) { el('rect', { x: X(13) - 98, y: Y(block) + 12, width: 196, height: 24, rx: 6, fill: '#fff', stroke: '#A32D1F' }, svg); txt(svg, X(13), Y(block) + 30, 'Surplus revendu au marché', { 'text-anchor': 'middle', 'font-size': 14.5, 'font-weight': 700, fill: '#A32D1F' }); }
    txt(svg, X(13), Y(load(13)) - 8, 'Solaire', { 'text-anchor': 'middle', 'font-size': 15, 'font-weight': 700, fill: css('--ink') });
    $('#siloNote').textContent = siloMode === 'silo'
      ? 'Le bloc est calé sur la consommation d’avant le solaire. À midi, une partie est en trop : elle est revendue au prix du marché, parfois à perte.'
      : 'Le bloc est recalé sur la consommation nette. Le contrat, le solaire et le pilotage sont conçus ensemble : plus de surplus, plus d’économies.';
  }
  $$('[data-silo]').forEach(b => b.addEventListener('click', () => { siloMode = b.dataset.silo; $$('[data-silo]').forEach(x => x.setAttribute('aria-pressed', x === b)); drawSilo(); }));

  /* ───────── Modèle illustratif (hypothèses simplifiées, non issues de dossiers clients) ─────────
     Économies d'une approche en silos, en % de la facture : Acheter 5 %, Piloter 4 %, Produire 7 %
     (déjà nettes du recouvrement entre leviers : le deuxième levier apporte moins que seul).
     Gain additionnel de la coordination = « complémentarité » (3 à 12 %) × économies en silos,
     réparti : A+P 22 %, A+R 28 %, P+R 28 %, A+P+R 22 %. */
  const BASE = { a: 0.05, p: 0.04, r: 0.07 };
  const W = { ap: 0.22, ar: 0.28, pr: 0.28, apr: 0.22 };
  const NAMES = { a: 'Acheter', p: 'Piloter', r: 'Produire' };
  const ST = { sel: { a: true, p: true, r: true }, budget: 1000, compl: 8 };
  function model(sel, budget, compl) {
    const sep = {}; let sepAll = 0;
    for (const x of 'apr') { sep[x] = BASE[x] * budget; sepAll += sep[x]; }
    const T = compl / 100 * sepAll;
    const pair = { ap: W.ap * T, ar: W.ar * T, pr: W.pr * T }, tri = W.apr * T;
    const on = x => sel[x];
    const sepSel = 'apr'.split('').filter(on).reduce((s, x) => s + sep[x], 0);
    const pairSel = {}; let syn = 0;
    for (const p of ['ap', 'ar', 'pr']) { pairSel[p] = on(p[0]) && on(p[1]) ? pair[p] : 0; syn += pairSel[p]; }
    const triSel = on('a') && on('p') && on('r') ? tri : 0; syn += triSel;
    return { sep, sepSel, pair: pairSel, tri: triSel, syn, coord: sepSel + syn, full: sepAll + T };
  }

  /* ───────── Écran 3 : démonstrateur ───────── */
  function drawMap(m) {
    const svg = $('#mapSvg'); svg.innerHTML = '';
    const P = { a: [160, 48], p: [52, 214], r: [268, 214] }, C = [160, 160], col = { a: css('--c-buy'), p: css('--c-pilot'), r: css('--c-prod') };
    const edges = [['a', 'p', 'ap'], ['a', 'r', 'ar'], ['p', 'r', 'pr']];
    edges.forEach(([u, v, key]) => {
      const on = ST.sel[u] && ST.sel[v];
      el('line', { x1: P[u][0], y1: P[u][1], x2: P[v][0], y2: P[v][1], stroke: on ? css('--c-syn-line') : css('--line'), 'stroke-width': on ? 4 : 2, 'stroke-dasharray': on ? '' : '5 5' }, svg);
      const mx = (P[u][0] + P[v][0]) / 2, my = (P[u][1] + P[v][1]) / 2, dx = (mx - C[0]) * .55, dy = (my - C[1]) * .55;
      const lx = mx + dx, ly = my + dy;
      if (on) {
        el('rect', { x: lx - 36, y: ly - 14, width: 72, height: 26, rx: 13, fill: css('--sun'), stroke: css('--c-syn-line'), 'stroke-width': 1.5 }, svg);
        txt(svg, lx, ly + 4, '+' + NF0.format(Math.round(m.pair[key])), { 'text-anchor': 'middle', 'font-size': 12.5, 'font-weight': 800, fill: css('--on-sun') });
      } else txt(svg, lx, ly + 4, '—', { 'text-anchor': 'middle', 'font-size': 14, fill: css('--muted') });
    });
    const all = ST.sel.a && ST.sel.p && ST.sel.r;
    el('circle', { cx: C[0], cy: C[1], r: 34, fill: all ? css('--sun') : '#fff', stroke: all ? css('--c-syn-line') : css('--line'), 'stroke-width': all ? 3 : 2, 'stroke-dasharray': all ? '' : '5 5' }, svg);
    txt(svg, C[0], C[1] - 2, all ? '+' + NF0.format(Math.round(m.tri)) : '—', { 'text-anchor': 'middle', 'font-size': 16, 'font-weight': 800, fill: all ? css('--on-sun') : css('--muted') });
    txt(svg, C[0], C[1] + 15, all ? 'k€ à trois' : '', { 'text-anchor': 'middle', 'font-size': 10.5, fill: '#173E39' });
    'apr'.split('').forEach(x => {
      const on = ST.sel[x];
      el('circle', { cx: P[x][0], cy: P[x][1], r: 30, fill: on ? col[x] : '#fff', stroke: css('--brand-deep'), 'stroke-width': on ? 3 : 2, 'stroke-dasharray': on ? '' : '4 4' }, svg);
      txt(svg, P[x][0], P[x][1] + 4, NAMES[x].toUpperCase(), { 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 800, fill: !on ? css('--muted') : (x === 'r' ? '#173E39' : '#fff') });
    });
  }
  function drawBars(m) {
    const svg = $('#barSvg'); svg.innerHTML = ''; defs(svg, 'hSun');
    const Y0 = 252, H = 190, maxV = Math.max(m.full, 1), Y = v => Y0 - H * v / maxV, bw = 96, xs = [44, 180];
    el('line', { x1: 20, x2: 310, y1: Y0, y2: Y0, stroke: css('--ink'), 'stroke-width': 1.5 }, svg);
    const stack = x => { let cum = 0; 'apr'.split('').filter(l => ST.sel[l]).forEach(l => {
      const v = m.sep[l], y1 = Y(cum + v), y0 = Y(cum), h = y0 - y1; cum += v;
      el('rect', { x, y: y1, width: bw, height: h, fill: ({ a: css('--c-buy'), p: css('--c-pilot'), r: css('--c-prod') })[l], stroke: css('--c-syn-line'), 'stroke-width': 1.5 }, svg);
      if (h > 20) txt(svg, x + bw / 2, y1 + h / 2 + 4, NAMES[l] + ' ' + NF0.format(Math.round(v)), { 'text-anchor': 'middle', 'font-size': 12.5, 'font-weight': 700, fill: l === 'r' ? '#173E39' : '#fff' });
    }); return cum; };
    const top1 = stack(xs[0]), top2 = stack(xs[1]);
    if (m.syn > 0) {
      const y1 = Y(top2 + m.syn), h = Y(top2) - y1;
      el('rect', { x: xs[1], y: y1, width: bw, height: h, fill: 'url(#hSun)', stroke: css('--c-syn-line'), 'stroke-width': 2 }, svg);
      txt(svg, xs[1] + bw / 2, y1 - 8, '+' + NF0.format(Math.round(m.syn)) + ' k€', { 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 800, fill: css('--ink') });
      el('line', { x1: xs[0] + bw, x2: xs[1], y1: Y(top1), y2: Y(top1), stroke: css('--c-syn-line'), 'stroke-dasharray': '4 4' }, svg);
    } else txt(svg, xs[1] + bw / 2, Y(top2) - 8, 'rien à coordonner', { 'text-anchor': 'middle', 'font-size': 11.5, fill: css('--muted') });
    txt(svg, xs[0] + bw / 2, Y(top1) - 8, NF0.format(Math.round(top1)) + ' k€', { 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 800, fill: css('--ink') });
    txt(svg, xs[0] + bw / 2, Y0 + 18, 'En silos', { 'text-anchor': 'middle', 'font-size': 12.5, 'font-weight': 700, fill: css('--ink') });
    txt(svg, xs[1] + bw / 2, Y0 + 18, 'Coordonné', { 'text-anchor': 'middle', 'font-size': 12.5, 'font-weight': 700, fill: css('--ink') });
    txt(svg, 16, 16, 'k€ d’économies par an', { 'font-size': 13, fill: css('--muted') });
  }
  function renderDemo() {
    const m = model(ST.sel, ST.budget, ST.compl);
    $('#budgetOut').textContent = k(ST.budget);
    $('#complOut').textContent = '+' + ST.compl + ' %';
    const n = Object.values(ST.sel).filter(Boolean).length;
    $('#rSep').textContent = k(m.sepSel);
    $('#rCoord').textContent = k(m.coord);
    const pct = m.sepSel ? m.syn / m.sepSel * 100 : 0;
    $('#rGain').textContent = m.syn > 0 ? '+' + NF0.format(Math.round(m.syn)) + ' k€ (+' + NF1.format(pct) + ' %)' : 'aucun';
    const pbill = m.coord / ST.budget * 100;
    $('#demoMsg').textContent = n < 2
      ? 'Un seul levier : rien à coordonner. Ajoutez-en un second pour voir apparaître le premier gain d’interaction.'
      : 'Ici, la facture baisse de ' + NF1.format(pbill) + ' % avec la coordination ; le gain additionnel représente +' + NF1.format(pct) + ' % des économies obtenues en silos. Ce sont deux chiffres différents.';
    drawMap(m); drawBars(m);
    const rows = 'apr'.split('').filter(l => ST.sel[l]).map(l => '<tr><td>' + NAMES[l] + ' (en silos)</td><td class="n">' + k(m.sep[l]) + '</td></tr>').join('') +
      '<tr><th>Économies en silos</th><th class="n">' + k(m.sepSel) + '</th></tr>' +
      [['ap', 'Acheter × Piloter'], ['ar', 'Acheter × Produire'], ['pr', 'Piloter × Produire']].map(([key, lab]) => '<tr><td>Synergie ' + lab + '</td><td class="n">' + (m.pair[key] ? '+' + k(m.pair[key]) : '—') + '</td></tr>').join('') +
      '<tr><td>Synergie à trois</td><td class="n">' + (m.tri ? '+' + k(m.tri) : '—') + '</td></tr>' +
      '<tr><th>Économies coordonnées</th><th class="n">' + k(m.coord) + '</th></tr>';
    $('#demoTable').innerHTML = '<table><caption class="sr-only">Détail des économies illustratives</caption><thead><tr><th>Composante</th><th class="n">Par an</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }
  $$('[data-lev]').forEach(b => b.addEventListener('click', () => {
    const l = b.dataset.lev, cnt = Object.values(ST.sel).filter(Boolean).length;
    if (ST.sel[l] && cnt === 1) return;           // au moins un levier
    ST.sel[l] = !ST.sel[l]; b.setAttribute('aria-pressed', ST.sel[l]); renderDemo();
  }));
  $$('[data-preset]').forEach(b => b.addEventListener('click', () => {
    const set = b.dataset.preset;
    'apr'.split('').forEach(l => { ST.sel[l] = set.includes(l); $('[data-lev="' + l + '"]').setAttribute('aria-pressed', ST.sel[l]); });
    renderDemo();
  }));
  $('#budget').addEventListener('input', e => { ST.budget = +e.target.value; renderDemo(); });
  $('#compl').addEventListener('input', e => { ST.compl = +e.target.value; renderDemo(); });

  /* ───────── Écran 5 : deux cas simulés avec GB Energy Architect ─────────
     Résultats annuels figés (composante énergie, 12 mois de courbe de charge réelle anonymisée, septembre 2025 à septembre 2026).
     Ordre de calcul de l'outil : produire, puis stocker et adapter, puis acheter ; chaque levier est évalué après les précédents. */
  const CASES = {
    fromagerie: { nom: 'Fromagerie industrielle', desc: 'Environ 13,6 GWh par an · ombrières de parking 1,1 MWc · batterie 1,5 MW / 3 MWh · 76 % des achats en blocs.',
      c0: 1002637, steps: { r: 91188, p: 113016, a: 88771 }, invest: 2086000, retour: 7.7 },
    entrepots: { nom: 'Entrepôts frigorifiques', desc: 'Environ 12,2 GWh par an · ombrières de parking 285 kWc · batterie 1,5 MW / 3 MWh · 79 % des achats en blocs.',
      c0: 929393, steps: { r: 26587, p: 113775, a: 99294 }, invest: 1132815, retour: 5.1 }
  };
  const CST = { id: 'fromagerie', n: 3 };
  const NF1b = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  function drawCascade() {
    const C = CASES[CST.id], svg = $('#cascadeSvg'); svg.innerHTML = '';
    const order = ['r', 'p', 'a'].slice(0, CST.n), B = C.c0;
    const gain = order.reduce((s, l) => s + C.steps[l], 0), final = B - gain, lo = B * 0.65;
    const X0 = 30, W = 480, n = order.length + 2, slot = W / n, bw = Math.min(78, slot * .66), Y0 = 252, Y1 = 52;
    const Y = v => Y0 - (Y0 - Y1) * (Math.max(v, lo) - lo) / (B - lo);
    const COL = { a: css('--c-buy'), p: css('--c-pilot'), r: css('--c-prod') }, LAB = { r: 'Produire', p: 'Piloter', a: 'Acheter' };
    const bars = [{ lab: 'Facture actuelle', a: lo, b: B, c: css('--muted'), t: NF0.format(Math.round(B / 1000)) + ' k€' }];
    let cur = B;
    order.forEach(l => { bars.push({ lab: LAB[l], a: cur - C.steps[l], b: cur, c: COL[l], t: '−' + NF0.format(Math.round(C.steps[l] / 1000)) + ' k€', step: true }); cur -= C.steps[l]; });
    bars.push({ lab: 'Avec le 360°', a: lo, b: final, c: '#2E8B57', t: NF0.format(Math.round(final / 1000)) + ' k€', sub: '−' + NF1.format(gain / B * 100) + ' %' });
    el('line', { x1: X0, x2: X0 + W, y1: Y0, y2: Y0, stroke: '#173E39' }, svg);
    bars.forEach((b, i) => {
      const x = X0 + slot * i + (slot - bw) / 2, y1 = Y(b.b), y0 = Y(b.a);
      el('rect', { x, y: y1, width: bw, height: Math.max(3, y0 - y1), rx: 4, fill: b.c, stroke: '#173E39', 'stroke-width': 1.5 }, svg);
      txt(svg, x + bw / 2, y1 - 8, b.t, { 'text-anchor': 'middle', 'font-size': 16, 'font-weight': 800, fill: '#173E39' });
      if (b.sub) txt(svg, x + bw / 2, y1 - 24, b.sub, { 'text-anchor': 'middle', 'font-size': 15, 'font-weight': 800, fill: '#1B6B43' });
      b.lab.split(' ').forEach((w, j) => txt(svg, x + bw / 2, Y0 + 20 + j * 16, w, { 'text-anchor': 'middle', 'font-size': 14.5, fill: '#173E39' }));
      if (i < bars.length - 1) { const yy = b.step ? Y(b.a) : Y(b.b); el('line', { x1: x + bw, x2: x + slot, y1: yy, y2: yy, stroke: '#7C8F86', 'stroke-dasharray': '3 3' }, svg); }
    });
    txt(svg, 30, 18, 'k€ par an · axe tronqué à 65 %', { 'font-size': 13.5, fill: '#46605A' });
    $('#caseDesc').textContent = C.desc;
    const full = CST.n === 3;
    $('#caseKpis').innerHTML =
      '<div class="kpi"><div class="k">Facture simulée</div><div class="v">' + NF0.format(Math.round(final / 1000)) + ' k€</div></div>' +
      '<div class="kpi kpi--hl"><div class="k">Économies par an</div><div class="v">' + NF0.format(Math.round(gain / 1000)) + ' k€</div></div>' +
      (full ? '<div class="kpi"><div class="k">Investissement</div><div class="v">' + NF1b.format(C.invest / 1e6) + ' M€</div></div><div class="kpi"><div class="k">Retour</div><div class="v">' + NF1b.format(C.retour) + ' ans</div></div>' : '');
    $('#caseNote').textContent = 'Simulation sur 12 mois de courbe de charge réelle anonymisée, composante énergie de la facture. Valorisation de la flexibilité selon un barème interne GREENBIRDIE. Résultats modélisés.' + (full ? '' : ' Investissement et retour : voir la combinaison complète.');
  }
  function selectCase(id) {
    CST.id = id; $$('[data-case]').forEach(b => b.setAttribute('aria-selected', b.dataset.case === id)); drawCascade();
  }
  $$('[data-case]').forEach(b => b.addEventListener('click', () => selectCase(b.dataset.case)));
  $$('[data-nlev]').forEach(b => b.addEventListener('click', () => {
    CST.n = +b.dataset.nlev; $$('[data-nlev]').forEach(x => x.setAttribute('aria-pressed', +x.dataset.nlev === CST.n)); drawCascade();
  }));
  $$('[data-open-case]').forEach(a => a.addEventListener('click', () => selectCase(a.dataset.openCase)));

  /* ───────── Écran 9 : parcours par fonction + formulaire de diagnostic (Netlify Forms) ───────── */
  const PERSONA = {
    dg: 'Pour une direction générale : un cap énergétique unique, des arbitrages d’investissement éclairés, un risque prix maîtrisé.',
    daf: 'Pour une direction financière : un budget énergie plus prévisible, des investissements classés par leur retour réel, une visibilité sur le risque de marché.',
    dt: 'Pour la direction technique et énergie : une architecture cohérente entre contrats, usages et production, modélisée au quart d’heure.',
    immo: 'Pour la direction immobilière : un plan patrimonial qui articule décret tertiaire, toitures et ombrières, et contrats, site par site.',
    reseau: 'Pour un réseau multisite : un modèle réplicable (contrats groupés, PPA multi-acheteurs, standards de pilotage) qui passe à l’échelle.'
  };
  $$('#personas [data-p]').forEach(b => b.addEventListener('click', () => {
    $$('#personas [data-p]').forEach(x => x.setAttribute('aria-pressed', x === b));
    $('#personaMsg').textContent = PERSONA[b.dataset.p]; $('#f-fn').value = b.dataset.p;
  }));
  $('#f-fn').addEventListener('change', e => { const v = e.target.value; if (PERSONA[v]) $('#personas [data-p="' + v + '"]').click(); });
  $('#diagForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, v = n => (f.elements[n] || {}).value, res = $('#formResult');
    const missing = [['nom', 'nom'], ['entreprise', 'entreprise']].filter(([n]) => !(v(n) || '').trim()).map(x => x[1]);
    const rgpd = $('#f-rgpd').checked, bad = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test((v('email') || '').trim()) ? null : 'une adresse e-mail valide';
    if (missing.length || !rgpd || bad) {
      res.className = 'form-result show'; res.style.background = '#FDE8E4';
      res.innerHTML = '<strong>Merci de compléter : ' + missing.concat(bad ? [bad] : [], rgpd ? [] : ['le consentement']).join(', ') + '.</strong>';
      res.focus(); return;
    }
    res.style.background = '';
    const btn = f.querySelector('button[type=submit]'); btn.disabled = true;
    const pv = (f.querySelector('[name=pv]:checked') || {}).value, enjeux = $$('[name=enjeux]:checked', f).map(x => x.value), pistes = [];
    if (['10-49', '50+'].includes(v('sites'))) pistes.push('Mutualisation des achats et PPA multi-acheteurs à examiner sur votre réseau.');
    if (['5-20', '20+'].includes(v('conso'))) pistes.push('Comparaison fixe, Full Spot et Bloc + Spot, avec un dimensionnement des blocs sur votre courbe de charge.');
    if (pv === 'oui' || pv === 'projet') pistes.push('Solaire à dimensionner en cohérence avec contrat, usages et stockage.');
    if (pv === 'non') pistes.push('Potentiel solaire (toitures, ombrières) à qualifier, notamment au regard de la loi APER.');
    if (enjeux.includes('regl')) pistes.push('Articulation de vos obligations (décret tertiaire, BACS) avec vos investissements.');
    if (!pistes.length) pistes.push('Cartographie de vos trois leviers et de leurs interactions.');
    const nom = v('nom');
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(f)).toString() })
      .then(r => { if (!r.ok) throw new Error('http ' + r.status); })
      .then(() => {
        res.className = 'form-result show';
        res.innerHTML = '<strong>Merci, ' + esc(nom) + '. Premières pistes à explorer ensemble :</strong><ul>' + pistes.map(p => '<li>' + p + '</li>').join('') + '</ul><small>Ce sont des pistes d’analyse, pas une estimation chiffrée : le potentiel se calcule avec vos courbes de charge dans GB Energy Architect. Un ingénieur GREENBIRDIE vous recontacte.</small>';
        f.reset(); res.focus();
      })
      .catch(() => {
        res.className = 'form-result show'; res.style.background = '#FDE8E4';
        res.innerHTML = '<strong>Votre demande n’a pas pu être envoyée.</strong> Écrivez-nous à <a href="mailto:contact@greenbirdie.com">contact@greenbirdie.com</a> ou appelez le <a href="tel:+33144081050">01 44 08 10 50</a>.'; res.focus();
      })
      .finally(() => { btn.disabled = false; });
  });

  /* ───────── rendu initial ───────── */
  function renderAll() { drawSilo(); renderDemo(); drawCascade(); }
  renderAll();
})();
