import React from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    type: "Residential",
    title: "Blue Water",
    location: "Jadhavwadi, Chikhali",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    type: "Residential",
    title: "Dwarka",
    location: "Chikhali, PCMC",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "Residential",
    title: "Forestia",
    location: "Dudulgaon, Moshi",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "Commercial",
    title: "Commercia",
    location: "Chikhali, PCMC, Pune",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    type: "Residential",
    title: "Alentia",
    location: "Charholi, Pune",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    grayscale: true,
  },
];

const OurProjectPage = () => {
  return (
    <section
      className="relative py-24 px-6 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 bg-[#f4f4f4] rounded-[30px] p-8 md:p-14 max-w-7xl mx-auto shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              {/* Type */}
              <p className="text-[#3f3f3f] text-sm mb-5">
                {project.type}
              </p>

              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-[340px] object-cover hover:scale-105 transition duration-500 ${
                    project.grayscale ? "grayscale" : ""
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex items-end justify-between mt-5">
                <div>
                  <h3 className="text-[26px] font-medium text-[#2b2b2b] leading-none">
                    {project.title}
                  </h3>

                  <p className="text-[#8a8a8a] text-sm mt-2 leading-relaxed">
                    {project.location}
                  </p>
                </div>

                {/* Arrow Button */}
                <button className="min-w-[52px] h-[52px] rounded-full border border-[#b68b07] flex items-center justify-center text-[#b68b07] hover:bg-[#b68b07] hover:text-white transition duration-300">
                  <ArrowRight size={22} />
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