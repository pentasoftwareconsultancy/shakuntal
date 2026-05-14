import React, { useEffect, useRef, useState } from 'react'

import project1 from '../../assets/home/project1.avif'
import project2 from '../../assets/home/project2.avif'
import project3 from '../../assets/home/project3.avif'
import project4 from '../../assets/home/project4.avif'
import project5 from '../../assets/home/project5.avif'

const projectsData = [
  {
    id: 1,
    image: project1,
    title: 'Blue Water',
    location: 'Jadhavwadi, Chikhali, Pune',
  },
  {
    id: 2,
    image: project2,
    title: 'Dwarka',
    location: 'Chikhali, PCMC',
  },
  {
    id: 3,
    image: project3,
    title: 'Forestia',
    location: 'Dudulgaon - Moshi, Pune',
  },
  {
    id: 4,
    image: project4,
    title: 'Shakuntal Commercial',
    location: 'Chikhali, PCMC, Pune',
  },
  {
    id: 5,
    image: project5,
    title: 'Alentia',
    location: 'Charholi, Pune',
  },
]

const HomeProject = () => {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const slider = scrollRef.current

    const autoScroll = setInterval(() => {
      if (!isPaused && slider) {
        slider.scrollLeft += 1

        // Infinite Scroll
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth
        ) {
          slider.scrollLeft = 0
        }
      }
    }, 15)

    return () => clearInterval(autoScroll)
  }, [isPaused])

  return (
    <section className="w-full bg-[#f7f7f7] py-24 px-6 md:px-16">

      {/* Projects Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {projectsData.map((project) => (
          <div
            key={project.id}
            className="min-w-[260px] bg-white shadow-md"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[420px] object-cover"
            />

            {/* Content */}
            <div className="pt-4 pb-2">
              <h3 className="text-[28px] font-light text-[#222]">
                {project.title}
              </h3>

              <p className="text-[#8a8a8a] text-[18px] mt-1">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-16">
        <button className="border border-[#b28a19] text-[#b28a19] px-14 py-4 rounded-xl hover:bg-[#b28a19] hover:text-white transition-all duration-300">
          Our Projects
        </button>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10">
        <p className="text-[#444] text-[22px] leading-[42px] max-w-4xl mx-auto">
          A portfolio of residential and commercial developments
          designed with a focus on functionality, comfort, and lasting value.
        </p>
      </div>

      {/* Bottom Border */}
      <div className="w-full h-[1px] bg-[#d9c37b] mt-20"></div>
    </section>
  )
}

export default HomeProject