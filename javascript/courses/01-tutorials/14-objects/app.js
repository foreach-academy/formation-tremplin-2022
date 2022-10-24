//* Les objets
//? reproduisent un objet de la vraie vie
//* Objets - paire clef/valeur, méthodes

const person = {
  name: 'john',
  lastName: 'doe',
  age: 42,
  education: false,
  married: false,
  siblings: ['anna', 'susy', 'peter'],
  // une fonction anonyme
  // greeting: function () {
  //   console.log("Salut ! Je m'apelle John");
  // }
  //? Notation avec ES6
  greeting() {
    console.log("Salut ! Je m'apelle John");
  }
};
//! si on oublie la virgule entre chaque prop on aura une erreur

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();
//! Ne pas oublier les () pour invoquer la fonction

const age = person.age;
console.log(age);

person.name = 'Bob';
console.log(person.name);

//ajouter une prop
person.job = 'développeur';
console.log(person);

//TODO: Challenge #6
