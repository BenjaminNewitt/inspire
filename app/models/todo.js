export default class Todo {
  constructor(data) {
    this.description = data.description;
    this.id = data._id;
    this.completed = data.completed;
  }

  get Template() {
    return /* html */ `
  <div class="col-12 d-flex justify-content-between"><input type="checkbox" name="completed" value="completed"/><p>${this.description}</p><p class="float-right" onclick="app.todoController.removeTodo('${this.id}')">X</p></div>
    `;
  }
}
