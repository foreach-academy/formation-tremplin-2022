//* Fonctions fléchées
//* pas de nom, toujours une expression qu'on assigne à une variable
//* pas de mot-clef "function"
//* retour implicite
//* "this"

// déclartion basique
// function sayHi() {
//   console.log('Salut');
// }

// sayHi();

// expression de fonction
// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };
// console.log(hello.name);

// hello('john');

// une fonction qui retourne une valeur
// function double(value) {
//   return value * 2;
// }

// console.log(double(2));

const sayHi = () => console.log('Salut');
// sayHi();

const hello = (name) => console.log(`Hello ${name}`);
// hello('bob');

const double = (value) => value * 2;
const num = double(4);
// console.log(num);
// console.log(double(2));

// 2 paramètres et plus qu'une ligne dans le corps de la fonction
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

const total = multiply(4, 6);
// console.log(total);

// retourne objet
const object = () => ({ name: 'john', age: 25 });
// console.log(object());

// fonction fléchée en tant que callback
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((num) => num > 2);
// console.log(big);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => console.log('tu as cliqué sur moi'));
