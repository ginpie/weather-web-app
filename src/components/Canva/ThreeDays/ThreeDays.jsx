import React from "react";
import styled from "styled-components";

import CardSmall from "./CardSmall";
import get7ForecastByCity from "../../../apis/get7ForecastByCity";

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
`;

const Body = styled.div``;

class ThreeDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
  }

  componentDidMount() {
    get7ForecastByCity("los angeles")
      .then((data) => {
        const tempDays = [data.daily[0], data.daily[1], data.daily[2]];

        tempDays.forEach((i) => {
          // convert unix utc dt to local date
          const date = new Date(i.dt * 1e3);
          const options = { weekday: "long" };
          const localdate = new Intl.DateTimeFormat("en-US", options).format(
            date
          );
          i.localdt = localdate;
          // get icon by weather
        });
        this.setState({
          days: tempDays,
        });
      })
      .catch((e) => {});
  }

  render() {
    return (
      <Container>
        <Title>
          <b>3 Days</b> Forecast
        </Title>
        <Body>
          {this.state.days.map((i, e) => {
            return (
              <CardSmall
                icon={
                  "http://openweathermap.org/img/wn/" +
                  i.weather[0].icon +
                  "@2x.png"
                }
                date={i.localdt}
                weather={i.weather[0].main}
                tempMax={Math.round(i.temp.max - 273.15)}
                tempMin={Math.round(i.temp.min - 273.15)}
                bg={e === 0 ? "#0aa9ee" : "#dee6f4"}
                fcolor={e === 0 ? "#fff" : "#000"}
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
