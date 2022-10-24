function ftoc(f) {
  return +(((f - 32) * 5) / 9).toFixed(1);
}

function ctof(c) {
  return +((c * 9) / 5 + 32).toFixed(1);
}

console.log(ftoc(32));
console.log(ctof(0));
