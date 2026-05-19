/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import storyteam1 from "../../assets/ourStory/storyteam1.jpg";
import storyteam2 from "../../assets/ourStory/storyteam2.jpg";
import storyteam3 from "../../assets/ourStory/storyteam3.jpg";
import { s } from "framer-motion/client";

const teamMembers = [
  {
    id: 1,
    name: "Ajay Vijay",
    role: "Director & Founder",
    description:
      "Shakuntal Group is one of the leading group in the field of Construction and have 15 years of experience. We believe in Future Planning, Excellent Construction Quality, Best in Class Facilities.",
    image: storyteam1,
  },
  {
    id: 2,
    name: "Satish Gawade",
    role: "Director",
    description:
      "Delivering reliable and customer-focused developments with strong leadership and vision.",
    image: storyteam2,
  },
  {
    id: 3,
    name: "Arun Vijay",
    role: "Director",
    description:
      "Dedicated to building long-term value through quality construction and thoughtful planning.",
    image: storyteam3,
  },
];

const StoryTeam = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <section className="bg-[#EFE9D8] py-20 px-6 md:px-16 lg:px-24">

      {/* Top Button */}
      <button className="border border-[#997708] text-[#997708] px-10 py-3 rounded-xl text-sm font-medium mb-6 hover:bg-[#997708] hover:text-white transition duration-300">
        Our Team
      </button>

      {/* Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-15 items-start mb-14">

        {/* Left */}
        <h2 className="text-5xl leading-14 font-normal font-raleway">
          The People Behind <br />
          Every Space We Build
        </h2>

        {/* Right */}
        <p className="text-[#1D1C1C] text-[16px] leading-7 font-poppins font-[300] max-w-[730px]">
          Shakuntal Group is driven by a team focused on thoughtful planning,
          quality construction, and delivering spaces that offer long-term
          value and comfort. A dedicated team working together to deliver
          consistent quality and dependable developments.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {teamMembers.map((member) => {

          const isSelected = selectedMember.id === member.id;

          return (
            <React.Fragment key={member.id}>

              {/* Feature Card */}
              {isSelected && (
                <div
                  className="
                    bg-[#a88308]
                    rounded-[22px]
                    p-6
                    h-[385px]
                    flex
                    flex-col
                    justify-start
                    animate-[fadeSlide_.5s_ease]
                  "
                >



                  <p className="text-white text-sm font-[300] leading-4 mt-10 font-poppins">
                    {selectedMember.description}
                  </p>

                  <h3 className="text-white text-sm font-[400] leading-4 pt-10 font-raleway">
                    {selectedMember.name}
                  </h3>

                  <p className="text-white text-sm font-[400] leading-4 mt-1 font-raleway">
                    {selectedMember.role}
                  </p>
                </div>
              )}

              {/* Image Card */}
              <div
                onClick={() => setSelectedMember(member)}
                className="
                  cursor-pointer
                  transition-all
                  duration-500
                  ease-in-out
                  transform
                "
              >

                {/* Image */}
                <div
                  className={`relative rounded-[22px] overflow-hidden border-4 transition-all duration-500 ease-in-out ${isSelected
                    ? "border-[#a88308] shadow-[0_10px_40px_rgba(168,131,8,0.45)] scale-[1.02]"
                    : "border-transparent hover:scale-[1.01]"
                    }`}
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-[375px]
                      object-cover
                      transition-transform
                      duration-700
                      ease-in-out
                      hover:scale-105
                    "
                  />
                </div>

                {/* Bottom Content */}
                {!isSelected && (
                  <div className="pt-4 transition-all duration-500">
                    <h3 className="text-lg leading-4 font-poppins font-[400]">
                      {member.name}
                    </h3>
                    <p className="text-[#4f4f4f] text-sm mt-1 font-poppins font-[300]">
                      {member.role}
                    </p>
                  </div>
                )}

              </div>

            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default StoryTeam;