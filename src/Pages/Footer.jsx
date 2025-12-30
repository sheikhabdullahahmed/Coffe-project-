import React from "react";
import Cup from "../assets/pngwing 1.png";
import Cup1 from "../assets/pngwing 2.png";
import Rectangular from "../assets/Rectangle 14.png";
import Rectangular1 from "../assets/Rectangle 16 (1).png";

function Footer() {
  return (
    <div className="relative w-full  overflow-hidden">
      {/* FULL background */}
      <img
        src={Rectangular}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <img
        src={Rectangular1}
        alt="Overlay"
        className="absolute top-0 left-0 w-full  object-cover z-10"
      />

      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

      {/* Left cup image */}
      <img
        src={Cup}
        alt="Left Cup"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-24 md:w-32 z-20 pointer-events-none"
      />

      {/* Right cup image */}
      <img
        src={Cup1}
        alt="Right Cup"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-24 md:w-32 z-20 pointer-events-none"
      />

      {/* Center content */}
      <div className="relative z-30 text-center max-w-5xl mx-auto py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-playfair mb-4">
          Subscribe to get the Latest News
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          Don’t miss out on our latest news, updates, tips and special offers
        </p>

        {/* Input + Button */}
        <div className="flex justify-center items-center ">
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" w-106 h-12 px-2 text-left font-semibold bg-white  border-none outline-none text-gray-900"
          />
          <button className="bg-[#F9C06A]  text-[#603809] px-4 md:px-6 py-2 md:py-3  font-semibold">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
