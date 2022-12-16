# Pagination

```js
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
```

## Structure du dossier

- App.jsx
- Follower.jsx
- main.jsx
- utils.js

# Structure

- **Dans App.jsx**

  - main.section-title
    - div.section-title
      - h1 (loading... || pagination)
      - div.underline
    - section.followers
      - div.container
        - followers.map() retourne
          - `<Follower />`
      - SI `loading` est `false` RETOURNER
        - div.btn-container
          - btn.prev-btn
          - data.map() retourne
            - btn.page-btn.active-btn
          - btn.next-btn

- **Dans Follower.jsx**

- article.card

  - img
  - h4
  - a.btn

- **Dans utils.js**

```js
const paginate = (followers) => {};
```
