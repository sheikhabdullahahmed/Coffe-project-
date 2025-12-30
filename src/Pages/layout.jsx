import React from "react";
import Coffe2 from "../assets/coffee_image.png";
import Coffe from "../assets/Coffee.png";

function Layout() {
  return (
    <section className="relative h-screen w-full">
      
      {/* Background Full Screen Image */}
      <img
        src={Coffe2}
        alt="Coffee Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-xl text-white">
          <p className="text-lg md:mb-8 font-playfair ">
            We’ve got your morning covered with
          </p>

          <img
            src={Coffe}
            alt="Coffee Text"
            className="w-56 mb-5"
          />

          <p className="text-sm leading-relaxed mb-6 font-playfair">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>

          <button className="bg-[#F9C06A] rounded-[40px] text-black mb-4 px-6 py-2 md:mt-5   font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Layout;
