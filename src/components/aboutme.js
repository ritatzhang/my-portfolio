import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="aboutme-grid">
          <Cell col={4}>
            <img
              src="https://lh3.googleusercontent.com/Dv1N7sbaEMn3mo-5QourXFJevdrZMfkwJI3XUDGDEzFisVGBULATr9uYKn30F7ocf1ABV8mNPeZZ5HP6Uv3470MnLUnuUAZ10i-yZiVWCuB5SxmkXOmtRGxuJmq3bXWAvxpqsO5dPs5rDXQjgMr9vW8ssEy5vvfxH1G-SQu5-1FwhrEqvnVcMQFhB1Ivjie8ge9QBEZIa0QsklNstlvzXZ8VtHbepwnyj4iv8bOmC9H4_vV2O8cylwecMNpf4RYzfOPfX8aA6cQbE-QbGlav90nPNIrd3sLGu72gDNuZyPrVB1lXfDJfrz5jZZqVNxi6qiveo7gXNXjJe9dbNzpkyNFCF8mtrYXY6p7xg6I0xBtHtQHL-ldhn6k9mPN3r8mN2OxCHs_i6XoopLY1l4O2o9JFobQhiyDuu_AtVJnwH7QATbfT5UPaQUpj9mYvoLK89kYPORAIzNpCzcTHphJ9IBPxG68D_Nf9npLYDoDy5LbLR5UqdUUISrJOTAboeviHJf_VmkSS-72Qsjs0JaBPY_mNAeDRyfZqfzMPioHnUX6dj8hBuRXLlE000JkPJeM4ue3fT0RXQJ2s-ZtANK6INmvt-6U_YAWjpzOtxNoOg44tIbcU6Q9UeCyknr4QJOJVLSpHvObsyevVb9PyRp30ENbhkpqSjS80QfcrTBYKcjLVAh6YecCAtla9hxeCHoE=w2156-h1436-no?authuser=0"
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
