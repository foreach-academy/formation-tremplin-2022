//* Closure (fermeture)
//* donne accès au scope d'une fonction extérieure depuis l'intérieur d'une fonction
//* permet de faire des variables privées

function outer() {
  const privateVar = 'secret';

  function inner() {
    console.log(`Salut ! Le secret est : ${privateVar}`);
  }

  // inner();
  return inner;
}

// outer();

const value = outer();
// console.log(value);
// value();

//! on ne peut pas accéder à privateVardepuis le scope global
// console.log(privateVar);

outer()();
