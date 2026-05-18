import React from 'react'
import homehero from '../../assets/home/homehero.avif'

const HomeHero = () => {
  return (
    <div className="relative w-full h-screen">

      {/* Background Image */}
      <img
        src={homehero}
        alt="homehero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Text */}
      <div className="absolute bottom-36 left-10 z-10">
        <h1 className="text-white text-6xl font-extralight leading-tight">
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