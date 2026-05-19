import { useState } from "react";
import hero from "../assets/enquire/hero.png";
import { sendEnquireEmail } from "../core/services/email.service";

const EnquirePage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    project: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  /* Handle Input Change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Submit Form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendEnquireEmail(formData);

      alert("Enquiry Sent Successfully");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        project: "",
        comments: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed To Send Enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section
  className="relative min-h-screen bg-cover bg-center flex items-center justify-end px-6 md:px-16 pt-22"
  style={{ backgroundImage: `url(${hero})` }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-[560px] bg-white/95 backdrop-blur-sm rounded-b-[24px] p-8 shadow-2xl">

        {/* Heading */}
        <h2 className="text-[32px] leading-tight font-medium text-[#2b2b2b] mb-6">
          Your Passage into opulent living begins now
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Mobile
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full h-[46px] bg-[#f1f1f1] rounded-lg px-4 outline-none border border-transparent focus:border-[#b68b07]"
              required
            />
          </div>

          {/* Project */}
          <div>
            <label className="block text-[#2f2f2f] text-sm font-medium mb-2">
              Project Name
            </label>

            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
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
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Write your comments"
              className="w-full bg-[#f1f1f1] rounded-lg px-4 py-3 outline-none resize-none border border-transparent focus:border-[#b68b07]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[48px] rounded-xl border border-[#b68b07] text-[#b68b07] font-medium hover:bg-[#b68b07] hover:text-white transition duration-300"
          >
            {loading ? "Sending..." : "Enquire Now"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default EnquirePage;