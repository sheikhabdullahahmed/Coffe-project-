import React from "react";
import image from "../assets/image4.png";
import ladyimage from "../assets/lady.jpg";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import Coffe from "../assets/coffee_blast2.png";
// import Coffe2 from "../assets/coffee_blast.png";
import brown from '../assets/yalastha.png'


function Perfection() {
  return (
    <section className="relative py-8 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center md:mb-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#603809] font-playfair mb-4">
          Our coffee perfection feedback
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Our customers has amazing things to say about us
        </p>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center  ">
        {/* LEFT BOX */}
        <div className="relative bg-[#FFF9F1] p-6 md:p-10 rounded-xl shadow-lg max-w-3xl text-center md:text-left">
          {/* LEFT VECTOR */}
          <div className="w-10 h-10 bg-[#F9C06A] rounded-xl absolute -left-6 top-1/2">
            <img
              src={Vector}
              alt=""
              className="hidden  md:block absolute  top-1/2  -translate-y-1/2"
            />
          </div>

          {/* RIGHT VECTOR */}
          <div className="w-10 h-10 absolute bg-[#F9C06A] rounded-xl -right-6 top-1/2 ">
            <img
              src={Vector2}
              alt=""
              className="hidden md:block absolute -right-0 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* CONTENT */}
          <img src={image} alt="" className="mx-auto md:mx-0 mb-6" />

          <p className="text-gray-700 text-md mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset.....
          </p>

          <h4 className="text-xl text-center font-bold text-[#603809] font-playfair">
            Jonny Thomas
          </h4>
          <p className="text-gray-600 text-center mb-6">Project Manager</p>

          <img
            src={ladyimage}
            alt="ladyimagee"
            className="w-20 h-20  rounded-xl mx-auto"
          />
        </div>
      </div>

      {/* BOTTOM COFFEE IMAGES */}



      <img
        src={brown}
        alt=""
        className="absolute left-0  -bottom-[130px]     -translate-y-1/2 w-72 md:w-96 z-0 pointer-events-none"
      />

      {/* <div className="md:w-1/2 flex justify-center "> */}
      <img
        src={Coffe}
        alt="Coffee Cup"
        // className="w-full  max-w-sm md:max-w-xl "
        className="absolute right-[10px] top-35 -translate-y-1/2 w-72 md:w-96 z-0 pointer-events-none"
      />
     
      {/* </div> */}
    </section>
  );
}

export default Perfection;
