import React from "react";
import Rectangle from "../assets/Rectangle 7.png";
import Rectangle2 from "../assets/Rectangle 9.png";
import Rectangle3 from "../assets/Rectangle 11.png";
import Rectangl4 from "../assets/Rectangle 13.png";
import Coffeblast from "../assets/coffee_blast2.png";

function CoofeStle() {
  return (
    <section className="px-6 md:px-20 md:py-2">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold text-[#603809] md:text-5xl font-playfair mb-4">
          Enjoy a new blend of coffee style
        </h2>
        <p className="text-sm text-[#1E1E1E] md:text-base max-w-2xl mx-auto">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card */}
        <div className=" ] text-center p-5 rounded-xl ">
          <img src={Rectangle} alt="" className="mx-auto  py-2" />
          <div className=" shadow-md bg-[#FFF9F1]">
            <h3 className="text-lg font-semibold text-[#603809] mb-1 ">
              Cappuccino
            </h3>
            <p className="text-sm text-[#603809] mb-1">Coffee 50% | Milk 50%</p>
            <p className="font-bold text-[#603809] mb-4">$8.50</p>
            <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2   font-medium hover:bg-gray-200 transition">
              Order Now
            </button>
          </div>
        </div>

        <div className="  text-center p-5 rounded-xl ">
          <img src={Rectangle2} alt="" className="mx-auto  py-2" />
          <div className="shadow-md bg-[#FFF9F1] ">
            <h3 className="text-lg  font-semibold text-[#603809] mb-1">
              Chai Latte
            </h3>
            <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
            <p className="font-bold text-[#603809] mb-4">$8.50</p>
            <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
              Order Now
            </button>
          </div>
        </div>

        <div className="  text-center p-5 rounded-xl ">
          <img src={Rectangle3} alt="" className="mx-auto py-2" />
          <div className="shadow-md bg-[#FFF9F1]  ">
            <h3 className="text-lg  font-semibold text-[#603809] mb-1">
              Macchiato
            </h3>
            <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
            <p className="font-bold text-[#603809] mb-4">$8.50</p>
            <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
              Order Now
            </button>
          </div>
        </div>

        <div className=" text-center p-5 rounded-xl ">
          <img src={Rectangl4} alt="" className="mx-auto py-2 " />
          <div className="shadow-md  bg-[#FFF9F1]">
            <h3 className="text-lg font-semibold text-[#603809] mb-1">
              Espresso
            </h3>
            <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
            <p className="font-bold text-[#603809] mb-4">$8.50</p>
            <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
              Order Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center ">
          <img
            src={Coffeblast}
            alt="Coffee Cup"
            // className="w-full  max-w-sm md:max-w-xl "
            className="absolute right-[10px] mt-10   -translate-y-1/2 w-72 md:w-96 z-0 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default CoofeStle;
