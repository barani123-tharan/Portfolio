import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative z-10 transform-gpu">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all transform-gpu"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-blue-900/40 transition-colors flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;