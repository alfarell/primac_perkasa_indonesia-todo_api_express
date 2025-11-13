const { StatusCodes } = require("http-status-codes");
const { validate } = require("uuid");

class TodosValidator {
  static getAll(req, res, next) {
    next();
  }

  static create(req, res, next) {
    const body = req.body;

    if (body?.title?.length < 1) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        error: "property 'title' in body payload should not be empty",
      });
    }
    if (!body?.title) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'title' in body payload is required" });
    }
    if (!body?.description) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "property 'description' in body payload is required" });
    }

    next();
  }

  static update(req, res, next) {
    const params = req.params;
    const body = req.body;

    const id = params?.id;

    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' in /todos/:id is required" });
    }
    if (!validate(id)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' is not a valid uuid" });
    }
    if (body?.title?.length < 1) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        error: "property 'title' in body payload should not be empty",
      });
    }

    next();
  }

  static delete(req, res, next) {
    const params = req.params;

    const id = params?.id;

    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' in /todos/:id is required" });
    }
    if (!validate(id)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "params 'id' is not a valid uuid" });
    }

    next();
  }
}

module.exports = TodosValidator;
