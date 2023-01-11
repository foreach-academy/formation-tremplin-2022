const { readFile } = require('fs');

console.log('commence une première tâche');

readFile('../content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log(result);
  console.log('fin de la première tâche');
});

console.log('commence la prochaine tâche');
