//* for of - boucle à travers les valeurs d'un objet itérable
//* String, Array, NodeList, Map, Set, etc... - PAS DES OBJETS (mais ce sont des itérables)
//* contrairement à forEach - on peut utliser break, continue

const fruits = ['pomme', 'orange', 'banane', 'pêche'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  // console.log(letter);

  // if (letter === ' ') {
  //   continue;
  // } else {
  //   shortName += letter;
  // }

  if (letter === ' ') continue;
  shortName += letter;
}

// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === 'banane') break;
  console.log(fruit);
}
