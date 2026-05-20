import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import img from "../assets/contact/img.png";
import { sendContactEmail } from "../core/services/email.service";

const ContactUsPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    project: "",
    bhk: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendContactEmail(formData);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        project: "",
        bhk: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed To Send Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-38 px-4 md:px-10 lg:px-20 overflow-hidden">

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-center">

        {/* Left Form */}
        <div className="w-full max-w-[900px]">

          {/* Heading */}
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-raleway leading-12 font-[400]">
              We'd love to
            </p>

            <h2 className="text-5xl md:text-6xl font-[400] leading-12 mt-1 font-raleway">
              Hear from You
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full h-[52px] bg-[#F2F2F2] px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-[52px] bg-[#F2F2F2] px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Phone */}
              <div>
                <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full h-[52px] bg-[#F2F2F2] px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="w-full h-[52px] bg-[#F2F2F2] px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Project */}
              <div>
                <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                  Project Name
                </label>

                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  className="w-full h-[52px] bg-[#F2F2F2] px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>

              {/* BHK */}
              <div>
                <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                  BHK
                </label>

                <input
                  type="text"
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleChange}
                  placeholder="2 BHK / 3 BHK"
                  className="w-full h-[52px] bg-[#F2F2F2] px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xl font-poppins font-[300] leading-5 mb-1 text-[#2b2b2b]">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full bg-[#F2F2F2] px-4 py-4 outline-none resize-none focus:ring-2 focus:ring-[#b68b07]"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="border border-[#997708] text-[#997708] px-14 h-[43px] w-[240px] rounded-xl text-lg font-[400] font-poppins hover:bg-[#997708] hover:text-white transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={img}
            alt="Couple"
            className="w-full max-w-[400px] h-[629px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-20">

        {/* Call */}
        <div>
          <div className="flex justify-center mb-4">
            <FaPhoneAlt size={30} />
          </div>

          <h3 className="text-2xl font-[400] font-raleway leading-5">
            Call & Whatsapp
          </h3>

          <div className="mt-4 text-[#997708] underline text-xl font-poppins font-[300]">
            <p>+91 88888 81672</p>
            <p>+91 88888 81672</p>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <div className="flex justify-center mb-4">
            <FaClock size={30} />
          </div>

          <h3 className="text-2xl font-[400] font-raleway leading-5">
            Working Hours
          </h3>

          <div className="mt-4 text-[#997708] text-xl font-poppins font-[300]">
            <p>Daily: 9 AM - 7 PM</p>
            <p>Friday - Closed</p>
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-center mb-4">
            <HiMail size={30} />
          </div>

          <h3 className="text-2xl font-[400] font-raleway leading-5">
            Write To Us
          </h3>

          <div className="mt-4 text-[#997708] text-xl font-poppins font-[300]">
            <p>info@shakuntalgroup.com</p>
            <p>sales@shakuntalgroup.com</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-[24px] mt-10 shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.3531549587756!2d73.82622427465589!3d18.68133736424473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7fe03b369d3%3A0x691a5b80b3c1e2fc!2sShakuntal%20Commercia!5e1!3m2!1sen!2sin!4v1779079288238!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

    </section>
  );
};

export default ContactUsPage;