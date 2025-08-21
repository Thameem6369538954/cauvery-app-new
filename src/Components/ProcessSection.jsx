import React from "react";
import { motion } from "framer-motion";
import ProductImg from "../Images/asd.png"; // Replace with your product image

const productVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const OurProducts = () => {
  return (
    <section className="w-full py-20 bg-white px-4 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">

        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={productVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-[Wonder] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9f0712] mb-4">
            Our Products
          </h2>
          <a
            href="https://www.cauveryrice.com"
            className="text-blue-600 font-semibold text-lg sm:text-xl underline mb-4 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cauveryrice.com
          </a>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose tracking-wide">
            Our grains come from the farmers of the Cauvery Delta, who vehemently adhere to our quality standards. We tap into our expertise in selecting authentic paddy from the farmers and cleaning it to remove impurities. Our technicians and quality experts prudently oversee the entire milling process. This way, we continuously ensure an epitome of quality and timely delivery. Each batch of rice goes through a 14-step laboratory process to ensure quality before reaching the market. Further, its moisture content is brought down through three stages of mechanical drying before storage. Finally, after 14 months of natural ageing, the grains reach our mill.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={productVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={ProductImg}
            alt="Our Products"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurProducts;
