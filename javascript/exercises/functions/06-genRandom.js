function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(genRandom(20, 30));
