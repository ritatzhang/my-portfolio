import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="aboutme-grid">
          <Cell col={4}>
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/96697593_3759070107501781_5984754515696418816_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=kuZaE7pJG8QAX9vug1D&_nc_ht=scontent-iad3-1.xx&oh=86099032f0d56d32b0812a9f93fe197c&oe=5EDAF8C4"
              alt="build18pic"
              className="build18pic-img"
            />
          </Cell>

          <Cell col={6}>
            <div className="aboutme-text">
              <h1>Hi, I'm Rita.</h1>
              <p>
                I am currently pursuing a bachelor's degree at Carnegie Mellon
                University with a projected graudation date of May 2022.
                Sometimes, I think of ideas that I think would be cool, and then
                I try to code it. This is the culmination of my efforts. Not
                everything is perfect but I try my best! I am the human
                equivalent of the "I think I can" train. Feel free to reach out
                to me with any questions or tips!
              </p>
              <p>ritaz@andrew.cmu.edu</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
