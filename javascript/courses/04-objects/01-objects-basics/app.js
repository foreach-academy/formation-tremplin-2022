//* Les bases de l'Objet

//* Les objets sont une collection de paires de clef(propriété) et valeur
//* Les valeurs peuvent être des strings, numbers, booleans, arrrays et functions, dans ce cas on l'appelera une méthode

//* synthaxe d'un objet, {}

// notation
const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['nanna', 'peter'],
  greet(name) {
    console.log(`Salut, mon nom est ${name}`);
  }
};

console.log(person);
console.log(person.age);
// console.log(person.name);

const name = person.name;
console.log(name);

//* modifie une prop
person.age = 60;
console.log(person.age);

//* créé une prop
person.city = 'Valenciennes';
console.log(person);

person.greet('thomas');

//* supprime une prop
const siblings = delete person.siblings;
console.log(person);
console.log(siblings);
