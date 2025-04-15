import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            className="w-10 h-10 relative overflow-hidden mr-4"
            animate={{ 
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF00F5] rounded-md"></div>
            <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
              <span className="text-foreground font-heading font-bold">TZ</span>
            </div>
          </motion.div>
          <h1 className="text-xl font-heading font-bold">
            <span className="gradient-text">TWELVE ZODIAC</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="menu-item text-foreground hover:text-[#00F0FF] transition-colors duration-300 glow-on-hover">Home</a>
          <a href="#features" className="menu-item text-foreground hover:text-[#00F0FF] transition-colors duration-300 glow-on-hover">Features</a>
          <a href="#projects" className="menu-item text-foreground hover:text-[#00F0FF] transition-colors duration-300 glow-on-hover">Projects</a>
          <a href="#about" className="menu-item text-foreground hover:text-[#00F0FF] transition-colors duration-300 glow-on-hover">About</a>
          <a href="#contact" className="menu-item text-foreground hover:text-[#00F0FF] transition-colors duration-300 glow-on-hover">Contact</a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            type="button" 
            onClick={toggleMenu}
            className="text-foreground hover:text-[#00F0FF] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-background/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 px-6 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-[#00F0FF] transition-colors duration-300 py-2"
                onClick={handleLinkClick}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-foreground hover:text-[#00F0FF] transition-colors duration-300 py-2"
                onClick={handleLinkClick}
              >
                Features
              </a>
              <a 
                href="#projects" 
                className="text-foreground hover:text-[#00F0FF] transition-colors duration-300 py-2"
                onClick={handleLinkClick}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-[#00F0FF] transition-colors duration-300 py-2"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-[#00F0FF] transition-colors duration-300 py-2"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
