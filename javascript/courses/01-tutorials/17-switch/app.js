//* Switch

// const dice = 1;
// const dice = 0;
const dice = 1;

//? Avec que des if
// if (dice === 1) {
//   console.log('tu as fait un');
// }

// if (dice === 2) {
//   console.log('tu as fait deux');
// }

// if (dice < 1 || dice > 6) {
//   console.log("tu n'as pas jeté le dé");
// }

//? else if
// if (dice === 1) {
//   console.log('tu as fait un');
// } else if (dice === 2) {
//   console.log('tu as fait deux');
// } else {
//   console.log("tu n'as pas jeté le dé");
// }
//? Dans un if/else on check chaque cas jusqu'à ce que l'un soit vrai

//! il ne faut pas oublier le break sinon le programme va exécuter tous les cas dans l'ordre à partir du cas vrai
switch (dice) {
  case 1:
    console.log('tu as fait un');
    break;
  case 2:
    console.log('tu as fait deux');
    break;
  case 3:
    console.log('tu as fait trois');
    break;
  default:
    console.log("tu n'as pas jeté le dé");
    break;
}
//? On peut voir des switch avec Redux en faisant du React

// TODO: challenge #7
