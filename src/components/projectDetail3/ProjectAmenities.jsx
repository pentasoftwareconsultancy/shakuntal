
import {
  Trees,
  Dumbbell,
  ShieldCheck,
  Building2,
  Sun,
  Waves,
} from "lucide-react";

const amenities = [
  {
    id: 1,
    title: "Terrace Garden",
    icon: <Trees size={42} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Play Area",
    icon: <Building2 size={42} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Gymnasium",
    icon: <Dumbbell size={42} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Yoga Area",
    icon: <Waves size={42} strokeWidth={1.5} />,
  },
  {
    id: 5,
    title: "Solar System",
    icon: <Sun size={42} strokeWidth={1.5} />,
  },
  {
    id: 6,
    title: "Rainwater Harvesting",
    icon: <Trees size={42} strokeWidth={1.5} />,
  },
  {
    id: 7,
    title: "CCTV Security",
    icon: <ShieldCheck size={42} strokeWidth={1.5} />,
  },
  {
    id: 8,
    title: "Community Hall",
    icon: <Building2 size={42} strokeWidth={1.5} />,
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
              <div className="text-[#1f1f1f] group-hover:text-[#b68b07] transition duration-300">
                {item.icon}
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