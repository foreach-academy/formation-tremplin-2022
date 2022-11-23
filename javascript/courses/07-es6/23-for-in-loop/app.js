//* boucle "for in" - itère à travers les propriétés d'un objet
//* pas conseillé de l'utliser sur un arrays, surtout si l'ordre est important
//* sur les tableaux, utiliser la boucle "for of" à la place

// objet
const person = {
  name: 'john',
  age: 25,
  status: 'student'
};

for (const propertyName in person) {
  console.log(`${propertyName}: ${person[propertyName]}`);
}

// tableau
const example = ['one', 'two', 'three'];

for (const num in example) {
  console.log(example[num]);
}
