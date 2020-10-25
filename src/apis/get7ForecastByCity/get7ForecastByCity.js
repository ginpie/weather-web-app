import { REACT_APP_API_FORECAST, REACT_APP_API_APPID } from "../apikey";
import getWeatherByCity from "../getWeatherByCity";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_API_FORECAST + "?appid=" + REACT_APP_API_APPID,
});

function get7ForecastByCity(city) {
  getWeatherByCity(city).then((res) => {
    return instance
      .get("", {
        params: {
          lon: res.coord.lon,
          lat: res.coord.lat,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  });
}

export default get7ForecastByCity;
