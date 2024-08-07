import React from "react";
import Image from "../../assets/heroimage.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-orange-500">Foods</span> Devlivered
          </h1>
          <Link to="/meals" className="w-[200px]">
            <h2 className="px-4 text-2xl sm:text-3xl md:text-4xl 
            lg:text-5xl font-bold text-gray-500 hover:text-orange-700">
              Explore
            </h2>
          </Link>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={Image}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Hero;
