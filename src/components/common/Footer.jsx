import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { ROUTES } from "../../core/constants/routes.constant";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#120b00] text-white px-6 md:px-16 lg:px-24 pt-16 pb-8">

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#2a2116] pb-12">

        {/* Left Section */}
        <div>
          <h2 className="text-[#b68b07] text-4xl font-bold leading-none">
            शाकुंतल
          </h2>

          <p className="text-[#b68b07] tracking-[3px] mt-1 text-sm">
            GROUP
          </p>

          <p className="text-[#9b9488] text-sm leading-7 mt-6 max-w-[280px]">
            Thoughtfully planned spaces built with quality, trust, and lasting
            value.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">

            {/* Phone */}
            <a
              href="tel:8888881672"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#b68b07] transition flex items-center justify-center cursor-pointer"
            >
              <Phone size={16} />
            </a>

            {/* Mail */}
            <a
              href="mailto:alentiashakuntal@gmail.com"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#b68b07] transition flex items-center justify-center cursor-pointer"
            >
              <Mail size={16} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61574815765879"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#b68b07] transition flex items-center justify-center cursor-pointer"
            >
              <FaFacebookF size={15} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/shakuntalgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#b68b07] transition flex items-center justify-center cursor-pointer"
            >
              <FaInstagram size={15} />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/company/shakuntal-group"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#21180d] hover:bg-[#b68b07] transition flex items-center justify-center cursor-pointer"
            >
              <FaLinkedinIn size={15} />
            </a>

          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Explore</h3>

          <ul className="space-y-4 text-[#9b9488] text-sm">
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
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>

          <ul className="space-y-4 text-[#9b9488] text-sm">
            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.OURSTORY)}>
              About
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Services
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.OURPROJECT)}>
              Our Projects
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Meet the Farmers
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Latest News
            </li>

            <li className="hover:text-white transition cursor-pointer" onClick={() => navigate(ROUTES.CONTACT)}>
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>

          <div className="space-y-5 text-[#9b9488] text-sm">
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-1 text-white" />
              <p>88888 81672</p>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-1 text-white" />
              <p>needhelp@company.com</p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={30} className="mt-1 text-white" />

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

            <button className="bg-[#b68b07] min-w-[56px] h-[48px] flex items-center justify-center hover:bg-[#9b7706] transition">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[#9b9488] text-sm">

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