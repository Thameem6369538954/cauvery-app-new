import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import For from "../../public/For.mp4";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden ">
      <Slider {...settings} className="w-full md:h-full">
        <div className="relative w-full min-h-[500px] md:min-h-screen">
          {/* Background Video */}
          <motion.div className="absolute inset-0 w-full h-full">
            <motion.video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <source src={For} type="video/mp4" />
            </motion.video>
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center text-white font-[Poppins]">
            <motion.h1
              className="text-4xl md:text-6xl font-[Wonder]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Experience the Soul of South India in Every Grain
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl max-w-2xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              For over a decade, Cauvery Rice has been the gold standard of Ponni rice, uniting three generations of farming mastery with cutting-edge innovation. Sourced from the lush Cauvery Delta and aged to perfection, our rice isn’t just a meal—it’s a legacy on your plate.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 flex space-x-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600"
                whileHover={{ scale: 1.1 }}
              >
                Shop Now
              </motion.button>
              <motion.button
                className="px-6 py-3  text-black font-bold rounded-lg shadow-lg hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
              >
                Discover Our Story
              </motion.button>
            </motion.div>

            {/* Featured Highlights */}
            <motion.div
              className="mt-10 text-lg md:text-xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              <p>✅ 100% Pesticide-Free</p>
              <p>✅ 14-Month Aged Perfection</p>
              <p>✅ Advanced Hygienic Milling</p>
            </motion.div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;