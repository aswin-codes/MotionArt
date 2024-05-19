import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="py-20 flex flex-wrap font-sora  justify-center lg:justify-start px-5 md:px-0">
      <div className=" p-2 mr-32">
        <div className="flex flex-col pl-2 lg:max-w-36">
          <span className="gradient-text mb-2">Transform Your Website</span>
          <p className="text-lg text-white">With Motion Art Effect</p>
        </div>
      </div>
      <div className="p-2 max-w-3xl">
        <div className="font-medium">
          <p className="text-white text-4xl  md:text-6xl mb-2">
            Attract Your Visitors Attention With Colorful
          </p>
          <span className="gradient-text text-2xl md:text-4xl ">
            Motion Art Effect
          </span>
        </div>
        <div className="mt-10">
          <p className="text-gray-400">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
