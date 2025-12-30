import React from "react";
import Cup from "../assets/cup.png";
import Rectangular from "../assets/Rectangle 14.png";
import Rectangular1 from "../assets/Rectangle 16 (1).png";
import Coffebean from "../assets/coffee_bean.png";  

function CoffePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Rectangular1 - FULL BACKGROUND */}
      <img
        src={Rectangular}
        alt="background"    
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Rectangular overlay - OVERLAP Rectangular1 */}
      <img
        src={Rectangular1}
        alt="overlay"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

      {/* Content and Cup */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10 h-full">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-playfair mb-4">
            Get a chance to have an Amazing morning 
          </h2>
          <p className="mb-6 max-w-[400px] mx-auto md:mx-0 text-gray-300">
            We are giving you a one time opportunity to experience a better life
            with coffee.
          </p>
          <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>

        {/* RIGHT Cup */}
        <div className="relative flex justify-center items-end md:justify-end h-full">
          <img
            src={Cup}
            alt="cup"
            className="w-64 md:w-80 absolute bottom-0 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 md:right-20 z-30"
          />
          <img
            src={Coffebean}
            alt="coffee bean"
            className="w-32 md:w-48 absolute bottom-0 right-0 z-20"
          />
        </div>
      </div>
    </div>
  );
}

export default CoffePage;