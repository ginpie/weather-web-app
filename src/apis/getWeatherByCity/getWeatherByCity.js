const getWeatherByCity = ({ city }) =>
  fetch(process.env.REACT_APP_, {
    method: "GET",
    body: JSON.stringify({
      city,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

export default getWeatherByCity;
