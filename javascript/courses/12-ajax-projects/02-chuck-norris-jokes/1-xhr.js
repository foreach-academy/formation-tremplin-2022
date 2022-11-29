// https://api.chucknorris.io/
const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', () => getData(url));

const getData = (url) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
      const { value: joke } = JSON.parse(xhr.responseText);
      const random = Math.random() * 1000;

      img.classList.add('shake-img');
      content.textContent = joke;

      setTimeout(() => {
        img.classList.remove('shake-img');
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText
      });
    }
  };
};
