import React from "react";
import styled from "styled-components";

import getDataByGeo from "../../../apis/getDataByGeo";
import getImageByCity from "../../../apis/getImageByCity";

const map =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1603434915/weather-app%20assets/iconfinder_opera_house_sydney_house_australia_architecture_landmark_travel_building_tourism_3465591_ybght9.svg";

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
  background-color: rgba(222, 230, 244, 0.7);
  color: #253237;
`;

const City = styled.div`
  display: grid;
  grid-template-columns: 30px 120px;
  grid-template-rows: repeat(2, 30px);
`;

const Area = styled.p`
  font-size: 12px;
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
  font-weight: 500;
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

const Map = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 40px;
`;

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myCover: null };
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
            getImageByCity(data.name).then((imgData) => {
              const image =
                imgData.results[Math.floor(Math.random() * 5)].urls.regular;
              this.setState({
                myCover: {
                  background: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                },
              });
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

          <Map
            style={{
              background: `url(${map})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Container>
    );
  }
}

export default Today;
