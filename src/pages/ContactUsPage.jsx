import React from "react";
import { Phone, Clock3, Mail } from "lucide-react";

const ContactUsPage = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4 md:px-10 lg:px-20 overflow-hidden">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_0.6fr] gap-20 items-center">
        
        {/* Left Form */}
        <div className="w-full max-w-[900px]">
          
          {/* Heading */}
          <div className="mb-6">
            <p className="text-3xl md:text-4xl text-[#1f1f1f] leading-none">
              We'd love to
            </p>

            <h2 className="text-5xl md:text-6xl font-medium text-[#1f1f1f] leading-none mt-2">
              Hear from You
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-5">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Name */}
              <div>
                <label className="block text-sm mb-2 text-[#2b2b2b]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[52px] bg-[#ececec] rounded-md px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-[#2b2b2b]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[52px] bg-[#ececec] rounded-md px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Phone */}
              <div>
                <label className="block text-sm mb-2 text-[#2b2b2b]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full h-[52px] bg-[#ececec] rounded-md px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm mb-2 text-[#2b2b2b]">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full h-[52px] bg-[#ececec] rounded-md px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Project */}
              <div>
                <label className="block text-sm mb-2 text-[#2b2b2b]">
                  Project Name
                </label>

                <input
                  type="text"
                  placeholder="Enter project name"
                  className="w-full h-[52px] bg-[#ececec] rounded-md px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>

              {/* BHK */}
              <div>
                <label className="block text-sm mb-2 text-[#2b2b2b]">
                  BHK
                </label>

                <input
                  type="text"
                  placeholder="2 BHK / 3 BHK"
                  className="w-full h-[52px] bg-[#ececec] rounded-md px-4 outline-none focus:ring-2 focus:ring-[#b68b07]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 text-[#2b2b2b]">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full bg-[#ececec] rounded-md px-4 py-4 outline-none resize-none focus:ring-2 focus:ring-[#b68b07]"
              ></textarea>
            </div>

            {/* Button */}
            <button className="border border-[#b68b07] text-[#b68b07] px-14 h-[52px] rounded-xl text-base font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
              Submit
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
            alt="Couple"
            className="w-full max-w-[240px] h-[400px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-20">
        
        {/* Call */}
        <div>
          <div className="flex justify-center mb-4">
            <Phone size={30} />
          </div>

          <h3 className="text-2xl font-medium text-[#1f1f1f]">
            Call & Whatsapp
          </h3>

          <div className="mt-4 space-y-1 text-[#b68b07] text-lg">
            <p>+91 88888 81672</p>
            <p>+91 88888 81672</p>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <div className="flex justify-center mb-4">
            <Clock3 size={30} />
          </div>

          <h3 className="text-2xl font-medium text-[#1f1f1f]">
            Working Hours
          </h3>

          <div className="mt-4 space-y-1 text-[#b68b07] text-lg">
            <p>Daily: 9 AM - 7 PM</p>
            <p>Friday - Closed</p>
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-center mb-4">
            <Mail size={30} />
          </div>

          <h3 className="text-2xl font-medium text-[#1f1f1f]">
            Write To Us
          </h3>

          <div className="mt-4 space-y-1 text-[#b68b07] text-lg">
            <p>info@shakuntalgroup.com</p>
            <p>sales@shakuntalgroup.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Map */}
      <div className="mt-20 overflow-hidden rounded-[20px]">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
          alt="Map"
          className="w-full h-[220px] object-cover grayscale"
        />
      </div>
    </section>
  );
};

export default ContactUsPage;