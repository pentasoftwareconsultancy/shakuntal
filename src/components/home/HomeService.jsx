import React, { useState } from 'react'
import {
  ShieldCheck,
  KeyRound,
  Building2,
  MapPin,
} from 'lucide-react'

const servicesData = [
  {
    id: 1,
    icon: <ShieldCheck size={34} />,
    title: 'Design Assurance',
    description:
      'Layouts carefully planned to maximise usable space and improve everyday living.',
  },
  {
    id: 2,
    icon: <KeyRound size={34} />,
    title: 'Quality Construction',
    description:
      'Strong structural standards and disciplined execution ensure durability and reliability.',
  },
  {
    id: 3,
    icon: <Building2 size={34} />,
    title: 'Thoughtful Amenities',
    description:
      'Facilities designed to support wellness, recreation, and community living.',
  },
  {
    id: 4,
    icon: <MapPin size={34} />,
    title: 'Strategic Locations',
    description:
      'Projects located in areas that offer strong connectivity and long-term growth potential.',
  },
]

const HomeService = () => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="w-full bg-[#f7f7f7] px-6 md:px-20 py-24">

      {/* Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <h1 className="text-[42px] md:text-[64px] leading-tight font-light text-[#111]">
            Life at
            <br />
            Shakuntal Group
          </h1>
        </div>

        {/* Right */}
        <div>
          <p className="text-[#9b9b9b] text-[20px] leading-[40px]">
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
                p-10 min-h-[320px]
                transition-all duration-500 ease-in-out
                border border-transparent

                ${
                  isActive
                    ? 'bg-[#a88300] text-white scale-105 z-20 shadow-2xl'
                    : 'bg-white text-[#222] scale-100 z-10 shadow-lg'
                }
              `}
            >

              {/* Icon */}
              <div className="mb-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[32px] leading-tight font-light">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  text-[18px] leading-[32px] mt-6 transition-all duration-300
                  ${
                    isActive
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