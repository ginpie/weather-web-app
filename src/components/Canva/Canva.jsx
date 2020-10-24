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
  grid-template-columns: repeat(3, 1fr) 1.5fr 0.1fr;
  gap: 20px 40px;
  grid-template-rows: repeat(4, 23%);
`;

const Canva = () => (
  <Container>
    <Today />
    <ThreeDays />
    <PlaceToVisit />
    <Others />
  </Container>
);

export default Canva;
