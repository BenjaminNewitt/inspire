export default class Todo {
  constructor(data) {
    (this.description = data.description),
      (this.id = data._id),
      (this.completed = data.completed);
  }

  get Template() {
    return;
  }
}
