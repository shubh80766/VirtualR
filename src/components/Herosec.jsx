import React from "react";
import vid1 from "../assets/video1.mp4";
import vid2 from "../assets/video2.mp4";

const Herosec = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:6xl lg:text-7xl text-center tracking-wide">
        VirtualR tool build
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-800 ">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR ideas to life with our
        intutive devlopment tools. Get Started today and turn your imagination
        into immersive reality.
      </p>
      <div className="flex justify-center my-10">
        <a href='#' className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Start for free</a>
        <a href='#' className=" px-4 py-3 mx-3 border rounded-md">Documentation</a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-500 shadow-orange-700 mx-2 my-4">
        <source src={vid1} type="video/mp4" />
        your browser does not support video.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-500 shadow-orange-700 mx-2 my-4">
        <source src={vid2} type="video/mp4" />
        your browser does not support video.
        </video>
      </div>
    </div>
  );
};

export default Herosec;
