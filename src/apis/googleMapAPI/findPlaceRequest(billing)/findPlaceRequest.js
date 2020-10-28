import { REACT_APP_GOOGLE_API, REACT_APP_GOOGLE_API_APPID } from "../../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_GOOGLE_API,
  timeout: 1000,
});

async function findPlaceRequest(place) {
  return instance
    .get("/place/findplacefromtext/json", {
      params: {
        key: REACT_APP_GOOGLE_API_APPID,
        input: place,
        inputtype: "textquery",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default findPlaceRequest;
