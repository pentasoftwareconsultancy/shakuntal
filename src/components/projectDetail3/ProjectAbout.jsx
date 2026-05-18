import aboutIcon1 from "../../assets/projectDetailThree/aboutIcon1.png";
import aboutIcon2 from "../../assets/projectDetailThree/aboutIcon2.png";
import aboutIcon3 from "../../assets/projectDetailThree/aboutIcon3.png";
import about from "../../assets/projectDetailThree/about.png";

const ProjectAbout = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 px-6 md:px-16 lg:px-24">
      {/* Top Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-gray-300 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={aboutIcon1} alt="Project Logo" className="w-38 h-24" />
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
          <h2 className="text-4xl font-[400] leading-[1.2] font-raleway">
            Where Everyday Living Feels Closer to Nature
          </h2>

          <p className="text-[#6B6B6B] text-lg mt-6">
            Dudulgaon – Moshi, Pune
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-lg font-medium text-[#6B6B6B]">
              Key Highlights
            </h3>

            <ul className="space-y-2 text-[#6B6B6B] text-lg leading-relaxed">
              <li>• Thoughtfully Planned 2 & 3 BHK Residences</li>

              <li>
                • Open, Green Surroundings for Relaxed Living
              </li>

              <li>
                • Seamless Connectivity to Work & Daily Needs
              </li>

              <li>
                • Efficient Layouts with Maximum Space Utilisation
              </li>

              <li>
                • Ideal for End-Use Living & Long-Term Investment ”
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