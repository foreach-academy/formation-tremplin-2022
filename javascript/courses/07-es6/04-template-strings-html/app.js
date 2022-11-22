//* template strings/literrals
//* `` - backticks

const name = 'bob';
const lastName = 'sanders';
const age = 25;

const phrase =
  'Mon nom complet est ' + name + ' ' + lastName + " et j'ai " + age + ' ans.';

// console.log(phrase);

const phrase2 = `Mon nom complet est ${name} ${lastName.toUpperCase()} et j'ai ${
  age + 10
} ans.`;

console.log(phrase2);
