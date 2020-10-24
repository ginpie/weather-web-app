import React from "react";
import styled from "styled-components";

import Canva from "../Canva";
import Clip from "../Canva/Clip";
import SearchBar from "../SearchBar";

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
`;

function HomePage() {
  return (
    <Background>
      <SearchBar />
      <Container>
        <Clip />
        <Canva />
      </Container>
    </Background>
  );
}

export default HomePage;
