import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages/components
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Dashboard from '../pages/Dashboard';
// import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      
      {/* 404 Route */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;