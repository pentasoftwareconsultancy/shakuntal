import aboutIcon1 from "../../assets/projectDetailOne/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailOne/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailOne/aboutIcon3.png";
import about from "../../assets/projectDetailOne/about-modified.png";

const ProjectAbout = () => {
  return (

    <section className="pt-6 pb-22 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

      {/* Top Info */}
      <div className="max-w-[1150px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 border-b border-gray-300 pb-6">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={aboutIcon1}
              alt="Project Icon"
              className="w-32 sm:w-36 md:w-40 lg:w-50 h-auto object-contain"
            />
          </div>

          {/* Apartment Info */}
          <div className="flex justify-center">
            <img
              src={aboutIcon2}
              alt="Apartment Icon"
              className="w-40 sm:w-44 md:w-48 lg:w-90 h-auto object-contain"
            />
          </div>

          {/* Location */}
          <div className="flex justify-center">
            <img
              src={aboutIcon3}
              alt="Location Icon"
              className="w-40 sm:w-44 md:w-48 lg:w-40 h-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mt-12">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          <h2 className="text-3xl md:text-[32px] leading-11 font-raleway font-[400]">
            Riverside Living Designed for a Better Everyday
          </h2>

          <p className="text-[#6B6B6B] text-base sm:text-lg font-poppins leading-6 mt-4">
            Jadhavwadi, Chikhali, PCMC, Pune
          </p>

          {/* Highlights */}
          <div className="mt-8">

            <h3 className="text-base sm:text-lg font-poppins text-[#6B6B6B] font-[300]">
              Key Highlights
            </h3>

            <ul className="space-y-2 text-[#6B6B6B] font-[300] text-sm sm:text-base lg:text-lg font-poppins leading-6">
              <li>• 2, 3 & 4 BHK Riverside Apartments</li>
              <li>• Scenic Surroundings with Open Living Spaces</li>
              <li>• Spacious Layouts with Natural Ventilation</li>
              <li>• Premium Amenities for Modern Lifestyle</li>
              <li>• Well Connected to Moshi, Bhosari & Talawade</li>
            </ul>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <img
            src={about}
            alt="Family"
            className="w-full max-w-[650px] h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover rounded-2xl"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_70px_rgba(255,255,255,0.4)] pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;