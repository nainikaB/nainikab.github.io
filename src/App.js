import React, { Component } from "react";
import Home from "./Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./Footer";
// import "./App.scss";
import "./css/main.scss";

import SideBar from "./components/ToggleButton/SideBar";
import BackDrop from "./components/BackDrop";
import Nav from "./Nav";
import ResponsiveSkills from "./components/ResponsiveSkills";

class App extends Component {
  state = {
    sideBarOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };
  render() {
    let sideBar;
    let backDrop;
    if (this.state.sideBarOpen) {
      sideBar = <SideBar />;
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        {sideBar}
        {backDrop}

        <Nav drawerClickHandler={this.drawerToggleClickHandler} />

        <Home />
        <About />
        <Skills />
        <ResponsiveSkills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
