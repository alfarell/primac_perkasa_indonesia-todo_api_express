const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class TodosController {
  constructor(todosService) {
    this.todosService = todosService;
  }

  getAll(req, res, next) {
    const todos = this.todosService.getAllTodo();

    res.status(StatusCodes.OK).json({ data: todos });
  }

  create(req, res, next) {
    const body = req.body;

    if (!body?.title) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'title' is required" });
    }
    if (!body?.description) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'description' is required" });
    }

    this.todosService.addTodo(body);

    res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
  }
}

module.exports = TodosController;
