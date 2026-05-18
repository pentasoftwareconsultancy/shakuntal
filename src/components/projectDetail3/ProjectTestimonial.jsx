/* eslint-disable no-unused-vars */
import { link } from "framer-motion/client";

const testimonials = [
  {
    id: 1,
    title: "Video Testimonial",
    link: "https://www.youtube.com/watch?v=PK4xwG0LmYY",
  },
  {
    id: 2,
    title: "Video Testimonial",
    link: "https://www.youtube.com/watch?v=PK4xwG0LmYY",
  },
];

const ProjectTestimonial = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-16 lg:px-24 relative">
      {/* Top Button */}
      <button className="border border-[#b68b07] text-[#b68b07] px-10 py-3 rounded-xl text-sm font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
        Testimonials
      </button>

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-medium text-[#1f1f1f] mt-10 leading-tight">
        Luxury Living Where Comfort Meets
      </h2>

      {/* Floating Badge */}
      <div className="absolute top-16 right-10 w-14 h-14 rounded-full bg-[#0f9aad] shadow-xl flex items-center justify-center text-white text-2xl font-semibold">
        S
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {testimonials.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="relative h-[320px] bg-[#e9e9e9] rounded-[18px] overflow-hidden flex items-center justify-center group shadow-md"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[70px] text-[#ece7e7] font-serif">
              “
            </div>

            {/* Text */}
            <p className="text-[#1f1f1f] text-lg font-medium">
              {item.title}
            </p>

            {/* Hover Effect */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#b68b07] rounded-[18px] transition duration-300"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectTestimonial;