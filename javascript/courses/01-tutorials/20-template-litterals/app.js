//* Les Modèles Littéraux - ES6+
//* Avec les Backticks ``
//* Interpolation ${} - insérer une expression(valeur)

const name = 'john';
const age = 25;
const sentence = "Hey ! C'est " + name + ' et il a ' + age + ' ans';

console.log(sentence);

//? `` plus puissants que ""
const value = `Hey ! c'est ${name} et il a ${age} ans. Et voici des mathémagiques : ${
  1 + 1
}`;
console.log(value);
//? il est plus facile de gérer les variables avec les ``

// TODO: challenge #8
