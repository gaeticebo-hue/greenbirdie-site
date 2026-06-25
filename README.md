# GREENBIRDIE — Site corporate greenbirdie.com

Site statique HTML5/CSS3/JS pour le repositionnement stratégique de GREENBIRDIE, cabinet de conseil en stratégie énergétique.

## Stack technique

- **HTML5 / CSS3 / JavaScript** — pas de framework, pas de build step
- **Netlify** — hébergement et formulaires
- **Google Fonts** — Playfair Display + DM Sans (chargées depuis le CDN Google)
- **API recherche-entreprises.api.gouv.fr** — validation SIRET (sans clé, CORS-enabled)

## Structure des fichiers

```
greenbirdie-site/
├── index.html                    # Page d'accueil
├── achat-energie.html            # Pilier 1 — Acheter l'énergie
├── flexibilite-performance.html  # Pilier 2 — Consommer au bon moment
├── production-energie.html       # Pilier 3 — Produire son énergie
├── reglementation.html           # Centre de ressources réglementaires
├── a-propos.html                 # À propos de GREENBIRDIE
├── references.html               # Références et études de cas
├── contact.html                  # Formulaire de contact
├── mentions-legales.html         # Mentions légales et RGPD
├── 404.html                      # Page d'erreur
├── sitemap.xml                   # Sitemap SEO
├── robots.txt                    # Directives robots
├── secteurs/
│   ├── grande-distribution.html
│   ├── logistique.html
│   ├── hotellerie.html
│   ├── industrie.html
│   └── tertiaire.html
└── assets/
    ├── css/
    │   └── main.css              # Design system complet (~700 lignes)
    ├── js/
    │   └── main.js               # Navigation, FAQ, formulaires, SIRET
    └── images/
        ├── logo-greenbirdie.png  # Logo (à placer ici depuis le fichier source)
        └── capture-plateforme.png # Screenshot plateforme GREENBIRDIE Énergie
```

## Déploiement sur Netlify

### Première mise en ligne

1. Créer un compte sur [netlify.com](https://netlify.com) si ce n'est pas déjà fait
2. Depuis le dashboard Netlify : **Add new site → Deploy manually**
3. Glisser-déposer le dossier `greenbirdie-site/` dans la zone de dépôt
4. Netlify attribue automatiquement un sous-domaine (ex: `jolly-morse-123.netlify.app`)
5. Dans **Site settings → Domain management** : configurer le domaine `greenbirdie.com`

### Déploiements suivants

- Glisser-déposer à nouveau le dossier dans le dashboard Netlify, **ou**
- Connecter le dossier à un dépôt GitHub pour un déploiement automatique à chaque push

### Formulaires Netlify

Les formulaires utilisent l'attribut `data-netlify="true"`. Netlify les détecte automatiquement au premier déploiement et crée les entrées correspondantes dans **Forms → Form submissions**.

Pour recevoir les soumissions par email : **Site settings → Forms → Form notifications → Add notification → Email notification**.

### Redirections

Configurer les redirections 301 depuis l'ancien site dans un fichier `_redirects` à la racine du dossier déployé :

```
/nos-missions          /achat-energie          301
/qui-sommes-nous       /a-propos               301
/contact-us            /contact                301
/energie-solaire       /production-energie     301
/audit-energetique     /flexibilite-performance 301
```

> Voir `SEO-MIGRATION.md` pour la table complète des redirections.

### Page 404

Le fichier `404.html` est détecté automatiquement par Netlify comme page d'erreur.

## Avant la mise en ligne — checklist

### Contenu à valider par GREENBIRDIE (voir `CONTENUS-A-VALIDER.md`)

- [ ] Informations légales : SIREN, SIRET, capital, TVA, hébergeur, DPO
- [ ] Adresses exactes des 7 agences
- [ ] Nom et fonction du directeur de la publication
- [ ] Certifications : OPQIBI, RGE, ISO 50001 (confirmer les accréditations en cours)
- [ ] Équipe : noms, fonctions, photos, biographies
- [ ] Études de cas : 3 à 5 cas clients avec résultats chiffrés
- [ ] Témoignages clients : citations, noms, fonctions

### Fichiers à placer dans `assets/images/`

- [ ] `logo-greenbirdie.png` — Logo en PNG fond transparent (idéalement 300×80px)
- [ ] `capture-plateforme.png` — Screenshot de la plateforme GREENBIRDIE Énergie

### Configuration Netlify à effectuer

- [ ] Configurer le domaine `www.greenbirdie.com` dans Netlify
- [ ] Activer HTTPS (Let's Encrypt, automatique sur Netlify)
- [ ] Configurer les notifications email pour les formulaires
- [ ] Tester la réception des formulaires en environnement de staging

### SEO

- [ ] Vérifier et soumettre le sitemap.xml dans Google Search Console
- [ ] Configurer Google Analytics ou équivalent (mettre à jour mentions-legales.html en conséquence)
- [ ] Configurer le bandeau de consentement cookies (CNIL)

## Identité visuelle

### Couleurs

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--dark` | `#1a1a1a` | Texte principal, fonds sombres |
| `--cream` | `#faf8f4` | Fond page par défaut |
| `--gold` | `#b8962e` | Accent, Bloc 3 production |
| `--bloc1` | `#1a3a5c` | Bleu — Achat d'énergie |
| `--bloc2` | `#1a3d2b` | Vert — Flexibilité/performance |
| `--bloc3` | `#b8962e` | Or — Production solaire |

### Typographie

- **Titres** : Playfair Display (serif), 400 / 600 / 700
- **Corps** : DM Sans (sans-serif), 300 / 400 / 500

## Documents livrés

| Fichier | Contenu |
|---------|---------|
| `AUDIT-ET-STRATEGIE.md` | Audit du site existant, analyse SWOT, stratégie de refonte |
| `ARBORESCENCE.md` | Arborescence complète du nouveau site |
| `SEO-MIGRATION.md` | Plan de migration SEO, redirections 301, métadonnées |
| `CONTENUS-A-VALIDER.md` | Liste priorisée des contenus à valider par GREENBIRDIE |
| `README.md` | Ce fichier — installation et déploiement |

---

*Site réalisé en juin 2026. Stack : HTML5/CSS3/JS statique. Hébergement : Netlify. Formulaires : Netlify Forms.*
