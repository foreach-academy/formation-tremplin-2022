//* Modules - Code Encapsulé (il faut partager seulement le minimum)
//* CommonJS - utilisé par défaut par Node, tous les fichiers sont des modules par défaut

const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');

// console.log(john, peter);

sayHi(john);
sayHi(peter);
sayHi('susan');
