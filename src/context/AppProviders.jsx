import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './AuthContext'; // Example import
// import { ThemeProvider } from './ThemeContext'; // Example import

const AppProviders = ({ children }) => {
  return (
    // Wrap all your providers here. Order matters!
    <Router>
      {/* <AuthProvider> */}
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      {/* </AuthProvider> */}
    </Router>
  );
};

export default AppProviders;