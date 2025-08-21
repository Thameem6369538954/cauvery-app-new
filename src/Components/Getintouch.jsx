import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope, FaDownload } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", query: "" });
  };

  return (
    <section className="py-20 bg-gray-100 px-4 md:px-20" id="contact">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        We’re Here for You
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-6 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://wa.me/919944697777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:text-green-500 transition"
          >
            <FaWhatsapp className="text-green-500 text-3xl" />
            <p>Chat with us on WhatsApp</p>
          </a>

          <a href="tel:+919944697777" className="flex items-center space-x-4 hover:text-blue-500 transition">
            <FaPhone className="text-blue-500 text-3xl" />
            <p>Call Us: +91 9944697777</p>
          </a>

          <a href="mailto:Info@cauveryrice.com" className="flex items-center space-x-4 hover:text-red-500 transition">
            <FaEnvelope className="text-red-500 text-3xl" />
            <p>Email: Info@cauveryrice.com</p>
          </a>

          <a
            href="public/Pdf/INTERNATIONAL BROCHURE-Cauvery.pdf"
            download
            className="flex items-center space-x-4 hover:text-yellow-500 transition"
          >
            <FaDownload className="text-yellow-500 text-3xl" />
            <p>Download Our Brochure</p>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="query"
            placeholder="Your Query"
            value={formData.query}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-600"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
