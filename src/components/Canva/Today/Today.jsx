import React from "react";
import styled from "styled-components";

const back =
  "https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1372&q=80";

const map =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1603434915/weather-app%20assets/iconfinder_opera_house_sydney_house_australia_architecture_landmark_travel_building_tourism_3465591_ybght9.svg";

const Container = styled.section`
  background-color: #fff;
  border-radius: 30px;
  grid-column: 1 / span 5;
  grid-row: 1 / span 2;
  position: relative;
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50px;
  left: 80px;
`;

const City = styled.div`
  display: grid;
  grid-template-columns: 30px 120px;
  grid-template-rows: repeat(2, 30px);
`;

const Area = styled.p`
  font-size: 12px;
  margin: 0;
  grid-row: 2;
  grid-column: 2;
`;

const IconLoc = styled.i`
  width: 30px;
  height: 30px;
  display: flex;
  color: #0270c2;
  align-items: center;
  justify-content: center;
  grid-row: 1;
  grid-column: 1;
`;

const Text = styled.div`
  color: #000;
  font-weight: 500;
  grid-row: 1;
  grid-column: 2;
`;

const Map = styled.div`
  width: 50px;
  height: 50px;
`;

const Today = ({ city }) => (
  <Container
    style={{
      background: `url(${back})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Box>
      <City>
        <IconLoc className="fas fa-map-marker-alt" />
        <Text>Sydney</Text>
        <Area>City in Australia</Area>
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

export default Today;
