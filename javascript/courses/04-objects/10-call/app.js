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
// susan.greet();

function greet() {
  console.log(this);
  console.log(`Bonjour, je suis ${this.name} et j'ai ${this.age} ans`);
}

// greet();

const secondGreet = john.greet;
// console.log(secondGreet);

//* call
// greet.call(john);
// secondGreet.call(susan);
// greet.call({ name: 'peter', age: 30 });

john.greet.call(susan);
