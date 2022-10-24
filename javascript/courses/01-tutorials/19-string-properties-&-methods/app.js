//* Propriétés  et méthodes des chaînes de caractères
//? 'javascript string methods' sur Google pour chercher/retrouver une méthode

let text = 'John Doeeezdzde';

//? Rappel d'un objet
// const person = {
//   name: 'john',
//   greeting() {
//     console.log("Hey, je m'apelle John");
//   }
// };

// console.log(person);
// console.log(person.name);
// person.greeting();

//? la propriété length prend en compte les espaces
result = text.length;
console.log(result);

//? on peut le faire directement dans le console.log
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
//? caractère à l'index x
console.log(text.charAt(1));
//? on peut combiner les méthodes pour avoir le dernier caractère de la chaîne
console.log(text.charAt(text.length - 1));
console.log(text.at(-1));
//? donne l'index d'un caractère dans un string sinon -1
//! JS est sensible à la casse
console.log(text.indexOf('p'));
console.log(text.indexOf('D'));
//? Si il y des occurences d'une lettre, on récupérera l'index du premier qu'on rencontre
console.log(text.indexOf('e'));
//? enlève les espace au début et à la fin
console.log(text.trim());
console.log(text.startsWith(' John'));
//? on peut enchaîner plusieurs méthodes (chaining)
console.log(text.trim().toLowerCase().startsWith('john'));
console.log(text.includes('hn'));
//? slice(start, end - 1)
console.log(text.slice(0, 2));
//? le dernier caractère
console.log(text.slice(-1));

//? le but n'est pas de connaître toutes les méthodes mais d'être à l'aise avec leur utilisation
