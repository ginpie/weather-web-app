import { REACT_APP_API_END } from "../apikey";

function getLocalWeather(element) {
  window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `${REACT_APP_API_END}&lon=${long}&lat=${lat}`;

        fetch(api).then((response) => {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }
          response.json().then((data) => {
            element.innerHTML = data.weather[0].main;
          });
        });
      });
    }
  });
}

export default getLocalWeather;
