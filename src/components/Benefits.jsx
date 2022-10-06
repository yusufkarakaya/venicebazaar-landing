import React, { Component } from "react";

class Benefits extends Component {
  render() {
    return (
      <div className="flex justify-center gap-32 bg-[#f7f7f7]	p-40 flex-col sm:flex-col md:flex-col lg:flex-row	">
        <div className="flex justify-center hover:text-white">
          <div className="block p-6 shadow-lg bg-white max-w-sm transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 hover:text-white">
            <div className="text-center p-6">
              <i className="fas fa-hand-sparkles fa-4x"></i>
            </div>
            <h5 className="text-center text-xl leading-tight font-medium mb-2 ">
              HandCrafted
            </h5>
            <p className="text-center">
              Beautifully crafted by hand in our own workshop.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="block p-6 shadow-lg bg-white max-w-sm transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#8a2be2] duration-300 hover:text-white">
            <div className="text-center p-6">
              <i className="fa-solid fa-fingerprint fa-4x"></i>
            </div>
            <h5 className="text-center text-xl leading-tight font-medium mb-2">
              Unique
            </h5>
            <p className="text-center mb-4">
              Your combination of creativity, passion and intuition creates
              something remarkable: A unique idea that's just right for your
              business.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="block p-6 shadow-lg bg-white max-w-sm transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 hover:text-white">
            <div className="text-center p-6">
              <i className="fa-regular fa-star fa-4x"></i>
            </div>
            <h5 className="text-center text-xl leading-tight font-medium mb-2">
              Fashion
            </h5>
            <p className="text-center ">
              If you are looking for a stylish, comfortable lightweight summer
              dress, this one is for you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
