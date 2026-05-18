import about from "../../assets/projectDetailFour/about.png";
import aboutIcon1 from "../../assets/projectDetailFour/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailFour/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailFour/aboutIcon3.png";

const ProjectAbout = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 px-6 md:px-16 lg:px-24">
      {/* Top Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-gray-300 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={aboutIcon1} alt="Project Logo" className="w-38 h-18" />
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
          <h2 className="text-4xl leading-[1.2] font-raleway font-[400]">
            A Commercial Space That Drives Visibility and Growth
          </h2>

          <p className="text-[#6B6B6B] font-poppins text-lg mt-6">
            Chikhali, PCMC, Pune
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-lg font-poppins text-[#6B6B6B]">
              Key Highlights
            </h3>

            <ul className="space-y-2 text-[#6B6B6B] font-poppins text-lg leading-relaxed">
              <li>• Shops, Offices & Showrooms in Prime Location</li>

              <li>
                • High Brand Visibility on BRT Road
              </li>

              <li>
                • Naturally Lit & Efficiently Designed Spaces
              </li>

              <li>
                • Customizable Units up to 8000 sq. ft
              </li>

              <li>
                • Surrounded by Strong Residential Catchment “
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div>
            <img
              src={about}
              alt="Family"
              className="w-full max-w-[700px] h-[520px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;