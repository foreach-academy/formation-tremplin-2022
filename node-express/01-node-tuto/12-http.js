//* HTTP - setup un serveur
const http = require('http');

// les 2 arguments sont des objets
// le client fait une requête au serveur (par exemple une page)
// le serveur envoie une réponse
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Bienvenue sur notre page d'accueil");
  } else if (req.url === '/about') {
    res.end('Voici une petite histoire');
  } else {
    res.end(`
    <h1>Oups !</h1>
    <p>Nous ne trouvons pas la page que vous cherchez</p>
    <a href="/">retourner à l'accueil</a>
    `);
  }
});

server.listen(5000);
