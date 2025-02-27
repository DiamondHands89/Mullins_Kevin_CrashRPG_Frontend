// src/pages/Dashboard.tsx
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Dashboard: React.FC = () => {
  const { diamonds, stats } = useContext(GameContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Character Dashboard</h2>
      <p>Diamonds: {diamonds}</p>
      <ul>
        <li>Health: {stats.health}</li>
        <li>Mana: {stats.mana}</li>
        <li>Strength: {stats.strength}</li>
        <li>Agility: {stats.agility}</li>
      </ul>
    </div>
  );
};

export default Dashboard;
