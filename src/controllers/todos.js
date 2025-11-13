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

  update(req, res, next) {
    const params = req.params;
    const body = req.body;

    const id = params?.id;

    if (!id) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' in /todos/:id is required" });
    }
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

    const updateStatus = this.todosService.updateTodo(id, body);

    if (updateStatus < 0) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: `Todo with id: '${id}' not found` });
    }

    res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
  }
}

module.exports = TodosController;
