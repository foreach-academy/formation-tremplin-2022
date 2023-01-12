const http = require('http');

//* le serveur qui émet un événement request
const server = http.createServer();

//* le serveur écoute l'événement

server.on('request', (req, res) => {
  res.end('Bienvenue');
});

// http.Server est une extension d'EventEmitter

server.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
