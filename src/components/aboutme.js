import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import picnic from "./media/picnic.jpg";
import littlewomen from "./media/littlewomen.jpg";
import thacks from "./media/IMG_9621.JPG";
import swim from "./media/IMG_1274.jpg";
import fashion from "./media/fashion.JPG";
import maine from "./media/maine.JPG";
import banana from "./media/banana.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Grid className="intro-grid">
          <Grid.Column width={6}>
            <img src={picnic} alt="picnic pic" className="aboutme-img" />
          </Grid.Column>

          <Grid.Column width={9}>
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
          </Grid.Column>
        </Grid>

        <Grid columns={3} className="pic-grid">
          <Grid.Column>
            <Image src={littlewomen} />
            <small>cover photo for my hackathon team, the Little Women</small>
            <Image src={fashion} />
            <small>
              i thrifted and sewed this entire outfit (including the mask!)
            </small>
          </Grid.Column>
          <Grid.Column>
            <Image src={maine} />
            <small>
              i love bodies of water! here's a picture i took of a waterfall i
              visited this summer.
            </small>
            <Image src={thacks} />
            <small>
              shot by me at TartanHacks 2020, when I was a photographer for the
              event.
            </small>
          </Grid.Column>
          <Grid.Column>
            <Image src={swim} />
            <small>states high school swim meet</small>
            <Image src={banana} />
            <small>my favorite food is just ripe bananas!</small>
          </Grid.Column>
        </Grid>
        <div>
          <h2 className="interests-header">
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            other interests{" "}
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
          </h2>
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
