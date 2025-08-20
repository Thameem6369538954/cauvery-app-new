import React, { useState } from 'react';
import { motion } from 'framer-motion';
import New from "../Images/New.jpg"
const options = [
  {
    title: 'Online Store',
    description: 'Free shipping across India | Global delivery in 5-7 days.',
    image: New,
  },
  {
    title: 'Retail Partners',
    description: 'Major Chains: Reliance Fresh, Big Basket, Nature’s Basket.',
    image: New,
  },
  {
    title: 'International',
    description: 'Available in UAE, USA, Singapore, and Malaysia via Partner Links.',
    image: New,
  },
];

const FindCauveryRice = () => {
  const [pin, setPin] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search for store locator based on PIN code.
    console.log("Searching store for PIN:", pin);
  };

  return (
    <div className="py-16 px-6 bg-gray-50">
      {/* Header */}
      <motion.h2
        className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight text-center drop-shadow-md p-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find Cauvery Rice Near You
      </motion.h2>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {options.map((option, index) => (
          <motion.div
            key={index}
            className="relative  rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Store Locator Widget */}
      <motion.div
        className="max-w-3xl mx-auto  rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h4 className="text-2xl font-bold text-[#9f0712] text-center mb-4">
          Store Locator
        </h4>
        <p className="text-center text-gray-600 mb-6">
          Enter your PIN code to find the nearest store.
        </p>
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN code"
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#9f0712]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#9f0712] text-white rounded-md hover:bg-[#7d0512] transition duration-300"
          >
            Search
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default FindCauveryRice;
