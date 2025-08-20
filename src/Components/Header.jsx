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
    <section className="relative w-full min-h-screen overflow-hidden font-[Poppins]">
      <Slider {...settings} className="w-full">
        <div className="relative w-full min-h-[500px] md:min-h-screen">
          {/* Background Video */}
          <motion.video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <source src={For} type="video/mp4" />
          </motion.video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16 text-center mt-30 md:mt-10">
            
            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Wonder] font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-300 drop-shadow-lg"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Experience the Soul of <span className="text-yellow-400">South India</span> in Every Grain
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl text-white/80 italic drop-shadow-md tracking-wide"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              For over a decade, <span className="font-bold text-yellow-400">Cauvery Rice</span> has been the gold standard of Ponni rice, uniting three generations of farming mastery with cutting-edge innovation. Sourced from the lush Cauvery Delta and aged to perfection, our rice isn’t just a meal—it’s a legacy on your plate.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all tracking-wider uppercase"
                whileHover={{ scale: 1.05 }}
              >
                Shop Now
              </motion.button>
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/80 text-black font-bold rounded-full shadow-lg hover:bg-white transition-all tracking-wider uppercase"
                whileHover={{ scale: 1.05 }}
              >
                Discover Our Story
              </motion.button>
            </motion.div>

            {/* Featured Highlights */}
            <motion.div
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-lg md:text-xl font-semibold text-white/90 justify-center"
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
