import React from "react";
// import Coffeblastt from "../assets/path.png";
import bestprice from '../assets/best-price 1.png'
import coffeecup from '../assets/coffee-cup 1.png'
import coffebeans from '../assets/coffee-beans 1.png'
import webb from '../assets/breakfast.png'
// import Coffeblast from "../assets/coffee_blast.png";


function Differnet() {
  return (
    <div className="relative px-4 md:px-20 py-10">
      
      {/* Top Section */}
      <div className="text-center relative mb-10">
        {/* Background Image */}
        

        <h2 className="text-3xl md:text-5xl font-bold text-[#603809] font-playfair mb-4">
          Why are we different?
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          We don’t just make your coffee, we make your day!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="flex flex-col bg-[#FFEED8] items-center text-center p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={coffeecup} alt="" className="w-24 h-24 mb-4" />
          <h3 className="text-lg font-semibold text-[#603809] mb-1">Cappuccino</h3>
          <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
          <p className="font-bold mb-4">$40</p>
          <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={coffebeans} alt="" className="w-24 h-24 mb-4" />
          <h3 className="text-lg font-semibold text-[#603809] mb-1">Chai Latte</h3>
          <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
          <p className="font-bold mb-4">$40</p>
          <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-[#FFEED8] items-center text-center p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={bestprice} alt="" className="w-24 h-24 mb-4" />
          <h3 className="text-lg font-semibold text-[#603809] mb-1">Macchiato</h3>
          <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
          <p className="font-bold mb-4">$40</p>
          <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={webb} alt="" className="w-24 h-24 mb-4" />
          <h3 className="text-lg font-semibold text-[#603809] mb-1">Espresso</h3>
          <p className="text-sm mb-1">Coffee 50% | Milk 50%</p>
          <p className="font-bold mb-4">$40</p>
          <button className="bg-[#F9C06A] rounded-[40px] px-6 py-2 font-medium hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>
      </div>
   
    </div>
  );
}

export default Differnet;
