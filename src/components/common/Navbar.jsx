import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../core/constants/routes.constant'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    {
      label: 'Our Story',
      path: ROUTES.OURSTORY,
    },
    {
      label: 'Our Projects',
      path: ROUTES.OURPROJECT,
    },
    {
      label: 'Enquire',
      path: ROUTES.ENQUIRE,
    },
    {
      label: 'Chat',
      path: ROUTES.CHAT,
    },
    {
      label: 'Career',
      path: ROUTES.CAREER,
    },
  ]

  return (
    <div className="w-full bg-gradient-to-r from-[#02152d] to-[#002b5b] px-16 py-3 flex items-center justify-between">

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
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
              location.pathname === item.path
                ? 'text-yellow-400 font-medium'
                : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contact Button */}
      <button
        onClick={() => navigate(ROUTES.CONTACT)}
        className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#02152d] transition-all duration-300"
      >
        Contact Us
      </button>
    </div>
  )
}

export default Navbar