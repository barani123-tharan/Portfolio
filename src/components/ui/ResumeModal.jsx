import React from 'react';
import { motion } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose, resumeLink }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl h-[85vh] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-[#111]">
          <h3 className="text-xl font-bold text-white">My Resume</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors">✕</button>
        </div>
        
        {/* PDF Iframe */}
        <div className="flex-1 bg-gray-900 w-full h-full relative">
           <iframe src={resumeLink} className="w-full h-full border-none" title="Resume Viewer"></iframe>
        </div>

        <div className="px-6 py-4 border-t border-gray-700 bg-[#111] flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Close</button>
          <a href={resumeLink} download className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors">Download PDF</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;