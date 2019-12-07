import store from "../store.js";

function _drawCount() {
  document.querySelector("#todo-count").innerHTML = `
    <p>${store.State.todos.length.toString()} to do</p>`;
}

export default class CountController {
  constructor() {
    store.subscribe("todos", _drawCount);
    _drawCount();
    console.log("Hello from count-controller");
  }
}
