import blog1 from "../../assets/home/blog1.jpg";
import blog2 from "../../assets/home/blog2.jpg";
import blog3 from "../../assets/home/blog3.jpg";
const blogData = [
  {
    id: 1,
    category: "Townhome",
    title: "Unveils the best canadian cities for biking and walk",
    date: "03",
    month: "Feb",
    image:
      blog1,
  },
  {
    id: 2,
    category: "Villa",
    title: "Diamond manor apartment in the New York and service",
    date: "03",
    month: "Feb",
    image:
      blog2,
  },
  {
    id: 3,
    category: "Townhome",
    title: "7 Simple ways to keep your kids’ Toys from taking over your home",
    date: "03",
    month: "Feb",
    image:
      blog3,
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
            <div className="relative rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[260px] object-cover"
              />

              {/* Date Box */}
              {/* Date Box */}
              <div className="absolute bottom-[-20px] z-10 right-5 bg-white w-[58px] h-[58px] rounded-md shadow-md flex flex-col items-center justify-center">

                <span className="text-[11px] text-gray-500 leading-none mb-1">
                  {blog.month}
                </span>

                <span className="text-[22px] font-semibold text-[#222] leading-none">
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