import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {DATA.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-6 bg-[#111] border border-gray-800 rounded-2xl hover:border-gray-600 transition-all text-center ${skill.bg}`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 ${skill.color}`}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d={skill.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-gray-200 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full ${skill.color.replace('text-', 'bg-')}`}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;