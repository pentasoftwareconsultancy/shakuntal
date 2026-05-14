import React from 'react'

const statsData = [
  {
    number: '15+',
    title: 'Years Of Experience',
  },
  {
    number: '1300+',
    title: 'Units Delivered',
  },
  {
    number: '10L+',
    title: 'Sq. Ft. Delivered',
  },
  {
    number: '30L+',
    title: 'Sqft under construction',
  },
]

const HomeAbout = () => {
  return (
    <section className="w-full bg-[#f5f5f5] px-8 md:px-20 py-24">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[40px] md:text-[58px] leading-tight font-light text-black max-w-[550px]">
            Thoughtfully built spaces for modern living
          </h2>

          <p className="text-[#8b8b8b] text-[18px] leading-[34px] mt-10 max-w-[650px]">
            Shakuntal Group is a trusted real estate developer with more than
            15 years of experience, built on the belief that exceptional spaces
            begin with intelligent planning and disciplined execution.
          </p>

          <p className="text-[#8b8b8b] text-[18px] leading-[34px] mt-8 max-w-[650px]">
            Every project reflects a strong focus on efficient layouts,
            construction quality, and long-term usability, ensuring that homes
            remain comfortable, practical, and valuable for years to come
          </p>

          <button className="mt-12 border border-[#b28a19] text-[#b28a19] px-10 py-4 rounded-xl hover:bg-[#b28a19] hover:text-white transition-all duration-300">
            Schedule A Visit
          </button>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-y-20 gap-x-10">

          {statsData.map((item, index) => (
            <div key={index}>
              <h1 className="text-[70px] md:text-[90px] leading-none font-light text-[#a47c00]">
                {item.number}
              </h1>

              <p className="text-[22px] text-[#222] mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default HomeAbout