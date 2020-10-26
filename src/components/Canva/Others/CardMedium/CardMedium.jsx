import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(70, 70, 70, 0.2) 5px 5px 15px 0;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: 2fr 1fr;
`;

const IconBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dee6f4;
  border-radius: 20px 0 20px 0;
  grid-area: 1 / 1 / span 1 / span 1;
`;

const Icon = styled.img`
  width: 80%;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 1 / 2 / span 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Temp = styled.div`
  font-family: "Oswald", sans-serif;
  width: 45%;
  padding-right: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 40px;

  &::after {
    content: "°C";
    font-size: 18px;
  }
`;

const CityBox = styled.div`
  width: 60%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const City = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

const Country = styled.p`
  font-size: 14px;
  margin: 0;
  color: #555;
`;

const WindBox = styled.div`
  width: 80%;
  height: 30%;
  color: #aaa;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: 2 / 1 / span 1 / span 3;
  place-self: center;
`;

const Text = styled.p``;

const VerticalDivider = styled.div`
  width: 1px;
  height: 12px;
  background: #aaa;
`;

const VerticalDividerL = styled.div`
  width: 1px;
  height: 50px;
  background: #aaa;
`;

const CardMedium = ({ icon, hum, wind, speed, temp, city, country }) => {
  let windDirection;
  if (wind >= 338 && wind <= 22) {
    windDirection = "North";
  }
  if (wind >= 23 && wind <= 67) {
    windDirection = "Northeast";
  }
  if (wind >= 68 && wind <= 112) {
    windDirection = "East";
  }
  if (wind >= 113 && wind <= 157) {
    windDirection = "Southeast";
  }
  if (wind >= 158 && wind <= 202) {
    windDirection = "South";
  }
  if (wind >= 203 && wind <= 247) {
    windDirection = "Southwest";
  }
  if (wind >= 248 && wind <= 292) {
    windDirection = "West";
  }
  if (wind >= 293 && wind <= 337) {
    windDirection = "Northwest";
  }
  return (
    <Container>
      <IconBox>
        <Icon src={icon} />
      </IconBox>

      <TextBox>
        <Temp>{temp}</Temp>
        <VerticalDividerL />
        <CityBox>
          <City>{city}</City>
          <Country>{country}</Country>
        </CityBox>
      </TextBox>

      <WindBox>
        <Text>Humidity: {hum}%</Text>
        <VerticalDivider />
        <Text>{windDirection}</Text>
        <VerticalDivider />
        <Text>{speed}km/h</Text>
      </WindBox>
    </Container>
  );
};

export default CardMedium;
