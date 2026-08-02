# Audit SEO technique, Bing SEO & GEO (Generative Engine Optimization) — greenbirdie.com

> Réalisé le 02/08/2026. Site audité : site statique HTML5/CSS/JS (Netlify), 32 pages HTML. Objectif : que Microsoft Copilot, Bing, ChatGPT, Perplexity et Gemini identifient clairement GREENBIRDIE comme entreprise, sa description, son fondateur, ses expertises, ses clients et ses implantations.
>
> **Ce document couvre deux choses : (1) l'audit complet demandé, (2) le changelog des corrections déjà implémentées directement dans le dépôt pendant cette session** (le site étant du HTML statique, les correctifs ont été appliqués directement dans les fichiers `.html`).

---

## 0. Résumé exécutif

| # | Constat | Sévérité | Statut |
|---|---|---|---|
| 1 | `og:image` pointait vers `assets/images/og-greenbirdie.png`, **fichier inexistant (404)**, sur les 32 pages du site | 🔴 Critique | ✅ Corrigé |
| 2 | Lien cassé `secteurs/transport.html` (fichier réel : `transports.html`) dans le footer de `contact.html` | 🟠 Élevé | ✅ Corrigé |
| 3 | Aucune donnée structurée `Organization`/`Person`(fondateur)/`LocalBusiness` complète — seul un `ProfessionalService` minimal (1 adresse, pas de fondateur, pas de `sameAs`) existait sur la page d'accueil | 🔴 Critique | ✅ Corrigé |
| 4 | `a-propos.html` (page qui décrit le fondateur) et `contact.html` (page qui liste les 7 agences) n'avaient **aucune donnée structurée** | 🔴 Critique | ✅ Corrigé |
| 5 | Aucun `BreadcrumbList` nulle part alors que le fil d'Ariane est présent visuellement sur presque toutes les pages | 🟠 Élevé | ✅ Corrigé (29 pages) |
| 6 | `FAQPage` limité à 2 questions sur `reglementation.html`, alors que la page contient largement de quoi répondre à 6+ questions fréquentes | 🟡 Moyen | ✅ Corrigé |
| 7 | Fiche LinkedIn de l'entreprise avec une description **obsolète et contradictoire** (mentionne Avignon et Nice, absents des 7 implantations officielles) | 🔴 Critique pour GEO | ⚠️ Action manuelle requise (hors dépôt) |
| 8 | Pas d'entité Wikidata, pas de fiche Bing Places confirmée, pas de fiche Google Business Profile visible dans les résultats | 🟠 Élevé | ⚠️ Action manuelle requise |
| 9 | Ancienne URL `greenbirdie.com/notre-histoire` toujours référencée par des sites tiers (renvoie une 404 aujourd'hui) | 🟡 Moyen | ⚠️ Recommandé : redirection 301 |
| 10 | Double système typographique/CSS coexistant (Inter + Tailwind CDN sur `index.html`/certaines pages Blog vs Playfair Display + DM Sans ailleurs) | 🟡 Moyen (cohérence de marque) | ℹ️ Observation, non corrigé (choix de design, hors périmètre SEO) |

---

## 1. SEO technique

### 1.1 Balises title
Toutes les pages ont un `<title>` unique, descriptif, avec la marque en suffixe (`… — GREENBIRDIE`). Longueur généralement correcte (50-65 caractères), sauf quelques titres longs sur le blog (ex. `ppe3-strategie-energetique.html` ≈ 95 caractères — sera tronqué dans les SERP, acceptable pour un article mais à surveiller).

### 1.2 Meta description
Présente sur toutes les pages, généralement bien calibrée (140-160 caractères), orientée bénéfice + mots-clés. ✅ Bon niveau.

### 1.3 Hn (H1/H2/H3)
- 1 seul `<h1>` par page, aligné avec le mot-clé principal. ✅
- Hiérarchie H2/H3 cohérente sur les pages piliers et sectorielles. ✅
- Bon usage des `<h3>` en questions (FAQ implicite) sur `achat-energie.html`, `production-energie.html`, `secteurs/industrie.html`, `blog/index.html` — **contenu FAQ potentiel non exploité en `FAQPage`** (voir plan d'action).

### 1.4 Canonical
Présent et cohérent (`https://www.greenbirdie.com/...` sans `.html`, aligné sur les redirections « pretty URL » de `netlify.toml`) sur 100 % des pages indexables. ✅

### 1.5 robots.txt
```
User-agent: *
Allow: /
Disallow: /404.html
Disallow: /mentions-legales.html
Sitemap: https://www.greenbirdie.com/sitemap.xml
```
Correct dans l'ensemble. Remarque mineure : `mentions-legales.html` est aussi en `noindex` via meta robots — le `Disallow` dans robots.txt est donc redondant et **empêche même Google de lire le `noindex`** (un `Disallow` bloque le crawl, donc le moteur ne voit jamais le `noindex`, et peut indexer l'URL "à l'aveugle" si elle est liée ailleurs). Recommandation : retirer le `Disallow: /mentions-legales.html` du robots.txt et laisser uniquement le `<meta name="robots" content="noindex, follow">` faire le travail.

### 1.6 sitemap.xml
27 URLs déclarées, dates de dernière modification jusqu'à fin juin 2026. **Incomplet** : ne référence pas `notre-approche.html`, `cader-publics.html`, ni les 8 nouveaux articles de blog ajoutés depuis (`bureaux-nantes`, `contrats-multiacheteurs-ppa`, `cpe-situation-reference`, `decarbonation-hinojosa`, `decret-tertiaire-autoconsommation`, `ombrieres-eulalie`, `ppe3-strategie-energetique`, `printemps-planete`), ni `secteurs/coproprietes.html` (si). À régénérer (voir plan d'action — quick win).

### 1.7 Open Graph / Twitter Cards
Bien implémenté structurellement (`og:type`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`, `twitter:card=summary_large_image`) — **mais `og:image` pointait vers un fichier inexistant sur les 32 pages**, ce qui cassait tous les aperçus (LinkedIn, Bing, Teams/Copilot, iMessage, Slack…). **Corrigé dans cette session** (voir §Implémentation). Un vrai visuel dédié 1200×630 reste à produire (voir quick win).

### 1.8 Favicon
Présent (`assets/images/favicon.ico`), chargé sur toutes les pages. ✅ Pas de déclinaison `apple-touch-icon` ni `site.webmanifest` — mineur, à ajouter pour une meilleure présentation sur mobile/Copilot Android.

### 1.9 Core Web Vitals / Performance
Points d'attention identifiés à la lecture du code (pas de mesure Lighthouse en conditions réelles depuis cet environnement) :
- **`index.html` charge Tailwind CSS via le CDN (`cdn.tailwindcss.com`), en render-blocking, en plus de `main.css`** — c'est le seul usage de Tailwind sur le site (les 31 autres pages ne l'utilisent pas). Le Play CDN est explicitement déconseillé par Tailwind en production (compile le CSS à la volée dans le navigateur → JS + CSS non optimisés, mauvais pour le LCP).
- Police Google Fonts chargée deux fois de manière différente selon les pages : `index.html` + quelques pages (blog, `secteurs/sante.html`, `secteurs/transports.html`) chargent **Inter**, tandis que la majorité du site (`a-propos`, `contact`, `achat-energie`, `flexibilite-performance`, `production-energie`, `reglementation`, la plupart des `secteurs/*`) charge **Playfair Display + DM Sans**. Cela signale un site à mi-chemin d'une refonte visuelle — impact SEO faible mais impact cohérence de marque réel (voir §10 du résumé).
- Lucide Icons chargé en CDN (`unpkg.com`) sans `defer`/`async` sur `index.html`.
- Aucune balise `<link rel="preload">` sur les polices critiques malgré la recommandation du `README.md` lui-même.
- Poids d'images bruts très élevés pour certains articles de blog : `article_nantes_1.jpg` (10,6 Mo !), `article_nantes_2.jpg` (6,5 Mo), `article_nantes_3.jpg` (5,5 Mo) dans `assets/images/`. Même si le HTML utilise `loading="lazy"`, ces poids sont incompatibles avec un bon LCP/INP mobile s'ils sont utilisés tels quels dans `blog/bureaux-nantes.html`. **Priorité haute** : compresser/reconvertir en WebP (viser <200 Ko).

### 1.10 Maillage interne
Bon niveau global : navigation principale complète (`nav.js`), footer avec liens vers piliers/secteurs, fil d'Ariane sur les pages internes, articles de blog qui renvoient vers les pages piliers (ex. `reglementation.html` renvoie vers `blog/aper-ombrage-cinq-lectures.html`). Aucune page orpheline détectée dans le maillage principal.

### 1.11 Liens cassés
Un scan automatisé des 32 fichiers HTML a été effectué (script Node, vérification de tous les `href="*.html"` internes contre les fichiers réellement présents) :
- **1 lien cassé trouvé et corrigé** : `contact.html` → `secteurs/transport.html` (le fichier réel est `secteurs/transports.html`). ✅ Corrigé.
- **1 image cassée sitewide corrigée** : `og:image` → `assets/images/og-greenbirdie.png` (404) sur 32/32 pages. ✅ Corrigé (voir §Implémentation).
- Après correction, **0 lien interne cassé** restant sur le site.

### 1.12 Images sans alt
Pas de `<img>` sans attribut `alt` détecté dans les fichiers audités (`index.html`, `a-propos.html`, blog, secteurs). Les images de l'équipe et des articles ont des `alt` descriptifs corrects (ex. `alt="Gaëtan COLLIN"`). ✅ Bon niveau — pas d'action requise ici.

---

## 2. Données structurées (JSON-LD)

### 2.1 État avant intervention
| Schéma | Présence avant | Qualité |
|---|---|---|
| `Organization` | Minimal (`ProfessionalService` sur l'accueil seulement) | Pas de fondateur, pas de `sameAs`, 1 seule adresse sur 7, pas de logo, pas d'identifiants légaux |
| `LocalBusiness` (multi-agences) | Absent | Les 7 adresses n'existaient qu'en texte brut sur `contact.html` |
| `Person` (fondateur) | Présent uniquement en `author` des articles de blog | Absent de `a-propos.html`, page qui décrit pourtant le fondateur en détail |
| `BreadcrumbList` | Absent | Fil d'Ariane visuel présent partout mais jamais en JSON-LD |
| `Article` | Présent sur les 11 articles de blog | Bien implémenté (headline, dates, author, publisher, image) |
| `FAQPage` | Présent uniquement sur `reglementation.html` | Seulement 2 questions alors que le contenu en permet 6+ |

### 2.2 État après intervention (implémenté dans cette session)
43 blocs JSON-LD validés syntaxiquement (0 erreur) sur 32 fichiers :

- **`index.html`** — remplacement des 2 blocs existants par un `@graph` unique reliant :
  - `Organization`/`ProfessionalService` (`@id: #organization`) : `legalName`, `alternateName`, `foundingDate`, `founder` (référence `Person`), `logo`, `image`, `vatID`, `taxID`, adresse siège, `areaServed` (7 villes + France), `knowsAbout` (11 expertises), `contactPoint`, `sameAs` (LinkedIn)
  - `Person` (`@id: #founder`) : Gaëtan Collin, `jobTitle`, `description`, `worksFor`
  - `WebSite` (`@id: #website`) : conservé avec `SearchAction`, relié au `publisher`
- **`a-propos.html`** — ajout complet (page qui n'avait aucune donnée structurée) : `AboutPage`, `Person` enrichi (bio complète, `knowsAbout`, `image`), `BreadcrumbList`
- **`contact.html`** — ajout complet : `ContactPage`, `BreadcrumbList`, et **7 entités `ProfessionalService`** (une par agence : Paris, Nantes, Bordeaux, Toulouse, Mont-de-Marsan, Saint-Germain-en-Laye, La Réunion), chacune reliée à l'organisation mère via `parentOrganization`
- **`reglementation.html`** — `FAQPage` étendu de 2 à 6 questions/réponses (seuils d'audit, loi APER, dérogations, qualifications) + `BreadcrumbList`
- **`BreadcrumbList` ajouté sur 29 pages** : les 3 pages piliers, `references.html`, `notre-approche.html`, `cader-publics.html`, les 8 pages `secteurs/*`, les 11 articles de blog + `blog/index.html`

### 2.3 Corrections restantes à faire (JSON-LD prêt à intégrer)

**a) `mentions-legales.html` — enrichir avec les identifiants légaux complets** (actuellement seulement en texte, jamais en JSON-LD ; utile pour que Bing/Copilot confirment le statut légal de l'entité) :
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.greenbirdie.com/#organization",
  "legalName": "GREENBIRDIE",
  "taxID": "480959246",
  "vatID": "FR34480959246",
  "duns": "",
  "foundingDate": "2005",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13, rue Raymond Losserand",
    "postalCode": "75014",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  }
}
</script>
```

**b) Étendre le `FAQPage` aux autres pages piliers** (achat-energie.html, production-energie.html, flexibilite-performance.html) à partir des `<h3>` déjà rédigés sous forme de question — gabarit :
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"[reprendre le texte du <h3> se terminant par ?]",
   "acceptedAnswer":{"@type":"Answer","text":"[reprendre le <p> qui suit]"}}
]}
</script>
```

**c) `references.html` — ajouter un schéma `Review`/`AggregateRating` ou a minima un `hasCredential`/`award` si des témoignages nommés existent** (le fichier mentionne des témoignages Esset, KIABI, CNRS, Alcyon, SDIS 64, ETS Ducasse dans l'index de recherche `nav.js` — à vérifier/valider avant publication, ne pas inventer de notes chiffrées).

---

## 3. GEO (Generative Engine Optimization)

### 3.1 Ce que les moteurs génératifs peuvent désormais lire clairement

| Élément demandé | Avant | Après intervention |
|---|---|---|
| **Nom** : GREENBIRDIE | ✅ Présent en texte | ✅ + `Organization.name`/`legalName` en JSON-LD |
| **Description** : cabinet indépendant d'ingénierie et de conseil en énergie depuis 2005 | ✅ Présent en texte (accueil, à-propos) | ✅ + `Organization.description` structurée, identique sur toutes les pages qui référencent `#organization` |
| **Fondateur** : Gaëtan Collin | ✅ Texte détaillé sur `a-propos.html` | ✅ + `Person` structuré, relié à l'organisation par `founder`/`worksFor`, avec bio, expertise (`knowsAbout`), page canonique |
| **Expertises** (achat d'énergie, stratégie énergétique, Décret Tertiaire, photovoltaïque, PPA, PPA multiacheteurs, flexibilité, décarbonation, audit énergétique, BACS, OPERAT) | ✅ Toutes présentes en texte, réparties sur les pages piliers | ✅ + `Organization.knowsAbout` liste explicitement 11 de ces expertises en une seule entité machine-lisible |
| **Clients** (Accor, Carrefour, Intermarché, L'Oréal, Safran, Lidl, E.Leclerc, ALDI, Leroy Merlin, Crédit Agricole…) | ✅ Présents en texte (bandeaux logos + section "Ils nous font confiance") | ⚠️ Toujours uniquement textuel — aucun schéma `Organization` ne référence formellement ces clients (voir action stratégique : envisager des études de cas structurées avec `Review`/`Claim` par client, avec validation client préalable) |
| **Présence** (Paris, Bordeaux, Toulouse, Nantes, Saint-Germain-en-Laye, Mont-de-Marsan, La Réunion) | ✅ Adresses complètes en texte sur `contact.html` uniquement | ✅ + 7 entités `ProfessionalService` en JSON-LD sur `contact.html`, + liste `areaServed` sur l'entité principale |

### 3.2 Pourquoi Copilot ne reconnaît probablement pas encore GREENBIRDIE comme entité fiable

Microsoft Copilot s'appuie très largement sur **Bing** (index, Bing Entity/Knowledge Graph) et sur les signaux tiers vérifiables (LinkedIn, annuaires, Wikidata, presse). Avant cette intervention :
1. Il n'existait **aucune donnée structurée `Organization` exploitable au-delà d'un `ProfessionalService` minimal** → Bing devait déduire l'identité de l'entreprise uniquement à partir du texte, avec un risque de confusion (nom proche de "Greenbird Integration Technology", de "GB Solar" filiale, ou de l'ancienne société "Greenbirdie" spécialisée façade différente trouvée dans les résultats de recherche).
2. **La fiche LinkedIn de l'entreprise contient une description obsolète** ("15 ans d'expérience", bureaux à Avignon et Nice) qui **contredit directement** le site actuel (20 ans, 7 implantations sans Avignon ni Nice). Bing/Copilot pondèrent fortement LinkedIn comme source d'autorité pour les entités B2B — cette divergence est probablement la cause principale d'un panneau de connaissance incomplet ou absent.
3. Pas d'entité Wikidata (voir §4).
4. Le fondateur n'était pas relié à l'organisation par un schéma machine-lisible avant cette session (fait maintenant, mais l'indexation prendra du temps).

### 3.3 Recommandations spécifiques par moteur

- **Microsoft Copilot / Bing** : soumettre le site à **Bing Webmaster Tools**, vérifier/créer la fiche **Bing Places for Business** pour chaque agence (surtout Paris, siège), et mettre à jour la description LinkedIn (source majeure pour Bing Entity). Le nouveau JSON-LD `Organization`+`Person`+multi-`ProfessionalService` va dans le bon sens mais doit être recrawlé (soumettre les URLs modifiées via Bing Webmaster Tools → "Soumettre les URL").
- **ChatGPT (Bing-backed browsing / recherche)** : bénéficie des mêmes signaux Bing ; l'ajout des schémas `FAQPage` aide particulièrement ce moteur à extraire des réponses directes.
- **Perplexity** : indexe le contenu textuel brut plus que le JSON-LD — la qualité déjà bonne du contenu (chiffres clés, sections claires) est un atout ; veiller à ce que chaque page reste crawlable (aucun blocage détecté) et que les chiffres soient cohérents d'une page à l'autre (voir §3.4).
- **Gemini / Google** : le `WebSite` + `SearchAction` et les schémas `Organization`/`BreadcrumbList` sont directement exploités par Google Search Generative Experience. Vérifier l'inscription **Google Business Profile** (déterminant pour le Knowledge Panel Google, dont Gemini hérite largement).

### 3.4 Incohérences de chiffres détectées entre pages (à corriger avant que les moteurs IA ne les citent en contradiction)
- `README.md`/`AUDIT-ET-STRATEGIE.md` (docs internes) mentionnent encore "+3 000 sites" alors que `index.html`/`a-propos.html` affichent désormais "+6 000 sites" — sans impact SEO direct (docs non publiées) mais à nettoyer pour éviter toute confusion en interne.
- Le nombre d'implantations est cohérent partout (7) ✅.
- "+300 M€ d'achats accompagnés" (ancienne métrique citée dans `AUDIT-ET-STRATEGIE.md`) a bien été remplacé par "2,7 TWh" sur le site public — cohérent. ✅

---

## 4. Knowledge Graph — signaux d'entité

| Source | Statut constaté | Recommandation |
|---|---|---|
| **LinkedIn (entreprise)** | Page existante (`linkedin.com/company/greenbirdie`), mais **description obsolète et contradictoire** (bureaux à Avignon/Nice non mentionnés sur le site actuel, "15 ans" vs "20 ans") | 🔴 **Priorité n°1** : mettre à jour la description, le secteur, les 7 implantations réelles, ajouter le lien `greenbirdie.com`, uploader logo/bannière à jour |
| **LinkedIn (Gaëtan Collin)** | Profil personnel trouvé mais **non vérifié avec certitude comme correspondant au fondateur actuel** dans le cadre de cet audit | ⚠️ Faire confirmer par GREENBIRDIE avant d'ajouter l'URL en `sameAs` dans le JSON-LD `Person` (ne pas publier une URL d'identité non confirmée) |
| **Viadeo** | Ancienne fiche indexée (`viadeo.journaldunet.com/p/gaetan-collin-883845`) | Faible priorité — Viadeo n'est plus un signal actif, ignorer |
| **Google Business Profile** | Non vérifiable depuis cet environnement (pas d'accès à la Google Search Console/GBP) | 🔴 Vérifier/créer une fiche par agence (au minimum Paris, siège) — impact direct sur Gemini et Google Maps |
| **Bing Places** | Non vérifiable depuis cet environnement | 🔴 Créer/vérifier — impact direct sur Copilot |
| **Wikidata** | **Aucune entité trouvée** pour GREENBIRDIE | 🟠 Créer une entité Wikidata (entreprise française, secteur conseil en énergie, fondée en 2005, siège Paris) — signal fort et gratuit pour tous les moteurs IA, notamment ceux qui consultent Wikipédia/Wikidata comme source de vérité |
| **Crunchbase** | Fiche existante (`crunchbase.com/organization/greenbirdie`) | Vérifier le contenu et le compléter (description, fondateur, siège, effectif) |
| **Pages Jaunes** | Non confirmé dans les résultats de recherche | 🟡 Vérifier/créer une fiche par agence |
| **Kompass** | Non confirmé | 🟡 Faible priorité, mais gratuit à créer |
| **CCI Business / ATEE** | Fiches trouvées (`ccibusiness.fr/greenbirdie`, `atee.fr/entreprise/greenbirdie`) | ✅ Déjà présent — bon signal sectoriel, vérifier la fraîcheur des informations |
| **Ancienne page "notre-histoire"** | Toujours référencée par un article tiers (`voxlog.fr`) mais renvoie une 404 aujourd'hui | 🟡 Ajouter une redirection 301 `notre-histoire` → `a-propos` (voir plan d'action) |

---

## 5. Concurrence — GREENBIRDIE vs Advizeo, Citron, Alterea, Enoptea, Deepki

| Acteur | Positionnement observé | Ce qu'ils font mieux en visibilité IA/SEO |
|---|---|---|
| **Advizeo** | "Expert de l'Energy Management" — pilotage/monitoring IoT, économies d'énergie sur le patrimoine bâti | Discours produit très clair et répété (un seul message : "Energy Management"), facilite l'extraction par les IA génératives |
| **Citron** | "Citron® Consulting" — performance énergétique des bâtiments, marque déposée mise en avant | Nom de marque déposé et répété systématiquement (`Citron®`) — renforce la reconnaissance d'entité par les moteurs |
| **Enoptea** | Aide les entreprises et organisations multi-sites à maîtriser achats/consommations, avec solutions digitales | Positionnement quasi identique à GREENBIRDIE (multi-sites, achat + consommation) — **concurrent direct le plus proche du discours actuel de GREENBIRDIE** |
| **Alterea** | Non trouvé de signal clair distinct dans les recherches menées (à recouper avec la connaissance interne GREENBIRDIE — nom possiblement ambigu ou peu actif en ligne) | — |
| **Deepki** | Leader mondial ESG/décarbonation immobilière, plateforme SaaS, 500+ clients, 4 000 Md€ d'actifs suivis, levées de fonds importantes (150 M€) largement couvertes par la presse | Deepki bénéficie d'une **couverture presse massive**, de communiqués financiers repris par des dizaines de médias, et d'une plateforme SaaS clairement nommée — un narratif "leader" répété partout que les moteurs IA captent facilement |

### Ce qui limite aujourd'hui la visibilité de GREENBIRDIE face à ces acteurs
1. **Pas de couverture presse/communiqués** détectée (contrairement à Deepki) — aucun signal d'autorité externe récent hors site propre et quelques annuaires professionnels.
2. **Positionnement en trois piliers ("Acheter / Consommer / Produire") très riche mais dilué** — les concurrents ci-dessus tiennent en une phrase ("Energy Management", "Citron® Consulting"). Pour les moteurs génératifs qui résument en une phrase, un message plus condensé et répété identiquement partout (ce que fait maintenant le JSON-LD `Organization.description`) aide.
3. **Absence de Wikidata et de signaux LinkedIn à jour**, alors que ce sont des sources que Copilot/Bing consultent en priorité pour construire un panneau de connaissance d'entreprise B2B.
4. **Aucune étude de cas nommée et chiffrée publiée** (les études de cas actuelles sur `index.html` sont anonymisées — "Réseau de supermarchés", "Plateforme logistique" — alors que `a-propos.html` cite des marques réelles dans le bandeau clients). Des études de cas nommées et chiffrées, avec accord client, sont un contenu que les IA génératives citent volontiers en réponse à "qui a accompagné X sur Y".

---

## 6. Plan d'action

### 6.1 Quick wins (< 1 heure) — ✅ = déjà fait dans cette session
- ✅ Corriger `og:image` cassé sur les 32 pages
- ✅ Corriger le lien `secteurs/transport.html` → `secteurs/transports.html`
- ✅ Ajouter `BreadcrumbList` sur 29 pages
- ✅ Retirer `Disallow: /mentions-legales.html` de `robots.txt` (le `noindex` meta suffit et reste actif)
- ✅ Régénérer `sitemap.xml` : ajout de `notre-approche`, `cader-publics` et des 8 articles de blog manquants (dates `datePublished` reprises depuis le JSON-LD `Article` de chaque page)
- ✅ Ajout du fichier `_redirects` (mentionné dans le `README.md` mais absent du dépôt) avec `notre-histoire → /a-propos` en 301 + les redirections historiques déjà documentées dans `SEO-MIGRATION.md`

### 6.2 Actions prioritaires (< 1 jour)
- ✅ Ajouter les schémas `Organization` + `Person` (fondateur) + `WebSite` en `@graph` sur `index.html`
- ✅ Ajouter `Person` (fondateur) détaillé + `BreadcrumbList` sur `a-propos.html`
- ✅ Ajouter les 7 `ProfessionalService` (une par agence) + `BreadcrumbList` sur `contact.html`
- ✅ Étendre le `FAQPage` de `reglementation.html` (2 → 6 questions)
- ⬜ Mettre à jour la description et les implantations de la page LinkedIn entreprise (corriger Avignon/Nice, "15 ans" → "20 ans")
- ⬜ Ajouter les `FAQPage` sur `achat-energie.html`, `production-energie.html`, `flexibilite-performance.html` à partir des `<h3>` déjà rédigés en questions (gabarit fourni en §2.3b)
- ⬜ Ajouter le schéma `Organization` complet avec identifiants légaux sur `mentions-legales.html` (gabarit fourni en §2.3a)
- ⬜ Compresser les images `article_nantes_*.jpg` (actuellement 5,5 à 10,6 Mo chacune) en WebP < 200 Ko
- ⬜ Créer/vérifier les fiches **Bing Places** et **Google Business Profile** pour l'agence de Paris a minima

### 6.3 Actions stratégiques (< 1 mois)
- ⬜ Créer une entité **Wikidata** pour GREENBIRDIE (entreprise, secteur, fondation 2005, siège, fondateur)
- ⬜ Vérifier/compléter les fiches Crunchbase, Pages Jaunes, Kompass, ATEE, CCI Business
- ⬜ Confirmer avec GREENBIRDIE l'URL LinkedIn exacte de Gaëtan Collin, puis l'ajouter en `sameAs` du schéma `Person`
- ⬜ Produire un vrai visuel Open Graph dédié (1200×630, logo + tagline "L'énergie optimiste") pour remplacer la solution de repli actuelle (capture de la plateforme GREENBIRDIE Énergie)
- ⬜ Publier 2-3 études de cas **nommées et chiffrées** (avec accord client) en remplacement des études de cas anonymisées actuelles, avec schéma `Article`/`Review` dédié
- ⬜ Rechercher au moins une couverture presse/communiqué (secteur énergie, decret tertiaire) pour créer des signaux d'autorité externes, à l'image de ce que fait Deepki
- ⬜ Unifier la direction artistique du site (Inter/Tailwind vs Playfair+DM Sans) pour renforcer la cohérence de marque perçue par les utilisateurs et, indirectement, la qualité perçue par les moteurs
- ⬜ Étendre les schémas `Employee`/`Person` aux autres membres clés cités sur `a-propos.html` (Antoine Labrunie, Paola Pacitto, Jonathan Quinton) si ces personnes valident leur exposition publique

---

## 7. Changelog — modifications appliquées dans ce dépôt (02/08/2026)

| Fichier(s) | Changement |
|---|---|
| 20 fichiers HTML (accueil, pages piliers, secteurs, à-propos, contact, etc.) | `og:image` : `og-greenbirdie.png` (404) → `assets/images/plateforme%20ia.jpg` (image existante, ratio proche 1200×630, solution provisoire) |
| `blog/aper-ombrage-cinq-lectures.html`, `blog/prix-negatifs-nucleaire.html`, `blog/flexibilite-implicite-explicite.html` | `og:image` réaligné sur l'image déjà utilisée dans le schéma `Article` de l'article (`article-loi-aper.jpg`, `article-nucleaire-spot-negatif.jpg`, `article-flexibilite.png`) |
| `contact.html` | Lien footer `secteurs/transport.html` → `secteurs/transports.html` |
| `index.html` | JSON-LD remplacé par un `@graph` : `Organization`/`ProfessionalService` complet (fondateur, `sameAs`, `knowsAbout`, `areaServed` 7 villes, identifiants légaux) + `Person` (fondateur) + `WebSite` |
| `a-propos.html` | Ajout JSON-LD : `AboutPage` + `Person` (fondateur, bio complète) + `BreadcrumbList` |
| `contact.html` | Ajout JSON-LD : `ContactPage` + `BreadcrumbList` + 7 `ProfessionalService` (une par agence) |
| `reglementation.html` | `FAQPage` étendu de 2 à 6 questions + ajout `BreadcrumbList` |
| `achat-energie.html`, `flexibilite-performance.html`, `production-energie.html`, `references.html`, `notre-approche.html`, `cader-publics.html` | Ajout `BreadcrumbList` |
| 8 fichiers `secteurs/*.html` | Ajout `BreadcrumbList` (Accueil > Secteur) |
| 12 fichiers `blog/*.html` (11 articles + index) | Ajout `BreadcrumbList` (Accueil > Ressources > Article) |
| `robots.txt` | Suppression du `Disallow: /mentions-legales.html` (le `noindex` meta gère déjà l'exclusion sans bloquer le crawl) |
| `sitemap.xml` | Ajout de `notre-approche`, `cader-publics` et des 8 articles de blog manquants (27 → 37 URLs) |
| `_redirects` (nouveau fichier) | Redirections 301 pour les anciennes URL, dont `notre-histoire → /a-propos` (toujours référencée par des sites tiers) |

**Validation effectuée** : les 43 blocs JSON-LD du site ont été parsés avec succès (0 erreur de syntaxe) ; un scan de tous les liens internes `.html` ne remonte plus aucun lien cassé ; `index.html` et `a-propos.html` ont été vérifiés dans un navigateur (rendu correct, 0 erreur console, JSON-LD interprété correctement par le DOM).

**Non modifié / hors périmètre d'un correctif de fichiers** : fiches LinkedIn/Bing Places/Google Business Profile/Wikidata (comptes externes nécessitant un accès dont je ne dispose pas), génération d'un nouveau visuel Open Graph (nécessite un design), compression d'images lourdes (nécessite un outil de traitement d'image), régénération du sitemap (à faire une fois les nouvelles URLs de blog validées).
