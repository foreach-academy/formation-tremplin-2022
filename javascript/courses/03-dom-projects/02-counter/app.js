let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('increase')) {
      counter++;
    } else if (e.currentTarget.classList.contains('decrease')) {
      counter--;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = 'green';
    } else if (counter < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = '#222';
    }

    value.textContent = counter;
  });
});
