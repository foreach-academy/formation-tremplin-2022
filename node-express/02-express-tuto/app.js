const express = require('express');
const app = express();

app.use(express.static('./methods-public'));
// pour analyser les donnnées envoyées par le formulaire HTML
app.use(express.urlencoded({ extended: false }));
// pour analyser les donnnées envoyées par js
app.use(express.json());

const people = require('./routes/people');

app.use('/api/people', people);

//* POST
//* 1. Exemple avec un formulaire qui envoie les données via le HTML
app.post('/login', (req, res) => {
  // console.log(req.body);
  const { name } = req.body;

  if (name) {
    res.status(200).send(`Bienvenue ${name}`);
  } else {
    res.status(401).send('Veuillez fournir un nom');
  }
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
