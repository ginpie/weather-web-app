import React from "react";
import styled from "styled-components";

import getDataByGeo from "../../../apis/getDataByGeo";
import getWeatherByCity from "../../../apis/getWeatherByCity";
import Clip from "../Clip";
import SearchBar from "../../SearchBar";

const Container = styled.section`
  grid-column: 1 / span 5;
  grid-row: 1 / span 2;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #eee;
`;

const ClipBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -40px;
  top: -40px;
`;

const InfoBox = styled.div`
  width: 180px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 120px;
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

const NameBox = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 22px;

  text-shadow: rgba(200, 200, 200, 0.5) 0 0 3px;
`;

const IconEdit = styled.i`
  font-size: 15px;
  margin-left: 8px;
  color: #555;
  opacity: 0.3;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
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
    this.state = {
      myCover: null,
      myCity: null,
      myCountry: null,
      icon: null,
      weather: null,
      temp: null,
      details: null,
      feelTemp: null,
      color: null,
      searching: false,
    };
    this.searchPopUp = this.searchPopUp.bind(this);
    this.searchClose = this.searchClose.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.pressButton = this.pressButton.bind(this);

    this.searchRef = React.createRef();
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
            this.handleData(data);
          });
        });
      }
    });
  }

  handleData(data) {
    if (!data) {
      return;
    }
    this.setState({ myCity: data.name, myCountry: data.sys.country });
    document
      .getElementById("myFlag")
      .setAttribute(
        "src",
        "https://www.countryflags.io/" + data.sys.country + "/flat/64.png"
      );

    let weather = data.weather[0].description;
    weather = weather[0].toUpperCase() + weather.slice(1);
    const temp = Math.round(Number(data.main.temp) - 273.15);

    let cover;
    if (data.weather[0].main === "rain") {
      cover =
        "https://res.cloudinary.com/dr99oorie/image/upload/v1603993041/weather-app%20assets/rain_hxwdjs.jpg";
    } else {
      const hours = new Date().getHours();
      const sunrise = new Date(data.sys.sunrise * 1000).getHours();
      const sunset = new Date(data.sys.sunset * 1000).getHours();
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
    const feelTemp = Math.max(0.8 * (data.main.feels_like - 273.15) + 25, 0);

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
      icon:
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
      weather: weather,
      temp: temp,
    });
  }

  searchPopUp() {
    this.setState({ searching: true });
  }

  searchClose() {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        searching: false,
      });
    };
  }

  pressButton() {
    const city = this.searchRef.current.inputRef.current.innerHTML;
    getWeatherByCity(city).then((data) => {
      this.handleData(data);
    });

    this.setState({
      searching: false,
    });
  }

  pressEnter(e) {
    if (e.key !== "Enter") {
      return;
    }
    const city = this.searchRef.current.inputRef.current.innerHTML;
    getWeatherByCity(city).then((data) => {
      this.handleData(data);
    });

    this.setState({
      searching: false,
    });
  }

  render() {
    const {
      myCover,
      myCity,
      myCountry,
      icon,
      weather,
      temp,
      feelTemp,
      color,
      searching,
    } = this.state;

    return (
      <Container>
        <ClipBox>
          <Clip icon={icon} weather={weather} temp={temp} />
        </ClipBox>

        <Box style={myCover}>
          <InfoBox>
            <City>
              <IconLoc className="fas fa-map-marker-alt" />
              <NameBox>
                <Text>{myCity}</Text>
                <IconEdit onClick={this.searchPopUp} className="fas fa-pen" />
              </NameBox>
              <Wrapper>
                <Area>{myCountry}</Area>
                <Flag id="myFlag" />
              </Wrapper>
            </City>

            <Details>
              <Img src="https://res.cloudinary.com/dr99oorie/image/upload/v1603996481/weather-app%20assets/thermometer_nyomza.png" />
              <Bar style={feelTemp} />
              <Circle style={color} />
            </Details>
          </InfoBox>
        </Box>

        {searching && (
          <SearchBar
            onClose={this.searchClose()}
            buttonClick={this.pressButton}
            pressEnter={this.pressEnter}
            ref={this.searchRef}
          />
        )}
      </Container>
    );
  }
}

export default Today;
