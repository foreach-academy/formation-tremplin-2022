# Projet Onglets

[API](https://course-api.com/react-tabs-project)

## Structure du Projet

- App.jsx
- main.jsx

## Structure JSX

- **App.jsx**
  - section.section
    - div.title
      - h2
      - div.underline
    - div.jobs-center
      - div.btn-container
        - jobs.map() et retourner button.job-btn
      - article.job-info
        - h3
        - h4
        - p.job-date
        - duties.map() et retourner :
          - div.job-desc
            - p

## Logique

- Créer un state `loading` pour le chargement

Au chargement, `<App />` retourne :

```js
<section className='section loading'>
  <h1>loading...</h1>
</section>
```

- Créer un state `jobs` pour le tableau de métiers
- Créer un state `value` pour l'index
- Créer une fonction `fetchJobs` qui récupère les données
- Afficher le premier élément du tableau
- Sur le clic du bouton de la compagnie afficher l'index du tableau correspondant
