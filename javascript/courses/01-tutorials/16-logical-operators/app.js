//* Opérateurs Logiques
//* (|| - OR), (&&, AND)

const name = 'john';
const age = 24;

// if (name === 'bob' ) {
//   console.log('salut cher utilisateur');
// } else {
//   console.log('mauvaises valeurs');
// }

//? On a beosin que l'une ou l'autre valeur soit vraie
// if (name === 'bob' || age === 24) {
//   console.log('salut cher utilisateur');
// } else {
//   console.log('mauvaises valeurs');
// }

//? il faut que les 2 valeurs soient vraies
if (name === 'bob' && age === 24) {
  console.log('salut cher utilisateur');
} else {
  console.log('mauvaises valeurs');
}
