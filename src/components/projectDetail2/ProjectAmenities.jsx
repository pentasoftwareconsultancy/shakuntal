import { garden, play, gym, yoga, solar, rainwater, cctv, community } from "../icons/Icons";

const amenities = [
  {
    id: 1,
    title: "Terrace Garden",
    icon: garden,
  },
  {
    id: 2,
    title: "Play Area",
    icon: play,
  },
  {
    id: 3,
    title: "Gymnasium",
    icon: gym,
  },
  {
    id: 4,
    title: "Yoga Area",
    icon: yoga,
  },
  {
    id: 5,
    title: "Solar System",
    icon: solar,
  },
  {
    id: 6,
    title: "Rainwater Harvesting",
    icon: rainwater,
  },
  {
    id: 7,
    title: "CCTV Security",
    icon: cctv,
  },
  {
    id: 8,
    title: "Community Hall",
    icon: community,
  },
];

const ProjectAmenities = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16 lg:px-24">
      {/* Top Button */}
      <div className="flex justify-center mb-14">
        <button className="border border-[#b68b07] text-[#b68b07] px-12 py-3 rounded-xl text-lg font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
          Amenities
        </button>
      </div>

      {/* Amenities Box */}
      <div className="border border-[#b68b07] rounded-[40px] py-20 px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-10">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="group-hover:scale-110 transition duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[42px] h-[42px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-[#2b2b2b] mt-6 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectAmenities;