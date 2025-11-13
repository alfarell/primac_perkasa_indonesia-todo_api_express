const uuid = require("uuid").v4;

class TodosService {
  constructor() {
    this.todos = [];
  }

  getAllTodo() {
    return this.todos;
  }

  addTodo(payload) {
    const newTodo = {
      ...payload,
      id: uuid(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.todos.push(newTodo);

    return newTodo.id;
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
