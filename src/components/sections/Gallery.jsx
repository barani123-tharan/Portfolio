import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 relative z-10 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-pink-500">Gallery</span>
        </h2>
        
        {/* Masonry Layout: columns-1 on mobile, columns-3 on desktop */}
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {DATA.gallery.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative break-inside-avoid rounded-2xl overflow-hidden group border border-gray-800"
            >
              <img 
                src={imgSrc} 
                alt={`Gallery ${index}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;