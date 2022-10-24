//* Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
//? On doit apprendre ce concept avant de passer aux méthodes sur les tableaux

//* Les fonctions sont des objets de première classe - on peut donc les stocker dans une variable (expression), les passer en tant qu'argument dans une autre fonction, ou les retourner d'une autre fonction (closure)
//? la closure (fermeture) est concept avancé qu'on verra plus tard

//* Higher Order function - accèpte une autre fonction en tant qu'argument ou retourne une fonction en tant que résultat (closure)

//* Callback Function - passé à une autre fonction en tant qu'argument à l'intérieur de cette fonction

//* base
// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }

//? Si on veut le même setup pour le matin et l'aprem
// function greetAfternoon(name) {
// // const myName = 'john';
//   const myName = 'susan';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// greetMorning('bobo');
// greetAfternoon('peter');

// callback function
function morning(name) {
  // console.log(`Good morning Bob`);
  // return `Good morning Bob`;
  return `Good morning ${name.toUpperCase()}`;
}

// callback function
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

// higher order function
function greet(name, cb) {
  // cb();
  const myName = 'john';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon);
