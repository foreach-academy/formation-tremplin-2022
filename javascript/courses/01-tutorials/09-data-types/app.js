//* Types de données - 6 au total
//* Primitif - String, Number, Boolean, Null, Undefined, Symbol
//* Objet - Arrays, Functions, Objects

//* typeof - opérateur qui retourne le type d'une valeur ou variable (typeof variable) (typeof valeur)

//* String
const text = 'some text';

//* Number
const number = 45;

//* Boolean - vrai ou faux
let value1 = true;
let value2 = false;

//* Null
const result = null;

//* Undefined
let name;

//* Symbol(ES6)
//? on verra plus tard avec ES6

console.log(typeof text);
console.log(typeof 'hello world');
console.log(typeof true);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
//! il y a un bug en JS  qui fait que null est un objet. Ce bug existe depuis la création du JS c'est pourquoi on l'a gardé car il y a beacoup de codes qui prend en compte le fait que null est un objet
console.log(typeof result);
console.log(typeof name);
