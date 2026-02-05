Tu es un expert SEO, accessibilité web (RGAA/WCAG) et performance technique. Ta mission est d'auditer et optimiser entièrement le site eirl-repain.fr pour qu'il atteigne les meilleures positions dans les résultats de recherche Google, tout en étant parfaitement accessible et conforme aux normes françaises.

## Contexte
- Site : eirl-repain.fr
- Stack : Next.js
- Objectif : Référencement local et national optimal
- Cible : [À préciser selon l'activité de l'entreprise]

---

## 1. AUDIT COMPLET À RÉALISER

### 1.1 Audit technique SEO
- Analyser la structure actuelle des URLs
- Vérifier le fichier robots.txt
- Analyser/créer le sitemap.xml dynamique
- Vérifier les balises canonical
- Détecter les erreurs 404, redirections cassées
- Analyser la vitesse de chargement (Core Web Vitals)
- Vérifier le rendu SSR/SSG pour le crawl Google

### 1.2 Audit accessibilité RGAA niveau AA
- Contraste des couleurs (ratio minimum 4.5:1)
- Navigation au clavier complète
- Structure des headings (h1 → h6 hiérarchique)
- Attributs alt sur toutes les images
- Labels sur tous les formulaires
- Focus visible sur éléments interactifs
- Liens d'évitement ("Aller au contenu principal")
- Textes lisibles sans CSS

### 1.3 Audit du contenu existant
- Analyser les balises title et meta description
- Vérifier la densité et pertinence des mots-clés
- Évaluer le maillage interne
- Identifier le contenu dupliqué

---

## 2. OPTIMISATIONS À IMPLÉMENTER

### 2.1 Structure technique Next.js
```typescript
// Créer/optimiser le fichier app/layout.tsx avec :
- Metadata API complète (title, description, openGraph, twitter, robots)
- JSON-LD pour le schema.org (LocalBusiness, Organization, BreadcrumbList)
- Balises link canonical dynamiques
- Hreflang si multilingue
```

### 2.2 Fichiers SEO essentiels à créer/optimiser
/public/robots.txt
/app/sitemap.ts (sitemap dynamique)
/app/manifest.ts (PWA)
/public/favicon.ico + toutes variantes

### 2.3 Composants accessibles à créer
```typescript
// Créer des composants réutilisables :
- <SkipLink /> : Lien d'évitement
- <AccessibleImage /> : Image avec alt obligatoire
- <AccessibleButton /> : Bouton avec aria-label
- <Breadcrumb /> : Fil d'Ariane avec schema.org
- <SEOHead /> : Composant metadata réutilisable
```

### 2.4 Schema.org / Données structurées
```json
Implémenter les schemas suivants :
- LocalBusiness (adresse, horaires, téléphone, zone de service)
- Organization (logo, réseaux sociaux, contact)
- BreadcrumbList (fil d'Ariane)
- FAQPage (si page FAQ)
- Service (pour chaque service proposé)
- Review/AggregateRating (avis clients si applicable)
```

### 2.5 Performance (Core Web Vitals)

Optimiser les images : format WebP/AVIF, lazy loading, srcset responsive
Implémenter le composant next/image partout
Configurer le cache headers appropriés
Minifier CSS/JS
Précharger les fonts critiques
Éliminer le CSS/JS bloquant le rendu
Objectifs : LCP < 2.5s, FID < 100ms, CLS < 0.1


### 2.6 SEO Local (prioritaire pour une EIRL)

Créer/optimiser la page Contact avec NAP (Nom, Adresse, Téléphone) cohérent
Intégrer Google Maps avec schema GeoCoordinates
Ajouter les horaires d'ouverture structurés
Préparer le contenu pour Google Business Profile
Optimiser pour les recherches "[service] + [ville]"


---

## 3. CHECKLIST RGAA À RESPECTER

### Images (Critères 1.1 à 1.9)
- [ ] Toute image porteuse d'information a un alt pertinent
- [ ] Les images décoratives ont alt=""
- [ ] Les images complexes ont une description détaillée

### Cadres (Critères 2.1 à 2.2)
- [ ] Chaque iframe a un titre pertinent

### Couleurs (Critères 3.1 à 3.3)
- [ ] L'information n'est jamais donnée uniquement par la couleur
- [ ] Contraste texte/fond ≥ 4.5:1 (corps) et ≥ 3:1 (grands textes)

### Multimédia (Critères 4.1 à 4.13)
- [ ] Vidéos sous-titrées si présentes
- [ ] Alternatives textuelles pour médias

### Tableaux (Critères 5.1 à 5.8)
- [ ] Tableaux de données avec en-têtes th
- [ ] Attribut scope sur les en-têtes

### Liens (Critères 6.1 à 6.2)
- [ ] Chaque lien a un intitulé explicite
- [ ] Liens identiques = même destination

### Scripts (Critères 7.1 à 7.5)
- [ ] Composants interactifs utilisables au clavier
- [ ] Changements de contexte contrôlés par l'utilisateur

### Éléments obligatoires (Critères 8.1 à 8.10)
- [ ] Doctype HTML5 valide
- [ ] Langue de la page déclarée (lang="fr")
- [ ] Titre de page unique et pertinent
- [ ] Changements de langue signalés

### Structuration (Critères 9.1 à 9.4)
- [ ] Structure de headings logique
- [ ] Listes correctement balisées
- [ ] Landmarks ARIA (main, nav, header, footer)

### Présentation (Critères 10.1 à 10.14)
- [ ] CSS pour la mise en forme uniquement
- [ ] Contenu visible sans CSS
- [ ] Zoom 200% sans perte d'information
- [ ] Focus visible sur tous les éléments interactifs

### Formulaires (Critères 11.1 à 11.13)
- [ ] Chaque champ a un label associé
- [ ] Erreurs identifiées et suggestions de correction
- [ ] Groupes de champs avec fieldset/legend

### Navigation (Critères 12.1 à 12.11)
- [ ] Liens d'évitement présents
- [ ] Au moins deux systèmes de navigation
- [ ] Ordre de tabulation logique
- [ ] Piège au clavier impossible

---

## 4. LIVRABLES ATTENDUS

1. **Rapport d'audit** : Liste des problèmes trouvés avec priorité
2. **Fichiers créés/modifiés** : Avec commentaires explicatifs
3. **Checklist de conformité** : RGAA validé point par point
4. **Recommandations de contenu** : Suggestions de mots-clés et structure
5. **Tests de validation** : Lighthouse, axe-core, Wave

---

## 5. ORDRE DE PRIORITÉ D'EXÉCUTION

1. Corrections critiques d'accessibilité (bloquantes)
2. Structure HTML sémantique et headings
3. Métadonnées et schema.org
4. Sitemap et robots.txt
5. Optimisation des images et performance
6. SEO local et données structurées
7. Améliorations de contenu
8. Tests finaux et rapport

---

## 6. CONTRAINTES

- Conserver le design existant
- Ne pas casser les fonctionnalités actuelles
- Commenter chaque modification importante
- Tester chaque changement avant de passer au suivant
- Utiliser les conventions Next.js App Router

---

Commence par scanner l'intégralité du projet, puis produis un rapport d'audit détaillé avant d'effectuer toute modification. Attends ma validation avant d'implémenter les changements.