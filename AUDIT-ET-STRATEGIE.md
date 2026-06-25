# AUDIT ET STRATÉGIE — Refonte greenbirdie.com

> Rédigé le 24/06/2026 — Basé sur l'analyse du site actuel (greenbirdie.com), du dépôt (Landing page DT) et du brief de refonte.

---

## 1. INVENTAIRE DU SITE EXISTANT

### 1.1 Structure actuelle identifiée

| Page / Section | URL | Statut |
|---|---|---|
| Accueil | / | Existante |
| Nos missions | /nos-missions | Existante |
| En savoir plus | /en-savoir-plus | Existante |
| Actualités | /blog | Existante |
| Recrutement | /jobs | Existante |
| Contact | /contact | Existante |
| Notre histoire | /notre-histoire | Existante |
| À propos | /qui-sommes-nous | Existante |
| Landing page DT — Commerce | dt.greenbirdie.com | Existante (dépôt local) |
| Landing page DT — Hôtellerie | dt.greenbirdie.com | Existante (dépôt local) |

### 1.2 Chiffres clés récupérés (vérifiables)

- **+3 000 sites** en gestion OPERAT / Décret Tertiaire
- **+20 ans** d'expertise (fondée en 2005, EURL)
- **+300 M€** d'achats d'énergie annuels accompagnés [À VALIDER PAR GREENBIRDIE]
- **+500 références** photovoltaïques [À VALIDER PAR GREENBIRDIE]
- **+2 000 audits énergétiques** réalisés [À VALIDER PAR GREENBIRDIE]
- **Objectif -40 %** de réduction des consommations 2030 (objectif réglementaire Décret Tertiaire)

### 1.3 Implantations géographiques confirmées

- Paris 14e (siège : 13, rue Raymond Losserand, 75014)
- Bordeaux
- Toulouse
- Nantes
- Mont-de-Marsan
- Saint-Germain-en-Laye
- La Réunion

### 1.4 Références clients confirmées (visibles sur le site ou dans le dépôt)

- Accor
- Louvre Hotels Group
- Carrefour
- Intermarché / Les Mousquetaires
- L'Oréal
- Safran
- Lidl

### 1.5 Technologies détectées (dépôt Landing page DT)

- HTML5 statique
- CSS vanilla (custom properties, grid, flexbox)
- JavaScript vanilla (validation SIRET, fetch, soumission Netlify)
- Polices : Playfair Display + DM Sans (Google Fonts)
- Formulaires : Netlify Forms (data-netlify="true")
- API SIRET : api.gouv.fr (recherche-entreprises)
- Hébergement : Netlify (vraisemblable)

### 1.6 Identité graphique existante

**Palette :**
- `--dark: #1c1c1c` (fond principal, CTA)
- `--cream: #faf8f4` (fond secondaire)
- `--gold: #b8962e` (accent, tags, badges partenaires)
- `--green: #1a3d2b` (accent secondaire, validation)
- `--red: #c0392b` (alertes)

**Typographie :**
- Titres : Playfair Display (serif, élégant)
- Corps : DM Sans (sans-serif, lisible)

**Tagline :** "L'énergie optimiste"

---

## 2. FORCES ET FAIBLESSES DU SITE ACTUEL

### 2.1 Forces

| Force | Détail |
|---|---|
| Identité graphique soignée | La landing page DT est bien designée, sobre, premium |
| Formulaire qualifiant | Validation SIRET + pré-remplissage API gouvernementale |
| Preuve sociale | Références Accor, Carrefour, Intermarché, L'Oréal visibles |
| Chiffres clés impactants | +3 000 sites, 20 ans, -40 % |
| Responsive bien géré | Grid/flexbox avec breakpoints cohérents |
| Tagline mémorable | "L'énergie optimiste" — différenciant |
| Positionnement clair sur le DT | La landing page Carrefour est efficace |

### 2.2 Faiblesses

| Faiblesse | Impact |
|---|---|
| **Positionnement trop restreint** | Site perçu comme cabinet DT/audit uniquement, pas comme partenaire stratégique complet |
| **Navigation principale absente** de la landing | Pas de lien vers les 3 blocs stratégiques |
| **Absence de pages piliers** | Achat d'énergie, flexibilité, production : inexistantes en profondeur |
| **Pas de landing pages sectorielles** | Grande distribution, logistique, industrie… non couvertes |
| **Pages institutionnelles faibles** | Histoire, équipe, références non mises en valeur |
| **SEO insuffisant** | Pas de pages dédiées aux mots-clés prioritaires (PPA, VPPA, effacement…) |
| **Aucune étude de cas structurée** | Pas de démonstration de résultats concrets |
| **Pas de CTA différenciés** | Un seul type d'appel à l'action sans parcours utilisateur |
| **Jargon interne** | EFA, CABS, CREf non expliqués, inaccessibles aux décideurs |
| **Pas de maillage interne** | Silo entre les sujets |

---

## 3. CONTENUS RÉCUPÉRABLES

### 3.1 À conserver intégralement

- Design system (palette, typographie, composants)
- Logic de validation SIRET (JS)
- Landing page DT hôtellerie/commerces (à archiver + intégrer)
- Chiffres clés vérifiés (+3 000 sites, 20 ans)
- Liste des références (Accor, Carrefour, etc.)
- Tagline "L'énergie optimiste"
- Screenshot plateforme GREENBIRDIE Énergie

### 3.2 À réécrire et enrichir

- Page d'accueil (repositionnement des 3 blocs)
- Page "Nos missions" → 3 pages piliers distinctes
- Page "Qui sommes-nous" → Page institutionnelle complète avec équipe, histoire, certifications

### 3.3 À créer ex nihilo

- Pages piliers : Achat d'énergie, Flexibilité, Production
- 5 landing pages sectorielles
- Centre de ressources réglementaires
- Études de cas structurées
- Pages SEO : PPA, VPPA, Décret BACS, effacement...
- Page Outils numériques et IA
- Parcours utilisateurs

### 3.4 Pages obsolètes ou à supprimer

- Pages en double (si redondance détectée)
- Tout contenu avec jargon interne non explicité (EFA, CABS, CREf) → à reformuler

---

## 4. NOUVELLE ARBORESCENCE PROPOSÉE

### Navigation principale (6 entrées)

```
GREENBIRDIE.COM
│
├── 🏠 Accueil
│
├── ⚡ Acheter l'énergie
│   ├── Stratégie d'achat
│   ├── Contrats groupes
│   ├── PPA et PPA multiacheteurs
│   ├── VPPA et couverture financière
│   ├── Consultation fournisseurs
│   └── Suivi des marchés et budgets
│
├── 🎯 Consommer au bon moment
│   ├── Audit et performance énergétique
│   ├── Décret Tertiaire
│   ├── Décret BACS et GTB
│   ├── Effacement et flexibilité
│   ├── Stockage
│   └── Performance carbone
│
├── ☀️ Produire son énergie
│   ├── Photovoltaïque en toiture
│   ├── Ombrières de parking
│   ├── Centrales au sol
│   ├── Autoconsommation
│   ├── Maîtrise d'œuvre
│   └── Valorisation de la production
│
├── 📋 Réglementation
│   ├── Décret Tertiaire
│   ├── Décret BACS
│   ├── Audits obligatoires
│   ├── Loi APER
│   ├── RE2020
│   └── Mécanismes de flexibilité
│
├── 🏭 Secteurs
│   ├── Grande distribution
│   ├── Logistique
│   ├── Hôtellerie et tourisme
│   ├── Industrie et ETI
│   └── Tertiaire et immobilier
│
└── ℹ️ GREENBIRDIE
    ├── À propos
    ├── Notre équipe
    ├── Références
    ├── Études de cas
    ├── Outils numériques et IA
    ├── Actualités
    ├── Recrutement
    └── Contact
```

---

## 5. PARCOURS UTILISATEURS PRINCIPAUX

| Besoin | Parcours |
|---|---|
| Réduire ma facture énergétique | Accueil → Acheter l'énergie → Stratégie d'achat → Contact |
| Renouveler mes contrats | Accueil → Acheter l'énergie → Consultation fournisseurs → Contact |
| Mettre en place un PPA | Accueil → Acheter l'énergie → PPA → Contact |
| Décret Tertiaire | Accueil → Réglementation → Décret Tertiaire → Consommer au bon moment → Contact |
| Valoriser ma flexibilité | Accueil → Consommer au bon moment → Effacement → Contact |
| Installer du photovoltaïque | Accueil → Produire son énergie → Photovoltaïque → Contact |
| Gérer un portefeuille multisite | Accueil → Mon secteur → Contact |
| Décarboner mes activités | Accueil → Consommer → Performance carbone → Contact |

---

## 6. RECOMMANDATIONS SEO

### 6.1 Pages prioritaires à créer / optimiser

| Priorité | Page | Mot-clé principal | Volume est. |
|---|---|---|---|
| P1 | Stratégie achat énergie | "conseil achat énergie entreprise" | Fort |
| P1 | Décret Tertiaire | "décret tertiaire accompagnement" | Fort |
| P1 | PPA | "PPA entreprise" | Moyen-fort |
| P1 | Photovoltaïque entreprise | "photovoltaïque entreprise" | Fort |
| P2 | Effacement / flexibilité | "effacement électrique entreprise" | Moyen |
| P2 | VPPA | "VPPA France" | Moyen |
| P2 | Ombrière parking | "ombrière photovoltaïque parking" | Moyen |
| P3 | Décret BACS | "décret BACS" | Moyen |
| P3 | Audit énergétique | "audit énergétique réglementaire" | Moyen |

### 6.2 Principes SEO

- 1 H1 par page, structuré autour du mot-clé principal
- Title = mot-clé principal + GREENBIRDIE (60 caractères max)
- Meta description : bénéfice + appel à l'action (160 caractères max)
- Données structurées : Organization, BreadcrumbList, FAQPage
- Maillage interne systématique entre pages piliers et pages sectorielles
- Sitemap XML automatique
- Redirections 301 des anciennes URL

---

## 7. CHOIX TECHNIQUES RETENUS

### 7.1 Stack retenu : HTML5 statique + CSS vanilla + JS vanilla

**Justification :** Le dépôt existant utilise HTML/CSS/JS statiques avec Netlify Forms. Aucune raison de changer cette architecture pour un site vitrine. Elle offre :
- Performances excellentes (pas de JS côté serveur, pas de build complex)
- Hébergement simple (Netlify, Vercel, GitHub Pages)
- Maintenance accessible sans développeur pour les contenus
- Sécurité maximale (pas de surface d'attaque backend)

**Si besoin de CMS ultérieurement :** intégrer Decap CMS (ex-Netlify CMS) en surcouche, sans changer l'architecture HTML.

### 7.2 Structure des fichiers

```
greenbirdie-site/
├── index.html                          ← Page d'accueil
├── achat-energie.html                  ← Pilier 1
├── flexibilite-performance.html        ← Pilier 2
├── production-energie.html             ← Pilier 3
├── reglementation.html                 ← Centre réglementaire
├── secteurs/
│   ├── grande-distribution.html
│   ├── logistique.html
│   ├── hotellerie.html
│   ├── industrie.html
│   └── tertiaire.html
├── a-propos.html
├── references.html
├── etudes-de-cas.html
├── contact.html
├── mentions-legales.html
├── 404.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── images/
└── docs/
    ├── AUDIT-ET-STRATEGIE.md (ce fichier)
    ├── ARBORESCENCE.md
    ├── SEO-MIGRATION.md
    └── CONTENUS-A-VALIDER.md
```

### 7.3 Performance et accessibilité

- Images : format WebP + balises alt
- Fonts : préchargement via `<link rel="preload">`
- Contraste : ratio minimum 4.5:1 (WCAG AA)
- Navigation clavier : focus visible
- ARIA labels sur les formulaires
- Pas de cookies publicitaires (RGPD)

---

## 8. ANALYSE DE L'EXPÉRIENCE UTILISATEUR ACTUELLE

### Ce qui fonctionne bien sur la landing page DT

- Navigation par onglets (Hôtellerie / Commerce) très claire
- Strip de références clients rassurant en haut
- Bande de prix partenaire visible immédiatement
- Stats chiffrées visuelles
- Processus en 3 étapes illustré
- Formulaire avec validation SIRET en temps réel
- Section réassurance avant le formulaire
- Message de confirmation post-soumission

### Ce qui manque sur la version actuelle du site principal

- Proposition de valeur triple (Acheter / Consommer / Produire) absente en page d'accueil
- Pas de représentation visuelle des 3 blocs
- Pas de module d'orientation par secteur ou besoin
- Pas d'études de cas avec résultats chiffrés
- Pas de page dédiée à l'IA et aux outils numériques
- Navigation principale trop générique ("Nos missions")
- Appels à l'action insuffisamment différenciés

---

*Document produit dans le cadre de la refonte greenbirdie.com — Juin 2026*
*Toutes les informations marquées [À VALIDER PAR GREENBIRDIE] doivent être confirmées avant mise en ligne.*
