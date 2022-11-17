//* objets imbriqués
//* définie une variable en tant que propriété

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['nanna', 'peter'],
  greet(name) {
    console.log(`Salut, mon nom est ${name}`);
  },
  job: {
    title: 'formateur',
    company: {
      name: 'ForEach Academy',
      address: 'quelque part'
    }
  },
  'random-value': 'au pif'
};

// console.log(person);
// console.log(person.job.title);
// console.log(person.job.company.address);

//? undefined si la propriété n'existe pas dans un objet
// console.log(person.work);

//! si on essaie d'accéder à une propriété d'un objet qui n'existe pas, on aura une erreur
// console.log(person.work.title); //undefined.title

//* dot notartion vs bracket notation
//* notation . vs notation []
//? on peut utiliser les [] pour accéder à une prop en utiliser le nom de la prop dans un string
console.log(person.name);
// console.log(person['name']);

let random = 'age';
console.log(person[random]); // person['age']
random = 'random-value';
console.log(person[random]);
