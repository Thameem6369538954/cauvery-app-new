import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Meet Rajesh: The Farmer Behind Your Rice",
    image: "/images/farmer.jpg",
  },
  {
    title: "Why Aged Rice is a Superfood",
    image: "/images/aged-rice.jpg",
  },
  {
    title: "How to Cook Perfect Fluffy Rice Every Time",
    image: "/images/cook-rice.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="font-[Wonder] text-4xl sm:text-5xl md:text-6xl text-[#9f0712] tracking-tight text-center drop-shadow-md p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Stories from the Delta
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-t-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;