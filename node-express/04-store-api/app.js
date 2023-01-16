require('dotenv').config();
//* async errors
require('express-async-errors');

const express = require('express');
const app = express();

const errorHandlerMiddleware = require('./middleware/error-handler.js');
const notFound = require('./middleware/not-found.js');

const products = require('./routes/products.js');

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', products);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
