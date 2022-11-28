const btn = document.querySelector('.btn');

const getData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './api/sample.txt');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
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

btn.addEventListener('click', getData);
