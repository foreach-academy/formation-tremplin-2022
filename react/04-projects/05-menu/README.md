# Projet Menu

## Structure du projet

- App.jsx
- Categories.jsx
- data.js
- main.jsx
- Menu.jsx

## Structure JSX

- **App.jsx**

  - main
    - section.menu.section
    - div.title
      - h2
      - div.underline
    - `<Categories />`
    - `<Menu />`

- **Categories.jsx**

  - div.btn-container
    - categories.map() et retourner button.filter-btn

- **Menu.jsx**

  - div.section-center
    - items.map() et retourner :
      - article.menu-item
        - img.photo
        - div.item-info
          - header
            - h4
            - h4.price
          - p.item-text

## Logique

- Dans `<App />` définir un tableau `allCategories` de catégories uniques
- Créer un state `menuItems` qui contient le tableau de menu de `data.js`
- Créer un state `categories` qui contient le tableau de catégories
- Créer une fonction `filterItems` pour filter le menu
