import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/adventure">Adventure</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upgrade">Upgrade</Link>
      <Link to="/login">Login</Link>
      <Link to="/characters-dashboard">Characters</Link>
      
    </nav>
  );
};

export default Navbar;
