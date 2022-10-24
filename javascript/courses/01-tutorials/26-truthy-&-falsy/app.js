//* Truthy and Falsy
//* "", '', 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

// if (bool1) {
//   console.log(`Hey, ça marche !`);
// }

// if (bool2) {
//   console.log(`Hey, ça marche aussi !`);
// }

const text = 'john';

if (text) {
  console.log('Hey, la valeur est vraie');
} else {
  console.log('Hey, la valeur est fausse');
}
//? la chaîne de caractère est évaluée comme vraie
//? en js, les valeurs sont évaluées comme étant vraies ou fausses
