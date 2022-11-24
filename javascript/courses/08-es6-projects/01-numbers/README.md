## Projet Nombres

#### Structure (HTML)

- section
  - article
    - span.number data-value="value" (0)
    - p (texte)

#### Logique (JS)

- sélectionner toutes les spans avec .number
- itérer à travers et afficher chaque span (juste pour pour vérifier)
- créer la fonction updateCount
- Accepter un élément en tant qu'argument
- invoquer et passer chaque élément span dans l'itération

```js
const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
};
```
