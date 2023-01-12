const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write("<h1>page d'accueil</h1>");
    res.end();
  } else if (url == '/about') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<h1>page à propos</h1>');
    res.end();
  } else {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.write('<h1>page non trouvée</h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
