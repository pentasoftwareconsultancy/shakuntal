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
    <section className="bg-[#e8e2d4] py-20 px-6 md:px-16 lg:px-24">

      {/* Top Button */}
      <button className="border border-[#a88308] text-[#a88308] px-10 py-3 rounded-xl text-sm font-medium mb-6 hover:bg-[#a88308] hover:text-white transition duration-300">
        Our Team
      </button>

      {/* Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-14">

        {/* Left */}
        <h2 className="text-[55px] leading-[1.1] font-normal text-black">
          The People Behind <br />
          Every Space We Build
        </h2>

        {/* Right */}
        <p className="text-[#4f4f4f] text-[20px] leading-[1.8] max-w-[700px]">
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
              h-[420px]
              flex
              flex-col
              justify-start
              animate-[fadeSlide_.5s_ease]
            "
                >

                  <h3 className="text-white text-[34px] font-light leading-tight">
                    {selectedMember.name}
                  </h3>

                  <p className="text-white text-[18px] mt-1">
                    {selectedMember.role}
                  </p>

                  <p className="text-white text-[17px] leading-[1.6] mt-10">
                    {selectedMember.description}
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
                h-[420px]
                object-cover
                transition-transform
                duration-700
                ease-in-out
                hover:scale-105
              "
                  />
                </div>

                {/* Bottom Content */}
                <div className="pt-4 transition-all duration-500">

                  <h3 className="text-[32px] leading-none font-light text-black">
                    {member.name}
                  </h3>

                  <p className="text-[#4f4f4f] text-[18px] mt-1">
                    {member.role}
                  </p>

                </div>

              </div>

            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default StoryTeam;