//* arrays & for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
let newArray = [];

//TODO: Ajouter tous les prénoms dans newArray en les concaténant avec lastName en utilisant une boucle for
for (let i = 0; i < names.length; i++) {
  // console.log(i);
  // console.log(names[i]);
  // newArray.push(names[i]);

  //? On peut utiliser une variable pour faire la concaténation
  // const fullName = names[i] + ' ' + lastName;
  // newArray.push(fullName);

  //? Ou le faire directement dans le push() avec les ``
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);
