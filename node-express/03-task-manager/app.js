//async errors
require('express-async-errors');
const express = require('express');
const app = express();
require('dotenv').config();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

app.use(express.static('./public'));
//middleware
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
