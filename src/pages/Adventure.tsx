// src/pages/Adventure.tsx
import React, { useState, useContext } from 'react';
import { GameContext, Stats } from '../context/GameContext';

type Option = {
  text: string;
  nextId: number;
};

type StorySegment = {
  id: number;
  text: string;
  options: Option[];
  diamondReward?: number;
  statBonus?: { stat: keyof Stats; bonus: number };
};

const storyData: StorySegment[] = [
  {
    id: 1,
    text: "You wake up in a mysterious forest at the outskirts of Crash Land. A winding path leads north.",
    options: [
      { text: "Take the path north", nextId: 2 },
      { text: "Explore the forest", nextId: 3 },
    ],
  },
  {
    id: 2,
    text: "You follow the path and encounter a gentle river. Do you try crossing it or follow along the bank?",
    options: [
      { text: "Cross the river", nextId: 4 },
      { text: "Follow the bank", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "While exploring, you discover a hidden glade bathed in a mysterious light. Do you investigate or return to the path?",
    options: [
      { text: "Investigate the glade", nextId: 6 },
      { text: "Return to the path", nextId: 2 },
    ],
  },
  {
    id: 4,
    text: "You bravely cross the river and find a small cabin. The friendly inhabitants reward your courage.",
    options: [
      { text: "Proceed to the crossroads", nextId: 7 },
    ],
    diamondReward: 20,
  },
  {
    id: 5,
    text: "Following the bank, you meet a wandering merchant who gifts you a small pouch of diamonds.",
    options: [
      { text: "Proceed to the crossroads", nextId: 7 },
    ],
    diamondReward: 10,
  },
  {
    id: 6,
    text: "In the hidden glade, a surge of energy courses through you, strengthening your health.",
    options: [
      { text: "Proceed to the crossroads", nextId: 7 },
    ],
    statBonus: { stat: "health", bonus: 20 },
  },
  {
    id: 7,
    text: "You arrive at a grand crossroads in Crash Land. The journey continues, and more adventures await.",
    options: [
      { text: "Restart adventure", nextId: 1 },
    ],
  },
];

const Adventure: React.FC = () => {
  const { updateDiamonds, updateStat } = useContext(GameContext);
  const [currentId, setCurrentId] = useState<number>(1);
  const [visitedSegments, setVisitedSegments] = useState<number[]>([]);

  const currentSegment = storyData.find(segment => segment.id === currentId);
  if (!currentSegment) return <div>Story not found</div>;

  // Award rewards (diamonds or stat bonuses) only upon first visit
  if (!visitedSegments.includes(currentId)) {
    if (currentSegment.diamondReward) {
      updateDiamonds(currentSegment.diamondReward);
    }
    if (currentSegment.statBonus) {
      updateStat(currentSegment.statBonus.stat, currentSegment.statBonus.bonus);
    }
    setVisitedSegments([...visitedSegments, currentId]);
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Adventure in Crash Land</h2>
      <p>{currentSegment.text}</p>
      <div>
        {currentSegment.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setCurrentId(option.nextId)}
            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Adventure;
