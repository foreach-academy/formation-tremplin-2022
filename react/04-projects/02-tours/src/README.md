# Projet Voyages

## Architecture du projet

- App.jsx
- Main.jsx
- Loading.jsx
- Tour.jsx
- Tours.jsx

## Structure JSX

- App.jsx

  - main
  - `<Tours />`

- Tours.jsx

  - section
    - div.title
      - h2
      - div.underline
    - div
      { pour chaque voyages retourner `<Tour />`}

- Tour.jsx

  - article.single-tour
    - img
    - footer
    - div.tour-info
      - h4
      - h4
    - p
    - button.delete-btn

- Loading.jsx

  - div.loading
    - h1

## Logique

- dans `Tour`, créer un state (booléen) pour savoir si on veut voir plus d'info ou non

- dans `App`, récupérer les données, créer la fonction pour supprimer un voyage et la passer dans `Tours` puis dans `Tour`. Pour le chargement créer un state (booléen). Changer le state à false une fois les données récupérées. Si le state est true, retourner

```JS
<main>
  <Loading />
</main>
```

sinon retourner la liste des voyages

- Si le tableau de voyages est vide retourner

```JS
<main>
  <div className='title'>
    <h2>no tours left</h2>
    <button className='btn' onClick={fetchTours}>
    refresh
    </button>
  </div>
</main>
```

- Sur le clique du bouton refresh, appeler la fonction pour récupèrer les données
