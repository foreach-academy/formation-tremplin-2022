//* Les conditionelles
//* <, >, <=, >=, ==, ===, !=, !==

if (2 > 1) {
  console.log('hello world');
}

// const value = true;
const value = 2 > 1;
//? la valeur est évaluée a true en l'occurence

if (value) {
  console.log('hello world');
}

// const value2 = false;
// if (value2) {
//   console.log('hello people');
// }

//* else
const value2 = 2 > 1;
if (value2) {
  console.log('hello world');
} else {
  console.log('hello people');
}

// const num1 = 4;
// const num1 = 6;
// const num2 = 6;
// const result = num1 == num2;

// if (num1 > num2) {
//   console.log('le premier nombre est plus grand que le second');
// } else if (result) {
//   console.log('les nombres sont égaux');
// } else {
//   console.log('le second nombre est plus grand que le premier');
// }

//* ! operator (opérateur not)
const value3 = true;

if (!value3) {
  console.log('value est false');
}

//* == vérifie seulement la valeur
//* === vérifie la valeur et le type
// const num1 = 6;
// const num2 = '6';

// const value4 = num1 == num2;
// const value5 = num1 === num2;

// console.log(value4);
// console.log(value5);

const num1 = 6;
// const num2 = 10;
const num2 = '6';

const value4 = num1 != num2;
const value5 = num1 !== num2;

console.log(value4);
console.log(value5);
