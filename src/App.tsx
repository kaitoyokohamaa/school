import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import HomeDetailPage from "./components/Pages/HomeDetailPage";
import reportWebVitals from "./reportWebVitals";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home/:boardId" component={HomeDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
reportWebVitals();
