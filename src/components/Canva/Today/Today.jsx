import React from "react";
import styled from "styled-components";

import getDataByGeo from "../../../apis/getDataByGeo";

const Container = styled.section`
  background-color: #eee;
  border-radius: 30px;
  grid-column: 1 / span 5;
  grid-row: 1 / span 2;
  position: relative;
`;

const Box = styled.div`
  width: 180px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 120px;
  padding-top: 100px;
  background-color: rgba(222, 230, 244, 0.6);
  color: #253237;
`;

const City = styled.div`
  display: grid;
  grid-template-columns: 30px 120px;
  grid-template-rows: repeat(2, 30px);
`;

const Area = styled.p`
  font-size: 13px;
  margin: 0 6px 0 0;
`;

const IconLoc = styled.i`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1;
  grid-column: 1;
  color: #0270c2;
`;

const Wrapper = styled.div`
  height: 20px;
  grid-row: 2;
  grid-column: 2;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 22px;
  grid-row: 1;
  grid-column: 2;
  display: flex;
  align-items: center;
  text-shadow: rgba(200, 200, 200, 0.5) 0 0 3px;
`;

const Flag = styled.img`
  width: 20px;
  grid-row: 2;
  grid-column: 1;
  align-self: top;
`;

const Details = styled.div`
  width: 80px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  z-index: 2;
`;

const Bar = styled.div`
  width: 4px;
  background-color: #0aa9ee;
  position: absolute;
  bottom: 10px;
  left: 38px;
`;
const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #0aa9ee;
  position: absolute;
  bottom: 7px;
  left: 32px;
`;

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myCover: null, details: null, feelTemp: null, color: null };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      let long;
      let lat;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          long = position.coords.longitude;
          lat = position.coords.latitude;

          getDataByGeo(long, lat).then((data) => {
            document.getElementById("myCity").innerHTML = data.name;
            document.getElementById("myCountry").innerHTML = data.sys.country;
            document
              .getElementById("myFlag")
              .setAttribute(
                "src",
                "https://www.countryflags.io/" +
                  data.sys.country +
                  "/flat/64.png"
              );

            let cover;
            if (data.weather[0].main === "rain") {
              cover =
                "https://res.cloudinary.com/dr99oorie/image/upload/v1603993041/weather-app%20assets/rain_hxwdjs.jpg";
            } else {
              const hours = new Date().getHours();
              const sunrise = new Date(data.sys.sunrise * 1000).getHours();
              const sunset = new Date(data.sys.sunset * 1000).getHours();
              console.log(hours, sunrise, sunset);
              if (hours > sunset || hours < sunrise) {
                cover =
                  "https://res.cloudinary.com/dr99oorie/image/upload/v1603993040/weather-app%20assets/night_d5cfjg.jpg";
              }
              if (hours === sunrise) {
                cover =
                  "https://res.cloudinary.com/dr99oorie/image/upload/v1603993039/weather-app%20assets/glow_uzswt5.jpg";
              }
              if (hours === sunset) {
                cover =
                  "https://res.cloudinary.com/dr99oorie/image/upload/v1603993041/weather-app%20assets/dusk_lnh7x2.jpg";
              }
              if (hours > sunrise && hours < sunset) {
                cover =
                  "https://res.cloudinary.com/dr99oorie/image/upload/v1603993040/weather-app%20assets/clear_ts3sqg.jpg";
              }
            }
            const feelTemp = Math.max(
              0.8 * (data.main.feels_like - 273.15) + 25,
              0
            );

            let color;
            if (data.main.feels_like < 10) {
              color = "#0aa9ee";
            }
            if (data.main.feels_like >= 10 && data.main.feels_like < 30) {
              color = "#ff7e0f";
            }
            if (data.main.feels_like < 10) {
              color = "#cf0404";
            }

            this.setState({
              myCover: {
                background: `url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              },
              details: data.weather[0].description,
              feelTemp: {
                height: `${feelTemp}px`,
                backgroundColor: color,
              },
              color: {
                backgroundColor: color,
              },
            });
          });
        });
      }
    });
  }

  render() {
    return (
      <Container style={this.state.myCover}>
        <Box>
          <City>
            <IconLoc className="fas fa-map-marker-alt" />
            <Text id="myCity"></Text>
            <Wrapper>
              <Area id="myCountry"></Area>
              <Flag id="myFlag" />
            </Wrapper>
          </City>

          <Details>
            <Img src="https://res.cloudinary.com/dr99oorie/image/upload/v1603996481/weather-app%20assets/thermometer_nyomza.png" />
            <Bar style={this.state.feelTemp} />
            <Circle style={this.state.color} />
          </Details>
        </Box>
      </Container>
    );
  }
}

export default Today;
