import React from 'react';
import { motion } from 'framer-motion';

// Import local images for logos and recipes
import New from "../Images/New.jpg";
import FooterImg from "../Images/FooterImg.jpg";

const SustainabilityAndRecipes = () => {
  return (
    <div 
      className="py-16 px-6 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-white opacity-30 z-0"></div>
      
      {/* Sustainability Section */}
      <motion.div 
        className="max-w-6xl mx-auto mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight text-center drop-shadow-md p-2">
          Growing Rice, Growing Hope
        </h2>
        <p className="text-xl font-[Poppins] text-center text-gray-700 mb-8">
          Sustainability: Nurturing Earth, Empowering Communities
        </p>
        <div className="space-y-4 text-gray-800 text-lg mb-8 font-[Poppins] grid place-items-center">
          <p>
            <strong>Zero-Waste Farming:</strong> Rice husk recycled as biofuel for mills.
          </p>
          <p>
            <strong>Water Conservation:</strong> Drip irrigation partnerships with delta farmers.
          </p>
          <p>
            <strong>Women Empowerment:</strong> Training programs for female farmers.
          </p>
        </div>
        <blockquote className="italic text-center text-gray-600 mb-8">
          "We don’t inherit the earth from our ancestors—we borrow it from our children."
        </blockquote>
        <div className="flex justify-center space-x-8">
          <img src={New} alt="Fair Trade" className="w-24 h-auto" />
          <img src={New} alt="Soil Health Alliance" className="w-24 h-auto" />
          <img src={New} alt="Local NGO Partners" className="w-24 h-auto" />
        </div>
      </motion.div>

      {/* Recipes & Inspiration Section */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight text-center drop-shadow-md p-5">
          Unlock the Magic of Cauvery Rice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* Grandma's Kitchen */}
          <motion.div 
            className="rounded-lg shadow-lg overflow-hidden bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={New} 
              alt="Grandma's Kitchen" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Grandma’s Kitchen
              </h3>
              <p className="text-gray-600">
                Traditional recipes: Tamarind rice, pongal.
              </p>
            </div>
          </motion.div>
          {/* Modern Twists */}
          <motion.div 
            className="rounded-lg shadow-lg overflow-hidden bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={New} 
              alt="Modern Twists" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Modern Twists
              </h3>
              <p className="text-gray-600">
                Sushi bowls, quinoa-rice salads.
              </p>
            </div>
          </motion.div>
          {/* Chef's Corner */}
          <motion.div 
            className="rounded-lg shadow-lg overflow-hidden bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={New} 
              alt="Chef’s Corner" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Chef’s Corner
              </h3>
              <p className="text-gray-600">
                Exclusive collaborations with celebrity chefs.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.a
            href="#"
            className="bg-[#9f0712] text-white px-6 py-3 rounded-full font-[Poppins] text-lg shadow-md hover:bg-[#7d0512] transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Download Our Recipe eBook
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default SustainabilityAndRecipes;
