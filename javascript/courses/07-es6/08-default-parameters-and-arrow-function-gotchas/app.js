//* paramètres par défaut, pièges de la fonction fléchée

// sayHi();

const john = 'john';
const peter = 'peter';

function sayHi(name = 'Susan') {
  console.log(`Salut ${name}`);
}

// sayHi('bob');
// sayHi(john);

//! on a une erreur
// sayHello();

const sayHello = (name = 'peter') => console.log(`Salut ${name}`);

sayHello();
sayHello(peter);
