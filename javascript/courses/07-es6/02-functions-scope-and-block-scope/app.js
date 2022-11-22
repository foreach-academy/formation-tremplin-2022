//* var, let, const
//* let, const - scope de bloc {} - tout ce qui est dans les {}
//* var - scope de la fonction

//* scope globale
// console.log(amount);
// var amount = 100;

// console.log(amount);
let amount = 100;

function greet() {
  //* scope local
  var random = 'une valeur au pif';
  console.log(`Salut salut ${amount} ${random}`);
}

// greet();

// console.log(random);

let total = 1000;
let test = true;

if (test) {
  let total = 'oranges';
  //* scope bloc/local
  let value = 'valeur au pif';
  console.log('salut salut');
}

// console.log(total);
//! erreur
// console.log(value);

{
  let total = 200;
  // console.log(total);
}

console.log(total);
