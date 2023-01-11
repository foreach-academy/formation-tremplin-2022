//* npm - commande globale, s'installe avec node
//* npm --version

//* dépendance locale - s'utilise seulement dans ce projet
//* npm i <packageName>

//* dépendance globale - s'utilise dans n'importe quel projet
//* npm i -g <packgeName>
//* sudo install <packageName> (Mac)

//* package.json - fichier manifeste (stocke les infos importantes à propos du projet/package)
//* approche manuelle (créer package.json à la racine, créer les propriétés, etc...)
//* npm init (étape par étape, presser entrer pour passer)
//* npm init -y (toutes les options par défaut)

//* npm i <packageName> -D ou --save-dev - installer un package seulement pour l'environnement de dév

//* npm uninstall <package> - désintalle un paquet

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
