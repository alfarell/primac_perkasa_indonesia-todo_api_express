const express = require("express");
const TodosRoute = require("./todos.route");

const router = express.Router();

router.use("/todos", TodosRoute);

module.exports = router;
