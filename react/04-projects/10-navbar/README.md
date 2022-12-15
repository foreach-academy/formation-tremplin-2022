# Projet Navbar

## Strcutre du projet

- App.jsx
- data.js
- main.jsx
- Navbar.jsx

## Structure

- **Dans App.jsx**

  - <>
    - `<Navbar />`

- **Dans Navbar.jsx**
  Importer links et social depuis **data.js**

  - nav
    - div.nav-center
      - div.nav-header
        - img
        - btn.nav-toggle
          - `<FaBars />`
      - div.links-container
        - ul.links
          - links.map() retourne
            - li
              - a
      - ul.social-icons
        - social.map() retourne
          - li
            - a
