function removeFromArray(arr, remove) {
  return arr.filter(function (item) {
    return item !== remove;
  });
}

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 'tacos'));
console.log(removeFromArray(['hey', 2, 3, 'ho'], 'hey'));
