const jwt = require('jsonwebtoken');
const { badRequestError } = require('../errors');

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new badRequestError('Veuillez fournir un email et un mot de passe');
  }

  const id = new Date().getTime();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).send({ msg: 'Utilisateur crée', token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Voici vos données autorisées, votre numéro porte-bonheur est le ${luckyNumber}`,
  });
};

module.exports = { dashboard, login };
