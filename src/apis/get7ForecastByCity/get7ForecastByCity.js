import { REACT_APP_API_FORECAST, REACT_APP_API_APPID } from "../apikey";
import getWeatherByCity from "../getWeatherByCity";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_API_FORECAST + "?appid=" + REACT_APP_API_APPID,
});

async function get7ForecastByCity(city) {
  let a;
  await getWeatherByCity(city).then((res) => {
    a = res.coord;
  });
  return instance
    .get("", {
      params: {
        lon: a.lon,
        lat: a.lat,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default get7ForecastByCity;
