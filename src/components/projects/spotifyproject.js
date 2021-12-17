import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import spotifyplaylist from "../media/spotifyplaylist.jpg";
import { FaGithub } from "react-icons/fa";

class SpotifyProject extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="intro-grid" columns={2}>
          <Grid.Column>
            <div className="project-text">
              <h1>Spotify Ultimate Playlist Project</h1>
              <p>
                also known as, ultimatify (does this name work? feedback is
                welcome!). using spotify's authorization window, this program
                will connect to you and a friend's spotify accounts to find
                shared songs and make the playlist. the end result is a
                collaborative playlist made on the first user's account and
                followed by the second user's account.
              </p>
              <p>
                i used python, flask, and spotipy, a python library for spotify,
                to complete this project. all code is documented on github.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/ritatzhang/spotify-playlist-maker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <img src={spotifyplaylist} alt="mypic" className="demo-img" />
          </Grid.Column>
        </Grid>

        <div class="demo-btn">
          <a
            href="http://spotify-ultimate-playlist.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button color="violet" href>
              try it here!
            </Button>
          </a>
        </div>

        <div className="text-wrapper">
          <p className="text">
            {" "}
            please be patient with the web app, it might take a bit of time to
            load!
          </p>
        </div>
      </div>
    );
  }
}

export default SpotifyProject;
