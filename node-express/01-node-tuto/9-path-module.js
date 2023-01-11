const path = require('path');

//* retourne le séparateur utilisé par ma plateforme
// console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);

//* retourne le nom du dossier/fichier cible du chemin
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
