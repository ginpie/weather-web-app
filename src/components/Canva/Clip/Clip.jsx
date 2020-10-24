import React from "react";
import styled from "styled-components";

const dark = "#0270c2";
const light = "#1fa1f1";

const Container = styled.div`
  min-height: 300px;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 100;
`;

const Box = styled.div`
  width: 120px;
  height: 190px;
  background: ${light};
  border-radius: 0 30px 30px 0;
  box-shadow: rgba(50, 50, 50, 0.5) 8px 35px 55px 5px;
`;

const Weather = styled.div`
  width: 120px;
  height: 95px;
  background: ${dark};
  border-radius: 0 30px 30px 15px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 80px;
`;

const Text = styled.p`
  font-size: 12px;
  color: #fff;
  margin: -15px 0 0 0;
`;

const TempText = styled.p`
  width: 120px;
  height: 95px;
  font-size: 50px;
  color: #fff;
  margin: 0;
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "°C";
    color: #fff;
    font-size: 20px;
  }
`;

const Temp = styled.div`
  width: 80px;
  height: 80px;
`;

const Side1 = styled.div`
  width: 80px;
  height: 80px;
  background: ${dark};
  clip-path: polygon(0% 100%, 0% 85%, 2% 92%, 5% 95%, 8% 98%, 15% 100%);
`;

const Side2 = styled.div`
  width: 80px;
  height: 80px;
  background: ${light};
  clip-path: polygon(0% 0%, 0% 15%, 2% 8%, 5% 5%, 8% 2%, 15% 0%);
`;

const Clip = ({ icon, weather, temp }) => (
  <Container>
    <Side1 />
    <Box>
      <Weather>
        <Icon src="https://res.cloudinary.com/dr99oorie/image/upload/v1603428277/weather-app%20assets/iconfinder_weather-02_1530391_lqsvis.svg" />
        <Text>Sunny</Text>
      </Weather>
      <Temp>
        <TempText>31</TempText>
      </Temp>
    </Box>
    <Side2 />
  </Container>
);

export default Clip;
