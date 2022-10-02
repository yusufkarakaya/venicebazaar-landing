import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="flex pl-64 pr-64">
        <div className="w-2/4	flex justify-center flex-col">
          <h1 className="text-8xl	pb-5 font-semibold ">
            Fashion as, unique as,
            <br /> you are.
          </h1>
          <p className="pb-3 ">
            We believe in the power of individuality, and we work with
            independent designers around the world to make sure you have access
            to a curated selection of truly unique accessories.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-100 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-[#EC368D] dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-52	"
          >
            Discover the products
          </button>
        </div>
        <div className="w-2/4	flex justify-center items-center flex-col">
          <img className="max-w-[45%] w-auto" src="/fashion.png" alt="hat" />
        </div>
      </div>
    );
  }
}

export default Hero;
