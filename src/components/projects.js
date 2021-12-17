import React, { Component } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import holodemo from "./media/A0355.jpg";
import posterdemo from "./media/posterdemo.gif";

const project_info = [
  {
    link: "/bookblog",
    img_src:
      "https://cdn.booktrust.org.uk/globalassets/images/illustrations/nadia-shireen-2-3/nadia-shireen-best-new-books-16x9.png?w=1200&h=675&quality=70&anchor=middlecenter",
    header: "lucky copper books",
    date: "june 2021",
    description:
      "personal book blog because i don't like sharing through goodreads",
  },

  {
    link: "/wordposterproject",
    img_src: posterdemo,
    header: "the little word poster",
    date: "feb 2021",
    description:
      "interactive poster that outputs a random phrase after hearing \
    a clap or seeing a face",
  },

  {
    link: "/spotifyproject",
    img_src: "https://miro.medium.com/max/3200/1*c0FaLqy4tcO1uuYLP8AWBw.jpeg",
    header: "spotify ultimate playlist",
    date: "june 2020",
    description:
      "using two user's spotify playlists and saved songs, this \
    project will create an ultimate playlist with songs from both \
    of their music libraries.",
  },

  {
    link: "/holoproject",
    img_src: holodemo,
    header: "holographic audio visualizer",
    date: "jan 2020",
    description:
      "this is a pseudo-hologram that syncs visuals to the current \
    music playing from SoundCloud.",
  },
];

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        <Grid columns={2} className="projects">
          {project_info.map((info) => (
            <Grid.Column width={8}>
              <Card centered href={info.link}>
                <Image src={info.img_src} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{info.header}</Card.Header>
                  <Card.Meta>{info.date}</Card.Meta>
                  <Card.Description>{info.description}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Projects;
