// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`.toUpperCase();
// }

// console.log(fullName('john', 'doe'));
// console.log(fullName('doe', 'john'));

//? autre façon de faire avec un objet
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`.toUpperCase();
}

console.log(fullName({ lastName: 'doe', firstName: 'john' }));
