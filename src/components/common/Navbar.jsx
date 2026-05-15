import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../core/constants/routes.constant'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // WhatsApp Redirect
  const handleWhatsAppChat = () => {
    window.open(
      'https://wa.me/919309910816',
      '_blank'
    )
  }

  return (
    <div className="w-full absolute top-0 left-0 z-50 px-16 py-5 flex items-center justify-between bg-transparent">

      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => navigate(ROUTES.HOME)}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[110px] object-contain"
        />
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-10">

        {/* Our Story */}
        <button
          onClick={() => navigate(ROUTES.OURSTORY)}
          className={`text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
            location.pathname === ROUTES.OURSTORY
              ? 'text-yellow-400 font-medium'
              : ''
          }`}
        >
          Our Story
        </button>

        {/* Our Projects */}
        <button
          onClick={() => navigate(ROUTES.OURPROJECT)}
          className={`text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
            location.pathname === ROUTES.OURPROJECT
              ? 'text-yellow-400 font-medium'
              : ''
          }`}
        >
          Our Projects
        </button>

        {/* Enquire */}
        <button
          onClick={() => navigate(ROUTES.ENQUIRE)}
          className={`text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
            location.pathname === ROUTES.ENQUIRE
              ? 'text-yellow-400 font-medium'
              : ''
          }`}
        >
          Enquire
        </button>

        {/* WhatsApp Chat */}
        <button
          onClick={handleWhatsAppChat}
          className="text-white text-[17px] transition-all duration-300 hover:text-green-400"
        >
          Chat
        </button>

        {/* Career */}
        <button
          onClick={() => navigate(ROUTES.CAREER)}
          className={`text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
            location.pathname === ROUTES.CAREER
              ? 'text-yellow-400 font-medium'
              : ''
          }`}
        >
          Career
        </button>

        {/* Contact Button */}
        <button
          onClick={() => navigate(ROUTES.CONTACT)}
          className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#02152d] transition-all duration-300"
        >
          Contact Us
        </button>

      </div>
    </div>
  )
}

export default Navbar