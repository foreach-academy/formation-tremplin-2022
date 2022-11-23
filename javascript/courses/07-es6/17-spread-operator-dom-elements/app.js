const headings = document.querySelectorAll('h1');
const result = document.querySelector('#result');

//* on veut afficher tous nos h1 dans des spans dans le h2

// console.log(headings);

//! on ne peut pas faire un map car headings n'est pas un array mais une nodeList
// console.log(headings.map((item) => console.log(item)));

let text = [...headings];
// console.log(text);

text = text.map((item) => `<span>${item.textContent}</span>`).join(' ');
result.innerHTML = text;
