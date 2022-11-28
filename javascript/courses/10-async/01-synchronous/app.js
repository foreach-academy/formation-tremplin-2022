//* Le JS est un déroulement simple, un langage synchrone. On éxécute le programme ligne par ligne

console.log('je suis le premier');
boilingWater();
console.log('je suis le deuxième');
console.log('je suis le troisième');

function boilingWater() {
  console.log('bout...');

  for (let i = 0; i < 10000; i++) {
    console.log('toujours pas prêt');
  }

  console.log('fini');
}
