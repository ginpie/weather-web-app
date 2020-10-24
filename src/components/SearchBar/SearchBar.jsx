import React from "react";
import styled from "styled-components";
require("dotenv").config();

const API_END =
  "https://api.openweathermap.org/data/2.5/weather?APPID=6d1b7c840f66535cfaeba3f43db5c3b2";

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

const W = styled.h2`
  width: 100px;
  height: 50px;
  border: solid #000 1px;
`;

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `${API_END}&lon=${long}&lat=${lat}`;

      fetch(api).then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then((data) => {
          document.getElementById("mycity").innerHTML = data.weather[0].main;
        });
      });
    });
  }
});

const SearchBar = () => {
  return (
    <div>
      <W id="mycity"></W>
      <Container>
        <Input placeholder="Search weather by areas..."></Input>
        <Icon className="fas fa-search"></Icon>
      </Container>
    </div>
  );
};

export default SearchBar;
