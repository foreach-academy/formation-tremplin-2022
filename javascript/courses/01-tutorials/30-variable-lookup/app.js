//* Recherche de variable
//* {} - bloc de code

const globalNumber = 5;

function add(num1, num2) {
  //? si on ajoute une variable globalNumber dans le scope locale, le résultat va changer
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;

  function multiply() {
    // const globalNumber = 100
    const multiplyResult = result * globalNumber; // 27 * 20
    console.log(multiplyResult);
  }

  multiply();
  return result;
}
//? JS va cherche si globalNumber est dans le scope globale, sinon il va chercher dans le scope dasn lequel il est, etc.. jusqu'au globale

console.log(add(3, 4));
