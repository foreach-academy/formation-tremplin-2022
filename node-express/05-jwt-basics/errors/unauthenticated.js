const CustomError = require('./custom-error.js');
const { StatusCodes } = require('http-status-codes');

class UnauthenticatedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
