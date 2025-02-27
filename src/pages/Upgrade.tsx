import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Upgrade: React.FC = () => {
  const { diamonds, stats, updateDiamonds, updateStat } = useContext(GameContext);

  // Upgrade options defined as specified:
  // Health: Upgrade cost 30 diamonds, Bonus +10  
  // Mana: Upgrade cost 25 diamonds, Bonus +5  
  // Strength: Upgrade cost 40 diamonds, Bonus +5  
  // Agility: Upgrade cost 35 diamonds, Bonus +5
  const upgradeOptions = [
    { stat: 'health', label: 'Health', cost: 30, bonus: 10 },
    { stat: 'mana', label: 'Mana', cost: 25, bonus: 5 },
    { stat: 'strength', label: 'Strength', cost: 40, bonus: 5 },
    { stat: 'agility', label: 'Agility', cost: 35, bonus: 5 },
  ];

  const handleUpgrade = (stat: string, cost: number, bonus: number) => {
    if (diamonds >= cost) {
      updateDiamonds(-cost);
      updateStat(stat as keyof typeof stats, bonus);
    } else {
      alert("Not enough diamonds!");
    }
  };

  return (
    <div className="page-container">
      <h2 className="oldschool-text">Upgrade Character Stats</h2>
      <p className="oldschool-text">You have {diamonds} diamonds.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {upgradeOptions.map((option, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <span className="oldschool-text">
              {option.label}: Current {stats[option.stat as keyof typeof stats]} | Upgrade cost: {option.cost} diamonds (Bonus: +{option.bonus})
            </span>
            <button
              className="button"
              onClick={() => handleUpgrade(option.stat, option.cost, option.bonus)}
            >
              Upgrade {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upgrade;
