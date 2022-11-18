const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  }
};

const btn = document.querySelector('.increment');

//! échoue
// btn.addEventListener('click', counter.increment);

// btn.addEventListener('click', counter.increment.bind(counter));

const increment = counter.increment.bind(counter);

btn.addEventListener('click', increment);
