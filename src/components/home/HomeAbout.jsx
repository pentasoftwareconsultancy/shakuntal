import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../core/constants/routes.constant";

const statsData = [
  {
    number: 15,
    suffix: "+",
    title: "Years Of Experience",
  },
  {
    number: 1300,
    suffix: "+",
    title: "Units Delivered",
  },
  {
    number: 10,
    suffix: "L+",
    title: "Sq. Ft. Delivered",
  },
  {
    number: 30,
    suffix: "L+",
    title: "Sqft under construction",
  },
];

/* Counter Component */
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HomeAbout = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-8 md:px-20 py-24 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl leading-13 font-raleway font-[300] w-full"
          >
            Thoughtfully built spaces for modern living
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3D3B3B] font-poppins font-[275] text-lg leading-6 mt-10 max-w-[650px]"
          >
            Shakuntal Group is a trusted real estate developer with more than
            15 years of experience, built on the belief that exceptional spaces
            begin with intelligent planning and disciplined execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#3D3B3B] font-poppins font-[275] text-lg leading-6 mt-8 max-w-[650px]"
          >
            Every project reflects a strong focus on efficient layouts,
            construction quality, and long-term usability, ensuring that homes
            remain comfortable, practical, and valuable for years to come.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 border border-[#b28a19] text-[#b28a19] px-10 py-4 rounded-xl hover:bg-[#b28a19] hover:text-white transition-all duration-300"
            onClick={() => navigate(ROUTES.CONTACT)}
          >
            Schedule A Visit
          </motion.button>
        </motion.div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-y-20 gap-x-10">
          
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
            >
              <h1 className="text-6xl md:text-9xl leading-none font-abhaya text-[#997708]">
                <Counter
                  target={item.number}
                  suffix={item.suffix}
                />
              </h1>

              <p className="text-xl leading-5 text-[#181A20] font-poppins font-[400]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;