import aboutIcon1 from "../../assets/projectDetailOne/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailOne/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailOne/aboutIcon3.png";
import about from "../../assets/projectDetailOne/about-modified.png";

const ProjectAbout = () => {
  return (

    <section className="pt-2 pb-22 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

      {/* Top Info */}
      <div className="max-w-[1150px] mx-auto">

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 sm:gap-8 border-b border-gray-300 pb-6">

          {/* Logo */}
          <div className="flex justify-center w-1/2 sm:w-auto">
            <img
              src={aboutIcon1}
              alt="Project Icon"
              className="w-24 sm:w-32 md:w-36 lg:w-44 h-auto object-contain"
            />
          </div>

          {/* Apartment Info */}
          <div className="flex justify-center w-1/2 sm:w-auto">
            <img
              src={aboutIcon2}
              alt="Apartment Icon"
              className="w-28 sm:w-40 md:w-52 lg:w-80 h-auto object-contain"
            />
          </div>

          {/* Location */}
          <div className="flex justify-center w-1/2 sm:w-auto">
            <img
              src={aboutIcon3}
              alt="Location Icon"
              className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">

        {/* Left Content */}
        <div>

          <h2 className="text-4xl font-[400] leading-[1.2] font-raleway">
            Riverside Living Designed for a Better Everyday
          </h2>

          <p className="text-[#6B6B6B] text-lg mt-6 font-poppins">
            Jadhavwadi, Chikhali, PCMC, Pune
          </p>

          {/* Highlights */}
          <div className="mt-8">

            <h3 className="text-lg font-medium text-[#6B6B6B] font-poppins">
              Key Highlights
            </h3>

            <ul className="space-y-2 text-[#6B6B6B] text-lg leading-relaxed font-poppins">
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