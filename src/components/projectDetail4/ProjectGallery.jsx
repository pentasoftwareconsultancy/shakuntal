import gallery1 from "../../assets/projectDetailFour/gallery1.jpg";
import gallery2 from "../../assets/projectDetailFour/gallery2.jpg";
import gallery3 from "../../assets/projectDetailFour/gallery3.jpg";

const galleryImages = [
  {
    id: 1,
    image: gallery1,
  },
  {
    id: 2,
    image: gallery2,
  },
  {
    id: 3,
    image: gallery3,
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