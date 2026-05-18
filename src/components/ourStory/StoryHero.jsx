import ourstoryhero from "../../assets/ourStory/storyhero.png";

const StoryHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={ourstoryhero}
        alt="Our Story Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide drop-shadow-lg">
          Our Story
        </h1>
      </div>
    </section>
  );
};

export default StoryHero;