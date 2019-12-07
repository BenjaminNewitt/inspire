import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/benjamin/todos/",
  timeout: 8000
});

class TodoService {
  async getTodosAsync() {
    console.log("Getting the Todo List");
    let res = await _todoApi.get();
    //TODO Handle this response from the server
    console.log("getTodo's", res);
    store.commit(
      "todos",
      res.data.data.map(t => new Todo(t))
    );
    console.log("getTodo's mapped to store", store.State.todos);
  }

  async addTodoAsync(todo) {
    let res = await _todoApi.post("", todo);
    console.log("newTodo", res.data.data);
    this.getTodosAsync();
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await _todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
