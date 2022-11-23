//* échanger des variables avec la déstructuration

let first = 'bob';
let second = 'john';

//? pour échanger mes 2 variables, on doit avoir recours à une 3ème temporaire
// let temp = second;
// second = first;
// first = temp;

// console.log(first, second);

[second, first] = [first, second];
console.log(first, second);
