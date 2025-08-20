import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../Images/LOGO.jpeg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "target", label: "About Us" },
  { id: "pro", label: "Products" },
  { id: "con", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 font-[Poppins] ${
        scrolled
          ? " shadow-lg backdrop-blur-md"
          : "/20 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer text-3xl font-semibold text-[#9f0712] p-2"
        >
          <img src={LOGO} alt="Logo" className="h-12 w-12 object-contain" />
        </ScrollLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-[#9f0712]">
          {navItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                className="relative group cursor-pointer transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9f0712] group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-[#9f0712]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col items-center  bg-opacity-90 rounded-lg shadow-lg mt-2 py-6 space-y-4 text-[#9f0712]"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="text-lg cursor-pointer hover:text-[#9f0712]"
                onClick={toggleMenu}
              >
                {item.label}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
