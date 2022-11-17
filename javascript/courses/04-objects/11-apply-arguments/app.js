//* apply - s'éxécute instantanément, 1er argument - this, 2ème argument - array d'items

const john = {
  name: 'john',
  age: 24
};

const susan = {
  name: 'susan',
  age: 21
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Bonjour, je suis ${this.name} et j'ai ${this.age} ans,et j'habite à ${city}, ${country}`
  );
}

// greet.call(john, 'valenciennes', 'fr');
// greet.call(susan, 'lille', 'fr');
// greet.call({ name: 'peter', age: 30 }, 'lens', 'fr');

greet.apply(john, ['valenciennes', 'fr']);
greet.apply(susan, ['lille', 'fr']);
greet.apply({ name: 'peter', age: 30 }, ['lens', 'fr']);
