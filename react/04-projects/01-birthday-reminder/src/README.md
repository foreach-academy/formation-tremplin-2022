## Idée

[https://uidesigndaily.com/](https://uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042)

## Strucutre JSX des composants

- dans App

  - main
    - section.container
      - h3
      - `<List />`
      - button

- dans List

  - <>
    - map
      - article.person
      - img
      - div
        - h4
        - p

## Logique

### App

- créer un state `people` et lui affecter le tableau data
- afficher la longueur du tableau dans le h3
- passer le state `people` dans `<List/>`
- Lors du clic sur le bouton supprimer, changer le state de `people` pour un tableau vide

### List

- dans `<List/>` mapper à travers `people` et retourner le JSX
