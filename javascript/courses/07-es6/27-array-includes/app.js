//* Array includes() - vérifie si un item est dans le tableau
//* pratique dans les conditionnelles

const groceries = ['lait', 'pain', 'bières'];

let randomItem = 'bières';
// randomItem = 'eau';

const isIncluded = groceries.includes(randomItem);
console.log(isIncluded);

//? 2nd arguement - index de départ pour la recherche
// const isIncluded = groceries.includes(randomItem, 1);
// console.log(isIncluded);

if (groceries.includes(randomItem)) {
  console.log("Yeah ! C'est dans la liste");
}
