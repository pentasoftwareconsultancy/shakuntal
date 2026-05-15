import React from "react";

const storyData = [
  {
    id: 1,
    title: "Built on Strong Fundamentals",
    description:
      "Lasting projects begin with thoughtful planning and disciplined execution. Every structure is built with care, guided by a focus on functionality, efficient design, and long term usability. The objective is to create spaces that remain relevant, practical, and valuable for years to come.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: 2,
    title: "A Consistent Focus on Quality",
    description:
      "High standards are maintained across every stage of execution, ensuring reliability, durability, and attention to detail. This commitment reflects the responsibility carried towards every customer and every space created.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: 3,
    title: "Designed Beyond the Present",
    description:
      "Each project is guided by a mindset of going beyond immediate requirements. Careful attention to usability, adaptability, and spatial efficiency ensures the spaces remain relevant and valuable as needs evolve over time.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: 4,
    title: "Guided by Responsibility",
    description:
      "Every project carries a responsibility that extends beyond construction. A disciplined and dependable approach ensures consistency, reliability, and confidence for customers and partners, reflecting a long term commitment to the spaces created and the people they serve.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    reverse: true,
  },
];

const StoryAbout = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <p className="text-[#9b9b9b] text-sm tracking-[3px] uppercase mb-4">
          Building Spaces that last
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2f2f2f] mb-6">
          Building Spaces that last
        </h2>

        <p className="text-[#7a7a7a] leading-relaxed text-base">
          Shakuntal Group is a trusted real estate developer with over 15 years
          of experience, built on the belief that exceptional spaces begin with
          thoughtful planning. We are committed to transparency, timely
          delivery, and creating meaningful commercial spaces that provide
          lasting comfort, value, and trust for our customers and communities.
        </p>
      </div>

      {/* Story Sections */}
      <div className="space-y-24">
        {storyData.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
              item.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-semibold text-[#2f2f2f] mb-5">
                {item.title}
              </h3>

              <p className="text-[#6f6f6f] leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryAbout;