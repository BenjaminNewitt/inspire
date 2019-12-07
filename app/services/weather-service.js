import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const _weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {
  async getWeatherAsync() {
    console.log("Calling the Weatherman");
    let res = await _weatherApi.get();
    console.log("getWeather res", res);

    store.commit("weather", new Weather(res.data));
  }
}

const weatherService = new WeatherService();
export default weatherService;
