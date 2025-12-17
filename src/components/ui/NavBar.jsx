import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Gallery', 'Blog', 'Contact'];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    // 1. OPTIMIZATION: Reduced backdrop-blur on mobile, increased it for desktop only.
    // Added will-change-transform to keep the header stable.
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 md:backdrop-blur-md border-b border-gray-800 will-change-transform">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div 
          className="flex flex-col text-left cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => scrollToSection('home')}
        >
          <span className="text-xl font-extrabold text-white leading-none">
            Barani Tharan
          </span>
          <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
            UI • UX • Developer
          </span>
        </div>

        {/* Desktop Navigation */}
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
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-400 hover:text-cyan-400 z-[60] p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isMenuOpen ? (
              <motion.path 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <motion.path 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // 2. OPTIMIZATION: Use 'opacity' and 'scale' instead of 'x: 100%' for mobile. 
            // Sliding a 100% width div is much heavier than a simple fade-in.
            // Removed backdrop-blur from the mobile overlay to save GPU.
            className="fixed inset-0 w-full h-screen bg-[#050505] z-50 flex flex-col justify-center items-center will-change-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Shorter duration = less time for the CPU to struggle
          >
            <nav className="flex flex-col space-y-6 text-center w-full px-10">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl text-gray-300 font-bold hover:text-cyan-400 transition-colors uppercase py-2 border-b border-gray-900/50 last:border-b-0"
                  // 3. OPTIMIZATION: Reduced stagger complexity for mobile.
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
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