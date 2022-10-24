//* Arrays, Fonction & Objet
//* Arrays - [], commence à l'index 0
//? on verra plus tard les autres type d'array

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';

//? si j'ai 100 amis, je ne vais pas retaper firends4, 5,6...
//? on peut stocker n'importe quel type de données
const friends = ['john', 'peter', 'bob', 'susy', 42, undefined, null];

console.log(friends);
//? si on étend l'array dans la console, on peut voir les indexes des éléments

console.log(friends[1]);
//? affiche le 2ème élément

let bestFriend = friends[2];
console.log(bestFriend);

//? on peut réassigner la valeur d'un élément
friends[4] = 'anna';
console.log(friends);
console.log(friends[4]);

// TODO: challenge #4
