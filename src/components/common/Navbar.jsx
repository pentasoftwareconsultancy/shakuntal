import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ROUTES } from '../../core/constants/routes.constant'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Navbar Background State
  const [isScrolled, setIsScrolled] = useState(false)

  // Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // WhatsApp Redirect
  const handleWhatsAppChat = () => {
    window.open(
      'https://wa.me/7798088866',
      '_blank'
    )
  }

  const navItems = [
    {
      name: 'Our Story',
      route: ROUTES.OURSTORY,
    },
    {
      name: 'Our Projects',
      route: ROUTES.OURPROJECT,
    },
    {
      name: 'Enquire',
      route: ROUTES.ENQUIRE,
    },
    {
      name: 'Career',
      route: ROUTES.CAREER,
    },
  ]

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000cc] backdrop-blur-[25px]'
          : 'bg-[#00000066] backdrop-blur-[25px]'
      }`}
    >

      <div className="px-5 md:px-10 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => navigate(ROUTES.HOME)}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[110px] md:w-[140px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">

          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.route)}
              className={`text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
                location.pathname === item.route
                  ? 'text-yellow-400 font-medium'
                  : ''
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* WhatsApp Chat */}
          <button
            onClick={handleWhatsAppChat}
            className="text-white text-[17px] transition-all duration-300 hover:text-green-400"
          >
            Chat
          </button>

          {/* Contact Button */}
          <button
            onClick={() => navigate(ROUTES.CONTACT)}
            className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#02152d] transition-all duration-300"
          >
            Contact Us
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="bg-[#000000ee] backdrop-blur-xl px-6 py-6 flex flex-col gap-6">

          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.route)
                setIsMenuOpen(false)
              }}
              className={`text-left text-white text-[17px] transition-all duration-300 hover:text-yellow-400 ${
                location.pathname === item.route
                  ? 'text-yellow-400 font-medium'
                  : ''
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppChat}
            className="text-left text-white text-[17px] hover:text-green-400 transition-all duration-300"
          >
            Chat
          </button>

          {/* Contact */}
          <button
            onClick={() => {
              navigate(ROUTES.CONTACT)
              setIsMenuOpen(false)
            }}
            className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#02152d] transition-all duration-300 w-full"
          >
            Contact Us
          </button>

        </div>

      </div>

    </div>
  )
}

export default Navbar