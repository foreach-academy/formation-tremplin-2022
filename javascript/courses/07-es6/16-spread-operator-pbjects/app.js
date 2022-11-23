//* spread operator ... - object
//* ES2018 - ES8

const person = {
  name: 'john',
  job: 'developpeur'
};

// on peut aussi ajouter/modifier des props
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(person, newPerson);
