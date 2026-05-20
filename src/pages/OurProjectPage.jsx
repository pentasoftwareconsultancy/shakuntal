import { ArrowRight } from "lucide-react";
import { ROUTES } from "../core/constants/routes.constant";
import { useNavigate } from "react-router-dom";
import hero from "../assets/ourProject/hero.png";
import blue from "../assets/ourProject/blue.jpg";
import dwarka from "../assets/ourProject/dwarka.jpg";
import forestia from "../assets/ourProject/forestia.jpg";
import commercial from "../assets/ourProject/commercial.jpg";
import alenta from "../assets/ourProject/alenta.png";

const projects = [
  {
    id: 1,
    type: "Residential",
    title: "Blue Water",
    location: "Jadhavwadi, Chikhali",
    image: blue,
    route: ROUTES.PROJECTDETAILONE,
  },
  {
    id: 2,
    type: "Residential",
    title: "Dwarka",
    location: "Chikhali, PCMC",
    image: dwarka,
    route: ROUTES.PROJECTDETAILTWO,
  },
  {
    id: 3,
    type: "Residential",
    title: "Forestia",
    location: "Dudulgaon, Moshi",
    image: forestia,
    route: ROUTES.PROJECTDETAILTHREE,
  },
  {
    id: 4,
    type: "Commercial",
    title: "Commercia",
    location: "Chikhali, PCMC, Pune",
    image: commercial,
    route: ROUTES.PROJECTDETAILFOUR,
  },
  {
    id: 5,
    type: "Residential",
    title: "Alentia",
    location: "Charholi, Pune",
    image: alenta,
    route: ROUTES.PROJECTDETAILFIVE,
    grayscale: true,
  },
];

const OurProjectPage = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-screen py-12 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})`, }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 bg-[#f4f4f4] rounded-b-[30px] mt-5 p-8 md:p-14 max-w-7xl mx-auto shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              {/* Type */}
              <p className="text-[#181A20] font-raleway font-[400] text-center text-sm mb-5">
                {project.type}
              </p>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-[240px] object-cover hover:scale-105 transition duration-500 ${
                    project.grayscale ? "grayscale" : ""
                  }`}
                />
              </div>

              {/* Divider */}
              <div className="border-t border-[#ddd] mt-4"></div>

              {/* Content */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-[15px] font-[600] font-raleway text-[#181A20] leading-5">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-[#717171] text-[12px] leading-relaxed">
                    {project.location}
                  </p>
                </div>

                {/* Arrow Button */}
                <button className="min-w-[36px] h-[36px] rounded-full border border-[#997708] flex items-center justify-center text-[#997708] hover:bg-[#997708] hover:text-white transition duration-300" onClick={() => project.route && navigate(project.route)}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjectPage;