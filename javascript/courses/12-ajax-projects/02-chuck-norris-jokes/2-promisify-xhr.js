// https://api.chucknorris.io/
const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', () =>
  getData(url)
    .then((response) => displayData(response))
    .catch((err) => console.log(err))
);

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText
        });
      }
    };
  });
};

const displayData = (data) => {
  const { value: joke } = JSON.parse(data);
  const random = Math.random() * 1000;

  img.classList.add('shake-img');
  content.textContent = joke;

  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
};
