import { Building2, MapPin } from "lucide-react";
import aboutIcon1 from "../../assets/projectDetailTwo/abouticon1.png";
import aboutIcon2 from "../../assets/projectDetailTwo/abouticon2.png";
import aboutIcon3 from "../../assets/projectDetailTwo/abouticon3.png";

const ProjectAbout = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 px-6 md:px-16 lg:px-24">
      {/* Top Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-gray-300 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={aboutIcon1} alt="Project Logo" className="w-24 h-24 mb-4" />
        </div>

        {/* Apartment Info */}
        <div className="flex items-center gap-5">
          <img src={aboutIcon2} alt="Apartment Icon" className="w-12 h-12" />
        </div>

        {/* Location */}
        <div className="flex items-center gap-5">
          <img src={aboutIcon3} alt="Location Icon" className="w-12 h-12" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">
        {/* Left Content */}
        <div>
          <h2 className="text-[56px] leading-[1.2] font-medium text-[#1f1f1f]">
            Limited Edition Homes <br />
            Designed for Everyday Comfort
          </h2>

          <p className="text-[#6f6f6f] text-[28px] mt-6">
            Jadhavwadi, Chikhali, Pune
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-[34px] font-medium text-[#2b2b2b] mb-6">
              Key Highlights
            </h3>

            <ul className="space-y-4 text-[#707070] text-[24px] leading-relaxed">
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
        <div className="relative flex justify-center">
          <div className="overflow-hidden rounded-[50px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1400&auto=format&fit=crop"
              alt="Family"
              className="w-full max-w-[700px] h-[520px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Soft Glow Effect */}
          <div className="absolute inset-0 rounded-[50px] shadow-[0_0_100px_rgba(255,255,255,0.7)] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;