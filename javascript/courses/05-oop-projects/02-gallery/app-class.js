const getElement = (selector, list) => {
  const el = list
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // vérifie si seulement un élément
  if (list && el.length === 1) return el[0];
  //  vérifie si la liste n'est pas vide
  if (list && el.length > 0) return el;
  // si il n'existe pas ni liste ni éléments
  if (!list && el) return el;
  throw new Error(
    `Veuillez vérifier le sélecteur "${selector}", un tel élément n'existe pas`
  );
};

console.log('hello');
