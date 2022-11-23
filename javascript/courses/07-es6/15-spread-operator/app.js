//* spread operator (opérateur de dispersion)
//* Permet à un itérable de s'expandre individuellement à l'intérieur du récepteur
//* Split en plusieurs items et les copie

const formation = 'forEach Academy';
const letters = [...formation];
// console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
// console.log(friends);

//? pourquoi c'est important qu'on copie
//! le problème c'est que friends et newFriends font références au même tableau
//! si on modifie friends, cela mutera newFriends et vice-versa
// référence
// const newFriends = friends;
// newFriends[0] = 'tacos';

// console.log(friends, newFriends);

// copie
const newFriends = [...friends];
newFriends[0] = 'kelly';

// seul newFriends est modifié
console.log(friends, newFriends);
