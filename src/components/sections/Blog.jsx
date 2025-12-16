import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Latest <span className="text-green-500">Thoughts</span>
        </h2>

        <div className="space-y-6">
          {DATA.blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-6 p-6 bg-[#111] border border-gray-800 rounded-2xl hover:bg-gray-900 transition-colors"
            >
              <div className="flex-shrink-0 w-full md:w-48 text-gray-500 text-sm font-mono flex flex-col justify-center">
                <span>{blog.date}</span>
                <span className="w-8 h-[1px] bg-gray-700 my-2"></span>
                <span>Blog Post</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-green-400 transition-colors mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {blog.excerpt}
                </p>
                <button className="mt-4 text-sm text-green-500 font-medium hover:underline">
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