//* Blue print (plan)
//* Fabriques (factory functions)

// const john = {
//   firstName: 'john',
//   lastName: 'doe',
//   fullName: function () {
//     console.log(
//       `Mon nom complet est ${this.firstName} ${this.lastName} et j'aime le JS`
//     );
//   }
// };

// const bob = {
//   firstName: 'bob',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `Mon nom complet est ${this.firstName} ${this.lastName} et j'aime le JS`
//     );
//   }
// };

//* Fabrique
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(
        `Mon nom complet est ${
          this.firstName
        } ${this.lastName.toUpperCase()} et j'aime le JS`
      );
    }
  };
}

const john = createPerson('john', 'doe');
john.fullName();
const bob = createPerson('bob', 'anderson');
bob.fullName();
const susy = createPerson('susy', 'sanders');
susy.fullName();
