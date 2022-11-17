//* L'héritage de prototype (prototypal inheritance model)

//* Le JS utilise l'héritage de prototype. Cela signifie que toutes les fonctions/classes constructeurs ont une propriété qui est partagée par chaque instance du constructeur/classe. Donc chaque propriétés et méthodes, ou prototype est accessible par chaque instance. La prop "prototype" retourne un objet

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.bank = 'LCL';

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Bonjour ${this.name}, votre solde est de ${this.balance}`);
};

const john = new Account('john', 200);
const bob = new Account('bob', 0);

console.log(Account.prototype);

console.log(john);
console.log(bob);

john.deposit(300);
bob.deposit(300);
