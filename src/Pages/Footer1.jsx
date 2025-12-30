import React from "react";
import Image1 from "../assets/iamge2.png";
import footerimage from "../assets/fotter_image.png";

const aboutLinks = ["Menu", "Features", "News & Blogs", "Help & Supports"];
const companyLinks = ["How we work", "Terms of service", "Pricing", "FAQ"];
const supportLinks = [
  "Contact",
  "Privacy Policy",
  "Refund Policy",
  "Documentation",
];

function Footer1() {
  return (
    <footer className="relative bg-[#1c1c1c] text-gray-300 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={footerimage}
        alt="footer background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-13">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LEFT */}
          <div>
            <img src={Image1} alt="logo" className="mb-4 w-32" />
            <p className="text-sm leading-relaxed max-h-[120px] overflow-hidden ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              {aboutLinks.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 text-center text-sm text-gray-400">
          © 2025 Coffee Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
