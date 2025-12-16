import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 relative z-10 bg-[#0c0c0c] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          My <span className="text-pink-500">Gallery</span>
        </h2>
        
        {/* FIXED GRID LAYOUT: 
            - grid-cols-2/3/4 for responsiveness.
            - aspect-square forces every container to be the same height and width.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DATA.gallery.map((imagePath, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square shadow-xl hover:shadow-pink-500/30 transition-shadow duration-300" 
            >
              <img 
                src={imagePath} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // object-cover ensures the image fills the square container
                loading="lazy"
              />
              {/* Overlay for visual effect on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;