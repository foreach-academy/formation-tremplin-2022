//* faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

// console.log('couper les oignons');
// console.log('couper les carottes');
// boilingWater(10000);
// console.log('ajouter les carottes');
// boilingWater(5000);
// console.log('ajouter les oignons');
// boilingWater(5000);

function boilingWater(time) {
  console.log('bout...');

  for (let i = 0; i < time; i++) {
    console.log('toujours pas prêt');
  }

  console.log('fini');
}

//* faire une soupe
//* faire bouillir l'eau 10 min
//* couper les oignons
//* couper les carottes
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

boilingWater(10000);
console.log('couper les oignons');
console.log('couper les carottes');
console.log('ajouter les carottes');
console.log('ajouter les oignons');
boilingWater(5000);
