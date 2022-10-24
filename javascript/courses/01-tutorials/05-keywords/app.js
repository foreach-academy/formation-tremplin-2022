//* LET vs CONST vs VAR

//* var
var value = 'une valeur';
value = 'une autre valeur';

//? let et const ont été introduits avec l'ES6 en 2015
//* let
let name = 'john';
name = 'peter';

//* const (CONSTANTE) - ne peut pas être réassignée
const lastName = 'doe';
// lastName = "smith";
//! la réassignation cause une erreur

console.log(value);
console.log(name);
console.log(lastName);

//? On verra plus tard la différence entre var et let (scope)
