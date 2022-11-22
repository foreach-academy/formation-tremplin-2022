//* Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hey ${name}, ton solde est de ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey ${name}, tu n'as pas assez de fonds`);
      return;
    }

    balance -= amount;
    showBalance();
  }

  return { showBalance, deposit, withdraw };
}

const john = newAccount('john', 300);
const bob = newAccount('bob', 300);

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.withdraw(400);

// le seul moyen d'accéder à notre variable `balance` est via les méthodes dans la fonction newAccount
john.balance = 3001;
john.showBalance();

bob.showBalance();
bob.deposit(400);
