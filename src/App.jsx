import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Moon, Sun, Code2 } from 'lucide-react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

// --- IMPORTS ---
import { PORTFOLIO_DATA } from './data/portfolioData';
import { useTypewriter } from './hooks/useTypewriter';
import GlassCard from './components/common/GlassCard';
import Section from './components/common/Section';

// --- RESUME PDF COMPONENT ---
const ResumeDocument = ({ data }) => {
  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    header: { fontSize: 24, marginBottom: 10, textAlign: 'center' },
    section: { margin: 10, padding: 10 },
    text: { marginBottom: 5 }
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Barani Tharan</Text>
          <Text style={{textAlign: 'center', color: 'grey'}}>Web Developer • App Builder</Text>
        </View>
        <View style={styles.section}>
          <Text style={{fontSize: 18, marginBottom: 5}}>Experience</Text>
          {data.timeline.map((t, i) => (
            <Text key={i} style={styles.text}>{t.year} - {t.title}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const cursorRef = useRef(null);
  const subheading = useTypewriter("Web Developer • App Builder • CSE Student", 100);

  // Toggle Dark Mode Class on Body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Cursor Logic
  useEffect(() => {
    const updateCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--x', `${e.clientX}px`);
        cursorRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  // Resume Download Handler
  const handleDownloadResume = async () => {
    const blob = await pdf(<ResumeDocument data={PORTFOLIO_DATA} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Barani_Tharan_Resume.pdf';
    link.click();
  };

  return (
    <div className={`font-sans ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="cursor-glow fixed inset-0 pointer-events-none z-0 hidden md:block"
      />
      
      <main className="bg-slate-50 dark:bg-dark min-h-screen transition-colors duration-300 relative z-10">
        
        {/* NAV */}
        <nav className="fixed w-full z-50 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            BT.
          </span>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} className="text-slate-800" />}
            </button>
            <button 
              onClick={handleDownloadResume}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Download size={16} /> Resume
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight dark:text-white text-slate-900">
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-x">
                Barani Tharan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light h-8 mb-8">
              {subheading}<span className="animate-blink">|</span>
            </p>
            
            <div className="flex gap-4 justify-center">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-dark rounded-full font-bold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all"
              >
                View Work
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-slate-300 dark:border-white/20 rounded-full font-medium hover:bg-slate-200 dark:hover:bg-white/5 transition-all text-slate-900 dark:text-white"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <Section id="skills" className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white text-slate-900">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8 bg-white/40 dark:bg-white/5 border-slate-200 dark:border-white/10">
               <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 dark:text-white text-slate-900">
                 <Code2 className="text-primary" /> Languages
               </h3>
               <div className="space-y-4">
                 {PORTFOLIO_DATA.skills.map((skill) => (
                   <div key={skill.name}>
                     <div className="flex justify-between mb-1 text-sm dark:text-slate-300 text-slate-700">
                       <span>{skill.name}</span>
                       <span>{skill.level}%</span>
                     </div>
                     <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         transition={{ duration: 1, delay: 0.2 }}
                         className={`h-full ${skill.color}`}
                       />
                     </div>
                   </div>
                 ))}
               </div>
            </GlassCard>
            <div className="grid grid-cols-2 gap-4">
               {['React', 'Next.js', 'Node', 'Firebase', 'Tailwind', 'Git'].map((tech) => (
                 <GlassCard key={tech} className="flex items-center justify-center p-4 hover:border-primary/50 bg-white/40 dark:bg-white/5 border-slate-200 dark:border-white/10">
                    <span className="font-semibold dark:text-slate-300 text-slate-700">{tech}</span>
                 </GlassCard>
               ))}
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white text-slate-900">Selected Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <GlassCard key={index} className="overflow-hidden group bg-white/40 dark:bg-white/5 border-slate-200 dark:border-white/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} className="p-2 bg-white/20 rounded-full hover:bg-white/40 backdrop-blur-sm text-white"><Github size={20} /></a>
                    <a href={project.live} className="p-2 bg-white/20 rounded-full hover:bg-white/40 backdrop-blur-sm text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white text-slate-900">Journey</h2>
          <div className="relative border-l border-slate-300 dark:border-slate-700 ml-4 md:ml-0">
            {PORTFOLIO_DATA.timeline.map((item, index) => (
              <div key={index} className="mb-10 ml-10 md:ml-0 md:pl-8 relative group">
                <span className="absolute -left-[45px] top-1 h-3 w-3 rounded-full bg-primary border-4 border-slate-50 dark:border-dark group-hover:scale-150 transition-transform"></span>
                <GlassCard className="p-6 relative bg-white/40 dark:bg-white/5 border-slate-200 dark:border-white/10">
                  <span className="text-sm text-primary font-mono mb-1 block">{item.year}</span>
                  <h3 className="text-lg font-bold dark:text-white text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{item.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white text-slate-900">Let's Build Something</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Open for freelance opportunities and coffee chats.</p>
          
          <GlassCard className="p-8 text-left bg-white/40 dark:bg-white/5 border-slate-200 dark:border-white/10">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out!"); }}>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-slate-300 text-slate-700">Name</label>
                <input type="text" required className="w-full bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-slate-300 text-slate-700">Email</label>
                <input type="email" required className="w-full bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-slate-300 text-slate-700">Message</label>
                <textarea rows="4" required className="w-full bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white hover:opacity-90 transform active:scale-95 transition-all">
                Send Message
              </button>
            </form>
          </GlassCard>
        </Section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-slate-500 border-t border-slate-200 dark:border-white/5">
          <div className="flex justify-center gap-6 mb-4">
             <a href="#" className="hover:text-primary transition-colors"><Github /></a>
             <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
             <a href="#" className="hover:text-primary transition-colors"><Mail /></a>
          </div>
          <p>© 2025 Barani Tharan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}