import React from "react";
import styled from "styled-components";

import CardPlace from "./CardPlace";
import { placeData } from "./placeData";
import getPlaceByGeo from "../../../apis/getPlaceByGeo";

const Container = styled.section`
  background-color: #fff;
  border-radius: 30px;
  grid-column: 2 / span 2;
  grid-row: 3 / span 2;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  text-align: left;
`;

const Body = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

class PlaceToVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myPlaces: [] };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      let long;
      let lat;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          long = position.coords.longitude;
          lat = position.coords.latitude;

          getPlaceByGeo(long, lat).then((data) => {
            let a = [];
            const temp = data.features;
            temp.slice(Math.max(temp.length - 3, 0)).forEach((i) => {
              a.push(i.properties.name);
            });
            this.setState({ myPlaces: a });
          });
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <Title>
          <b>Place to</b> Visit
        </Title>
        <Body>
          {this.state.myPlaces.map((i, e) => {
            return (
              <CardPlace
                bg={placeData[e].bg}
                text={i}
                grid={placeData[e].grid}
                key={e}
              />
            );
          })}
        </Body>
      </Container>
    );
  }
}

export default PlaceToVisit;
