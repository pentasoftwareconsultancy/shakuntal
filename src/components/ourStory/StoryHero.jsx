import ourstoryhero from "../../assets/ourStory/storyhero.png";

const StoryHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={ourstoryhero}
        alt="Our Story Hero"
        className="w-full h-full bg-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[#352F19] text-5xl md:text-8xl font-[700] leading-16 tracking-wide drop-shadow-lg font-apparel">
          Our Story
        </h1>
      </div>
    </section>
  );
};

export default StoryHero;