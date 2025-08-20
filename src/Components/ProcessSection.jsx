import { motion } from "framer-motion";
import { FaSeedling, FaLeaf, FaHandsHelping, FaWarehouse, FaCogs, FaGlobe } from "react-icons/fa";
import SASA from "../Images/63.jpg";

const steps = [
  { icon: <FaSeedling />, title: "Seed Selection", description: "Heirloom seeds from trusted farmers." },
  { icon: <FaLeaf />, title: "Natural Cultivation", description: "Chemical-free pest control | Solar-powered irrigation." },
  { icon: <FaHandsHelping />, title: "Handpicked Harvest", description: "Grains harvested at peak ripeness by skilled workers." },
  { icon: <FaWarehouse />, title: "Patient Aging", description: "Stored in climate-controlled warehouses for 14 months." },
  { icon: <FaCogs />, title: "Advanced Milling", description: "AI sorting removes impurities | UV-treated packaging." },
  { icon: <FaGlobe />, title: "Global Delivery", description: "Sealed for freshness | Shipped worldwide." }
];

const CauveryProcess = () => {
  return (
    // Using min-h-screen to ensure the section takes up full viewport height
    <section className="relative min-h-screen py-16 text-center font-[Poppins]">
      
      {/* Animated Absolute Background Div using inset-0 */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SASA})` }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <motion.h2 
        className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight drop-shadow-md p-2 bg-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        From Farm to Table
      </motion.h2>
      <motion.h2 
        className="font-[Wonder] text-4xl sm:text-5xl md:text-4xl text-[#9f0712] tracking-tight drop-shadow-md p-2 bg-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Cauvery Process
      </motion.h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="p-6 shadow-xl rounded-xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="text-5xl text-yellow-500 mb-4"
              initial={{ rotate: -10, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              {step.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-700">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        className="mt-10 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore Our Process in Video
      </motion.button>
    </section>
  );
};

export default CauveryProcess;
