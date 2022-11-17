//* call - s'éxécute instantanément, 1er argument - this, 2ème argument - liste d'items

const john = {
  name: 'john',
  age: 24,
  greet() {
    console.log(this);
    console.log(`Bonjour, je suis ${this.name} et j'ai ${this.age} ans`);
  }
};

const susan = {
  name: 'susan',
  age: 21
};

// john.greet();

//! va échouer
// susan.greet();

function greet() {
  console.log(this);
  console.log(`Bonjour, je suis ${this.name} et j'ai ${this.age} ans`);
}
// greet();

// affecte la référence de la méthode à une constante
const secondGreet = john.greet;
// console.log(secondGreet);
//! this fait référence à l'objet window donc ça ne marche pas
// secondGreet();

//* call
greet.call(john);
// greet.call(susan);
secondGreet.call(susan);
greet.call({ name: 'peter', age: 30 });

john.greet.call(susan);
