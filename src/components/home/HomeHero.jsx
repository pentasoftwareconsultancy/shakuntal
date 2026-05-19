// import homehero from '../../assets/home/homehero.avif'

// const HomeHero = () => {
//   return (
//     <div className="relative w-full h-[120vh]">

//       {/* Background Image */}
//       <img
//         src={homehero}
//         alt="homehero"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       {/* Text */}
//       <div className="absolute bottom-16 left-10 z-10">
//         <h1 className="text-white text-[56px] font-raleway font-[300] leading-tight">
//           A home is more than
//           <br />
//           a structure, It’s a
//           <br />
//           lifelong dream.
//         </h1>
//       </div>

//     </div>
//   )
// }

// export default HomeHero


import { useEffect, useState } from 'react'

import project1 from '../../assets/home/project1.avif'
import project2 from '../../assets/projectDetailTwo/projectdetailshero.png'
import project3 from '../../assets/projectDetailThree/hero.png'
import project4 from '../../assets/projectDetailFour/hero.png'
import project5 from '../../assets/projectDetailFive/hero.png'

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
]

const HomeHero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}vw`,
          transform: `translateX(-${currentImage * 100}vw)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-screen h-full flex-shrink-0"
          >
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text */}
      <div className="absolute bottom-16 left-10 z-10">
        <h1 className="text-white text-[56px] font-raleway font-[300] leading-tight">
          A home is more than
          <br />
          a structure, It’s a
          <br />
          lifelong dream.
        </h1>
      </div>
    </div>
  )
}

export default HomeHero