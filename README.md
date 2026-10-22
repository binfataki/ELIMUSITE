# ELIMU MANAGEMENT — Portail vitrine

Site statique (HTML/CSS/JS, sans framework ni base de données) présentant le logiciel ELIMU.
Indépendant du logiciel, des portails parent/propriétaire et de tout système interne.

## Contenu
- `index.html` — page unique (Accueil, Problèmes, Solution, Fonctionnalités, Galerie, Devis personnalisé, Pourquoi ELIMU, Documents, Contact)
- `css/style.css`, `js/main.js`
- `assets/img/` — captures optimisées (WebP + miniatures `-t`), logo, favicon
- `assets/documents/` — exemple de reçu (coordonnées masquées) et de rapport financier (PDF)

## Lancer en local
```
cd elimu-portail
python3 -m http.server 8080
```
Puis ouvrir http://localhost:8080 (ouvrir `index.html` directement fonctionne aussi).

## Publier
**GitHub Pages** : créer un dépôt, envoyer le contenu du dossier à la racine (`git add . && git commit -m "site" && git push`), puis *Settings → Pages → Deploy from a branch → main / (root)*. Le fichier `.nojekyll` est déjà inclus.
**Autre hébergement statique** (Netlify, Cloudflare Pages, hébergeur classique) : déposer le dossier tel quel, sans commande de build.

## Modifier
- Coordonnées : modifier uniquement `js/config.js`, puis republier le site.
- Tarifs : aucun tarif n'est affiché sur le portail. Le site invite à demander un devis personnalisé.
- Images de la galerie : tableau `G` dans `js/main.js`.

## Formulaire de démonstration
Aucun serveur : le formulaire prépare un message prérempli envoyé via WhatsApp ou le client email du visiteur.

## Confidentialité
Aucun secret, licence, base de données ni lien vers un portail interne. Les numéros de téléphone des parents visibles sur les captures et le reçu ont été floutés.
