import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

import { ROUTES } from "../../core/constants/routes.constant";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#120b00] text-white px-6 md:px-16 lg:px-24 pt-16 pb-8">

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#2a2116] pb-12">

        {/* Left Section */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[140px] md:w-[220px] object-contain"
          />

          <p className="text-[#A5A49A] font-poppins font-[300] text-sm leading-7 mt-1 max-w-[280px]">
            Thoughtfully planned spaces built with quality, trust, and lasting
            value.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61574815765879"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#997708] transition flex items-center justify-center cursor-pointer"
            >
              <FaFacebook size={15} />
            </a>

            {/* Whatsapp */}
            <a
              href="https://wa.me/918888881672"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#997708] transition flex items-center justify-center cursor-pointer"
            >
              <FaWhatsapp  size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/shakuntalgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#997708] transition flex items-center justify-center cursor-pointer"
            >
              <FaInstagram size={15} />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/company/shakuntal-group"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#997708] transition flex items-center justify-center cursor-pointer"
            >
              <FiLinkedin size={15} />
            </a>

          </div>
        </div>

        {/* Explore */}
        <div>
          <div className="inline-block">
            <h3 className="text-2xl font-raleway font-[700] text-[#FFFFFF]">
              Explore
            </h3>

            <div className="flex items-center gap-2 mt-2 mb-6">
              <div className="w-10 h-[4px] rounded-2xl bg-[#997708]"></div>
              <div className="w-1 rounded-2xl h-[4px] bg-[#997708]"></div>
            </div>
          </div>

          <ul className="space-y-4 text-[#A5A49A] font-poppins font-[300] text-sm">
            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.HOME)}>
              Home
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.OURSTORY)}>
              About
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.OURPROJECT)}>
              Our Projects
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Blogs
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Gallery
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.CONTACT)}>
              Contact
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <div className="inline-block">
            <h3 className="text-2xl font-raleway font-[700] text-[#FFFFFF]">
              Projects
            </h3>

            <div className="flex items-center gap-2 mt-2 mb-6">
              <div className="w-10 h-[4px] rounded-2xl bg-[#997708]"></div>
              <div className="w-1 rounded-2xl h-[4px] bg-[#997708]"></div>
            </div>
          </div>

          <ul className="space-y-4 text-[#A5A49A] font-poppins font-[300] text-sm">
            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.PROJECTDETAILONE)}>
              Blue Water
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.PROJECTDETAILTWO)}>
              Dwarka
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.PROJECTDETAILTHREE)}>
              Forestia
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.PROJECTDETAILFOUR)}>
              Shakuntal Commercia
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.PROJECTDETAILFIVE)}>
              Alentia
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="inline-block">
            <h3 className="text-2xl font-raleway font-[700] text-[#FFFFFF]">
              Contact
            </h3>

            <div className="flex items-center gap-2 mt-2 mb-6">
              <div className="w-10 h-[4px] rounded-2xl bg-[#997708]"></div>
              <div className="w-1 rounded-2xl h-[4px] bg-[#997708]"></div>
            </div>
          </div>

          <div className="space-y-5 text-[#A5A49A] font-poppins font-[300] text-sm">
            <div className="flex items-start gap-3">
              <FaPhoneAlt size={16} className="mt-1 text-white" />
              <p>88888 81672</p>
            </div>

            <div className="flex items-start gap-3">
              <HiMail size={16} className="mt-1 text-white" />
              <p>needhelp@company.com</p>
            </div>

            <div className="flex items-start gap-3">
              <FaLocationDot size={30} className="mt-1 text-white" />

              <p className="leading-6">
                Office No. 110,111 & 112, H Wing,
                Jai Ganesh Samrajya,
                Spine Road, Bhosari,
                Pune - 411039
              </p>
            </div>
          </div>

          {/* Email Input */}
          <div className="flex items-center overflow-hidden rounded-lg mt-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full h-[48px] px-4 bg-white text-black text-sm outline-none"
            />

            <button className="bg-[#997708] min-w-[56px] h-[48px] flex items-center justify-center hover:bg-[#997708] transition">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[#A5A49A] font-poppins font-[300] text-sm">

        <p>
          © All Copyright 2025 by Mindfull Creative Studio
        </p>

        <div className="flex items-center gap-4">
          <p className="hover:text-white transition cursor-pointer">
            Terms of Use
          </p>

          <span>|</span>

          <p className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;