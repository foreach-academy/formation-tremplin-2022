//* middleware - fonction qui s'exécute pendant une requête au serveur
//* accès aux objets Request et Response

const express = require('express');
const app = express();

//* req => middleware => res

//middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();

  // res.send('Test');
};

app.get('/', logger, (req, res) => {
  res.send('Accueil');
});

app.get('/about', logger, (req, res) => {
  res.send('À propos');
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
