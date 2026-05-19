
import project1 from "../../assets/home/client1.png";
import project2 from "../../assets/home/client2.png";
import project3 from "../../assets/home/client3.png";
import project4 from "../../assets/home/client4.png";
import project5 from "../../assets/home/client5.png";

import bgImage from "../../assets/home/image 25.png";

import icon1 from "../../assets/home/Group 20224.png";
import icon2 from "../../assets/home/Group 20225.png";
import icon3 from "../../assets/home/Group 20226.png";
import icon4 from "../../assets/home/Group 20227.png";

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
];

const sustainabilityItems = [
  {
    icon: icon1,
  },
  {
    icon: icon2,
  },
  {
    icon: icon3,
  },
  {
    icon: icon4,
  },
];

const HomeClients = () => {
  return (
    <section className="w-full bg-white">

      {/* Top Projects Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Button */}
        <div className="flex justify-center mb-10">
          <button className="border border-yellow-700 text-yellow-700 px-10 py-2 rounded-md text-sm tracking-wide hover:bg-yellow-700 hover:text-white transition duration-300">
            Projects
          </button>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-26">
          {projects.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`project-${index}`}
              className="h-16 md:h-22 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Sustainable Section */}
      <div
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-16 py-14 text-white flex flex-col items-center justify-end h-full">

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-10">
            {sustainabilityItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
                />
              </div>
            ))}
          </div>

          {/* Bottom Heading */}
          <h3 className="text-3xl md:text-5xl font-raleway text-center">
            Sustainable practices
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;