//* Fonctions, return, if, arrays, for loop

// essence
const gas = [20, 40, 100, 30];
// nourriture
const food = [10, 40, 50];

//TODO: Déclarer une fonction qui calcule la somme des éléments d'un array
function calculateTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    total += arr[i];
  }

  if (total > 100) {
    console.log(`Wow ! Tu dépenses trop`);
    //! si on ne retourne pas le total la valeur sera undefined
    // return;
    return total;
  }

  console.log(`T'es bien, tu as dépensé moins de 100 euros`);

  // console.log(total);
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log(gasTotal);
// console.log(foodTotal);
// console.log(randomTotal);

//? On peut mettre nos totaux dans un objet
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal
});
