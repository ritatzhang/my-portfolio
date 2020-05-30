import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import build18 from "./build18.jpg";
import littlewomen from "./littlewomen.jpg";
import thacks from "./IMG_9621.JPG";
import swim from "./IMG_1274.jpg";
class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="aboutme-grid">
          <Cell col={4}>
            <img src={build18} alt="build18pic" className="build18pic-img" />
          </Cell>

          <Cell col={6}>
            <div className="aboutme-text">
              <h1>Hi, I'm Rita.</h1>
              <p>
                I am currently pursuing a bachelor's degree at Carnegie Mellon
                University with a projected graudation date of May 2022.
                Sometimes, I think of ideas that I think would be cool, and then
                I try to code it. This is the culmination of my efforts. Not
                everything is perfect but I try my best! I am the human
                equivalent of the "I think I can" train. Feel free to reach out
                to me with any questions or tips!
              </p>
              <p>ritaz@andrew.cmu.edu</p>
            </div>
          </Cell>
        </Grid>

        <div>
          <h2 className="campusLife-header">Life on Campus</h2>
          <hr />
          <h3 className="hack-h">Hackathons!</h3>
          <img alt="" className="littlewomen-pic" src={littlewomen} />

          <hr />
          <h3 className="scabs-h">ScottyLabs</h3>
          <img alt="" className="thacks-pic" src={thacks} />

          <hr />
          <h3 className="swim-h">Club Swim</h3>
          <img alt="" className="swim-pic" src={swim} />

          <hr />
          <h2 className="interests-header">Interests</h2>
          <p className="interests">
            I enjoy Robinhood Snacks Daily, cereal and milk, the movie the Blind
            Side, and listening to music.
          </p>
          <hr />
        </div>
      </div>
    );
  }
}

export default About;
