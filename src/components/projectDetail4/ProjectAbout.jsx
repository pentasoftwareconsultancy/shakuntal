import about from "../../assets/projectDetailFour/about.png";
import aboutIcon1 from "../../assets/projectDetailFour/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailFour/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailFour/aboutIcon3.png";

const ProjectAbout = () => {
  return (
    <section className="pb-14 pt-8 px-6 md:px-16 lg:px-24">

      {/* Top Info */}
      <div className="max-w-[1150px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-center gap-36 border-b border-gray-300 pb-6">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={aboutIcon1}
              alt="Project Icon"
              className="w-28 sm:w-32 md:w-36 lg:w-45 h-auto object-contain"
            />
          </div>

          {/* Apartment Info */}
          <div className="flex justify-center">
            <img
              src={aboutIcon2}
              alt="Apartment Icon"
              className="w-28 sm:w-32 md:w-36 lg:w-45 h-auto object-contain"
            />
          </div>

          {/* Location */}
          <div className="flex justify-center">
            <img
              src={aboutIcon3}
              alt="Location Icon"
              className="w-28 sm:w-32 md:w-36 lg:w-45 h-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-14 lg:mt-20">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          <h2 className="text-3xl leading-11 font-raleway font-[400]">
            A Commercial Space That<br /> Drives Visibility and Growth
          </h2>

          <p className="text-[#6B6B6B] text-base sm:text-lg font-poppins leading-6 mt-4">
            Chikhali, PCMC, Pune
          </p>

          {/* Highlights */}
          <div className="mt-8">

            <h3 className="text-base sm:text-lg font-poppins text-[#6B6B6B] font-[300]">
              Key Highlights
            </h3>

            <ul className="space-y-2 text-[#6B6B6B] font-[300] text-sm sm:text-base lg:text-lg font-poppins leading-6">

              <li>• Shops, Offices & Showrooms in Prime Location</li>

              <li>• High Brand Visibility on BRT Road</li>

              <li>• Naturally Lit & Efficiently Designed Spaces</li>

              <li>• Customizable Units up to 8000 sq. ft</li>

              <li>• Surrounded by Strong Residential Catchment</li>

            </ul>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <img
            src={about}
            alt="Family"
            className="w-full max-w-[700px] h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-[24px] hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
};

export default ProjectAbout;