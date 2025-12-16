import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define all your navigation items/section IDs
const navItems = ['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Gallery', 'Blog', 'Contact']; // IMPORTANT: Ensure these match your section IDs (e.g., id="home")

const NavBar = () => {
  // 1. Add state to control the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu after clicking a link
    setIsMenuOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* START: Logo/Brand Text (Always Visible) */}
        <div 
          className="flex flex-col text-left cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => scrollToSection('home')}
        >
          <span className="text-xl font-extrabold text-white leading-none">
            Barani Tharan
          </span>
          <span className="text-xs text-gray-400 font-medium tracking-wider">
            UI • UX • Developer
          </span>
        </div>
        {/* END: Logo/Brand Text */}

        {/* Desktop Navigation (Visible only on medium screens and up) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* 2. Mobile Menu Toggle Button (Visible only on small screens) */}
        <button 
          className="md:hidden text-gray-400 hover:text-cyan-400 z-[60]" // z-[60] ensures it's above the mobile overlay
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Hamburger icon or Close icon */}
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isMenuOpen ? (
              // Close Icon (X)
              <motion.path 
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              // Hamburger Icon
              <motion.path 
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* 3. Mobile Menu Overlay (Conditionally Rendered) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-[#050505] z-50 flex flex-col justify-center items-center overflow-y-auto pt-20"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-8 text-center mt-[-100px] w-full max-w-sm">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-3xl text-gray-300 font-bold hover:text-cyan-400 transition-colors uppercase py-3 border-b border-gray-900 last:border-b-0"
                  // Staggered animation for links
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default NavBar;