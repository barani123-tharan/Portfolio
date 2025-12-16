import React from 'react';
const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
};
export default GlassCard;