import { REACT_APP_GOOGLE_API, REACT_APP_GOOGLE_API_APPID } from "../../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_GOOGLE_API,
});

async function placeDetailsRequest(place_id) {
  return instance
    .get("/place/details/json", {
      params: {
        key: REACT_APP_GOOGLE_API_APPID,
        place_id: place_id,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default placeDetailsRequest;
