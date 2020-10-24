import React from "react";
import styled from "styled-components";

import CardPlace from "./CardPlace";
import { placeData } from "./placeData";

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

const PlaceToVisit = () => (
  <Container>
    <Title>
      <b>Place to</b> Visit
    </Title>
    <Body>
      {placeData.map((i, e) => {
        return <CardPlace bg={i.bg} text={i.text} grid={i.grid} key={e} />;
      })}
    </Body>
  </Container>
);

export default PlaceToVisit;
