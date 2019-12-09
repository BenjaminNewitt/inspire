export default class Todo {
  constructor(data) {
    this.description = data.description;
    this.id = data._id;
    this.completed = data.completed;
  }

  get Template() {
    let template = /* html */ `
  <div class="col-12 d-flex justify-content-between">`;

    if (this.completed == false) {
      template += /* html */ `<input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')" checked/>
  <p><del>${this.description}</del></p>`;
    } else if (this.completed == true) {
      template += /* html */ `<input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')"/>
    <p>${this.description}</p>`;
    }
    template += /* html */ `
  <p class="float-right" onclick="app.todoController.removeTodo('${this.id}')">
  X</p></div>
    `;
    return template;
  }
}
