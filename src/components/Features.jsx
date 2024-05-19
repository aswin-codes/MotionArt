import React from "react";
import I1 from "../assets/motionarteffect-img9.png";
import I2 from "../assets/motionarteffect-img6.png";
import I3 from "../assets/motionarteffect-img7.png";

const Features = () => {
  return (
    <div className="my-24 mx-5 ">
      <div className="flex flex-col items-center">
        <h1 className="text-xl max-w-lg text-center sm:text-2xl text-white font-medium mb-6">
          An All-Round Plugin With Powerful Features
        </h1>
        <p className="max-w-lg text-md  text-gray-400 text-center mb-6">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-5">
        <div className="flex-1 w-full min-w-72 bg-gradient-to-b from-lg1 to-lg2 border border-bd rounded-xl m-2 px-7 py-10">
          <img src={I1} alt="Img" className="-mx-9"/>
          <h1 className="font-semibold text-xl text-white mb-2">Light Weight</h1>
          <p className="text-gray-400 text-lg">Motion Art for Elementor is designed to be lightweight.</p>
        </div>
        <div className="flex-1 w-full min-w-72 bg-gradient-to-b from-lg1 to-lg2 border border-bd rounded-xl m-2 px-7 py-10">
          <img src={I2} alt="Img" className="-mx-9"/>
          <h1 className="font-semibold text-xl text-white mb-2">100% Responsive</h1>
          <p className="text-gray-400 text-lg">Create a consistent visual experience across all devices.</p>
        </div>
        <div className="flex-1 w-full min-w-72 bg-gradient-to-b from-lg1 to-lg2 border border-bd rounded-xl m-2 px-7 py-10">
          <img src={I3} alt="Img" className="-mx-9"/>
          <h1 className="font-semibold text-xl text-white mb-2">User Friendly Interface</h1>
          <p className="text-gray-400 text-lg">Ensure a smooth experience for both applicants and administrators.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
