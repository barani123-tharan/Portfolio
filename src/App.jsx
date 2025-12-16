import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Data
import { DATA } from './data/portfolioData';

// UI Components
import NavBar from './components/ui/NavBar';
import BackgroundOrbs from './components/ui/BackgroundOrbs';
import ResumeModal from './components/ui/ResumeModal';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Gallery from './components/sections/Gallery';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

// Note: Ensure your index.css contains Tailwind directives
import './index.css'; 

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Top Scroll Progress Bar (Consistent gradient color) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left z-[60]" // Slightly updated gradient
        style={{ scaleX }} 
      />
      
      {/* Background Animation */}
      <BackgroundOrbs />
      
      {/* Navigation */}
      <NavBar />

      {/* Resume Popup */}
      <AnimatePresence>
        <ResumeModal 
            isOpen={showResume} 
            onClose={() => setShowResume(false)} 
            resumeLink={DATA.resumeLink}
        />
      </AnimatePresence>

      <main>
        {/* Sections */}
        <Hero setShowResume={setShowResume} />
        
        <About />
        
        {/* Mini Call-to-Action for Resume */}
        <section className="py-12 px-6 bg-[#0c0c0c] border-y border-gray-900/50">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                 <h2 className="text-2xl font-bold text-white mb-1">Want the full details?</h2>
                 <p className="text-gray-400 text-sm">Download my CV or view it directly in the browser.</p>
              </div>
              <div className="flex gap-4">
                 <button 
                    onClick={() => setShowResume(true)} 
                    className="px-6 py-3 border border-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition-all"
                 >
                    Preview CV
                 </button>
                 <a 
                    href={DATA.resumeLink} 
                    download 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
                 >
                    Download
                 </a>
              </div>
           </div>
        </section>

        <Skills />
        <Certifications />
        <Projects />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      
      {/* FOOTER: Copyright Notice */}
      <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-gray-900/50 mt-16">
        <p>
          © 2025 Barani Tharan. All rights reserved.
        </p>
      </footer>
      
    </div>
  );
}