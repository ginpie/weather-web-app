import React from "react";
import styled from "styled-components";

import Today from "./Today";
import ThreeDays from "./ThreeDays";
import PlaceToVisit from "./PlaceToVisit";
import Others from "./Others";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.2fr repeat(2, 1fr) 1.5fr 0.1fr;
  gap: 20px 30px;
  grid-template-rows: repeat(4, 23%);
`;

class Canva extends React.Component {
  render() {
    return (
      <Container>
        <Today />
        <ThreeDays />
        <PlaceToVisit />
        <Others />
      </Container>
    );
  }
}

export default Canva;
