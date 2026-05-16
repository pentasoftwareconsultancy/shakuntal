

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

const ProjectGallery = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-16 lg:px-24">
      {/* Top Button */}
      <button className="border border-[#b68b07] text-[#b68b07] px-12 py-3 rounded-xl text-lg font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
        Gallery
      </button>

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-medium text-[#1f1f1f] mt-10 leading-tight">
        Luxury Living Where Comfort Meets
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-md group"
          >
            <img
              src={item.image}
              alt="Gallery"
              className="w-full h-[430px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;