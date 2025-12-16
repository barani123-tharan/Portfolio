// ./components/ui/MobileMenu.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileMenu = ({ isOpen, onNavigate, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#050505] z-40 flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-8 text-center mt-[-100px]">
            {navItems.map((item) => (
              <motion.button 
                key={item}
                // Use the onNavigate function passed from NavBar to scroll and close
                onClick={() => onNavigate(item)}
                className="text-4xl text-gray-300 font-bold hover:text-cyan-400 transition-colors uppercase"
                // Simple animation for items appearing
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item}
              </motion.button>
            ))}
            {/* Add Resume Link or other separate links here if needed */}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};