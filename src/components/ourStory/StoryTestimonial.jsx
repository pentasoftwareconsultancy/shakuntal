import React from "react";

const testimonials = [
  {
    id: 1,
    title: "Video Testimonial",
    image: "",
    link: "https://www.youtube.com/watch?v=ibo8BNCIcjY",
  },
  {
    id: 2,
    title: "Video Testimonial",
    image: "",
    link: "https://www.youtube.com/watch?si=wVB16RNUzyYD39CO&v=z_EafTcV6Tw&feature=youtu.be",
  },
  {
    id: 3,
    title: "Video Testimonial",
    image: "",
    link: "",
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

        {testimonials.map((item) => {

          const CardWrapper = item.link ? "a" : "div";

          return (
            <CardWrapper
              key={item.id}
              href={item.link || undefined}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noopener noreferrer" : undefined}
              className={`relative min-w-[420px] h-[280px] rounded-[18px] overflow-hidden shadow-lg flex items-center justify-center transition duration-300 ${
                item.link
                  ? "bg-[#d9d9d9] hover:scale-[1.02] cursor-pointer"
                  : "bg-[#d9d9d9]"
              }`}
            >

              {/* Image If Available */}
              {item.image && (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />

                  <div className="absolute inset-0 bg-black/25"></div>
                </>
              )}

              {/* Center Text */}
              <p
                className={`relative z-10 text-xl underline underline-offset-4 font-medium ${
                  item.link
                    ? "text-[#1f1f1f]"
                    : "text-[#7a7a7a]"
                }`}
              >
                {item.title}
              </p>

            </CardWrapper>
          );
        })}

      </div>
    </section>
  );
};

export default StoryTestimonial;