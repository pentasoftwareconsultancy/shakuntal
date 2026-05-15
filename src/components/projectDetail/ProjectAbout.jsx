import React from "react";
import { Building2, MapPin } from "lucide-react";

const ProjectAbout = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-16 lg:px-24">
      {/* Top Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-10 border-b border-gray-300">
        {/* Logo */}
        <div>
          <h2 className="text-[#2d2a73] text-5xl font-bold leading-none">
            Dwarka
          </h2>

          <p className="text-[#2d2a73] text-sm tracking-[2px] mt-2">
            2, 3 & 4 BHK LIMITED EDITION HOMES
          </p>
        </div>

        {/* Apartment Info */}
        <div className="flex items-center gap-4">
          <Building2 size={55} className="text-black" />

          <p className="text-2xl text-[#2b2b2b] font-medium">
            2, 3 & 4 BHK Riverside Apartments
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <MapPin size={55} className="text-black" />

          <p className="text-2xl text-[#2b2b2b] font-medium">
            Jadhavwadi, Chikhali, PCMC, Pune
          </p>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl leading-tight font-medium text-[#1f1f1f]">
            Limited Edition Homes <br />
            Designed for Everyday Comfort
          </h2>

          <p className="text-[#6d6d6d] text-2xl mt-6">
            Jadhavwadi, Chikhali, Pune
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-3xl font-medium text-[#2b2b2b] mb-6">
              Key Highlights
            </h3>

            <ul className="space-y-4 text-[#707070] text-xl leading-relaxed">
              <li>• 2, 3 & 4 BHK Spacious Residential Homes</li>

              <li>
                • Efficient Layouts with Maximum Space Utilization
              </li>

              <li>
                • Prime Location with Strong Connectivity
              </li>

              <li>
                • Lifestyle Amenities for Daily Convenience
              </li>

              <li>
                • Ideal for Families & Long-Term Living
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1400&auto=format&fit=crop"
              alt="Family"
              className="w-full h-[520px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Soft Glow */}
          <div className="absolute inset-0 rounded-[40px] shadow-[0_0_80px_rgba(255,255,255,0.5)] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;