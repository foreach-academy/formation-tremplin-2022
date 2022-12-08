# Projet Revues

## Architecture du projet

- App.jsx
- Review.jsx
- data.js

## Structure JSX

- **App.jsx**

  - main
  - section.container
    - div.title
      - h2
      - div.underline
    - `<Review />`

- **Review.jsx**

  - article.review
    - div.img-container
      - img.person-img
      - span.quote-icon
    - h4.author
    - p.job
    - p.info
    - div.button-container
      - button.prev-btn
      - button.next-btn
    - button.random-btn

## Logique

- Dans `<Review/>` créer un state pour l'index et afficher le premier élément
- Ajouter les événements "click" sur les boutons et déclarer les fonctions pour les gérer
