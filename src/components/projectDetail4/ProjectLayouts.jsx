/* eslint-disable no-unused-vars */
import { useState } from "react";
import shop1 from "../../assets/projectDetailFour/shop1.jpg";
import shop2 from "../../assets/projectDetailFour/shop2.jpg";
import shop3 from "../../assets/projectDetailFour/shop3.jpg";

const ProjectLayouts = () => {

  const shops = [shop1, shop2, shop3];

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16 lg:px-24">
      {/* Top Button */}
      <button className="border border-[#b68b07] text-[#b68b07] px-10 py-3 rounded-xl text-lg font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
        Shops
      </button>

      {/* Main Content */}
      <div className="gap-20 items-center mt-16">
        <div>
          <h2 className="text-5xl leading-[1.2] font-raleway">
            A Destination Trusted by Leading Brands
          </h2>
          <div className="flex items-center gap-10 mt-12">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="w-full max-w-[900px] h-[750px] overflow-hidden shadow-lg"
              >
                <img
                  src={shop}
                  alt={`Shop ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-300 mt-20"></div>
    </section>
  );
};

export default ProjectLayouts;