const db = require('../db');

//* Test
const getAllProductsStatic = async (req, res) => {
  //* name
  // const { rows } = await db.query('SELECT * FROM products');
  // const { rows } = await db.query(
  //   'SELECT * FROM products WHERE featured = true'
  // );
  // const { rows } = await db.query(
  //   "SELECT * FROM products WHERE name = 'albany '"
  // );
  // const { rows } = await db.query(
  //   "SELECT * FROM products WHERE name ILIKE '%al%'"
  // );

  //* sort
  // const { rows } = await db.query('SELECT * FROM products ORDER BY name DESC');

  //* fields
  // const { rows } = await db.query('SELECT name, price FROM products');

  //* limit + offset
  const { rows } = await db.query('SELECT * FROM products LIMIT 3 OFFSET 3');

  res.status(200).send({ products: rows, nbHits: rows.length });
};

const getAllProducts = async (req, res) => {
  const { name, sort, fields } = req.query;

  let queryString = 'SELECT * FROM products';
  let parameters = [];

  if (fields) {
    queryString = `SELECT ${fields} FROM products`;
  }

  if (name) {
    queryString += ' WHERE name ILIKE $1';
    parameters.push(`%${name}%`);
  }

  if (sort) {
    const sortList = sort
      .split(',')
      .map((field) =>
        field.startsWith('-') ? `${field.slice(1)} DESC` : field
      )
      .join(',');
    queryString += ` ORDER BY ${sortList}`;
  }

  //* pagination + limit
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  queryString += ` LIMIT $${parameters.length + 1} OFFSET $${
    parameters.length + 2
  }`;
  // 23 produits, limite 7
  // 4 pages, 7 7 7 2
  parameters.push(limit, offset);

  const { rows } = await db.query(queryString, parameters);

  res.status(200).send({ products: rows, nbHits: rows.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
