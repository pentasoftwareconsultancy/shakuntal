import { useState, useRef, useEffect } from "react";

const getYouTubeId = (url) => {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

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
    link: "https://www.youtube.com/watch?v=Kr59hhibTaA",
  },
];

const StoryTestimonial = () => {
  const [activeId, setActiveId] = useState(null);
  const cardRefs = useRef({});

  useEffect(() => {
    if (activeId === null) return;
    const el = cardRefs.current[activeId];
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setActiveId(null); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeId]);

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

          <h2 className="text-4xl md:text-5xl font-[300] leading-tight text-[#1D1C1C] max-w-6xl font-raleway">
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
          const videoId = item.link ? getYouTubeId(item.link) : null;
          const isPlaying = activeId === item.id;

          return (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[item.id] = el)}
              className="relative min-w-[420px] h-[280px] rounded-[18px] overflow-hidden shadow-lg flex items-center justify-center bg-[#d9d9d9]"
            >
              {videoId ? (
                isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setActiveId(item.id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-[#1f1f1f] ml-1" />
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <p className="text-xl underline underline-offset-4 font-medium text-[#7a7a7a]">
                  {item.title}
                </p>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default StoryTestimonial;