import homehero from '../../assets/home/homehero.avif'

const HomeHero = () => {
  return (
    <div className="relative w-full h-[120vh]">

      {/* Background Image */}
      <img
        src={homehero}
        alt="homehero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

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