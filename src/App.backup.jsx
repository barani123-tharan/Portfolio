import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ==========================================
// ✅ YOUR DATA
// ==========================================



// ==========================================
// ✨ COMPONENTS
// ==========================================

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink(!blink), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="text-blue-500 font-mono">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

const BackgroundOrbs = () => (
  <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
    <motion.div 
      animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
    />
  </div>
);

const NavBar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-black/50 backdrop-blur-lg border-b border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-bold text-xl text-white tracking-wider flex items-center gap-2">
        <span className="text-blue-500 text-2xl">⚡</span> BARANI
      </div>
      <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <div className="flex gap-6 text-sm font-medium text-gray-300 min-w-max px-2">
          {['Home', 'About', 'Resume', 'Skills', 'Certifications', 'Projects', 'Gallery', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // ✅ STATE FOR RESUME POPUP
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 font-sans overflow-x-hidden">
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]" style={{ scaleX }} />
      
      <BackgroundOrbs />
      <NavBar />

      {/* ✅ RESUME MODAL POPUP */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowResume(false)} // Close when clicking outside
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()} // Prevent close when clicking inside
            >
              {/* Header of Modal */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-[#111]">
                <h3 className="text-xl font-bold text-white">My Resume</h3>
                <button 
                  onClick={() => setShowResume(false)}
                  className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* PDF Viewer (Iframe) */}
              <div className="flex-1 bg-gray-900 w-full h-full relative">
                <iframe 
                  src={DATA.resumeLink} 
                  className="w-full h-full border-none"
                  title="Resume Viewer"
                >
                </iframe>
                {/* Fallback text if browser blocks pdf */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-500">
                  Loading PDF...
                </div>
              </div>

              {/* Footer of Modal */}
              <div className="px-6 py-4 border-t border-gray-700 bg-[#111] flex justify-end gap-4">
                <button 
                  onClick={() => setShowResume(false)} 
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a 
                  href={DATA.resumeLink} 
                  download 
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative pt-32">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-lg h-[500px] md:h-[650px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-40"></div>
              <div className="relative w-full h-full rounded-[2rem] border border-gray-800 bg-[#0a0a0a] overflow-hidden shadow-2xl">
                 <img 
                  src="/1000285236 (2).jpg" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/500x700?text=Photo+Missing"; }}
                  alt="Barani Tharan" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 space-y-8 text-center md:text-left"
          >
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
                HELLO WORLD
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-4">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{DATA.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-400 h-8 mb-6">
                <Typewriter words={DATA.roles} />
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 border-l-4 border-blue-500/30 pl-6">
              {DATA.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <a href="#contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl transition-all shadow-lg hover:scale-105">
                Contact Me
              </a>
              {/* Updated Resume Button to trigger Modal */}
              <button onClick={() => setShowResume(true)} className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl font-medium hover:bg-white/5 transition-colors">
                See Resume
              </button>
            </div>

            <div className="pt-8 border-t border-gray-800 mt-8">
              <div className="flex gap-6 justify-center md:justify-start">
                {DATA.socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" className={`w-6 h-6 fill-gray-500 ${s.color}`}>
                    <svg viewBox="0 0 24 24"><path d={s.path}/></svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
               I am a passionate developer from <span className="text-white font-medium">{DATA.location}</span>. 
               My journey in Computer Science began in 2024. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
        </div>
      </section>

      {/* 3. RESUME SECTION */}
      <section id="resume" className="py-16 px-6 bg-[#0c0c0c] border-y border-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h2 className="text-3xl font-bold text-white mb-2">My Resume</h2>
              <p className="text-gray-400">View online or download my CV to view my full professional history.</p>
           </div>
           
           <div className="flex gap-4">
             {/* Preview Button */}
             <button 
               onClick={() => setShowResume(true)}
               className="px-6 py-4 border border-gray-700 hover:bg-gray-800 text-gray-300 font-bold rounded-xl transition-all flex items-center gap-2"
             >
               👁️ Preview
             </button>
             
             {/* Download Button */}
             <a href={DATA.resumeLink} download className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 transition-all flex items-center gap-2">
               <span>📄 Download CV</span>
             </a>
           </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION (MODERN GRID) */}
      <section id="skills" className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
             <p className="text-gray-400">Tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {DATA.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="group relative bg-[#111] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-all hover:-translate-y-2"
                >
                   {/* Background Glow on Hover */}
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${skill.bg}`}></div>
                   
                   {/* Icon */}
                   <div className={`w-12 h-12 ${skill.color} relative z-10 transition-transform duration-300 group-hover:scale-110`}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d={skill.icon} />
                      </svg>
                   </div>
                   
                   {/* Name */}
                   <h3 className="font-bold text-gray-300 z-10 group-hover:text-white transition-colors">{skill.name}</h3>
                   
                   {/* Tiny Progress Bar */}
                   <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden z-10">
                      <div 
                        className={`h-full ${skill.color.replace('text-', 'bg-')}`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                   </div>
                   
                   <span className="text-xs text-gray-500 font-mono z-10">{skill.level}%</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS SECTION (PDF STYLE) */}
      <section id="certifications" className="py-24 px-6 bg-[#080808]">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Certifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {DATA.certifications.map((cert, i) => (
                 <a 
                   key={i} 
                   href={cert.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group relative bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-full"
                 >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                    
                    <div>
                      {/* Icon Header */}
                      <div className="flex justify-between items-start mb-6">
                         <div className={`p-3 rounded-lg bg-gray-900 border border-gray-800 ${cert.color}`}>
                            {/* PDF Icon */}
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                         </div>
                         <div className="p-2 rounded-full bg-gray-900 text-gray-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                         </div>
                      </div>

                      {/* Text Content */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{cert.issuer}</p>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-800/50 flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                       <span>View PDF Document</span>
                       <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                 </a>
               ))}
            </div>
         </div>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {DATA.projects.map((project, idx) => (
              <div key={idx} className="bg-[#0e0e0e] rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-colors group">
                <div className="text-4xl mb-6 bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-900 text-blue-400 rounded border border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section id="gallery" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-4xl font-bold mb-16 text-center text-white">My Gallery</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {DATA.gallery.map((img, i) => (
                 <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative border border-gray-800 bg-[#111]">
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                    <img 
                      src={img} 
                      alt={`Gallery ${i+1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400?text=Check+File+Name"; }}
                    />
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. BLOG SECTION */}
      <section id="blog" className="py-24 px-6 bg-black">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-4xl font-bold mb-16 text-center text-white">Latest Blogs</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {DATA.blogs.map((blog, i) => (
                 <article key={i} className="bg-[#111] rounded-2xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all cursor-pointer">
                    <span className="text-pink-500 text-xs font-mono tracking-widest">{blog.date}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-pink-400">{blog.title}</h3>
                    <p className="text-gray-500 mb-6">{blog.excerpt}</p>
                    <span className="text-white text-sm font-bold border-b border-pink-500 pb-1">Read Article &rarr;</span>
                 </article>
              ))}
           </div>
         </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <footer id="contact" className="py-24 relative overflow-hidden bg-[#050505] border-t border-gray-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
             <p className="text-gray-400 text-lg">Have a project in mind or just want to say hi?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
               <a href={`mailto:${DATA.email}`} className="block p-8 rounded-2xl bg-[#0b0b0b] border border-gray-800 hover:border-blue-500 transition-all group">
                 <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">✉️</div>
                    <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">Email</span>
                 </div>
                 <div className="text-xl md:text-2xl font-bold text-white break-all">{DATA.email}</div>
               </a>
               <a href={`tel:${DATA.phone}`} className="block p-8 rounded-2xl bg-[#0b0b0b] border border-gray-800 hover:border-green-500 transition-all group">
                 <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">📞</div>
                    <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">Phone</span>
                 </div>
                 <div className="text-xl md:text-2xl font-bold text-white">{DATA.phone}</div>
               </a>
            </div>

            <div className="bg-[#0b0b0b] p-8 rounded-2xl border border-gray-800">
               <h3 className="text-white font-bold mb-6 text-xl">Social Profiles</h3>
               <div className="grid grid-cols-2 gap-4">
                 {DATA.socials.map((s, i) => (
                   <a key={i} href={s.url} target="_blank" rel="noreferrer" className={`flex flex-col items-center justify-center p-6 rounded-xl bg-[#111] border border-gray-800 transition-all duration-300 group ${s.bg || ''}`}>
                     <svg className={`w-8 h-8 mb-3 fill-gray-400 transition-colors ${s.color}`} viewBox="0 0 24 24"><path d={s.path}/></svg>
                     <span className={`text-sm font-medium text-gray-400 transition-colors ${s.color}`}>{s.name}</span>
                   </a>
                 ))}
               </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} {DATA.name}. Built with React & Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}