function findTheOldest(arr) {
  let currentOldestAge = 0;

  const oldestPerson = arr.reduce((acc, person) => {
    const age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;

    if (age > currentOldestAge) {
      currentOldestAge = age;
      acc = { ...person };
    }

    return acc;
  }, {});

  return oldestPerson;
}

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1066
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941
  }
];

console.log(findTheOldest(people).name);
