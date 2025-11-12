const express = require("express");
const { TodosController } = require("../controllers");

const router = express.Router();

router.get("/todos", TodosController.getAll);

module.exports = router;
