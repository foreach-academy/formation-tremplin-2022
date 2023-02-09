require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const stripeController = require('./controllers/stripeController.js');

const notFound = require('./middleware/notFound.js');
const errorHandler = require('./middleware/errorHandler.js');

app.use(express.static('./public'));
app.use(express.json());

app.post('/stripe', stripeController);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
