import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import gtownpic from "./media/gtownpic.jpg";
import gradient from "./media/gradient.jpg";
import Typical from "react-typical";
import { FaGithub, FaSpotify, FaLinkedinIn } from "react-icons/fa";
// uigradients
//  <Grid.Row className="first-row"></Grid.Row>
/*
<div>
            <img src={gtownpic} alt="mypic" className="mypic-img" />
            <div className="image-cropper ">
              <img src={gradient} alt="background gradient" class="rounded" />
            </div>
          </div>

          <img src={gtownpic} alt="mypic" className="demo-img" />
          */
class Landing extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h1 class="first-row">hi, i'm Rita 张瑞铜</h1>
          <p class="second-row">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "welcome to my website!",
                3000,
                "feel free to reach out to me!",
                3000,
                "i love Christmas music!",
                3000,
              ]}
            />
          </p>
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

          <img src={gradient} alt="background gradient" class="mypic-img" />
        </div>
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
