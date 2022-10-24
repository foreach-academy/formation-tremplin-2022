//* Les Fonctions
//* return
//* par défaut, une fonction retourne undefined
//* 1 inch = 2.54cm

const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  // console.log('la valeur en cm est : ' + newValue + ' cm');

  // return 'hello world';
  // return newValue;
  return value * 2.54;

  //! ce code ne s'éxécute pas après un return (il est ignoré)
  console.log('hello');
}

//! on obtient NaN
// const width = calculate('hello');

const width = calculate(100);
const height = calculate(wallHeight);
//? la valeur est égale au retour de la fonction

//? Il faut initialiser une constante sinon on aura une erreur
// const width = 0;
// const height = 0;

//? on obtient [undefined, undefined] car par défaut, une fonction retourne undefined
const dimensions = [width, height];
console.log(dimensions);
