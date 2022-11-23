//* Rest Operator ...
//* rassemble/collecte les items

//* tableaux
const fruits = ['pomme', 'orange', 'citron'];
// const [first, ...rest] = fruits;
const [first, second, ...slip] = fruits;
// console.log(first, slip);

//* objets
const person = {
  name: 'john',
  lastName: 'doe',
  job: 'développeur'
};

// const { job, ...rest } = person;
// console.log(job, rest);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);

  let total = 0;

  for (const score of scores) {
    total += score;
  }

  console.log(`Le score moyen de ${name} est ${total / scores.length}`);
};

// getAverage(person.name, 78, 90, 56, 43);

// spread operator
const testScores = [78, 90, 56, 43, 99, 65];
getAverage(person.name, ...testScores);
