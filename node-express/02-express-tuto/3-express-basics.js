// const app = require('express')();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("L'utilisateur est en contact avec la ressource");
  res.status(200).send("Page d'accueil");
});

app.get('/about', (req, res) => {
  res.status(200).send('Page à propos');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Ressource non trouvée</h1>');
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
