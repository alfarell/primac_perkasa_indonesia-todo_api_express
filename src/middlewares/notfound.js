const { StatusCodes } = require("http-status-codes");

const NotFound = (req, res, next) => {
  return res.status(StatusCodes.NOT_FOUND).send("Page not found");
};

module.exports = NotFound;
