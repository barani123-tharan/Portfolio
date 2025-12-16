import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {DATA.about}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-blue-400 font-bold mb-1">Education</h3>
              <p className="text-gray-300">B.E. Computer Science</p>
              <p className="text-gray-500 text-sm">Dhanalakshmi Srinivasan College</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-purple-400 font-bold mb-1">Location</h3>
              <p className="text-gray-300">{DATA.location}</p>
              <p className="text-gray-500 text-sm">Open to Remote Work</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;