import { ChevronLeft, ChevronRight } from "lucide-react";
import homeactivity1 from "../../assets/home/homeactivity1.png";

const HomeActivities = () => {

  const activities = [
    {
      id: 1,
      image: homeactivity1,
      title: "Tree Plantation",
      description:
        "At Shakuntal Forestia, our first tree plantation drive brought together around 200 people and led to the plantation of 1,000+ trees, reflecting our commitment to greener surroundings.",
    },
  ];

  return (
    <div className="w-full h-[100vh] py-12 flex items-center">

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="relative w-full h-full"
        >

          {/* Background Image */}
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-60 right-140 z-20 bg-white py-2 px-15 rounded-lg">
            <h2 className="text-sm font-[500] text-black">CSR Activity's</h2>
          </div>

          {/* Content Card */}
          <div className="absolute bottom-10 right-10 z-20 flex items-end gap-6">

            {/* Card */}
            <div className="bg-[#997708] backdrop-blur-md border border-white/20 p-10 rounded-[28px] max-w-[650px] text-white shadow-2xl">

              <h3 className="text-2xl font-[400] mb-5">
                {activity.title}
              </h3>

              <p className="text-sm leading-5 font-[300] text-gray-200">
                {activity.description}
              </p>

            </div>

            {/* Navigation Buttons Outside Card */}
            <div className="flex flex-col gap-4 mb-2">

              <button className="w-14 h-14 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center text-white">
                <ChevronLeft size={22} />
              </button>

              <button className="w-14 h-14 rounded-full border border-white/30 bg-white hover:text-black transition duration-300 flex items-center justify-center">
                <ChevronRight size={22} />
              </button>

            </div>

          </div>

          {/* Slider Dots BELOW IMAGE */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-[#b68b07]"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default HomeActivities;