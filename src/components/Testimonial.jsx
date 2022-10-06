import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <div className="p-28 text-center">
        <h2 className="text-5xl mb-4 font-semibold	">What our client say</h2>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Testimonial</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl text-gray-600 leading-relaxed text-center w-4/5">
            "I just want to say thank you for the great anklets. I love the
            items I bought and the quality of them are really good. I will
            definitely buy more in the future."
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col tracking-wider">
              <label className="text-gray-600 font-bold text-base">
                Wendy Clara
              </label>
              <label className="text-gray-400 font-normal text-sm">
                Venice Resident
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
