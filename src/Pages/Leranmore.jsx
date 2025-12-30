import React from "react";
import Cupimage from "../assets/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png";
import Coffeblast from "../assets/coffee_blast.png";
// import dark from '../assets/overlay.png'

function LearnMore() {
  return (
    <div>
      {/* <div className="w-56  "> */}
      {/* </div>  */}
      <section className="relative px-6 md:px-20 overflow-hidden ">
        {/* <img src={dark} alt="" className=" w-[400px]" />   */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text - Left */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold  text-[#603809] md:text-5xl font-playfair mb-4">
              Discover the best coffee
            </h2>
            <p className="text-sm text-[#1E1E1E] md:text-base leading-relaxed mb-6">
              Bean Scene is a coffee shop that provides you with quality coffee
              that helps boost your productivity and helps build your mood.
              Having a cup of coffee is good, but having a cup of real coffee is
              greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </p>
            <button className="bg-[#F9C06A] rounded-[40px] text-black px-6 py-2 font-medium hover:bg-gray-200 transition">
              Learn More
            </button>
            <div>
              {/* <img src={Coffeblast} alt="" /> */}
              <img
                src={Coffeblast}
                alt="Coffee Blast"
                className="absolute left-[-10px] mt-10   -translate-y-1/2 w-72 md:w-96 z-0 pointer-events-none"
              />
            </div>
          </div>

          {/* Image - Right */}
          <div className="md:w-1/2 flex justify-center ">
            <img
              src={Cupimage}
              alt="Coffee Cup"
              className="w-full  max-w-sm md:max-w-xl "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LearnMore;
