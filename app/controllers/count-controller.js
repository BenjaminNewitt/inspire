import store from "../store.js";

function _drawCount() {
  // TODO write for loop to add how many todo's aren't checked off
  let todos = store.State.todos;
  todos = todos.filter(todo => todo.completed == false);
  if (todos.length == 1) {
    document.querySelector("#todo-count").innerHTML = `
    <p>${todos.length.toString()} to do</p>`;
  } else {
    document.querySelector("#todo-count").innerHTML = `
    <p>${todos.length.toString()} to do's</p>`;
  }
}

export default class CountController {
  constructor() {
    store.subscribe("todos", _drawCount);
    _drawCount();
    console.log("Hello from count-controller");
  }
}
