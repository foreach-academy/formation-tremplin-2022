// const fs = require('fs');
// fs.readFileSync()

const { readFileSync, writeFileSync } = require('fs');

console.log('début');

//* lire un fichier
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);

//* écrire dans un fichier
writeFileSync(
  './content/result-sync.txt',
  `Voici le résultat : ${first} ${second}`,
  // ajouter du texte dans le fichier
  { flag: 'a' }
);

console.log('tâche terminée');
console.log('début de la prochaine');
