const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  // res.json([{ name: 'john' }, { name: 'susan' }]);
  res.status(200).json(products);
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
