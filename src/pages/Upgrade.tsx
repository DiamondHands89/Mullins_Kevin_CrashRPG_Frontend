import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Upgrade: React.FC = () => {
  const { diamonds, stats, updateDiamonds, updateStat } = useContext(GameContext);

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
    <div style={{ padding: '1rem' }}>
      <h2>Upgrade Character Stats</h2>
      <p>You have {diamonds} diamonds.</p>
      <ul>
        {upgradeOptions.map((option, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <span>
              {option.label}: Current {stats[option.stat as keyof typeof stats]} | Upgrade cost: {option.cost} diamonds&nbsp;
              (Bonus: +{option.bonus})
            </span>
            <button
              style={{ marginLeft: '1rem' }}
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