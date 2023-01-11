const os = require('os');

//* info à propos de l'utilisateur courant
const user = os.userInfo();
console.log(user);

console.log(
  `La durée de fonctionnement du système est de ${os.uptime()} en secondes`
);

const currentOS = {
  name: os.type(),
  relase: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
};

console.log(currentOS);
