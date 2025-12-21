import React from 'react';
import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
  return (
    /* Optimization 1: added "hidden md:block". 
       This hides the orbs on mobile and only shows them on tablets/desktops.
       This is the #1 way to stop mobile lag.
    */
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
      
      {/* Orb 1 */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3], 
          x: [0, 100, 0], 
          y: [0, -50, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        /* Optimization 2: added style={{ willChange: "transform, opacity" }}. 
           This tells the phone to use the GPU (Graphics Chip) instead of the CPU.
        */
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"
      />

      {/* Orb 2 */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.4, 0.2], 
          x: [0, -50, 0], 
          y: [0, 100, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default BackgroundOrbs;