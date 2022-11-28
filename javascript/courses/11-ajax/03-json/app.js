//* JSON - Javascript Object Notation

const btn = document.querySelector('.btn');
const url = './api/people.json';

const getData = (url) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(typeof xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      const displayData = data.map((item) => `<p>${item.name}</p>`).join('');

      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState
      });
    }
  };

  xhr.send();
};

btn.addEventListener('click', () => getData(url));
