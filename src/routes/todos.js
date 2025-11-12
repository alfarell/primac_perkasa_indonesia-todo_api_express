const express = require("express");
const { TodosController } = require("../controllers");
const { TodosService } = require("../services");

const router = express.Router();

const todosService = new TodosService();
const todosController = new TodosController(todosService);

router.get("/", todosController.getAll.bind(todosController));

module.exports = router;
