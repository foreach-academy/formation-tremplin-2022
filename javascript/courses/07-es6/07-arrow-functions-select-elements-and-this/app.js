const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//   console.log(this);
//   this.style.color = 'black';
// });

// btn.addEventListener('click', () => {
//   console.log(this);
//   this.style.color = 'black';
// });

btn.addEventListener('click', function () {
  console.log(this);

  setTimeout(() => {
    console.log(this);
    this.style.color = 'black';
  }, 2000);
});
