const http = require('http');

const server = http.createServer((req, res) => {
  console.log('évènement de la requête');
  res.end('Hello World');
});

server.listen(5000, () => {
  console.log('Le serveur écoute le port : 5000...');
});
