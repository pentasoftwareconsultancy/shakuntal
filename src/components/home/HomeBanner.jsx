import { motion } from "framer-motion";
import homebaner from '../../assets/home/bg image.png'
import ajay from '../../assets/home/Ajay vIjay Sir.png'

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
        <div className="relative z-10 h-full px-8 md:px-30 flex py-7 md:items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[650px] text-black z-20"
          >

            <h3 className="text-[#181A20] text-2xl md:text-5xl font-raleway font-[400] leading-9 md:leading-14">
              Buying a home is one of <br/>the most important <br/>
               decisions in a person's life.<br/> At Shakuntal Group, we
               <br/> build with that<br/>    responsibility in mind.
            </h3>

            <div className="mt-10">
              <h5 className="text-xl md:text-2xl font-poppins font-[600]">
                Ajay Vijay
              </h5>

              <p className="text-base md:text-lg text-[#997708] font-poppins font-[600]">
                Director And Founder Of <br/>
                 Shakuntal Group
              </p>
            </div>

          </motion.div>

          {/* Right Image From Bottom */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-0 right-20 z-10"
          >

            <img
              src={ajay}
              alt="Ajay Vijay Sir"
              className="w-[400px] md:w-[600px] object-contain"
            />

          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default HomeBanner