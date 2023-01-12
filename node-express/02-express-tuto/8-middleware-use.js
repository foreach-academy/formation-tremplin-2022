const express = require('express');
const app = express();

const logger = require('./logger');
const authorize = require('./authorize');

// app.use('/api', logger);

app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/about', (req, res) => {
  res.send('À propos');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
