# ARBORESCENCE — Site greenbirdie.com

**Version :** 1.0 — Juin 2026  
**Statut :** Livraison initiale — [À VALIDER PAR GREENBIRDIE]

---

## Navigation principale (6 entrées)

```
GREENBIRDIE.COM
│
├── Acheter l'énergie          → /achat-energie
├── Consommer au bon moment    → /flexibilite-performance
├── Produire son énergie       → /production-energie
├── Réglementation             → /reglementation
├── Secteurs ▾                 (menu déroulant)
│   ├── Grande distribution    → /secteurs/grande-distribution
│   ├── Logistique             → /secteurs/logistique
│   ├── Hôtellerie             → /secteurs/hotellerie
│   ├── Industrie et ETI       → /secteurs/industrie
│   └── Tertiaire              → /secteurs/tertiaire
└── GREENBIRDIE                → /a-propos
```

**CTA fixe dans la nav :** "Parler à un expert" → `/contact`

---

## Pages complètes

### Page d'accueil
| URL | Fichier | Statut |
|-----|---------|--------|
| `/` | `index.html` | ✅ Livré |

**Sections :**
1. Hero — "Acheter, piloter et produire votre énergie"
2. Bandeau références (Accor, Louvre Hotels, Carrefour, Intermarché, L'Oréal, Safran, Lidl)
3. Statistiques clés (+3 000 sites / 20 ans / +300M€ / +500 PV)
4. 3 blocs de services (Achat / Flexibilité / Production)
5. 6 différenciateurs GREENBIRDIE
6. Alertes réglementaires (DT + APER + BACS)
7. 5 secteurs d'intervention
8. Plateforme GREENBIRDIE Énergie
9. 3 études de cas (placeholders)
10. CTA final + Footer

---

### Pages piliers (Bloc 1 / 2 / 3)

| URL | Fichier | Statut |
|-----|---------|--------|
| `/achat-energie` | `achat-energie.html` | ✅ Livré |
| `/flexibilite-performance` | `flexibilite-performance.html` | ✅ Livré |
| `/production-energie` | `production-energie.html` | ✅ Livré |

**Achat d'énergie — sections :**
- Stratégie d'achat (processus 4 étapes)
- Produits (6 : prix fixe, Full Flex, blocs+spot, progressif, courts, GO)
- Contrats groupes
- PPA physique et multiacheteurs
- VPPA
- Consultation fournisseurs
- Suivi des marchés
- FAQ (5 questions)

**Flexibilité et performance — sections :**
- Audits énergétiques (NF EN 16247, ISO 50002)
- Décret Tertiaire / OPERAT
- BACS / GTB
- Effacement (explicite + implicite)
- Stockage
- Performance carbone / CSRD
- FAQ (4 questions)

**Production d'énergie renouvelable — sections :**
- Photovoltaïque en toiture
- Ombrières de parking (APER)
- Centrales au sol
- Autoconsommation (individuelle + collective/OAC)
- Maîtrise d'œuvre
- Valorisation de la production
- FAQ (4 questions)

---

### Centre de ressources réglementaires

| URL | Fichier | Statut |
|-----|---------|--------|
| `/reglementation` | `reglementation.html` | ✅ Livré |

**Sections :**
- Décret Tertiaire + OPERAT
- Décret BACS
- Audit énergétique obligatoire (EED)
- Loi APER (parkings + bâtiments)
- Mécanismes de flexibilité et capacité
- CSRD et reporting carbone

---

### Landing pages sectorielles

| URL | Fichier | Statut |
|-----|---------|--------|
| `/secteurs/grande-distribution` | `secteurs/grande-distribution.html` | ✅ Livré |
| `/secteurs/logistique` | `secteurs/logistique.html` | ✅ Livré |
| `/secteurs/hotellerie` | `secteurs/hotellerie.html` | ✅ Livré |
| `/secteurs/industrie` | `secteurs/industrie.html` | ✅ Livré |
| `/secteurs/tertiaire` | `secteurs/tertiaire.html` | ✅ Livré |

**Structure commune :**
- Hero sectoriel + enjeux spécifiques
- Solutions GREENBIRDIE (3 blocs)
- Cas concret ou argument clé
- CTA

---

### Pages institutionnelles

| URL | Fichier | Statut |
|-----|---------|--------|
| `/a-propos` | `a-propos.html` | ✅ Livré |
| `/references` | `references.html` | ✅ Livré |
| `/contact` | `contact.html` | ✅ Livré |
| `/mentions-legales` | `mentions-legales.html` | ✅ Livré |
| `/404` | `404.html` | ✅ Livré |

---

### Fichiers techniques

| Fichier | Statut |
|---------|--------|
| `sitemap.xml` | ✅ Livré |
| `robots.txt` | ✅ Livré |
| `assets/css/main.css` | ✅ Livré |
| `assets/js/main.js` | ✅ Livré |

---

## Pages non livrées dans ce périmètre

Les pages suivantes peuvent être envisagées en phase 2 :

| Page | Priorité | Notes |
|------|----------|-------|
| Blog / Actualités | Moyenne | Nécessite un CMS ou un flux RSS |
| Espace client | Basse | Renvoi vers la plateforme GREENBIRDIE Énergie |
| Pages études de cas individuelles | Haute | Quand le contenu client sera validé |
| Carrières / Recrutement | Basse | Si GREENBIRDIE recrute activement |

---

## Nomenclature des URLs

| Convention | Exemple |
|-----------|---------|
| Slug en minuscules, sans accent, tirets | `/achat-energie` |
| Dossier pour les sous-pages sectorielles | `/secteurs/grande-distribution` |
| Pas d'extension `.html` dans les URLs finales (Netlify gère le pretty-URL) | `/contact` → sert `contact.html` |

---

## Redirections 301 (ancien site → nouveau)

Voir `SEO-MIGRATION.md` pour la table complète.

| Ancienne URL | Nouvelle URL |
|-------------|-------------|
| `/nos-missions` | `/achat-energie` |
| `/qui-sommes-nous` | `/a-propos` |
| `/contact-us` | `/contact` |
| `/energie-solaire` | `/production-energie` |
| `/audit-energetique` | `/flexibilite-performance` |

---

*Document livré avec le site en juin 2026. À mettre à jour si l'arborescence évolue.*
