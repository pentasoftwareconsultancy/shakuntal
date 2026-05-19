import { useState } from 'react'
import { assurance, amenities, construction, locations } from "../icons/Icons";

const servicesData = [
  {
    id: 1,
    icon: assurance,
    title: 'Design Assurance',
    description:
      'Layouts carefully planned to maximise usable space and improve everyday living.',
  },
  {
    id: 2,
    icon: construction,
    title: 'Quality Construction',
    description:
      'Strong structural standards and disciplined execution ensure durability and reliability.',
  },
  {
    id: 3,
    icon: amenities,
    title: 'Thoughtful Amenities',
    description:
      'Facilities designed to support wellness, recreation, and community living.',
  },
  {
    id: 4,
    icon: locations,
    title: 'Strategic Locations',
    description:
      'Projects located in areas that offer strong connectivity and long-term growth potential.',
  },
]

const HomeService = () => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="w-full px-6 md:px-20 py-24">

      {/* Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-start">

        {/* Left */}
        <div>
          <h1 className="text-[32px] md:text-[45px] leading-13 font-raleway font-[400]">
            Life at
            <br />
            Shakuntal Group
          </h1>
        </div>

        {/* Right */}
        <div>
          <p className="text-[#858282] leading-7 font-poppins font-[300] text-[16px]">
            Every project begins with thoughtful planning and responsible
            development. We focus on intelligent layouts, quality
            construction, and spaces designed for long-term comfort.
            The result is homes that deliver lasting value, reliability,
            and trust for every family.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20">

        {servicesData.map((service, index) => {
          const isActive = activeCard === index

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveCard(index)}
              className={`
                relative cursor-pointer
                p-10 min-h-[280px] rounded-l-xl
                transition-all duration-500 ease-in-out
                border border-transparent

                ${isActive
                  ? 'bg-[#997708] text-white scale-105 z-20 shadow-2xl'
                  : 'bg-white text-[#222] scale-100 z-10 shadow-xl'
                }
              `}
            >

              {/* Icon */}
              <div className="mb-10">
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`
                    w-10 h-10 transition-all duration-300
                    ${isActive ? 'brightness-0 invert' : ''}
                  `}
                />
              </div>

              {/* Title */}
              <h3 className="text-[23px] font-raleway font-[400]">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  text-[14px] font-[300] leading-5 font-poppins transition-all duration-300
                  ${isActive
                    ? 'text-white/90'
                    : 'text-[#666]'
                  }
                `}
              >
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HomeService