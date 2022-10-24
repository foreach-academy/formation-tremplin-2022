//* Les fonctions - déclare, invoque

// console.log('hello Bob');
// console.log('hello John');
// console.log('hello Susy');

//? Les fonctions évitent la redondance de code
function hello() {
  // la logique ici
  console.log('hello Bob');
  console.log('hello John');
  console.log('hello Susy');
}

//? Le nom d'une fonction est sensible à la casse en JS
// hello();

//? On peut appeler plusieurs fois la fonction sans avoir à copier/coller le code
// hello();
// hello();
//? On a juste à modifier la fonction pour changer le résultat

//* paramètres/arguments
//* ce sont des espaces réservés (placeholders), des variables locales

function greet(name) {
  console.log('hello ' + name);
}

greet();
//? fonctionne mais le name sera undefined. On verra plus tard les paramètres par défaut
// saluer Bob
greet('Bob');
// saluer Anna
greet('Anna');
// saluer Susy
greet('Susy');
greet(4);
//! Attention à la logique car on peut passser n'importe quel type de données

//? On peut aussi passer des variables en argument
const bob = 'Bob';
const anna = 'Anna';
const susy = 'Susy';

greet(anna);

//? On peut créer plusieurs paramètres
function greet(name, second) {
  console.log(second);
  console.log('hello ' + name);
}
greet(anna, bob);
