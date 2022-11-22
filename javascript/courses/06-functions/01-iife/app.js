//* IIFE Immediately-Invoked Function Expression
//* c'est une ancienne approche - maintenant on utilise les Modules
//* une approche simple pour éviter la pollution du scope globale
//* une bonne façon de protéger le scope de la fonction and les variables à l'intérieur

const num1 = 30;
const num2 = 50;

function add() {
  console.log(`le résultat est ${num1 + num2}`);
}

// add();

(function () {
  const num3 = 31;
  const num4 = 50;
  console.log(`le résultat est ${num3 + num4}`);
})();

// console.log(num1);
//! on a pas accès à num3
// console.log(num3);

(function (num1, num2) {
  console.log(`le résultat est ${num1 + num2}`);
})(500, 900);

const result = (function (num1, num2) {
  console.log(`le résultat est ${num1 + num2}`);
  return num1 + num2;
})(500, 900);

console.log('result :', result);
