const car = {
  make: 'Dodge',
  model: 'Challenger',
  year: 1970,
  colors: ['noir', 'rouge'],
  hybrid: false,
  drive: function () {
    console.log('broom broom...');
  },
  stop: function () {
    console.log('stop !!!');
  }
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
