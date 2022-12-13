# Projet Lorem Ipsum

## Structure du Projet

- App.jsx
- data.js
- main.jsx

## Structure du JSX

- **App.jsx**
  - section.section-center
    - h3
    - form.lorem-form
      - label
      - input
      - button.btn
    - article.lorem-text
      - text.map() et retourner p

## Logique

- Créer un state `count` qui contient le nombre de paragraphes à afficher
- Créer un state `text` et l'initialiser avec un tableau vide
- Créer une fonction `handleSubmit` qui change le nombre de paragraphe dans le state `text` en fonction du state `count` lors de la soumission du formulaire

Le but est d'afficher les x premiers paragraphes.<br />
Si count est inférieur à un, on affichera qu'un paragraphe.<br />
Si count est supérieur à huit, on affichera huit paragraphes.
