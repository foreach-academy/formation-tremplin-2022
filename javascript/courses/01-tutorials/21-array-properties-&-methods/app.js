//* Propriétés et Méthodes pour les Arrays
let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

//* length
console.log(names.length);
//? affiche le dernier élément de l'array
console.log(names[names.length - 1]);
//? affiche l'index d'un tableau
console.log(names.at(-1));

//* concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

//* inverse
// console.log(allNames.reverse());

//* unshift - ajoute un élément au début
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

//* shift - supprime le premier élément
allNames.shift();
allNames.shift();
console.log(allNames);

//* push - ajoute un élément à la fin
allNames.push('susy');
console.log(allNames);

//* pop - supprime un élément à la fin
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);

//* splice - mute l'array d'origine - splice(début, nb d'élements)
// const specificNames = allNames.splice(2, 1);
const specificNames = allNames.splice(0, 5);
console.log(specificNames);
console.log(allNames);
