import about1 from "../../assets/ourStory/about1.jpg";
import about2 from "../../assets/ourStory/about2.png";
import about3 from "../../assets/ourStory/about3.png";
import about4 from "../../assets/ourStory/about4.png";

const storyData = [
  {
    id: 1,
    title: "Built on Strong Fundamentals",
    description:
      "Lasting projects begin with thoughtful planning and disciplined execution. Every Shakuntal Group project is guided by a focus on functionality, efficient design, and long term usability. The objective is to create spaces that remain relevant, practical, and valuable for years to come.",
    image: about1,
    reverse: false,
  },
  {
    id: 2,
    title: "A Consistent Focus on Quality",
    description:
      "High standards are maintained across every stage of execution, ensuring reliability, durability, and attention to detail. This commitment reflects the responsibility carried towards every customer and every space created.",
    image: about2,
    reverse: true,
  },
  {
    id: 3,
    title: "Designed Beyond the Present",
    description:
      "Each project is guided by a mindset of going beyond immediate requirements. Careful attention to usability, adaptability, and spatial efficiency ensures the spaces remain relevant and valuable as needs evolve over time.",
    image: about3,
    reverse: false,
  },
  {
    id: 4,
    title: "Guided by Responsibility",
    description:
      "Every project carries a responsibility that extends beyond completion. A disciplined and dependable approach ensures consistency, reliability, and confidence for customers and partners, reflecting a long term commitment to the spaces created and the people they serve.",
    image: about4,
    reverse: true,
  },
];

const StoryAbout = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">

        <h2 className="text-4xl md:text-4xl font-[400] text-[#000000] mb-6 font-raleway">
          Building Spaces that last
        </h2>

        <p className="text-[#6B6B6B] text-xl leading-relaxed font-poppins">
          Shakuntal Group is a trusted real estate developer with over 15 years of experience, built on the belief that exceptional spaces begin with thoughtful planning. We are committed to transparency, timely delivery, and creating homes and commercial spaces that provide lasting comfort, value, and trust for our customers and communities.
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
              <h3 className="text-2xl font-[400] mb-5 font-raleway">
                {item.title}
              </h3>

              <p className="text-[#6B6B6B] leading-relaxed text-xl font-poppins">
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