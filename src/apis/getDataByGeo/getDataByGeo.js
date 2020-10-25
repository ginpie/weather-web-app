import { REACT_APP_API_CURRENT, REACT_APP_API_APPID } from "../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_API_CURRENT + "?appid=" + REACT_APP_API_APPID,
});

function getDataByGeo(long, lat) {
  return instance
    .get("", {
      params: {
        lon: long,
        lat: lat,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default getDataByGeo;
