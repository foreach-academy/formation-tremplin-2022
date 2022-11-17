//* Blue print (plan)
//* Fabriques (factory functions) et constructeurs (constructor functions)

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

//* Constructeur
//* new - créé un nouvel objet, pointe vers lui, pas besoin du return
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `Mon nom complet est ${
        this.firstName
      } ${this.lastName.toUpperCase()} et j'aime le JS`
    );
  };

  console.log(this);
}

const john = new Person('john', 'doe');
john.fullName();

//! si on ne met pas le "new", l'objet pointera vers l'objet window
const bob = Person('bob', 'anderson');
console.log(bob); // bob est undefined
// bob.fullName(); //! erreur
