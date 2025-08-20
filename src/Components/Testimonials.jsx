import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import MM from "../Images/MM.png";
const testimonials = [
  {
    name: "Chef Meera",
    position: "Chennai",
    feedback: "Cauvery Rice transformed our biryani—it’s the secret ingredient!",
    avatar: "https://i.imgur.com/6fLZp2c.jpg",
  },
  {
    name: "Aarthi",
    position: "Dubai",
    feedback: "Top-grade rice! My dishes taste authentic and customers love it!",
    avatar: "https://i.imgur.com/NXhRvoF.jpg",
  },
  {
    name: "Vikram Patel",
    position: "Wholesaler",
    feedback: "Bulk orders always arrive on time and the grains are top-notch!",
    avatar: "https://i.imgur.com/RO6b4cr.jpg",
  },
  {
    name: "Anita Verma",
    position: "Catering Service",
    feedback: "Perfect rice every time! It's helped elevate my catering business.",
    avatar: "https://i.imgur.com/YjA7j4H.jpg",
  },
];

const ModernTestimonialsCarousel = () => {
  return (
    <div className="bg-gradient-to-b from-white py-5 px-6 md:px-20">
 <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight text-center drop-shadow-md p-5">
        What Our Clients Say
        </h1>
        <img src={MM} className="w-32 md:w-48 lg:w-56 mb-6" alt="MM" />
      </div>
      <Swiper
        spaceBetween={40}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className=" rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#9f0712] mb-4"
                />
                <h4 className="text-xl font-semibold text-[#9f0712]">{t.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{t.position}</p>
                <p className="text-gray-700 leading-relaxed italic">"{t.feedback}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModernTestimonialsCarousel;
