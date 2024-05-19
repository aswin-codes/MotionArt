import React from "react";
import I from "../assets/motionarteffect-img5.png"
const Info = () => {
  return (
    <div className="px-5 pt-24 flex flex-wrap justify-around gap-5">
      <div className="max-w-2xl">
        <p className="text-4xl text-white font-medium pb-3">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </p>
        <p className="text-lg text-gray-500 pb-3">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="flex gap-3 bg-gradient-to-r from-bl1 to-or1 md:px-8 md:py-4  px-4 py-2 rounded-lg">
          <span className="text-white text-md md:text-lg">Purchase from Envato</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
      <div>
        <img src={I}/>
      </div>
    </div>
  );
};

export default Info;
