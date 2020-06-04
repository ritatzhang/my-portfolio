import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  Button,
  CardActions,
  CardMenu
} from "react-mdl";
import gtownpic from "./gtownpic.jpg";

// uigradients

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={6}>
            <img src={gtownpic} alt="mypic" className="mypic-img" />
          </Cell>

          <Cell col={6}>
            <div className="banner-text">
              <h1>Rita Zhang</h1>
              <p>Hi, I'm Rita and these are my projects.</p>
              <div className="social-links">
                {/* github */}
                <a
                  href="https://github.com/ritatzhang"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>

                {/* linked in */}
                <a
                  href="https://www.linkedin.com/in/ritatzhang/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <Card
          className="spotifyProject-card"
          shadow={0}
          style={{ width: "512px", margin: "auto", fontFamily: "poppins" }}
        >
          <CardTitle
            style={{
              fontFamily: "Optima",
              color: "#fff",
              height: "176px",
              background:
                "url(https://miro.medium.com/max/3200/1*c0FaLqy4tcO1uuYLP8AWBw.jpeg) center / cover"
            }}
          >
            Spotify Ultimate Playlist Project
          </CardTitle>
          <CardText>
            using two user's spotify playlists and saved songs, this project
            will create an ultimate playlist with songs from both of their music
            libraries.
          </CardText>
          <CardActions border>
            <a href="/spotifyproject">DEMO</a>
            {/*
            <Button colored onclick="window.location.href = '/aboutme'">
              Demo
            </Button>*/}
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>

        <Card
          className="otherProject-card"
          shadow={0}
          style={{
            width: "512px",
            margin: "auto",
            marginBottom: "100px",
            fontFamily: "poppins"
          }}
        >
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
            }}
          >
            Welcome
          </CardTitle>
          <CardText>nothing to see here...</CardText>
          <CardActions border>
            <Button colored fontFamily="optima">
              Get Started
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
      </div>
    );
  }
}

export default Landing;
