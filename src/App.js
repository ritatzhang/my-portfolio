import React, { Component } from "react";
// import { useEffect } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import icon from "./components/media/favicon.ico";

const menuItems = ["projects", "about"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: "none",
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    const activeStyle = {
      fontSize: "18px",
      textDecoration: "underline",
      color: "black",
    };
    const inactiveStyle = { fontSize: "18px", color: "black" };
    return (
      <div className="demo-big-content">
        <Layout fixedHeader>
          {/* top nav bar */}
          <Header
            class="header-color"
            scroll
            title={
              <Link to="/" onClick={this._handleClick.bind(this, "none")}>
                <img src={icon} alt="mypic" className="title-icon" />
              </Link>
            }
            style={{
              fontFamily: "Red Hat Text",
              fontSize: "18px",
            }}
          >
            <Navigation>
              {menuItems.map((menuItem) => (
                <Link
                  to={"/" + menuItem}
                  style={
                    this.state.active === menuItem ? activeStyle : inactiveStyle
                  }
                  onClick={this._handleClick.bind(this, menuItem)}
                >
                  {menuItem}
                </Link>
              ))}
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
