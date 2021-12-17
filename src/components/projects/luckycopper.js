import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import demo from "../media/bookblog.jpg";
import { FaGithub } from "react-icons/fa";

class BookProject extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="intro-grid" columns={2}>
          <Grid.Column>
            <div className="project-text">
              <h1>lucky copper book blog</h1>
              <p>
                i made this project solely because i have so many thoughts that
                i feel like i need to release into the world. although they're
                not necessarily deep or eloquent thoughts, i'm happy they live
                somewhere.
              </p>
              <p>
                this was also a good experiment with next.js and mdx. using the
                combination of the two, it's super easy for me to add new book
                reviews (although i still struggle with keeping it up to date).
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/ritatzhang/luckycopperbooks"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <img src={demo} alt="mypic" className="demo-img" />
          </Grid.Column>
        </Grid>

        <div class="demo-btn">
          <a
            href="https://luckycopperbooks.netlify.app/"
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
            i'm always looking for new books to read, so hit me with
            recomendations!
          </p>
        </div>
      </div>
    );
  }
}

export default BookProject;
