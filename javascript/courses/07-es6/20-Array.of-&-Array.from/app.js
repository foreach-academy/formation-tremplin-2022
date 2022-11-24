//* Array.from() and Array.of() - PAS DANS LE PROTOTYPE

//* Array.of
//* créé une nouvelle instance d'un Array à partir d'un nombre variable d'arguments
const example = ['one', 'two', 'three'];

const friends = Array.of('john', 2, true);
// console.log(friends);

//* Array.from
//* from - retourne un Objet Array à partir de n'importe quel objet, qui a une longueur, ou un objet itérable
//* from tranforme un array-like en array - ex: string, nodelist, Set
const udemy = 'udemy';
// console.log(Array.from(udemy));

// créé un tableau de longueur 5 rempli de undefined par défaut
// console.log(Array.from({ length: 5 }));

// créé un tableau de longueur 5 rempli de "tacos"
// console.log(Array.from({ length: 5 }, () => 'tacos'));

function countTotal() {
  // mot-clef
  console.log(arguments);

  const total = Array.from(arguments).reduce((total, num) => total + num);

  console.log(total);
}

countTotal(67, 89, 54, 100);
