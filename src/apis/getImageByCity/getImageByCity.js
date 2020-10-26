import { REACT_APP_IMAGE_API, REACT_APP_IMAGE_API_APPID } from "../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_IMAGE_API,
});

function getImageByCity(city) {
  return instance
    .get("", {
      params: {
        client_id: REACT_APP_IMAGE_API_APPID,
        query: city,
        page: 1,
        per_page: 5,
        orientation: "landscape",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default getImageByCity;
