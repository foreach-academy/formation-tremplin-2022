function sumAll(start, end) {
  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return 'ERROR';
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll(1, 4));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, '90'));
console.log(sumAll(10, [90, 1]));
