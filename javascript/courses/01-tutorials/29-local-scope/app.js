//* Scope Local
//* ne peut pas être accessible en-dehors du bloc de code
//* if - NOT VAR

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;

  // du code...
  //? ici, je n'accède qu'à ma constante name

  becomesGlobal = 'global variable';
  //? si on n'utilise pas de mot-clef, il va le créer
}

calculate();

//? si on n'invoque pas la fonction, on ne pourra pas accéder à la variable
console.log(becomesGlobal);

//! on a une erreur car on ne pas pas accéder à la variable age en-dehors de son scope local
// console.log(age);

if (true) {
  const name = 'john';
}
//? on peut déclarer plusieurs constantes avec le même nom sans erreur car elles ne sont pas dans le même scope

console.log(`mon nom est ${name} et je suis génial`);

{
  const name = 'john';
  const special = 'special';
}

//! on ne peut pas accéder aux variables en-dehors du bloc de code
// console.log(special);
