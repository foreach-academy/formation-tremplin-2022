const p = document.querySelectorAll('p');
const result = document.querySelector('#result');
const second = document.querySelector('#second');

// on ne peut pas mapper à travers p car c'est une nodeList
// console.log(p);

// on le converti en array
let newText = Array.from(p);
// console.log(newText);

newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');
result.innerHTML = newText;

//* Array.from() a un 2ème arguement qui est une fonction callback
const text = Array.from(p, (item) => {
  // console.log(item);
  return `<span>${item.textContent}</span>`;
}).join(' ');

second.innerHTML = text;
