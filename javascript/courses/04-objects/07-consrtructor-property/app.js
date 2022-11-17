// * Tous les objets en JS ont accès à la propiété "constructor" qui retourne la fonction constructeur qui les a créé;
//* intégré dans les fonctions constructeurs
//* les arrays et fonctions sont des objets en JS

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `Mon nom complet est ${
        this.firstName
      } ${this.lastName.toUpperCase()} et j'aime le JS`
    );
  };
}

const john = new Person('john', 'doe');
console.log(john.constructor);

const bob = {};
// console.log(bob.constructor);

const list = [];
// console.log(list.constructor);

const sayHi = function () {};
// console.log(sayHi.constructor);

const susy = new john.constructor('susy', 'sanders');
susy.fullName();
