const express = require('express');
const app = express();

const path = require('path');

//* mise en place du middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send('hello');
  // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('ressource non trouvée');
});

app.listen(5000, () => {
  console.log('Le serveur écoute le port 5000...');
});
