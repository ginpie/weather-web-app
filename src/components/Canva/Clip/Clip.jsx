import React from "react";
import styled from "styled-components";

import getDataByGeo from "../../../apis/getDataByGeo";

const dark = "#0270c2";
const light = "#1fa1f1";

const Container = styled.div`
  min-height: 300px;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 100;
`;

const Box = styled.div`
  width: 120px;
  height: 190px;
  background: ${light};
  border-radius: 0 30px 30px 0;
  box-shadow: rgba(50, 50, 50, 0.5) 8px 35px 55px 5px;
`;

const Weather = styled.div`
  width: 120px;
  height: 95px;
  background: ${dark};
  border-radius: 0 30px 30px 15px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 80px;
`;

const Text = styled.p`
  font-size: 12px;
  color: #fff;
  margin: -15px 0 0 0;
`;

const TempText = styled.p`
  font-size: 50px;
  color: #fff;
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  text-align: center;

  &::after {
    content: "°C";
    color: #fff;
    font-size: 20px;
  }
`;

const Temp = styled.div`
  width: 120px;
  height: 95px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Side1 = styled.div`
  width: 80px;
  height: 80px;
  background: ${dark};
  clip-path: polygon(0% 100%, 0% 85%, 2% 92%, 5% 95%, 8% 98%, 15% 100%);
`;

const Side2 = styled.div`
  width: 80px;
  height: 80px;
  background: ${light};
  clip-path: polygon(0% 0%, 0% 15%, 2% 8%, 5% 5%, 8% 2%, 15% 0%);
`;

class Clip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: null, weather: null, temp: null };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      let long;
      let lat;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          long = position.coords.longitude;
          lat = position.coords.latitude;

          let weather;
          let temp;
          getDataByGeo(long, lat).then((data) => {
            weather = data.weather[0].description;
            temp = Math.round(Number(data.main.temp) - 273.15);
            this.setState({
              icon:
                "http://openweathermap.org/img/wn/" +
                data.weather[0].icon +
                "@2x.png",
              weather: weather,
              temp: temp,
            });
          });
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <Side1 />
        <Box>
          <Weather>
            <Icon src={this.state.icon} />
            <Text>{this.state.weather}</Text>
          </Weather>
          <Temp>
            <TempText>{this.state.temp}</TempText>
          </Temp>
        </Box>
        <Side2 />
      </Container>
    );
  }
}

export default Clip;
