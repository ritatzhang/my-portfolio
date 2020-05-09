import React from "react";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import { Switch, Route } from "react-router-dom";
import SpotifyProject from "./spotifyproject";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/spotifyproject" component={SpotifyProject} />
  </Switch>
);

export default Main;
