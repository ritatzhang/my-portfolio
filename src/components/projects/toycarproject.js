import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import frontcar from "../media/A0167.jpg";
import abovecar from "../media/A0159.jpg";
import { FaFile } from "react-icons/fa";
class ToyCarProject extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="intro-grid" columns={2}>
          <Grid.Column>
            <img src={frontcar} alt="mypic" className="poster-img" />
          </Grid.Column>

          <Grid.Column>
            <div className="project-text">
              <h1>the Little Women Car</h1>

              <p>
                for 2022's build18, the little women had a hard time deciding
                with what to build. we wanted to work on something that we could
                have fun with, something a bit silly, that brought our inner
                child. additionally, multiple of our members are part of cmr: a
                club at cmu that builds an f1 style race car. so, we settled on
                working on a modification for a toy car that gave it self
                driving capabilities.
              </p>

              <div className="project-links">
                <a
                  href="https://docs.google.com/document/d/1gav9cNJ35QHGptnb6zUqc_kzGJivRW8FG8dO6HY205g/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFile />
                </a>
              </div>
            </div>
          </Grid.Column>
        </Grid>
        <div className="text-wrapper">
          <div className="project-text">
            <p>
              1. open the remote control that came with the car and then open
              the buttons that controlled the car. <br />
              2. this exposed the wires so that we could connect those wires to
              our raspberry pi via a breadboard. <br />
              3. using the raspberry pi, we could control the output voltage to
              the wires. since buttons are essentially switches, adding voltage
              closes the switch and no voltage creates a break. this tells the
              car to start or stop. <br />
              4. we added sensors to the front of the car: this is where the
              self-driving comes into play. the sensors are also connected to
              our raspberry pi. <br />
              5. lastly, a program tells the car to start, stop, turn, and go
              based on the sensors.
            </p>
          </div>
          <img src={abovecar} alt="mypic" className="poster-img" />

          {/* 
            <div className="text-wrapper">
              <p className="text"> demo video of our final result </p>
            </div> */}
          <div className="project-text">
            <p>note the mentioned breadboard and mess of wires</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ToyCarProject;
