import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import homeactivity1 from "../../assets/home/homeactivity1.png";
import homeactivity2 from "../../assets/home/homeactivity2.png";
import homeactivity3 from "../../assets/home/homeactivity3.png";
import homeactivity4 from "../../assets/home/homeactivity4.png";
import homeactivity5 from "../../assets/home/homeactivity5.png";
import homeactivity6 from "../../assets/home/homeactivity6.png";

const HomeActivities = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      image: homeactivity1,
      title: "Tree Plantation",
      description:
        "At Shakuntal Forestia, our first tree plantation drive brought together around 200 people and led to the plantation of 1,000+ trees, reflecting our commitment to greener surroundings.",
    },
    {
      id: 2,
      image: homeactivity2,
      title: "Community Work",
      description:
        "As part of our CSR work, we have extended medical and recovery support to around 10 to 15 individuals during times of urgent need.",
    },
    {
      id: 3,
      image: homeactivity3,
      title: "Community Work",
      description:
        "We supported the operation of an individual receiving treatment at YCM Hospital after a train-related incident, offering help during a critical stage of care.",
    },
    {
      id: 4,
      image: homeactivity4,
      title: "Community Work",
      description:
        "We also extended support to an individual from Metro Camp who was involved in an accident, assisting with medicines, physiotherapy, and recovery needs.",
    },
    {
      id: 5,
      image: homeactivity5,
      title: " Tree Plantation",
      description:
        "Our second tree plantation drive at Shakuntal Forestia saw participation from around 400 people and resulted in the plantation of 250+ trees, further strengthening our environmental efforts.",
    },
    {
      id: 6,
      image: homeactivity6,
      title: " Tree Plantation",
      description:
        "Our second tree plantation drive at Shakuntal Forestia saw participation from around 400 people and resulted in the plantation of 250+ trees, further strengthening our environmental efforts.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === activities.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? activities.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full h-screen py-12 overflow-hidden">

      {/* Slider Main */}
      <div className="relative w-full h-full overflow-hidden">

        {/* Slides Wrapper */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative min-w-full h-full"
            >

              {/* Background Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />

              {/* Top Tag */}
              <div className="absolute bottom-60 right-140 z-20 bg-white py-2 px-15 rounded-lg">
                <h2 className="text-sm font-raleway font-[400] text-[#323232]">
                  CSR Activity's
                </h2>
              </div>

              {/* Content Card + Buttons */}
              <div className="absolute bottom-10 right-10 z-20 flex items-end gap-6">

                {/* Card */}
                <div className="bg-[#997708] border border-white/20 p-10 rounded-[28px] max-w-[650px] text-white shadow-2xl">

                  <h3 className="text-2xl font-raleway font-[400] mb-2">
                    {activity.title}
                  </h3>

                  <p className="text-sm font-poppins font-[300] text-[#ffffff]">
                    {activity.description}
                  </p>

                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col gap-4 mb-2">

                  <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center text-white"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center text-white"
                  >
                    <ChevronRight size={22} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>


      </div>

        {/* Slider Dots */}
        <div className="absolute pt-3 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">

          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-3 h-3 bg-[#b68b07]"
                  : "w-3 h-3 bg-gray-300"
              }`}
            />
          ))}

        </div>
    </div>
  );
};

export default HomeActivities;