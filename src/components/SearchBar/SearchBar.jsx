import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  min-width: 320px;
  height: 30px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 3px 10px 3px 20px;
  border-radius: 20px;
  overflow: hidden;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.i`
  font-size: 18px;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Input placeholder="Search weather by areas..."></Input>
          <Icon className="fas fa-search"></Icon>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
