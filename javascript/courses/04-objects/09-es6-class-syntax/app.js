//* classes ES6 - du sucre synthaxique
//* héritage du prototype

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  bank = "Caisse d'Épargne";

  deposit(amount) {
    this.balance += amount;
    console.log(`Bonjour ${this.name}, votre balance est de ${this.balance}`);
  }
}

//? pointe vers la classe Account. On a donc accès au prototype
const john = new Account('john', 0);
console.log(john);
console.log(john.name);
john.deposit(500);
// console.log(john.bank);

const bob = new Account('bob', 700);
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
// console.log(bob.bank);
