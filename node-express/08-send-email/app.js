const express = require('express');
const app = express();

const sendEmail = require('./controllers/sendEmail.js');

const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');

app.get('/', (_req, res) =>
  res.send("<h1>Projet Email</h1><a href='/send'>Envoyer un email</a>")
);

app.get('/send', sendEmail);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Le serveur écoute sur le port ${port}`));
