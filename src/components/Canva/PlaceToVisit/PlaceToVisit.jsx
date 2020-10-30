import React from "react";
import styled from "styled-components";

import CardPlace from "./CardPlace";
import getPlaceByGeo from "../../../apis/getPlaceByGeo";
import ImageSearch from "../../../apis/RapidAPI/ImageSearch";

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

const CardBox = styled.div`
  width: 100%;
  height: 100%;
`;

class PlaceToVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlaces: [],
      myPhotos: [],
    };
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
            let places = [];
            const temp = data.features;
            temp.slice(Math.max(temp.length - 3, 0)).forEach((i) => {
              places.push(i.properties.name);
            });
            this.setState({ myPlaces: places });

            // get photos of places
            let photos = [];
            places.forEach(async (i, e) => {
              let img = await ImageSearch(i);
              if (img) {
                const image = img.value[0].url;
                const style = {
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                };
                photos.push(style);

                this.setState({ myPhotos: photos });
              }
            });
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
          <CardBox style={{ gridArea: "1 / 1 / span 2 / 1" }}>
            <CardPlace
              style={this.state.myPhotos[0]}
              text={this.state.myPlaces[0]}
              href={
                "https://www.google.com/search?safe=active&q=" +
                this.state.myPlaces[0]
              }
            />
          </CardBox>
          <CardBox style={{ gridArea: "1 / 2 / 1 / 2" }}>
            <CardPlace
              style={this.state.myPhotos[1]}
              text={this.state.myPlaces[1]}
              href={
                "https://www.google.com/search?safe=active&q=" +
                this.state.myPlaces[1]
              }
            />
          </CardBox>
          <CardBox style={{ gridArea: "2 / 2 / 2 / 2" }}>
            <CardPlace
              style={this.state.myPhotos[2]}
              text={this.state.myPlaces[2]}
              href={
                "https://www.google.com/search?safe=active&q=" +
                this.state.myPlaces[2]
              }
            />
          </CardBox>
        </Body>
      </Container>
    );
  }
}

export default PlaceToVisit;
