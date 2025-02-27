import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Adventure from './pages/Adventure';
import Dashboard from './pages/Dashboard';
import Upgrade from './pages/Upgrade';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </Router>
  );
};

export default App;