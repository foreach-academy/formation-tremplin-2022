const CustomError = require('./customError');
const BadRequestError = require('./badRequest');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./not-found.js');

module.exports = {
  CustomError,
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
};
