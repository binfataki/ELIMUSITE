# ELIMU MANAGEMENT — Portail de présentation

Portail statique, simple et mobile-first pour présenter ELIMU. Il ne contient aucun tarif, aucun secret et aucun lien vers les portails internes.

## Contenu

- `index.html` : présentation, solution, fonctions essentielles et contact ;
- `css/style.css` : interface responsive mobile-first ;
- `js/config.js` : coordonnées publiques modifiables ;
- `js/main.js` : branchement automatique du bouton WhatsApp et de l'e-mail.

## Modifier les coordonnées

Modifier uniquement `js/config.js`, puis republier le contenu du dossier sur GitHub Pages.

## Lancer en local

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Publier

Déposer le contenu du dossier à la racine du dépôt GitHub, puis activer GitHub Pages sur la branche principale.
