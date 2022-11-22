//* Closure

function newAccount(name, initialBalance) {
  function showBalance() {
    console.log(`Hey ${name}, ton solde est de ${initialBalance}`);
  }

  return showBalance;
}

newAccount('john', 300)();

const susan = newAccount('susan', 500);
const bob = newAccount('bob', 100);

// les valeurs des paramètres sont retenues pour chaque instanciation
susan();
bob();
