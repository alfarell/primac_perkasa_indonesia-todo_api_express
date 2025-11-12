class TodosService {
  constructor() {
    this.todos = ["test"];
  }

  getAllTodo() {
    return this.todos;
  }
}

module.exports = TodosService;
