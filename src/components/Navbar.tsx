import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" style={{ padding: '1rem', backgroundColor: '#333' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
      <Link to="/adventure" style={{ color: '#fff', marginRight: '1rem' }}>Adventure</Link>
      <Link to="/dashboard" style={{ color: '#fff', marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/upgrade" style={{ color: '#fff', marginRight: '1rem' }}>Upgrade</Link>
    </nav>
  );
};

export default Navbar;