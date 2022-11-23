const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane'
  }
};

function printPerson({ first, last, city }) {
  console.log(first, last, city);
}

printPerson(bob);
