function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function sumAll(arr) {
  return arr.reduce(function (total, num) {
    return total + num;
  }, 0);
}

function multiplyAll(arr) {
  return arr.reduce(function (total, num) {
    return total * num;
  }, 1);
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return 'Impossible de diviser par 0';

  return num1 / num2;
}

function power(num1, num2) {
  // return Math.pow(num1,num2);
  return num1 ** num2;
}

function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function calculate(num1, num2, operator) {
  if (operator === '+') return add(num1, num2);
  if (operator === '-') return substract(num1, num2);
  if (operator === '*') return multiply(num1, num2);
  if (operator === '/') return divide(num1, num2);
  if (operator === '**') return power(num1, num2);
  if (operator === '!') return factorial(num1);

  return 'Veuillez saisir un opérateur valide';
}

console.log(calculate(0, 0, '+'));
console.log(calculate(2, 2, '+'));
console.log(calculate(2, 6, '+'));

console.log(calculate(10, 4, '-'));

console.log(calculate(2, 4, '*'));
console.log(calculate(4, 0, '*'));

console.log(calculate(4, 0, '/'));
console.log(calculate(1, 12, '/'));
console.log(calculate(20, 7, '/'));
console.log(calculate(-33, 3, '/'));

console.log(calculate(4, null, '!'));
console.log(calculate(12, null, '!'));

console.log(sumAll([]));
console.log(sumAll([7]));
console.log(sumAll([7, 11]));
console.log(sumAll([1, 3, 5, 7, 9]));

console.log(multiplyAll([2, 4]));
console.log(multiplyAll([2, 4, 6, 8, 10, 12, 14]));
