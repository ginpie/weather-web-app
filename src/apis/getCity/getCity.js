import { REACT_APP_API_END } from "../apikey";

function getCity(myCity, myCountry, myFlag) {
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
            myCity.innerHTML = data.name;
            myCountry.innerHTML = "@" + data.sys.country;
            myFlag.setAttribute(
              "src",
              "https://www.countryflags.io/au/flat/64.png"
            );
            console.log(myFlag);
          });
        });
      });
    }
  });
}

export default getCity;
