import React from "react";
import styled from "styled-components";

import Canva from "../Canva";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e3e8ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1400px;
  min-width: 1200px;
  min-height: 700px;
  max-height: 900px;
  background-color: #fff;
  border-radius: 30px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(10, 10, 10, 0.5) 0 100px 65px 0;
`;

function HomePage() {
  return (
    <Background>
      <Container>
        <Canva />
      </Container>
    </Background>
  );
}

export default HomePage;
