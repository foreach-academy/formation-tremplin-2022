require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//* routers
const authRouter = require('./routes/auth.js');
const jobsRouter = require('./routes/jobs.js');

const notFound = require('./middleware/notFound.js');
const errorHandler = require('./middleware/errorHandler.js');

app.use(express.json());

//* routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
