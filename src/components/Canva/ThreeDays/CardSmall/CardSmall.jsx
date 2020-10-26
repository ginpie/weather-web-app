import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(70, 70, 70, 0.2) 5px 5px 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 25%;
`;

const TextBox = styled.div`
  width: 30%;
`;

const Date = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

const Weather = styled.p`
  font-size: 14px;
  margin: 0;
  color: #555;
`;

const Temp = styled.div`
  width: 35%;
  height: 105%;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const CardSmall = ({ icon, date, weather, tempMax, tempMin, bg }) => (
  <Container>
    <Icon src={icon} />
    <TextBox>
      <Date>{date}</Date>
      <Weather>{weather}</Weather>
    </TextBox>
    <Temp style={{ background: bg }}>
      {tempMax}° / {tempMin}°
    </Temp>
  </Container>
);

export default CardSmall;
