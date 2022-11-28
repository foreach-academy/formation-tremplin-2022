//* faire une soupe
//* faire bouillir l'eau 10 min
//* couper les oignons
//* couper les carottes
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

boilingWater(10000);
console.log('couper les carottes');
console.log('couper les oignons');

function boilingWater(time) {
  console.log('bout...');

  setTimeout(() => console.log('fini'), time);
}

console.log('ajouter les carottes');

for (let i = 0; i < 10000; i++) {
  console.log('occupé');
}
