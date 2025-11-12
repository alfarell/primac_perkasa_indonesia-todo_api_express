const express = require("express");
const TodosRoute = require("./todos");

const router = express.Router();

const api = router.use(TodosRoute);

module.exports = router.use("/", api);
