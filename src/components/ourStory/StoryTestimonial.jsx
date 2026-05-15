import React from "react";

const testimonials = [
  {
    id: 1,
    title: "Video Testimonial",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Video Testimonial",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Video Testimonial",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
  },
];

const StoryTestimonial = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden">
      {/* Top Content */}
      <div className="px-6 md:px-16 lg:px-24">
        {/* Button */}
        <button className="border border-[#b68b07] text-[#b68b07] px-10 py-3 rounded-xl text-sm font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
          Testimonials
        </button>

        {/* Heading & Dots */}
        <div className="flex items-center justify-between mt-10 flex-wrap gap-6">
          <h2 className="text-5xl md:text-6xl font-medium leading-tight text-[#1f1f1f] max-w-4xl">
            Luxury Living Where Comfort Meets
          </h2>

          {/* Slider Dots */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#1f1f1f]"></div>
            <div className="w-2 h-2 rounded-full bg-[#bdbdbd]"></div>
            <div className="w-2 h-2 rounded-full bg-[#bdbdbd]"></div>
            <div className="w-2 h-2 rounded-full bg-[#bdbdbd]"></div>
            <div className="w-2 h-2 rounded-full bg-[#bdbdbd]"></div>
          </div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="flex gap-8 mt-14 pl-6 md:pl-16 lg:pl-24 overflow-x-auto scrollbar-hide">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[420px] h-[280px] rounded-[18px] overflow-hidden group shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-[#0f9aad] text-white text-xl flex items-center justify-center shadow-xl hover:scale-110 transition duration-300">
                ▶
              </button>
            </div>

            {/* Text */}
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-lg underline underline-offset-4">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryTestimonial;