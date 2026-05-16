import React, { useState } from "react";
import layout from "../../assets/projectDetailThree/layout.png";

const layouts = [
  {
    id: 1,
    type: "2 BHK",
    image: layout,
  },
  {
    id: 2,
    type: "3 BHK",
    image: layout,
  },
  {
    id: 3,
    type: "4 BHK",
    image: layout,
  },
];

const ProjectLayouts = () => {
  const [activeTab, setActiveTab] = useState("2 BHK");

  const activeLayout = layouts.find(
    (item) => item.type === activeTab
  );

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16 lg:px-24">
      {/* Top Button */}
      <button className="border border-[#b68b07] text-[#b68b07] px-10 py-3 rounded-xl text-lg font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
        Floor Plans & Layouts
      </button>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-16">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={activeLayout.image}
            alt={activeLayout.type}
            className="w-full max-w-[500px] object-contain hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-10">
            {layouts.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.type)}
                className={`px-12 h-[54px] rounded-xl border text-lg font-medium transition duration-300 ${
                  activeTab === item.type
                    ? "bg-[#b68b07] text-white border-[#b68b07]"
                    : "border-[#b68b07] text-[#b68b07] hover:bg-[#b68b07] hover:text-white"
                }`}
              >
                {item.type}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-5xl leading-tight font-medium text-[#1f1f1f]">
            Spacious Layouts Designed for Riverside Living
          </h2>

          <h3 className="text-4xl font-medium text-[#2b2b2b] mt-5">
            2, 3 & 4 BHK Apartments
          </h3>

          {/* Description */}
          <p className="text-[#6f6f6f] text-xl leading-relaxed mt-6 max-w-2xl">
            Thoughtfully planned homes that maximize space, natural
            light, and ventilation. Each layout is designed to offer
            comfort, openness, and a seamless living experience close
            to nature.
          </p>

          {/* Button */}
          <button className="mt-12 border border-[#b68b07] text-[#b68b07] px-12 h-[58px] rounded-xl text-lg font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-300 mt-20"></div>
    </section>
  );
};

export default ProjectLayouts;