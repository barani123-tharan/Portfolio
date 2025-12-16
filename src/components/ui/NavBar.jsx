import React from 'react';

const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* START: Updated Logo/Brand Text */}
        <div 
          className="flex flex-col text-left cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => scrollToSection('home')}
        >
          <span className="text-xl font-extrabold text-white leading-none">
            Barani Tharan
          </span>
          <span className="text-xs text-gray-400 font-medium tracking-wider">
            UI • UX • Developer
          </span>
        </div>
        {/* END: Updated Logo/Brand Text */}

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;