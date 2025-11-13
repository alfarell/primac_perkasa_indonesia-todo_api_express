const express = require("express");
const { TodosController } = require("../controllers");
const { TodosService } = require("../services");
const { TodosValidator } = require("../validators");

const router = express.Router();

const todosService = new TodosService();
const todosController = new TodosController(todosService);

router.get(
  "/",
  TodosValidator.getAll,
  todosController.getAll.bind(todosController)
);
router.post(
  "/",
  TodosValidator.create,
  todosController.create.bind(todosController)
);
router.patch(
  "/:id",
  TodosValidator.update,
  todosController.update.bind(todosController)
);
router.delete(
  "/:id",
  TodosValidator.delete,
  todosController.delete.bind(todosController)
);

module.exports = router;
