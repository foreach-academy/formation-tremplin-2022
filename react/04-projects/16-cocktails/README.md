# Projet Cocktails

```js
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
```

Installer `React Router DOM` :

```
npm install react-router-dom
```

- Mettre en place le router dans `App.jsx`
- Créer deux dossiers `pages` et `components`

## Pages

- About.jsx
- Error.jsx
- Home.jsx
- SingleCocktail.jsx

## Components

- Cocktail.jsx
- CocktailList.jsx
- Loading.jsx
- Navbar.jsx
- SearchForm.jsx

### Cocktail.jsx

- article.cocktail
  - div.img-container
    - img
  - div.cocktail-footer
    - h3 (name)
    - h4 (glass)
    - p (info)
    - Link (details)

### CocktailList.jsx

- Si loading retourner `<Loading/>`

- Si !cocktails.length retourner

```js
<h2 className='section-title'>no cocktails matched your search criteria</h2>
```

- Sinon
  - section.section
    - h2.section-title
    - div.cocktails-center
      - cocktails.map()
        - `<Cocktail />`

### Loading.jsx

- div.loader

### Navbar

- nav.navbar
  - div.nav-center
    - Link
      - img.logo
    - ul.nav-links
      - li
        - Link (home)
      - li
        - Link (about)

### SearchForm.jsx

- section.section.search
  - form.search-form
    - div.form-control
      - label
      - input

### About.jsx

```js
<section className='section about-section'>
  <h1 className='section-title'>about us</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
    repellendus impedit distinctio molestiae debitis. In ea, labore quidem odit
    accusamus sit odio sapiente illo saepe ullam beatae, voluptate incidunt.
  </p>
</section>
```

### Error.jsx

```js
<section className='error-page section'>
  <div className='error-container'>
    <h1>oops! it's a dead end</h1>
    <Link to='/' className='btn-primary'>
      back home
    </Link>
  </div>
</section>
```

### Home.jsx

```js
<main>
  <SearchForm />
  <CocktailList />
</main>
```

### SingleCocktail.jsx

```js
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
```

- section.section.cocktail-section
  - Link (back to home)
  - h2.section-title
  - div.drink
    - img
    - div.drink-info
      - p
        - span.drink-data (category)
      - p
        - span.drink-data (info)
      - p
        - span.drink-data (glass)
      - p
        - span.drink-data (instructions)
      - p
        - span.drink-data (instructions)
          - ingredientsmap()
            - span
