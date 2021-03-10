import React from "react";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import { Switch, Route } from "react-router-dom";
import SpotifyProject from "./projects/spotifyproject";
import HoloAudioProject from "./projects/audioproject";
import WordPosterProject from "./projects/wordposterproject";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/spotifyproject" component={SpotifyProject} />
    <Route exact path="/holoproject" component={HoloAudioProject} />
    <Route exact path="/wordposterproject" component={WordPosterProject} />
  </Switch>
);

export default Main;
