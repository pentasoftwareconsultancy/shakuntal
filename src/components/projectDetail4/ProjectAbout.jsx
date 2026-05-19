import about from "../../assets/projectDetailFour/about.png";
import aboutIcon1 from "../../assets/projectDetailFour/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailFour/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailFour/aboutIcon3.png";

const ProjectAbout = () => {
  return (
    <section className="bg-[#F5F5F5] py-14 px-6 md:px-16 lg:px-24 mt-[-30px]">

  {/* Top Info */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-35 border-b border-[#D9D9D9] pb-6 md:pb-10 px-4">

    {/* Logo */}
    <div className="flex flex-col items-center">
      <img
        src={aboutIcon1}
        alt="Project Logo"
        className="w-28 sm:w-32 md:w-36 lg:w-45 h-auto object-contain"
      />
    </div>

    {/* Apartment Info */}
    <div className="flex items-center justify-center">
      <img
        src={aboutIcon2}
        alt="Apartment Icon"
        className="w-36 sm:w-44 md:w-48 lg:w-52 h-auto object-contain"
      />
    </div>

    {/* Location */}
    <div className="flex items-center justify-center">
      <img
        src={aboutIcon3}
        alt="Location Icon"
        className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto object-contain"
      />
    </div>

  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-14 lg:mt-20">

    {/* Left Content */}
    <div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-abhaya font-[700] text-[#1F1F1F]">
        A Commercial Space That Drives Visibility and Growth
      </h2>

      <p className="text-[#8A8A8A] font-poppins text-base md:text-lg mt-5">
        Chikhali, PCMC, Pune
      </p>

      {/* Highlights */}
      <div className="mt-8">

        <h3 className="text-lg md:text-xl font-raleway font-[600] text-[#2B2B2B] mb-4">
          Key Highlights
        </h3>

        <ul className="space-y-3 text-[#6B6B6B] font-poppins text-base md:text-lg leading-relaxed">

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