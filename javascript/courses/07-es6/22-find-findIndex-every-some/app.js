const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'anna' }
];

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

//* find - retourne un item spécifique
// retourne l'élément si la condition est vraie
const anna = people.find((person) => person.name === 'anna');
// console.log(anna.name);

// retourne undefiend si la condition n'est pas remplie
const bob = people.find((person) => person.name === 'bob');
// console.log(bob);

//* findIndex - retourne l'index d'un item, sinon -1
const person = people.findIndex((item) => item.id === 3);
// console.log(person);

//* every - tous les items dans l'array - retourne true/false
// const allGoodGrades = goodGrades.every((grade) => grade != 'C');
// console.log(allGoodGrades);

const allGoodGrades = grades.every((grade) => grade != 'C');
// console.log(allGoodGrades);

//! retourne tout le temps true si tableau vide
console.log([].every((grade) => grade != 'C'));

//* some - au moins un item - retourne true/false
const oneBadGrade = grades.some((grade) => grade === 'C');
// console.log(oneBadGrade);

//! retourne tout le temps false si tableau vide
console.log([].some((grade) => grade != 'C'));
