import { REACT_APP_API_CURRENT, REACT_APP_API_APPID } from "../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_API_CURRENT + "?appid=" + REACT_APP_API_APPID,
});

function getWeatherByCity(city) {
  return instance
    .get("", {
      params: {
        q: city,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default getWeatherByCity;
