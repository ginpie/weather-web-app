import { REACT_APP_GOOGLE_API, REACT_APP_GOOGLE_API_APPID } from "../../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_GOOGLE_API,
});

function SearchNearBy(long, lat) {
  return instance
    .get("/place/findplacefromtext/json", {
      params: {
        key: REACT_APP_GOOGLE_API_APPID,
        location: lat + "," + long,
        radius: 20000,
        rankby: "prominence",
        type: "tourist_attraction",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default SearchNearBy;
