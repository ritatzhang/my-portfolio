import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// uigradients

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={4}>
            <img
              src="https://lh3.googleusercontent.com/UCr69wFOkbzV4J-uaWqd_MB8daSJhc-oioTtGaGgfGxkNTgBWWoGVCTJ3t_ybl3DXHUt8HQ7JCuACn9CLWTLLIC5tAIEUVWqNjTaH_oaFpYl5aZwAp1gBJdEtGa1x-lpCRKykUvSsMv0qtvzOeqKMZ9O6eWwlJTaD64ZMcuBeek6qKSZrVAKsXguhKBfjDQUBYXTUJC1AGHBQe3NDdmzr6Of-UWodeNDeizew2PkqeWv06mEZYcRFxynz0EUYYulUqi6qOhjimEqJo8jEF1nuXTC35ZXEIHBFUppWKxYSvdRiKqdpxiC_jY8QKK3IjPjsSxBQPGF7JlqDNmtDaV3eZrnJy8wHLAiK4apXjRMB1yZDbuXCXXcRsGmha63-4G2zk5AXWVM8-66dJvOJ1nQRy_EseQNs4XBJ2NLeTelMg4Rsz7kD6IfpRuSjJi5xQqhRHZ4il8W5uSC4PsXGVPoAztC2qJ_TLWCVrWD45S_EwcDdwqk39oKj_8R2VdctV4YO3BRyj45pdGLQaZTHzFh_CLvp3zjX4agDTwzzXxO6CJS90w7NtaCwXJ_RFHp8oL5TtLlFU9XJP-NeZ53v-1hg6e-siTSzBsdQwBZOScXUGZ8OaHlSuNGkG-rOTmvqwey6aGLra3pMuPJoTN6M4ff39yWrwL0sbwoXF29XEthx2fD5GxlJPbve_WfBYkMiA=w2048-h1365-no?authuser=0"
              alt="mypic"
              className="mypic-img"
            />
          </Cell>

          <Cell col={4}>
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
      </div>
    );
  }
}

export default Landing;
