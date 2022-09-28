import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="flex">
        <div className="w-2/4	flex justify-center items-center flex-col">
          <h1 className="text-6xl">Fashion as, unique as you are.</h1>
          <p>
            We believe in the power of individuality, and we work with
            independent designers around the world to make sure you have access
            to a curated selection of truly unique accessories.
          </p>
          <button>Discover the products</button>
        </div>
        <div className="w-2/4	flex justify-center items-center flex-col">
          <img src="/lavender-hat.png" alt="hat" />
        </div>
      </div>
    );
  }
}

export default Hero;
