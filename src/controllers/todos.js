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
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'title' is required" });
    }
    if (!body?.description) {
      return res
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
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' in /todos/:id is required" });
    }
    if (!body?.title) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'title' is required" });
    }
    if (!body?.description) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'description' is required" });
    }

    const updateStatus = this.todosService.updateTodo(id, body);

    if (updateStatus < 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: `Todo with id: '${id}' not found` });
    }

    res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
  }

  delete(req, res, next) {
    const params = req.params;

    const id = params?.id;

    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' in /todos/:id is required" });
    }

    const deleteStatus = this.todosService.deleteTodo(id);

    if (deleteStatus < 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: `Todo with id: '${id}' not found` });
    }

    res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
  }
}

module.exports = TodosController;
