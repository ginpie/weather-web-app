import {
  REACT_APP_RAPID_IMAGE_API,
  REACT_APP_RAPID_IMAGE_API_APPID,
} from "../../apikey";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_RAPID_IMAGE_API,
});

function ImageSearch(query) {
  return instance
    .get("", {
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID_IMAGE_API_APPID,
        useQueryString: true,
      },
      params: {
        pageNumber: "1",
        pageSize: "1",
        q: query,
        autoCorrect: "false",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default ImageSearch;
