//* Les Boucles
//* Répètent un bloc de code tant que la condition est vraie

//* boucle while
//? on utilise let car on va changer la valeur
let amount = 10;

while (amount > 0) {
  console.log("J'ai " + amount + ' euros et je vais au magasin');
  //! ne pas oublier la décrémentation sinon on aura un loop infini car la condition sera toujours vraie
  amount--;
}

//* do while
//* exécute le bloc de code d'abord, puis vérifie la condition
// let money = 0;
let money = 12;

do {
  console.log('Tu as ' + money + ' euros');
  //? il faut un échappatoire
  money++;
} while (money < 10);

//* boucle for
// let i;

// for (i = 0; i < 10; i++) {
//   console.log('le nombre est : ' + i);
// }

for (let number = 11; number >= 0; number--) {
  console.log('le nombre est : ' + number);
}
