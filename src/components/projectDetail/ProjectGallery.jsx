import React from "react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    logo: true,
    className:
      "col-span-1 row-span-1 bg-[#e9edf2] flex items-center justify-center",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-1",
  },
  {
    id: 6,
    colorBlock: true,
    className: "bg-[#5a61aa]",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-1",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 row-span-1",
  },
];

const ProjectGallery = () => {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="grid grid-cols-5 auto-rows-[220px] gap-1">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden ${item.className}`}
          >
            {/* Logo Box */}
            {item.logo ? (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="text-[#2d2a73] text-6xl font-bold leading-none">
                  Dwarka
                </h2>

                <p className="text-[#2d2a73] text-sm tracking-[2px] mt-3">
                  2, 3 & 4 BHK LIMITED EDITION HOMES
                </p>
              </div>
            ) : item.colorBlock ? (
              <div className="w-full h-full bg-[#5a61aa]"></div>
            ) : (
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;