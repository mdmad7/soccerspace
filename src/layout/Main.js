import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Team from "../pages/Team";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team/:id" component={Team} />
      </Switch>
    </div>
  );
};

export default Main;
