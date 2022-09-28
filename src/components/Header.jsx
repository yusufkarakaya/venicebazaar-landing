import React, { Component } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";

class Header extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Hero />
      </>
    );
  }
}

export default Header;
