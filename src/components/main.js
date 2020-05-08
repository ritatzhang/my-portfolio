import React from "react";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
  </Switch>
);

export default Main;
