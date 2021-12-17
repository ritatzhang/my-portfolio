import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import build18 from "../media/build18.jpg";
import demo from "../media/visualizer.mp4";
import { FaYoutube } from "react-icons/fa";

class HoloAudioProject extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid className="intro-grid" columns={2}>
          <Grid.Column>
            <div className="project-text">
              <h1>Holographic Audio Visualizer Project</h1>
              <p>
                for Build18, a hardware hackathon at CMU, my team and I followed
                a Youtube tutorial (linked below) to create a pseudo-hologram.
                although we didn't win any awards, we had successfully completed
                our project by the end of the build week and accomplished a
                super cool visual effect!
              </p>
              <p>
                we used an LCD monitor and acrylic sheets for the hologram and
                PVC and wood to create a stand for everything. we used CAD to
                cut the acrylic and PVC, and a 3d printer to print fulstrums.
              </p>
              <div className="project-links">
                <a
                  href="https://www.youtube.com/watch?v=MrgGXQvAuR4&list=PL09MLL4-PyyaBruQVgzeJw_spyOt0q2eh&index=15"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <img src={build18} alt="mypic" className="demo-img" />
          </Grid.Column>
        </Grid>

        <div className="video-wrapper">
          <video className="videoTag" autoPlay loop muted>
            <source src={demo} type="video/mp4" />
          </video>
        </div>
        <div className="text-wrapper">
          <p className="text"> demo taken from original tutorial </p>
        </div>
      </div>
    );
  }
}

export default HoloAudioProject;
