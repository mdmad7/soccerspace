import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from '../pages/Home'

const Main = () => {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
