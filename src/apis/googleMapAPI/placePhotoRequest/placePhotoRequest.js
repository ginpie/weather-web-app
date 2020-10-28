import { REACT_APP_GOOGLE_API, REACT_APP_GOOGLE_API_APPID } from "../../apikey";
import findPlaceRequest from "../findPlaceRequest";
import placeDetailsRequest from "../placeDetailsRequest";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_GOOGLE_API,
});

async function placePhotoRequest(place) {
  let photoRef;
  let place_id;
  await findPlaceRequest(place).then((data) => {
    place_id = data.candidates[0].place_id;
  });
  await placeDetailsRequest(place_id).then((data) => {
    photoRef = data.result.photos[0].photo_reference;
  });

  return instance
    .get("/place/photo", {
      params: {
        key: REACT_APP_GOOGLE_API_APPID,
        photoreference: photoRef,
        maxheight: 1600,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default placePhotoRequest;
