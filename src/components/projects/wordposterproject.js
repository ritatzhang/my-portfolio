import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import posterpic from "../media/posterpic.png";
import { FaGithub, FaFile } from "react-icons/fa";
class WordPosterProject extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="intro-grid" columns={2}>
          <Grid.Column>
            <img src={posterpic} alt="mypic" className="poster-img" />
          </Grid.Column>

          <Grid.Column>
            <div className="project-text">
              <h1>the Little Word Poster</h1>
              <p>
                for build18 2021 (a hardware hackathon held at cmu), my team and
                i, dubbed the little women, built an interactive poster that
                lights up to say “You are a [adjective] [noun],” where the
                adjective and noun are randomly picked from a set of
                pre-determined adjectives and nouns. to activate a change in the
                poster, a user makes a loud sound (usually a clap), or stands in
                front of our webcam, which detects faces.
              </p>
              <p>
                to build this, we used CAD (laser cutting), Adafruit, Neopixels,
                RaspberryPi, and PythonCV. links to our project documentation
                and code can be found below.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/irisdongg/Build18_2021"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://docs.google.com/document/d/15R7kgJNFNTiq9JL7dEuP_pxtN_QB9z6VEj1YKlFb-Tw/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFile />
                </a>
              </div>
            </div>
          </Grid.Column>
        </Grid>

        <div class="video-wrapper">
          <iframe
            //id="poster-demo"
            className="videoTag"
            title="demo"
            src="https://drive.google.com/file/d/1ThSYeSAQ0xaNRx6QTxRIDyXL3XdEhkdE/preview"
            width="640"
            height="480"
          ></iframe>
        </div>

        <div className="text-wrapper">
          <p className="text"> demo video of our final result </p>
        </div>
      </div>
    );
  }
}

export default WordPosterProject;
