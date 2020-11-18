import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import reportWebVitals from "./reportWebVitals";
const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
reportWebVitals();
