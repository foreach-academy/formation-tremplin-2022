//* Global Scope vs Local Scope
//* toute variable en-dehors du bloc de code {} est dite dans le Scope Globale
//* elle peut être accessible n'importe où dans le programme
//! pièges : collisions de noms, peut être modifiée par erreur

let name = 'bobo';
name = 'peter';

//? on peut modifier la variable name depuis la fonction
function calculate() {
  // du code..
  console.log(name);
  name = 'orange';

  //? même ici on peut modifier la variable
  function inner() {
    name = 'inner name value';
    console.log(`c'est depuis la fonction inner ${name}`);
  }
  inner();
}

calculate();

//? on peut aussi modifier la variable name depuis un if
if (true) {
  console.log(name);
  name = 'slip';
}

console.log(`mon nom est ${name} et je suis génial`);
