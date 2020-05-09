import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  Button,
  CardActions,
  CardMenu,
  IconButton
} from "react-mdl";
// uigradients

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={4}>
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/95961247_3759069204168538_926529659561050112_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=cytcw8x-jcgAX-oDJ_N&_nc_ht=scontent-iad3-1.xx&oh=74781c331fae9574355e5098fdcded3f&oe=5ED9F5E8"
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
        <Card
          className="spotifyProject-card"
          shadow={0}
          style={{ width: "512px", margin: "auto" }}
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
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card
          className="otherProject-card"
          shadow={0}
          style={{ width: "512px", margin: "auto" }}
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
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Landing;
