//* callbacks, promises, async/await

// boilingWater(1000);
// console.log('couper les carottes');
// console.log('ajouter les carottes');
// boilingWater(1000);

// function boilingWater(time) {
//   console.log('bout...');

//   setTimeout(() => console.log('fini'), time);
// }

boilingWater();
console.log('couper les carottes');

function boilingWater() {
  console.log('bout...');

  setTimeout(() => {
    console.log('fini.');
    console.log('ajouter les carottes');

    setTimeout(() => {
      console.log('carottes finies.');
      console.log('ajouter les oignons');

      setTimeout(() => {
        console.log('oignons finis.');
      }, 5000);
    }, 5000);
  }, 10000);

  console.log('couper les oignons');
}
