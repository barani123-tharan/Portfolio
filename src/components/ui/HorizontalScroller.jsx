import React from 'react';

const HorizontalScroller = ({ children, title = "Scrollable Content" }) => {
  return (
    <div className="py-6 overflow-hidden">
      
      {/* Optional Title - You can uncomment this if you want a title above the scroller */}
      {/*
      <h3 className="text-2xl font-bold text-white mb-4 ml-6 md:ml-0">
        {title}
      </h3>
      */}

      {/* The main scroll container */}
      <div 
        className="flex space-x-6 px-6 pb-4 overflow-x-scroll scrolling-touch 
                   // Hide the default scrollbar for a cleaner look on most modern browsers
                   scrollbar-hide 
                   // Style the scrollbar for Webkit browsers (like Chrome/Safari)
                   // You'll need to add a custom Tailwind utility for scrollbar-hide in your CSS config
                   // For now, this class acts as a reminder that the scrollbar will be visible in Firefox
                   "
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroller;