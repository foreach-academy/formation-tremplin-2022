// const CustomError = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  let customError = {
    // valeurs par défaut
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message ||
      "Quelque chose s'est mal passé, veuillez réessayer plus tard",
  };

  // if (err instanceof CustomError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }

  // si l'email est dupliqué
  if (err.code && err.code === '23505') {
    customError.msg = `${err.detail} Veuillez choisir une autre valeur`;
    customError.statusCode = 400;
  }

  // return res
  //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
  //   .send({ msg: err.message });
  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
