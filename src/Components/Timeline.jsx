import { motion } from "framer-motion";
import { CheckCircle, Leaf, Truck, Store } from "lucide-react";
import KK from "../Images/KK.png"; // Import local image

const timelineData = [
  { icon: <Leaf className="w-12 h-12 text-green-600" />, title: "Seedling Stage", description: "Carefully selected seeds are sown in nutrient-rich soil.", delay: 0.2 },
  { icon: <CheckCircle className="w-12 h-12 text-yellow-600" />, title: "Harvesting", description: "After months of nurturing, the rice is harvested with precision.", delay: 0.4 },
  { icon: <Truck className="w-12 h-12 text-blue-600" />, title: "Aging Process", description: "The rice rests for 14 months to enhance aroma and texture.", delay: 0.6 },
  { icon: <Store className="w-12 h-12 text-red-600" />, title: "From Our Fields to Your Family", description: "The finest Cauvery Ponni Rice reaches your table.", delay: 0.8 }
];

export default function HorizontalTimeline() {
  return (
    <div
      className="relative py-16 px-6 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${KK})` }} // Using local background image
    >
      {/* Section Heading */}
      <motion.h2
        className="font-[Wonder] text-center text-5xl md:text-6xl text-[#9f0712] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.h2>
      <motion.h3
        className="font-[Wonder] text-center text-3xl md:text-4xl text-[#9f0712] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        A Legacy Rooted in the Cauvery Delta
      </motion.h3>
      <motion.p
        className="text-lg text-gray-700 font-[Poppins] text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        "From Our Fields to Your Family—A Journey of Trust Since 2008"
      </motion.p>

      {/* Timeline Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        
        {/* Horizontal Dotted Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-4 border-dashed border-gray-400 z-0"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center  shadow-lg p-6 w-full max-w-xs rounded-2xl border border-gray-200 z-10 bg-white font-[poppins]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item.delay }}
          >
            {/* Timeline Icon */}
            <div className="mb-4">{item.icon}</div>

            {/* Small Connector for Mobile */}
            {index !== timelineData.length - 1 && (
              <div className="block md:hidden w-16 h-1 border-t-4 border-dashed border-gray-400"></div>
            )}

            {/* Timeline Content */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
