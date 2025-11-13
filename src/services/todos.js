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

  updateTodo(id, payload) {
    const findTodosIdx = this.todos.findIndex((todo) => todo.id === id);

    if (findTodosIdx < 0) return findTodosIdx;

    payload.updatedAt = new Date().toISOString();
    this.todos[findTodosIdx] = {
      ...this.todos[findTodosIdx],
      ...payload,
    };

    return findTodosIdx;
  }

  deleteTodo(id) {
    const findTodosIdx = this.todos.findIndex((todo) => todo.id === id);

    if (findTodosIdx < 0) return findTodosIdx;

    this.todos.splice(findTodosIdx, 1);

    return findTodosIdx;
  }
}

module.exports = TodosService;
