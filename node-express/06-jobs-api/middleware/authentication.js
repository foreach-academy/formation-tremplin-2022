const { UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // vérifie le header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentification invalide');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // attache l'utilisateur pour la route jobs
    req.user = {
      userID: payload.userID,
      name: payload.name,
    };

    next();
  } catch (error) {
    console.log(error.message);
    throw new UnauthenticatedError('Authentification invalide');
  }
};

module.exports = auth;
