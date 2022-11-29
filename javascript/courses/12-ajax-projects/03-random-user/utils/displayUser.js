import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const btns = [...document.querySelectorAll('.icon')];
console.log(btns);

// affiche les infos de l'utilisateur
const displayUser = ({ image }) => {
  img.src = image;
};

export default displayUser;
