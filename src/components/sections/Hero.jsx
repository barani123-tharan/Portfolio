import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

// --- CRITICAL FIX: Image Path Corrected to the new profile pic file name ---
const profileImage = '/1000285236 (2).jpg'; // The new desired profile picture
// --------------------------------------------------------------------------------

const Hero = () => {

  // 🛠️ HELPER: This forces the correct icons on the Home Page too
  const getIconPath = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";
      case 'linkedin':
        return "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";
      case 'instagram':
        return "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z";
      case 'whatsapp':
        return "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z";
      default:
        return "";
    }
  };

  const socialIconsLeft = ['linkedin', 'whatsapp', 'instagram', 'facebook'];
  const socialIconsRight = ['github', 'website']; 

  return (
    <section id="home" className="min-h-screen flex flex-col pt-20 px-6 relative z-10">
      
      {/* Main Two-Column Layout Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start md:gap-20 py-16 flex-grow">
      
        {/* LEFT COLUMN: Profile Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 mb-10 md:mb-0 md:w-80 md:h-80 flex-shrink-0 group"
        >
          {/* Outer Glowing Blur */}
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[80px] opacity-20" />
          {/* Rotating Dashed Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] rounded-full border-2 border-dashed border-cyan-500/30"
          />
          {/* Main Image Container */}
          <div 
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/80 shadow-[0_0_40px_rgba(6,182,212,0.3)] bg-gray-900">
            {/* 🔑 CORRECTION APPLIED HERE: The new image path is used */}
            <img 
              src={profileImage} // Now '/1000285236 (2).jpg'
              alt="Profile" 
              className="w-full h-full object-cover object-[55%_20%] filter brightness-90 contrast-110"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Text & Details */}
        <div className="md:text-left text-center md:flex-grow">
          
          {/* 2. Name & Intro */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3 mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {DATA.name}
              </span>
            </h1>
            <p className="text-lg text-gray-400 font-mono mt-4">
              {DATA.roles.join('  |  ')}
            </p>
          </motion.div>

          {/* 3. Skill Badges */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 max-w-2xl mx-auto md:mx-0"
          >
            {['React Developer', 'UI/UX Enthusiast', 'Frontend Specialist', 'Creative Coder'].map((tag, i) => (
              <span 
                key={i} 
                className="px-4 py-2 rounded-full border border-cyan-500/20 text-cyan-400 text-sm font-semibold bg-cyan-950/10 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 4. Info Cards */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full max-w-lg mx-auto md:mx-0"
          >
            <div className="flex-1 flex items-center gap-4 bg-[#0a0a0a] px-5 py-3 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all group">
              <span className="text-2xl p-2 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">📍</span>
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Location</div>
                <div className="text-sm text-gray-200 font-medium">Tamil Nadu, India</div>
              </div>
            </div>

            <a href={`mailto:${DATA.email}`} className="flex-1 flex items-center gap-4 bg-[#0a0a0a] px-5 py-3 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all group cursor-pointer">
              <span className="text-2xl p-2 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">📧</span>
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Contact</div>
                <div className="text-sm text-gray-200 font-medium truncate max-w-[150px]">{DATA.email}</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* 5. Footer Social Icons (Unchanged) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="max-w-7xl mx-auto w-full border-t border-gray-800 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-10"
      >
        
        {/* Connect with me - Left Group */}
        <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-left">
          <h3 className="text-md text-gray-400 font-semibold mb-2">Connect with me</h3>
          <div className="flex justify-center md:justify-start gap-8">
            {DATA.socials.filter(s => socialIconsLeft.includes(s.name.toLowerCase())).map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={getIconPath(social.name)} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        {/* See what I'm doing - Right Group */}
        <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-left">
          <h3 className="text-md text-gray-400 font-semibold mb-2">See what I'm doing</h3>
          <div className="flex justify-center md:justify-start gap-8">
            {DATA.socials.filter(s => socialIconsRight.includes(s.name.toLowerCase())).map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={getIconPath(social.name)} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;