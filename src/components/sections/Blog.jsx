import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          Latest <span className="text-green-500">Thoughts</span>
        </h2>
        
        <div className="space-y-8">
          {DATA.blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 flex items-start"
            >
              {/* Date Column */}
              <div className="flex flex-col text-left pr-6 min-w-[120px]">
                <p className="text-lg font-bold text-gray-400 border-b border-gray-600 pb-2 mb-2">
                  {blog.date}
                </p>
                <span className="text-sm text-gray-500">Blog Post</span>
              </div>
              
              {/* Content Column */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.description}</p>
                
                {/* The functional button using window.open */}
                <button
                  onClick={() => window.open(blog.url, '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center text-green-500 font-medium hover:text-green-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-base"
                >
                  Read article →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;