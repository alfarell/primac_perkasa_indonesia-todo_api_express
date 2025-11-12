const { StatusCodes } = require("http-status-codes");

class TodosController {
  constructor(todosService) {
    this.todosService = todosService;
  }

  getAll(req, res, next) {
    const todos = this.todosService.getAllTodo();

    res.status(StatusCodes.OK).json({ data: todos });
  }
}

module.exports = TodosController;
