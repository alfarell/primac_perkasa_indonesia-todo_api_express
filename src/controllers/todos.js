const { StatusCodes } = require("http-status-codes");

class TodosController {
  static getAll(req, res, next) {
    res.status(StatusCodes.OK).json({ todos: "todos" });
  }
}

module.exports = TodosController;
