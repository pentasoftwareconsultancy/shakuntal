
const blogData = [
  {
    id: 1,
    category: "Townhome",
    title: "Unveils the best canadian cities for biking and walk",
    date: "03",
    month: "Feb",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Villa",
    title: "Diamond manor apartment in the New York and service",
    date: "03",
    month: "Feb",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Townhome",
    title: "7 Simple ways to keep your kids’ Toys from taking over your home",
    date: "03",
    month: "Feb",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
];

const HomeBlog = () => {
  return (
    <section className="bg-[#e8e2d4] py-20 px-6 md:px-16 lg:px-24">
      {/* Top Content */}
      <div className="mb-14">
        <button className="border border-[#a98b4c] text-[#a98b4c] px-10 py-3 rounded-xl text-sm font-medium hover:bg-[#a98b4c] hover:text-white transition duration-300">
          From Our Blog
        </button>

        <p className="text-[#2f2f2f] text-lg mt-6 max-w-2xl leading-relaxed">
          Real estate insights, home living ideas, and updates from our
          developments.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((blog) => (
          <div key={blog.id} className="group">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Date Box */}
              <div className="absolute bottom-5 right-5 bg-white rounded-xl shadow-md w-[64px] h-[64px] flex flex-col items-center justify-center z-10">
                <span className="text-xs text-gray-500">
                  {blog.month}
                </span>

                <span className="text-2xl font-bold text-[#222] leading-none">
                  {blog.date}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6">
              <h4 className="text-[24px] font-medium text-[#2f2f2f] mb-3">
                {blog.category}
              </h4>

              <p className="text-[#3d3d3d] text-base leading-relaxed max-w-[95%]">
                {blog.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;