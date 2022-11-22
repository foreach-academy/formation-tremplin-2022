//* var, let, const
//* définir, mettre à jour, redéfinir
//* const ne peut pas muter un type primitif

// défini
var number = 100;
// console.log(number);

// met à jour
number = 200;
// console.log(number);

// rédéfini
var number = 'orange';
// console.log(number);

let amount = 100;
// console.log(amount);
amount = 200;
// console.log(amount);
//! on a une erreur
// let amount = 'orange';

const total = 100;
// console.log(total);
//! on a une erreur
// total = 200;

const person = {
  name: 'bob'
};

person.name = 'john';
console.log(person);
