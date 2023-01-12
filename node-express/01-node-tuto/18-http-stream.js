const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //* si on va dans le dev tools et qu'on regarde dans Network, voit voit que la requête est un succès (status = 200) et que le transfer-encoding est d'1.8mb
  // const text = fs.readFileSync('./content/big.txt', 'utf8');

  const fileStream = fs.createReadStream('./content/big.txt');

  fileStream.on('open', () => {
    //* pipe passe les données de readStream à writeStream
    //* on peut ainsi écrire les données par morceaux
    fileStream.pipe(res);
  });

  fileStream.on('error', (err) => {
    res.end(err.message);
  });

  // res.end(text);
});

server.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
