// https://api.chucknorris.io/
const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

const displayData = ({ value: joke }) => {
  const random = Math.random() * 1000;

  img.classList.add('shake-img');
  content.textContent = joke;

  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
};
