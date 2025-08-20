import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Rice from "../assets/Rice Bag/brown rice 2.png";
import KKA from "../assets/Rice Bag/idli 2.png";
import KKB from "../assets/Rice Bag/ponni 2.png";
import KKC from "../assets/Rice Bag/raw green 2.png";
import ponni from "../Images/ponni.png";

const products = [
   {
    image: KKA,
    title: 'Bulk & Wholesale',
    description: 'Custom packaging for hotels, restaurants, and exporters.',
    rating: 4.0,
  },
  {
    image: ponni,
    title: 'Classic Ponni Raw Rice',
    description: 'Perfect for daily meals, idlis, and dosas. Available in 1kg, 5kg, and 10kg packs.',
    rating: 4.5,
  },
  {
    image: Rice,
    title: 'Aged Ponni Sella Rice',
    description: 'Ideal for biryanis, fried rice, and gourmet dishes. 14-month aged, extra-long grains, aromatic richness.',
    rating: 4.8,
  },
  {
    image: KKB,
    title: 'Organic Ponni Rice',
    description: 'Certified organic – perfect for health-conscious families.',
    rating: 4.3,
  },
 
  {
    image: KKC,
    title: 'Bulk & Wholesale',
    description: 'Custom packaging for hotels, restaurants, and exporters.',
    rating: 4.0,
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMobileClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="pro" className="relative py-16 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Animated Absolute Background Images */}
      {/* <motion.img
        src={Rice}
        alt="Decorative Rice"
        className="absolute lg:left-[60%] md:left-[50%] top-0 pointer-events-none select-none"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5 }}
      /> */}
      {/* <motion.img
        src={KKA}
        alt="Decorative KKA"
        className="absolute lg:left-0 md:left-0 top-0 pointer-events-none select-none -z-10 md:z-1"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.7 }}
      /> */}

      {/* Headings */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="font-[Wonder] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9f0712]">
          Our Products
        </h1>
        <h2 className="font-[Wonder] text-xl sm:text-2xl lg:text-3xl text-[#9f0712]">
          The Cauvery Collection
        </h2>
        <p className="font-[Poppins] text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mt-2">
          Crafted for Every Kitchen, Loved by Every Palate
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[3/4] bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => handleMobileClick(index)}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <motion.div
                className={`absolute inset-0 p-4 flex flex-col justify-end rounded-2xl
                  bg-gradient-to-t from-[#4ba971]/80 via-black/30 to-transparent
                  transition-opacity duration-300
                  ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <h3 className="text-white text-lg font-semibold font-[Poppins]">{product.title}</h3>
                <p className="text-white text-sm mt-1 font-[Poppins]">{product.description}</p>
                <div className="flex items-center mt-2 text-white">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">{product.rating}</span>
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
