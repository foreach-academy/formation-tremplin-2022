//* Conversion implicite du type
const name = 'john';
const lastName = 'doe';
const fullName = name + ' ' + lastName;
console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

//? Que se passe-t-il si on fait une opération avec des strings
const value = name - lastName;
console.log(value);
//! on obtient NaN - Not a Number

let number3 = '10';
//? on a un string avec un nombre
let number4 = '23';
const result2 = number3 - number4;
console.log(result2);
//? le résultat est correct et est un nombre (blue dans la console)
//? JS comprend qu'on a des chiffres dans nos strings et fait donc l'opération

//! ça marche avec les autres opérations sauf "+" car il va concaténer nos strings
// const result3 = number3 + number4;
// console.log(result3);

//! on a toujours cette erreur même si l'un des nombres est de type number
const result3 = number3 + number4;
number3 = 10;
console.log(result3);

//! ça peut provoquer des bugs inatendus
const randomNumber = 13;
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  //? il faut convertir la valeur récupérée en nombre
  // value = parseInt(value);
  console.log("Valeur de l'input");
  console.log(value);
  console.log('Somme des 2 valeurs');
  console.log(randomNumber + value);
});
