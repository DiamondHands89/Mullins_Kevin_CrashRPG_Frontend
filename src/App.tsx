import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Adventure from './pages/Adventure';
import Dashboard from './pages/Dashboard';
import Upgrade from './pages/Upgrade';
import Login from './pages/LoginPage';
import CharactersDashboard from './pages/CharactersDashboard'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/characters" element={<CharactersDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/characters-dashboard" element={<CharactersDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;