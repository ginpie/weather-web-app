import React from "react";
import styled from "styled-components";

import CardSmall from "./CardSmall";
import get7ForecastByCity from "../../../apis/get7ForecastByCity";
import weatherData from "./weatherData";

const Container = styled.section`
  background-color: #fff;
  border-radius: 30px;
  grid-column: 1;
  grid-row: 3;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  text-align: center;
`;

const Body = styled.div``;

class ThreeDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day1: null,
      day2: null,
      day3: null,
    };
  }

  componentDidMount() {
    get7ForecastByCity("beijing").then((data) => {
      this.setState({ day1: data.daily[0].weather[0].main });
    });
  }

  render() {
    return (
      <Container>
        <Title>
          <b>3 Days</b> Forecast
        </Title>
        <Body>
          {weatherData.map((i, e) => {
            return (
              <CardSmall
                icon={i.icon}
                date={i.date}
                weather={i.weather}
                tempMax={i.tempMax}
                tempMin={i.tempMin}
                bg={i.bg}
                key={e}
              />
            );
          })}
        </Body>
      </Container>
    );
  }
}

export default ThreeDays;
