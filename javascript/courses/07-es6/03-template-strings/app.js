//* le template strings brille surtout lorsqu'il s'agit d'insérer du HTML

const person = {
  name: 'kyle',
  job: 'développeur',
  hobbies: ['surf', 'cuisine', 'bowling']
};

const result = document.getElementById('result');

// result.innerHTML = '<h2>' + person.name + '</h2> <p>' + person.job + '</p>';

//* en utilisant le template strings
result.innerHTML = `
  <h2>${person.name}</h2>
  <p>${person.job}</p>
  <ul>
    ${person.hobbies
      .map(function (hobby) {
        return `<li>${hobby}</li>`;
      })
      .join('')}
  </ul>
`;
