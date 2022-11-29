import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

// affiche les infos de l'utilisateur
const displayUser = (person) => {
  img.src = person.image;
  title.textContent = 'My name is';
  value.textContent = person.name;
  removeActive(btns);
  btns[0].classList.add('active');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.dataset.label;
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};

export default displayUser;
