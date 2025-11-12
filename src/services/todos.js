const uuid = require("uuid").v4;

class TodosService {
  constructor() {
    this.todos = [];
  }

  getAllTodo() {
    return this.todos;
  }

  addTodo(payload) {
    payload.id = uuid();
    payload.createdAt = new Date().toISOString();
    payload.updatedAt = new Date().toISOString();

    this.todos.push(payload);
  }
}

module.exports = TodosService;
