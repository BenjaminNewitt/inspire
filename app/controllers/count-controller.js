import store from "../store.js";

function _drawCount() {
  // TODO write for loop to add how many todo's aren't checked off
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
