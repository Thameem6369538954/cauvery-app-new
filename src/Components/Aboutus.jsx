import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertA from "../Certif/CertA.jpeg";
import CertB from "../Certif/CertB.jpeg";
import CertC from "../Certif/CertC.jpeg";
import MM from "../Images/MM.png";

const images = [
  { src: CertA, label: "ISO 9001: Certified" },
  { src: CertB, label: "Premium Quality Standards" },
  { src: CertC, label: "Trusted by Customers" },
];

const Aboutus = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-10 lg:px-24">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight drop-shadow-md">
          Why We Are Special
        </h1>
        <img src={MM} className="w-28 md:w-40 lg:w-48 mt-6" alt="MM Logo" />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-10 rounded-3xl shadow-2xl space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-700 font-[Poppins] leading-relaxed">
            <span className="text-[#9f0712] font-[Heading] text-2xl md:text-3xl ">
              Cauvery
            </span>{" "}
            – the distinguished Ponni rice brand curated by GSNR Rice Industries Private Limited – epitomizes excellence in the agro-products realm. Established in 2008, we are a vanguard processor and purveyor of premium agricultural commodities in Tamil Nadu, anchored in a heritage spanning three generations.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9f0712] hover:bg-[#7d060e] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Carousel */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-xl bg-white p-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index].src}
                alt={images[index].label}
                className="w-full max-w-sm object-contain"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-md text-sm font-semibold text-[#9f0712] shadow">
              {images[index].label}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 w-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#9f0712] focus:ring-offset-2 ${
                  index === i
                    ? "bg-[#9f0712] scale-125 shadow"
                    : "bg-gray-300 hover:bg-[#9f0712]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
