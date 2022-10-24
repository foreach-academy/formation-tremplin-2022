//* Les nombres
//* Non-typé = On ne déclare pas le type en JS

// const number = 34;
// let slip = 2.456;
// slip = "c'es cool";
// const number2 = 2.456;
// const number3 = '2.456';

// console.log(number);
// console.log(slip);
// console.log(number2);
//? dans la console, les nombres sont bleus et le texte en noir
//? ça peut aider à débugguer
// console.log(number3);

//* un peu de math
// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);

//* +=, -=, /=, *=, ++, --, %
let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
// number += 1;
//? shortcut
number++;
number++;
number++;
number++;
number++;
number++;
//? pareil pour -= avec --
number--;

console.log(number);

//* l'opérateur modulo (%) retourne le reste d'une division
// pizza
const slices = 10;
const children = 3;

//? combien de parts auront chaque enfant ?
const amount = slices / children;

console.log(amount);
//? dans la vraie, on ne donnera pas 0.3333
//? on utilse le modulo

const remainder = slices % children;
console.log(remainder);
//? il reste une part et les enfants ont le même nombre de parts

//* priorité des opérations
const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;

console.log(random);
console.log(random2);

// TODO: challenge #3
