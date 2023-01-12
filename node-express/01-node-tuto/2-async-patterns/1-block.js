const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Page d'accueil");
  } else if (req.url === '/about') {
    //! CODE BLOQUANT
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //     console.log(`${i} ${j}`);
    //   }
    // }

    res.end('Page à propos');
  } else {
    res.end('Page 404');
  }
});

server.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
