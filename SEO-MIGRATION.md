# SEO — PLAN DE MIGRATION

> Document de référence pour la migration SEO de greenbirdie.com  
> Dernière mise à jour : 24/06/2026

---

## 1. REDIRECTIONS 301 RECOMMANDÉES

| Ancienne URL | Nouvelle URL | Priorité |
|---|---|---|
| /nos-missions | /achat-energie, /flexibilite-performance, /production-energie | P1 |
| /en-savoir-plus | / (accueil) | P1 |
| /qui-sommes-nous | /a-propos | P1 |
| /notre-histoire | /a-propos#histoire | P2 |
| /blog | /actualites | P2 |
| /jobs | /recrutement | P3 |
| dt.greenbirdie.com | dt.greenbirdie.com (conserver en l'état) | — |

**Note :** La landing page dt.greenbirdie.com doit être conservée sur son sous-domaine actuel et n'est pas concernée par la migration du site principal.

---

## 2. MÉTADONNÉES PAR PAGE

### Page d'accueil (/)

```
Title : Conseil en énergie pour entreprises — GREENBIRDIE
Meta description : GREENBIRDIE accompagne les entreprises dans l'achat d'énergie, la performance énergétique et la production renouvelable. +3 000 sites accompagnés. Expert depuis 2005.
H1 : Acheter, piloter et produire votre énergie
Mot-clé principal : cabinet conseil énergie entreprise
Mots-clés secondaires : stratégie énergétique entreprise, transition énergétique B2B
```

### Achat d'énergie (/achat-energie)

```
Title : Stratégie d'achat d'énergie pour entreprises — GREENBIRDIE
Meta description : Conseil indépendant en achat d'électricité et de gaz, contrats groupes, PPA, VPPA. GREENBIRDIE accompagne vos stratégies d'achat et le suivi des marchés.
H1 : Achat d'énergie et stratégie de marché
Mot-clé principal : conseil achat énergie entreprise
Mots-clés secondaires : stratégie achat électricité, contrat groupe énergie, PPA entreprise
```

### Flexibilité et performance (/flexibilite-performance)

```
Title : Performance énergétique et flexibilité — GREENBIRDIE
Meta description : Audit énergétique, décret tertiaire, BACS, effacement, stockage. GREENBIRDIE vous aide à réduire vos consommations et valoriser vos flexibilités énergétiques.
H1 : Flexibilité et pilotage de l'énergie
Mot-clé principal : performance énergétique entreprise
Mots-clés secondaires : décret tertiaire accompagnement, effacement électrique, flexibilité énergétique
```

### Production d'énergie (/production-energie)

```
Title : Production photovoltaïque pour entreprises — GREENBIRDIE
Meta description : Étude, maîtrise d'œuvre et valorisation de vos projets photovoltaïques. Toiture, ombrières, centrales au sol, autoconsommation. Expert depuis 2005.
H1 : Production d'énergie renouvelable
Mot-clé principal : photovoltaïque entreprise
Mots-clés secondaires : autoconsommation entreprise, maîtrise d'œuvre photovoltaïque, ombrière photovoltaïque parking
```

### Réglementation (/reglementation)

```
Title : Réglementation énergétique entreprises — GREENBIRDIE
Meta description : Décret Tertiaire, BACS, audits obligatoires, loi APER. GREENBIRDIE transforme vos obligations réglementaires en plans d'action économiquement rentables.
H1 : Réglementation énergétique
Mot-clé principal : réglementation énergie entreprise
Mots-clés secondaires : décret tertiaire, décret BACS, audit énergétique obligatoire
```

### Secteur Grande distribution (/secteurs/grande-distribution)

```
Title : Énergie pour la grande distribution — GREENBIRDIE
Meta description : Contrats groupes, PPA multiacheteurs, décret tertiaire, photovoltaïque sur parking. GREENBIRDIE accompagne les réseaux de distribution dans leur stratégie énergétique.
H1 : Maîtrise de l'énergie pour la grande distribution
Mot-clé principal : énergie grande distribution
Mots-clés secondaires : contrat groupe énergie distribution, PPA multiacheteurs, photovoltaïque parking commerce
```

### Secteur Logistique (/secteurs/logistique)

```
Title : Énergie pour la logistique et les entrepôts — GREENBIRDIE
Meta description : Photovoltaïque sur grandes toitures, flexibilité, IRVE, décret tertiaire. GREENBIRDIE optimise les coûts énergétiques des plateformes logistiques.
H1 : Énergie et performance pour la logistique
Mot-clé principal : énergie logistique entrepôt
Mots-clés secondaires : photovoltaïque entrepôt, flexibilité logistique, décret tertiaire logistique
```

### Secteur Hôtellerie (/secteurs/hotellerie)

```
Title : Maîtrise de l'énergie en hôtellerie — GREENBIRDIE
Meta description : Décret tertiaire, performance énergétique, autoconsommation pour groupes hôteliers. GREENBIRDIE accompagne Accor, Louvre Hotels et les indépendants.
H1 : Énergie et performance pour l'hôtellerie
Mot-clé principal : énergie hôtellerie groupe
Mots-clés secondaires : décret tertiaire hôtel, performance énergétique hôtel, autoconsommation hôtellerie
```

### Secteur Industrie (/secteurs/industrie)

```
Title : Stratégie énergétique pour l'industrie et les ETI — GREENBIRDIE
Meta description : Achat d'énergie, PPA, VPPA, flexibilité des procédés, décarbonation. GREENBIRDIE accompagne les industriels et ETI dans leur stratégie énergétique.
H1 : Énergie et décarbonation pour l'industrie
Mot-clé principal : conseil énergie industrie ETI
Mots-clés secondaires : PPA industriel, VPPA France, flexibilité industrielle, décarbonation industrie
```

### Secteur Tertiaire (/secteurs/tertiaire)

```
Title : Énergie pour le tertiaire et l'immobilier — GREENBIRDIE
Meta description : Décret tertiaire, BACS, audit, pilotage patrimonial multisite. GREENBIRDIE accompagne foncières, collectivités et gestionnaires de patrimoine.
H1 : Énergie et conformité pour le tertiaire
Mot-clé principal : énergie tertiaire immobilier
Mots-clés secondaires : décret tertiaire bureaux, audit énergétique tertiaire, gestion énergie multisite
```

---

## 3. DONNÉES STRUCTURÉES À IMPLÉMENTER

### Organisation (toutes pages)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "GREENBIRDIE",
  "description": "Cabinet d'ingénierie et de conseil en énergie",
  "foundingDate": "2005",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13, rue Raymond Losserand",
    "postalCode": "75014",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "telephone": "+33144081050",
  "email": "info@greenbirdie.com",
  "url": "https://www.greenbirdie.com",
  "areaServed": "France"
}
```

### FAQPage (pages piliers, pages sectorielles)

À implémenter sur chaque page avec FAQ.

### BreadcrumbList (toutes pages sauf accueil)

---

## 4. MOTS-CLÉS PRIORITAIRES PAR CLUSTER

### Cluster 1 — Achat d'énergie (Bloc 1)

| Mot-clé | Intention | Page cible |
|---|---|---|
| conseil achat énergie entreprise | Commerciale | /achat-energie |
| stratégie achat électricité entreprise | Informationnelle | /achat-energie |
| achat groupé énergie | Commerciale | /achat-energie#contrats-groupes |
| contrat groupe électricité | Commerciale | /achat-energie#contrats-groupes |
| PPA entreprise France | Commerciale | /achat-energie#ppa |
| PPA multiacheteurs | Informationnelle | /achat-energie#ppa |
| VPPA France | Informationnelle | /achat-energie#vppa |
| consultation fournisseurs énergie | Commerciale | /achat-energie#consultation |
| suivi budget énergie entreprise | Commerciale | /achat-energie#suivi |

### Cluster 2 — Flexibilité / Performance (Bloc 2)

| Mot-clé | Intention | Page cible |
|---|---|---|
| décret tertiaire accompagnement | Commerciale | /flexibilite-performance#decret-tertiaire |
| OPERAT déclaration | Informationnelle | /flexibilite-performance#decret-tertiaire |
| décret BACS | Informationnelle | /reglementation#bacs |
| audit énergétique réglementaire | Commerciale | /flexibilite-performance#audit |
| effacement électrique entreprise | Commerciale | /flexibilite-performance#effacement |
| flexibilité énergétique industrielle | Informationnelle | /flexibilite-performance#flexibilite |
| stockage batterie entreprise | Commerciale | /flexibilite-performance#stockage |
| GTB bâtiment | Informationnelle | /flexibilite-performance#bacs |

### Cluster 3 — Production (Bloc 3)

| Mot-clé | Intention | Page cible |
|---|---|---|
| photovoltaïque entreprise | Commerciale | /production-energie |
| ombrière photovoltaïque parking | Commerciale | /production-energie#ombriere |
| autoconsommation entreprise | Commerciale | /production-energie#autoconsommation |
| maîtrise d'œuvre photovoltaïque | Commerciale | /production-energie#moe |
| loi APER parking photovoltaïque | Informationnelle | /reglementation#aper |
| centrale photovoltaïque au sol | Commerciale | /production-energie#sol |
| PPA solaire entreprise | Commerciale | /production-energie#valorisation |

---

## 5. CHECKLIST TECHNIQUE SEO

- [ ] Fichier sitemap.xml généré et soumis à Google Search Console
- [ ] Fichier robots.txt configuré
- [ ] Redirections 301 implémentées (voir tableau §1)
- [ ] HTTPS actif sur tous les domaines
- [ ] Balises canonical sur chaque page
- [ ] Balises Open Graph (og:title, og:description, og:image)
- [ ] Balises Twitter Card
- [ ] Images avec attribut alt descriptif
- [ ] Pas de contenu dupliqué entre pages
- [ ] Temps de chargement < 3s (Core Web Vitals)
- [ ] Données structurées validées (Rich Results Test)
- [ ] Pages 404 et 500 configurées
- [ ] Vérification de l'indexation post-migration

---

*Dernière mise à jour : 24/06/2026*
