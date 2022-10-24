//* parentElement

const heading = document.querySelector('h2');
// console.log(heading.parentElement.parentElement.parentElement.parentElement);
//! attention à ne pas trop enchaîner car le parent de <html> est null

const parent = heading.parentElement;
parent.style.color = 'red';
