import React from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 40%;
  max-width: 800px;
  min-width: 320px;
  height: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 3px 10px 3px 30px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: rgba(10, 10, 10, 0.5) 0 20px 65px 0;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  padding: 0;
  font-size: 25px;
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
  constructor(props) {
    super(props);
    this.state = {};

    this.inputRef = React.createRef();
  }

  render() {
    const { onClose, buttonClick, pressEnter } = this.props;
    return (
      <SearchBox onClick={onClose}>
        <Container onClick={(event) => event.stopPropagation()}>
          <Input
            placeholder="Search weather by city name..."
            ref={this.inputRef}
            onKeyUp={pressEnter}
          ></Input>
          <Icon className="fas fa-search" onClick={buttonClick}></Icon>
        </Container>
      </SearchBox>
    );
  }
}

export default SearchBar;
