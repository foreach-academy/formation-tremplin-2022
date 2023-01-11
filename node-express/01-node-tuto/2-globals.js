//* GLOBALES - PAS D'OBJET WINDOW !

//* __dirname - chemin vers le répertoire courant
//* __filename - nom du fichier
//* require - fonction pour utiliser les modules (CommonJS)
//* module - info à propos du module courant (fichier)
//* process - info à propos de l'environnement où le programme est exécuté

console.log(__dirname);

setInterval(() => {
  console.log('hello world');
}, 1000);
