import aboutIcon1 from "../../assets/projectDetailTwo/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailTwo/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailTwo/aboutIcon3.png";
import about from "../../assets/projectDetailTwo/about1.png";

const ProjectAbout = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 px-6 md:px-16 lg:px-24">
      {/* Top Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-gray-300 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={aboutIcon1} alt="Project Logo" className="w-38 h-24 mb-4" />
        </div>

        {/* Apartment Info */}
        <div className="flex items-center gap-5">
          <img src={aboutIcon2} alt="Apartment Icon" className="w-68 h-12" />
        </div>

        {/* Location */}
        <div className="flex items-center gap-5">
          <img src={aboutIcon3} alt="Location Icon" className="w-68 h-12" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl leading-[1.2] font-raleway weight-[400]">
            Limited Edition Homes <br />
            Designed for Everyday Comfort
          </h2>

          <p className="text-[#6f6f6f] font-poppins text-[#6B6B6B] text-lg mt-6">
            Jadhavwadi, Chikhali, Pune
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-lg font-poppins text-[#6B6B6B]">
              Key Highlights
            </h3>

            <ul className="space-y-2 font-poppins text-[#6B6B6B] text-lg leading-relaxed">
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