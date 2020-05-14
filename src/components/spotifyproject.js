import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import spotifyplaylist from "./spotifyplaylist.jpg";

class SpotifyProject extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="spotifyproject-grid">
          <Cell col={6}>
            <div className="spotifyproject-text">
              <h1>Spotify Ultimate Playlist Project</h1>
              <p>
                also known as, ultimatify (does this name work? feedback is very
                appreciated). using spotify's authorization window, this program
                will connect to you and a friend's spotify accounts to find
                shared songs and make the playlist. the end result is a
                collaborative playlist made on the first user's account and
                followed by the second user's account. i used python, flask, and
                spotipy, a python library for spotify, to complete this project.
                all code is documented on github.
              </p>
              <div className="spotifyproject-links">
                {/* github */}
                <a
                  href="https://github.com/ritatzhang/spotify-playlist-maker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>

          <Cell col={6}>
            <img
              src={spotifyplaylist}
              alt="mypic"
              className="spotifyplaylist-img"
            />
          </Cell>
        </Grid>

        <div class="spotifyproject-btn">
          <a
            href="http://spotify-ultimate-playlist.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button raised accent ripple>
              Create Playlist
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default SpotifyProject;
