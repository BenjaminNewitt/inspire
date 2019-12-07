import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import CountController from "./controllers/count-controller.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.countController = new CountController();
  }
}

window["app"] = new App();
