const http = require('http');
const { readFileSync } = require('fs');

const homepage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;

  // page d'accueil
  if (url === '/') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write(homepage);
    res.end();
  } // CSS
  else if (url === '/styles.css') {
    res.writeHead(200, {
      'content-type': 'text/css'
    });
    res.write(homeStyles);
    res.end();
  } // logo
  else if (url === '/logo.svg') {
    res.writeHead(200, {
      'content-type': 'image/svg+xml'
    });
    res.write(homeImage);
    res.end();
  } //JS
  else if (url === '/browser-app.js') {
    res.writeHead(200, {
      'content-type': 'text/javascript'
    });
    res.write(homeLogic);
    res.end();
  } // 404
  else {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.write('<h1>page non trouvée</h1>');
    res.end();
  }

  res.end();
});

server.listen(5000);
