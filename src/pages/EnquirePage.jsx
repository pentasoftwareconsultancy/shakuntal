import hero from "../assets/enquire/hero.png";

const EnquirePage = () => {
  return (
    <section
      className="relative h-[140vh] bg-cover bg-center flex items-center justify-end px-6 md:px-16"
      style={{ backgroundImage: `url(${hero})`, }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-[560px] bg-white/95 backdrop-blur-sm rounded-[24px] p-8 shadow-2xl">
        {/* Heading */}
        <h2 className="text-[32px] leading-tight font-medium text-[#2b2b2b] mb-6">
          Your Passage into opulent living begins now
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Mobile
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
            />
          </div>

          {/* Project */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Project Name
            </label>

            <input
              type="text"
              placeholder="Enter project name"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
            />
          </div>

          {/* Comments */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Comments
            </label>

            <textarea
              rows="3"
              placeholder="Write your comments"
              className="w-full bg-[#f1f1f1] rounded-lg px-4 py-3 outline-none resize-none border border-transparent focus:border-[#b68b07]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-[48px] rounded-xl border border-[#b68b07] text-[#b68b07] font-medium hover:bg-[#b68b07] hover:text-white transition duration-300"
          >
            Enquire Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquirePage;