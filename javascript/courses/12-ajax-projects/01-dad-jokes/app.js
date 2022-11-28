const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app'
      }
    });

    if (!response.ok) {
      throw new Error('Whoops!');
    }

    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'There was an error...';
  }
};

btn.addEventListener('click', () => fetchDadJoke(url));

window.addEventListener('DOMContentLoaded', () => fetchDadJoke(url));
