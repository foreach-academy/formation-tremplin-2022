//* Déstructuration
//* plus rapide/facile pour accéder/extraire les valeurs d'un tableau

const fruits = ['orange', 'banane', 'citron'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// ancienne façon
const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];

// console.log(orange, banana, lemon);

// avec la déstructuration
//? si j'essaie d'accéder à un index qui n'est pas présent, sa valeur sera undefined
//? on peut utiliser le nom qu'on veut pour associer la valeur
// const [ennemy, peter, bob, anna, kelly, susan] = friends;
// console.log(ennemy, peter, bob, susan);

//? pour passer des éléments, on ajoute juste une virgule
const [john, , bob, , kelly] = friends;
console.log(john, bob, kelly);
