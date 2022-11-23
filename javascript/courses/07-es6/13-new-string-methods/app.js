//* nouvelles méthodes pour les strings depuis ES6
//* startsWith(), endsWith(), includes, repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// startsWith
// console.log(person.startsWith('Pet'));
//! sensible à la casse
// console.log(person.startsWith('pet'));

//? le 2ème argument est la position de départ
// console.log(employee.startsWith('EMP', 6));

// endsWith
// console.log(manager.endsWith('DOE'));
// console.log(manager.endsWith('MAN', 9));

// includes
// console.log(employee.includes('PETER'));
// console.log(employee.includes('pETER'));

// repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount);

const people = multiplyPeople(person);
console.log(people);
