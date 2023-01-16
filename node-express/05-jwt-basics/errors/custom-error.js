class CustomError extends Error {
  constructor(message) {
    // super invoque le constructeur du parent
    super(message);
  }
}

module.exports = CustomError;
