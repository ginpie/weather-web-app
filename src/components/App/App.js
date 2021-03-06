import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "../Homepage";

const App = () => {
  return (
    <BrowserRouter basename="/weather-web-app">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
