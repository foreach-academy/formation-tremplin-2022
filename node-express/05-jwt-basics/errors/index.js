const badRequestError = require('./bad-request.js');
const UnauthenticatedError = require('./unauthenticated.js');
const CustomError = require('./custom-error.js');

module.exports = { badRequestError, UnauthenticatedError, CustomError };
