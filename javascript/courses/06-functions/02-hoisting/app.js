//* Hoisting (hissage)
//* les déclarions de fonction et de var sont "hissées"
//* plus sécure d'y accéder après qu'elles soient initialisées

// display();

//! on pas accès aux variables sauf si on l'appelle après
// moreComplex();

function display() {
  console.log('hello world');
}

// console.log(random);
//! on a pas accès aux variables (let et const) avant l'initialisation
// console.log(firstName);
// console.log(lastName);

var random = 'random';
const firstName = 'john';
let lastName = 'doe';

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}

moreComplex();
