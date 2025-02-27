import React, { createContext, useState, ReactNode } from 'react';

export type Stats = {
  health: number;
  mana: number;
  strength: number;
  agility: number;
};

interface GameContextProps {
  diamonds: number;
  stats: Stats;
  updateDiamonds: (delta: number) => void;
  updateStat: (stat: keyof Stats, delta: number) => void;
}

export const GameContext = createContext<GameContextProps>({
  diamonds: 0,
  stats: {
    health: 100,
    mana: 50,
    strength: 10,
    agility: 10,
  },
  updateDiamonds: () => {},
  updateStat: () => {},
});

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [diamonds, setDiamonds] = useState(0);
  const [stats, setStats] = useState<Stats>({
    health: 100,
    mana: 50,
    strength: 10,
    agility: 10,
  });

  const updateDiamonds = (delta: number) => {
    setDiamonds((prev) => prev + delta);
  };

  const updateStat = (stat: keyof Stats, delta: number) => {
    setStats((prev) => ({ ...prev, [stat]: prev[stat] + delta }));
  };

  return (
    <GameContext.Provider value={{ diamonds, stats, updateDiamonds, updateStat }}>
      {children}
    </GameContext.Provider>
  );
};