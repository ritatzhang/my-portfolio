import React, { Component } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import gtownpic from "./media/gtownpic.jpg";
import Typical from "react-typical";
import holodemo from "./media/A0355.jpg";
import posterdemo from "./media/posterdemo.gif";
import { FaGithub, FaSpotify, FaLinkedinIn } from "react-icons/fa";
// uigradients

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="intro-grid" columns={2}>
          <Grid.Column>
            <img src={gtownpic} alt="mypic" className="mypic-img" />
          </Grid.Column>

          <Grid.Column>
            <Grid.Row className="first-row">
              <h1>Rita Zhang 张瑞铜</h1>
            </Grid.Row>
            <Grid.Row>
              <p class="pre-animation">
                Hi, I'm Rita and{" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "welcome to my projects hub!",
                    3000,
                    "feel free to reach out to me!",
                    3000,
                    "I love Christmas music!",
                    3000,
                  ]}
                />
              </p>
            </Grid.Row>
            <Grid.Row>
              <div className="social-links">
                {/* github */}
                <a
                  href="https://github.com/ritatzhang"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>

                {/* linked in */}
                <a
                  href="https://www.linkedin.com/in/ritatzhang/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://open.spotify.com/user/1248626203"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaSpotify />
                </a>
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <Grid columns={2} className="projects">
          <Grid.Column>
            <Card centered href="/spotifyproject">
              <Image
                src="https://miro.medium.com/max/3200/1*c0FaLqy4tcO1uuYLP8AWBw.jpeg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Spotify Ultimate Playlist</Card.Header>
                <Card.Meta>June 2020</Card.Meta>
                <Card.Description>
                  using two user's spotify playlists and saved songs, this
                  project will create an ultimate playlist with songs from both
                  of their music libraries.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card centered href="/wordposterproject">
              <Image src={posterdemo} wrapped ui={false} />
              <Card.Content>
                <Card.Header>the Little Word Poster</Card.Header>
                <Card.Meta>Feburary 2021</Card.Meta>
                <Card.Description>
                  interactive poster that outputs a random phrase after hearing
                  a clap or seeing a face
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card centered href="/holoproject">
              <Image src={holodemo} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Holographic Audio Visualizer</Card.Header>
                <Card.Meta>January 2020</Card.Meta>
                <Card.Description>
                  this is a pseudo-hologram that syncs visuals to the current
                  music playing from SoundCloud.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>

        <div className="text-wrapper">
          <p className="text">
            {" "}
            thanks for visiting! made with 💜 using react + semantic ui
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
