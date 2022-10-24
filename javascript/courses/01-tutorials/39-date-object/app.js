//* Date Object

const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
];

const days = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
];

// const date = new Date();
//? on peut aussi choisir une date (mois/jour/année)
const date = new Date('1/12/2004');
console.log(date);
//? on utilisera des méthodes pour récupérer les infos qui nous intéressent

const month = date.getMonth();
console.log(month);
//? on récupère le numéro du moins mais il faut penser que l'indexe commence ) 0 (cf. const months)
//? il faut donc créer un tableau pour afficher le nom du mois
console.log(months[month]);

//? on récupère aussi un indexe
//! on commence à dimanche
const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());

console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
