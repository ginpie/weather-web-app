import React from "react";
import styled from "styled-components";

import CardMedium from "./CardMedium";
import { otherData } from "./otherData";

const Container = styled.section`
  width: 100%;
  border-radius: 30px;
  overflow-wrap: auto;
  grid-area: 2 / 4 / span 3 / span 1;
  align-self: end;
  z-index: 100;
`;

const Others = () => (
  <Container>
    {otherData.map((i, e) => {
      return (
        <CardMedium
          icon={i.icon}
          hum={i.hum}
          wind={i.wind}
          speed={i.speed}
          temp={i.temp}
          city={i.city}
          country={i.country}
          key={e}
        />
      );
    })}
  </Container>
);

export default Others;
