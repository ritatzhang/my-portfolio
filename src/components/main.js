import React from "react";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Projects from "./projects";
import { Switch, Route } from "react-router-dom";
import SpotifyProject from "./projects/spotifyproject";
import HoloAudioProject from "./projects/audioproject";
import WordPosterProject from "./projects/wordposterproject";
import BookProject from "./projects/luckycopper";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={AboutMe} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/spotifyproject" component={SpotifyProject} />
    <Route exact path="/holoproject" component={HoloAudioProject} />
    <Route exact path="/wordposterproject" component={WordPosterProject} />
    <Route exact path="/bookblog" component={BookProject} />
  </Switch>
);

export default Main;
