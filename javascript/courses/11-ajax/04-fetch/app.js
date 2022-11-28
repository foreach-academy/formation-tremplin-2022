//* Fetch - async/Await

const btn = document.querySelector('.btn');
const url = './api/people.json';

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;

      return `<p>${name}</p>`;
    })
    .join('');

  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

//* try/catch
try {
  console.log('hello');
  console.log(random);
} catch (error) {
  console.log(error);
}

// on catch l'erreur donc le reste du code s'exécute
console.log('hey');
