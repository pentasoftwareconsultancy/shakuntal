import { useEffect, useRef, useState } from "react";

const testimonials = [
  { id: 1, title: "Video Testimonial", videoId: "iQgjAI4rWVU" },
];

const VideoCard = ({ item, activeId, setActiveId }) => {
  const iframeRef = useRef(null);

  // Stop this video if another becomes active
  useEffect(() => {
    if (activeId !== item.id && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  }, [activeId, item.id]);

  // Pause on scroll out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      },
      { threshold: 0.3 }
    );
    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-[320px] rounded-[18px] overflow-hidden shadow-md">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${item.videoId}?enablejsapi=1`}
        title={item.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        onFocus={() => setActiveId(item.id)}
        onClick={() => setActiveId(item.id)}
      />
    </div>
  );
};

const ProjectTestimonial = () => {
  const [activeId, setActiveId] = useState(null);

  // Listen for YouTube play events via postMessage
  useEffect(() => {
    const handler = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.event === "infoDelivery" && data.info?.playerState === 1) {
          // playerState 1 = playing — but we can't identify which iframe easily
          // Instead we rely on onClick/onFocus on the iframe wrapper
        }
      } catch {}
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 relative">
      <button className="border border-[#997708] font-raleway text-[#997708] px-10 py-3 rounded-xl text-sm font-medium hover:bg-[#997708] hover:text-white transition duration-300">
        Testimonials
      </button>

      <h2 className="text-4xl md:text-5xl font-raleway font-[400] text-[#181A20] mt-10 leading-14 font-raileway">
        Luxury Living Where Comfort Meets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {testimonials.map((item) => (
          <VideoCard
            key={item.id}
            item={item}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectTestimonial;
