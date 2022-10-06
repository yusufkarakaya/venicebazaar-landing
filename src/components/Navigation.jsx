import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="justify-center bg-[#8a2be2] mb-14 md:justify-center md:pl-1 md:pr-1 sm:justify-center sm:pl-12 sm:pr-12 lg:pl-64 lg:pr-64">
        <div className="flex-col flex justify-between items-center pt-6 pb-6 lg:flex-row md:flex-row">
          <img src="/logo.png" alt="logo" />
          <div>
            <button
              type="button"
              className="hover:transition-all duration-500 focus:outline-none text-white bg-red-100 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-[#EC368D] dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-52	"
            >
              <a href="mailto:mukayllcinfo@gmail.com">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
