import React from "react";
import styled from "styled-components";

import CardMedium from "./CardMedium";
import { otherData } from "./otherData";
import getWeatherByCity from "../../../apis/getWeatherByCity";
import { getCountryName } from "./isoCountries";

const Container = styled.section`
  width: 100%;
  grid-area: 2 / 4 / span 3 / span 1;
  align-self: end;
  z-index: 100;
  max-height: 700px;
  overflow: visible;

  /* -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.9, rgba(0, 0, 0, 1)),
    color-stop(1, rgba(0, 0, 0, 0))
  ); */
`;

class Others extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlaces: [],
    };
  }

  componentDidMount() {
    const tempData = [];
    otherData.forEach((i) => {
      getWeatherByCity(i.city).then((data) => {
        tempData.push(data);
        this.setState({ myPlaces: tempData });
      });
    });
  }

  render() {
    return (
      <Container>
        {this.state.myPlaces.map((i, e) => {
          return (
            <CardMedium
              icon={
                "http://openweathermap.org/img/wn/" +
                i.weather[0].icon +
                "@2x.png"
              }
              hum={i.main.humidity}
              wind={i.wind.deg}
              speed={i.wind.speed}
              temp={Math.round(i.main.temp - 273.15)}
              city={i.name}
              country={getCountryName(i.sys.country)}
              key={e}
            />
          );
        })}
      </Container>
    );
  }
}

export default Others;
