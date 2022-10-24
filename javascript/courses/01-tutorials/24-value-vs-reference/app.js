//* Référence vs Valeur

//* Type de données primitif
//* String, Number, Symbol, Boolean, Undefined, Null

//* Type de données non-primitif
//* Arrays, Functions, Objects = object
//? typeof

//* Quand on assigne un type de donnée primitif à une variable. Tous les changements sont faits directement sur la valeur sans affecter la valeur originale.

//* Quand on assigne un type de donnée non-primitif à une variable, c'est fait par référence donc n'importe quel changement va affecter les références

// La base
const number = 1;
let number2 = number;
number2 = 7;
console.log(`la 1ère valeur est : ${number}`);
console.log(`la 2ème valeur est : ${number2}`);

let person = {
  name: 'bob'
};
let person2 = person;

//? Mais si je change le nom de la person2
person2.name = 'susy';

console.log(`le nom de la 1ère personne est ${person.name}`);
console.log(`le nom de la 2ème personne est ${person2.name}`);
