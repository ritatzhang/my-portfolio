import React, { Component } from "react";
import { useEffect } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          {/* top nav bar */}
          <Header
            className="header-color"
            scroll
            title=" "
            Text
            style={{ fontFamily: "Oxygen", fontWeight: "bold" }}
          >
            <Navigation>
              <Link to="/">Home</Link>
            </Navigation>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Header>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
