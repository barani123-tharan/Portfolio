import React from 'react';
import { Outlet } from 'react-router-dom'; // Uses Outlet if you use nested routes
// import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      {/* <Navbar /> */}
      
      <main className="main-content">
        {/* Render children passed to layout or Router Outlet */}
        {children ? children : <Outlet />} 
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;