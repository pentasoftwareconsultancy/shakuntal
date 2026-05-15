import homebaner from '../../assets/home/bg image.png'
import ajay from '../../assets/home/Ajay vijay Sir.png'

const HomeBanner = () => {
  return (
    <div className="w-full py-5">

      <div className="relative w-full h-[700px] overflow-hidden">

        {/* Background Image */}
        <img
          src={homebaner}
          alt="Home Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 h-full px-8 md:px-30 flex items-center">

          {/* Left Content */}
          <div className="max-w-[650px] text-black z-20">

            <h3 className="text-3xl md:text-5xl font-normal leading-[1] font-light">
              Buying a home is one of the most important decisions in a
              person's life. At Shakuntal Group, we build with that
              responsibility in mind.
            </h3>

            <div className="mt-10">
              <h5 className="text-2xl font-semibold">
                Ajay Vijay
              </h5>

              <p className="text-lg text-[#997708] font-semibold mt-2">
                Director And Founder Of Shakuntal Group
              </p>
            </div>

          </div>

          {/* Right Image From Bottom */}
          <div className="absolute bottom-0 right-20 z-10">

            <img
              src={ajay}
              alt="Ajay Vijay Sir"
              className="w-[400px] md:w-[600px] object-contain"
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default HomeBanner