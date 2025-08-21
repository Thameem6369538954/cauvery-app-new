import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import SLB from "../Images/SLB.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer
      className="relative text-white py-16 font-[Poppins] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SLB})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Key Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Key Links</h2>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Recipes', 'Sustainability', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-yellow-500 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Office */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Registered Office</h2>
            <p>21, C.V. Raman Road, Alwarpet,</p>
            <p>Chennai - 600 028</p>
          </div>

          {/* Branch Add */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Branch Office</h2>
            <p>No: 27, Annamalai Nagar Ext</p>
            <p>Tiruchirappalli - 620 018</p>
          </div>

          {/* Factory Address */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Factory</h2>
            <p>56, Kodikal Street, Mathanam South,</p>
            <p>Poovalur, Lalgudi, Tiruchirappalli - 621 712</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10 flex justify-center md:justify-end space-x-6 text-2xl">
          <a href="https://www.facebook.com/cauveryrice" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/cauveryrice" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/cauveryrice" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/cauveryrice" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Newsletter */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Join the Cauvery Family—Because Excellence is a Tradition.
          </h2>
          <form
            onSubmit={handleSubscription}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-[300px] border border-yellow-500 rounded-lg sm:rounded-l-lg sm:rounded-r-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 w-full sm:w-auto bg-yellow-500 text-black font-bold rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-yellow-600 transition"
            >
              Subscribe for Updates
            </button>
          </form>
          {subscribed && (
            <p className="text-sm text-yellow-500 mt-4">Thank you for subscribing!</p>
          )}
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm border-t border-yellow-500 pt-4">
          <p>&copy; 2025 Cauvery Rice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
