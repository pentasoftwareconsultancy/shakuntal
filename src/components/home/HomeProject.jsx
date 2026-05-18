import { useEffect, useRef } from 'react'

import project1 from '../../assets/home/project1.avif'
import project2 from '../../assets/home/project2.jpg'
import project3 from '../../assets/home/project3.jpg'
import project4 from '../../assets/home/project4.jpg'
import project5 from '../../assets/home/project5.png'

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

  useEffect(() => {
    const slider = scrollRef.current

    const autoScroll = setInterval(() => {
      if (slider) {
        slider.scrollLeft += 1

        if (
          slider.scrollLeft >=
          slider.scrollWidth / 2
        ) {
          slider.scrollLeft = 0
        }
      }
    }, 20)

    return () => clearInterval(autoScroll)
  }, [])

  // Duplicate for infinite loop
  const duplicatedProjects = [
    ...projectsData,
    ...projectsData,
  ]

  return (
    <section className="w-full flex justify-center py-20">

      <div className='w-[95%]  overflow-hidden'>


      {/* Slider */}
      <div
        ref={scrollRef}
        className="
          flex gap-3 overflow-x-auto
          scrollbar-hide
          px-14
        "
      >

        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className="min-w-[150px] flex-shrink-0"
          >

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-[300px] h-[360px]
                  object-cover
                  hover:scale-105
                  transition-all duration-500
                "
              />

            </div>

            {/* Content */}
            <div className="pt-2">

              <h3 className="text-[18px] font-[400] text-[#2a2a2a] leading-none">
                {project.title}
              </h3>

              <p className="text-[11px] text-[#8c8c8c] mt-1">
                {project.location}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">

        <button
          className="
          border border-[#b28a19]
          text-[#b28a19]
          px-12 py-3
          rounded-lg
          text-[15px]
          hover:bg-[#b28a19]
          hover:text-white
            transition-all duration-300
          "
        >
          Our Projects
        </button>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-6 px-6">

        <p className="text-[#5c5c5c] text-[18px] leading-8 max-w-3xl mx-auto">
          A portfolio of residential and commercial developments
          designed with a focus on functionality, comfort, and lasting value.
        </p>

      </div>
          </div>

    </section>
  )
}

export default HomeProject