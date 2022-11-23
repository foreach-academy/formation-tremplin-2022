//* objet Set - stocke une collection de valeurs uniques de n'importe quel type

//* new Set()
//* add(value)
//* delete(value)
//* clear()
//* has(value)

//* itérateurs
//* entries(), keys(), forEach()

const unique = new Set();
console.log(unique);

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add(4);

console.log(unique);

// const result = unique.delete('third');
// console.log(result);

const result = unique.delete('five');
// console.log(result);

const isValue = unique.has(4);
console.log(isValue);
