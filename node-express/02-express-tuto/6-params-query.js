const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res.send("<h1>Page d'accueil</h1><a href='/api/products'>Produits</a>");
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  });

  res.json(newProducts);
});

//* paramètre d'url
app.get('/api/products/:productID', (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;

  const singeProduct = products.find(
    (product) => product.id === Number(productID)
  );

  // il faut vérrifer que l'id existe sinon on renverra "undefined" qui n'est pas une erreur
  if (!singeProduct) {
    return res.status(404).send("Le produit n'existe pas");
  }

  res.json(singeProduct);
});

app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

//* paramètres de requête
app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.includes(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (!sortedProducts.length) {
    return res.status(200).json({ success: true, data: sortedProducts });
  }

  res.json(sortedProducts);
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
