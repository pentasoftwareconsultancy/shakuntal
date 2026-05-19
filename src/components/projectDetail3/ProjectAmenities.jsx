import { swimming, club, kplay, cricket, gym, party, library, garden1 } from "../icons/Icons";

const amenities = [
  {
    id: 1,
    title: "Swimming Pool",
    icon: swimming,
  },
  {
    id: 2,
    title: "Club House",
    icon: club,
  },
  {
    id: 3,
    title: "Kids Play Area",
    icon: kplay,
  },
  {
    id: 4,
    title: "Box Cricket",
    icon: cricket,
  },
  {
    id: 5,
    title: "Gymnasium",
    icon: gym,
  },
  {
    id: 6,
    title: "Party Lawn",
    icon: party,
  },
  {
    id: 7,
    title: "Library",
    icon: library,
  },
  {
    id: 8,
    title: "Garden",
    icon: garden1,
  },
];

const ProjectAmenities = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      {/* Top Button */}
      <div className="flex justify-center mb-14">
        <button className="border border-[#b68b07] text-[#b68b07] font-raleway px-12 py-3 rounded-xl text-lg font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
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
              <h3 className="text-base font-[300] font-poppins text-[#1A1A1A] mt-6 leading-4">
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