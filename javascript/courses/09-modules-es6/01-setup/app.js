const people = [
  { name: 'john', job: 'développeur' },
  { name: 'susan', job: 'designer' },
  { name: 'anna', job: 'boss' }
];

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people.map((person) => {
    const { name, job } = person;
    return `<p>${name} <strong>${job}</strong></p>`;
  });

  container.innerHTML = newPeople.join('');
};

btn.addEventListener('click', showPeople);
