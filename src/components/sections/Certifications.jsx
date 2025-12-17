import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 overflow-hidden bg-[#0a0a0a] transform-gpu">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
         <div className="w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-[150px] absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-white text-center mb-16">
          My <span className="text-cyan-400">Credentials</span>
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DATA.certifications.map((cert, index) => (
            <motion.a 
              href={cert.link} target="_blank" rel="noopener noreferrer" key={index}
              variants={itemVariants}
              className="group relative bg-[#131313] p-6 rounded-2xl shadow-xl border border-gray-800 transition-all duration-300 hover:border-cyan-500/70 transform-gpu"
            >
              <div className="absolute inset-0 rounded-2xl -m-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 100% 100%, #06b6d440, transparent 40%)' }} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="text-5xl mb-4 text-cyan-400">📜</div>
                <div>
                  <h3 className="font-bold text-2xl text-white mb-1 group-hover:text-cyan-400 transition-colors">{cert.name}</h3>
                  <p className="text-md text-gray-400 mb-3 uppercase tracking-wider">{cert.issuer}</p>
                  <p className="text-sm font-mono text-gray-500">{cert.date || 'Year N/A'}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-cyan-500 group-hover:text-white transition-colors">
                  View Credential
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;