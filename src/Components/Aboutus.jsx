import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../Images/as.png"; // Replace with your image path

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AboutUs = () => {
  return (
    <section className="w-full py-20 bg-gray-50 px-4 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-md">
            About Us
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose tracking-wide">
            Our unique milling and manufacturing processes ensure that we deliver pesticide-free products of international quality. Our time-tested methodologies, quality control measures and dedicated, skilled workforce have paved the way for our product excellence. Like the course of our life-giver, our beloved River Cauvery, we flow across the regions of delta, pick up the best food grains of the land, and bring them to the ocean called global market.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-auto  object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
