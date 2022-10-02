import React, { Component } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";

class Header extends Component {
  render() {
    return (
      <div className="h-screen">
        <Navigation />
        <Hero />
      </div>
    );
  }
}

export default Header;
