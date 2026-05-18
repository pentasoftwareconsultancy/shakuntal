import aboutIcon1 from "../../assets/projectDetailOne/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailOne/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailOne/aboutIcon3.png";
import about from "../../assets/projectDetailOne/about-modified.png";

const ProjectAbout = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 px-6 md:px-16 lg:px-24">
      {/* Top Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-gray-300 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={aboutIcon1} alt="Project Icon" className="w-38 h-22" />
        </div>

        {/* Apartment Info */}
        <div className="flex items-center gap-5">
          <img src={aboutIcon2} alt="Apartment Icon" className="w-52 h-12" />
        </div>

        {/* Location */}
        <div className="flex items-center gap-5">
          <img src={aboutIcon3} alt="Location Icon" className="w-52 h-12" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">
        {/* Left Content */}
        <div>
          <h2 className="text-[56px] leading-[1.2] font-raleway font-[400]">
            Riverside Living Designed for a Better Everyday
          </h2>

          <p className="text-[#6B6B6B] text-lg font-poppins mt-6">
            Jadhavwadi, Chikhali, PCMC, Pune
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-lg font-poppins font-medium text-[#6B6B6B]">
              Key Highlights
            </h3>

            <ul className="space-y-2 text-[#6B6B6B] text-lg font-poppins leading-relaxed">
              <li>• 2, 3 & 4 BHK Riverside Apartments</li>

              <li>
                • Scenic Surroundings with Open Living Spaces
              </li>

              <li>
                • Spacious Layouts with Natural Ventilation
              </li>

              <li>
                • Premium Amenities for Modern Lifestyle
              </li>

              <li>
                • Well Connected to Moshi, Bhosari & Talawade
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <div>
            <img
              src={about}
              alt="Family"
              className="w-full max-w-[700px] h-[520px] object-fill"
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