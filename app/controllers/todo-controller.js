import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  let todos = store.State.todos;
  console.log("todo's from _drawTodos", todos);
  todos.forEach(t => (template += t.Template));
  document.getElementById("todo").innerHTML = template;
}

export default class TodoController {
  constructor() {
    console.log("Hello from todo-controller");

    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    TodoService.getTodosAsync();
    _drawTodos();
  }

  async addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.description.value
    };
    console.log("new todo from controller", todo);

    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
