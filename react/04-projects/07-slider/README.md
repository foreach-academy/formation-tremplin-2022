# Projet Slider

## Structure du Projet

- App.jsx
- data.js
- main.jsx

## Strcuture JSX

- **App.jsx**

  - section.section
    - div.title
      - h2
        - span
    - div.section-center
      - people.map() et retourner :
        - article
          - img.person-img
          - h4
          - p.title
          - p.text
      - button.prev
      - button.next

## Logique

- Créer un state `people` qui contient les data
- Créer un state `index`
- Créer les fonctions pour avancer ou reculer d'une slide (voir les classes .prevSlide, .activeSlide et .nextSlide dans le CSS)
- Créer un useEffect qui contient un setInterval faisant avancer une slide toute les 5 secondes
