import { REACT_APP_TRIP_API, REACT_APP_TRIP_API_APPID } from "../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_TRIP_API + "/en/places/radius",
});

function getPlaceByGeo(long, lat) {
  return instance
    .get("", {
      params: {
        apikey: REACT_APP_TRIP_API_APPID,
        lat: lat,
        lon: long,
        radius: 10000,
        rate: "3h",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default getPlaceByGeo;
