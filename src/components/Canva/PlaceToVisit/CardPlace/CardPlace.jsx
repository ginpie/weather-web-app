import React from "react";
import styled from "styled-components";

const Container = styled.a`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(70, 70, 70, 0.3) 5px 25px 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  text-decoration: none;
  &:hover {
    animation: pop 150ms both ease-in;
  }

  @keyframes pop {
    0% {
    }
    70% {
      transform: translate(3px, 4px) scale(0.95, 0.95);
    }
    100% {
      transform: translate(0, 0) scale(1, 1);
    }
  }
`;

const City = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px;
  text-shadow: rgba(10, 10, 10, 1) 1px 1px 5px;
`;

const IconLoc = styled.i`
  width: 30px;
  height: 30px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  grid-row: 1;
  grid-column: 1;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 0 10px;
  color: #fff;
`;

const CardPlace = ({ text, style, href }) => (
  <Container style={style} href={href} target="_blank">
    <City>
      <IconLoc className="fas fa-map-marker-alt" />
      <Text>{text}</Text>
    </City>
  </Container>
);

export default CardPlace;
