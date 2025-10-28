# Lens & Lights Visuals — Site React

Site moderne et responsive pour Photographe & Vidéaste d’événements, réalisé avec React + Vite. Données chargées depuis des modèles JSON et images dans `public/images`.

## Démarrer en local

- Installer les dépendances: `npm install`
- Lancer le serveur dev: `npm run dev`
- Ouvrir: `http://localhost:5173/`

## Structure

- `src/components`: Navbar, Hero, Gallery, Pricing, Footer
- `src/pages`: Home, Portfolio, Services, About, Contact
- `src/data`: `portfolio.json`, `services.json`
- `src/styles/theme.css`: Thème light élégant (mariage)
- `public/images`: Photos marketing sélectionnées, `public/logo.jpg`

## Déploiement GitHub Pages

Ce projet est configuré pour un déploiement simplifié:

- Construire: `npm run predeploy`
- Publier: `npm run deploy`

Note: La configuration `base: '/Lens_and_lights_visuals/'` dans `vite.config.js` suppose que le dépôt GitHub s'appelle `Lens_and_lights_visuals`. Si le nom du repo diffère, adapter `base` en conséquence.

Le routing utilise `HashRouter` pour éviter les 404 sur GitHub Pages.

## Mise à jour des contenus

- Portfolio: éditer `src/data/portfolio.json` (chemins d’images et légendes)
- Formules: éditer `src/data/services.json` (packages, prix, features)
- Couleurs/typos: éditer `src/styles/theme.css`

## À faire ensuite

- Intégrer précisément les tarifs depuis `Documents/Formules mariage LLV .pdf`
- Optimiser les images (taille/poids) si besoin
- Ajouter SEO (balises Open Graph, sitemap)
