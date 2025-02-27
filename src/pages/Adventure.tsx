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
    text: "You wake up in a mysterious forest at the outskirts of Crash Land. A winding path leads north, while the dense forest beckons you to explore deeper.",
    options: [
      { text: "Take the path north", nextId: 2 },
      { text: "Explore the forest", nextId: 3 },
    ],
  },
  {
    id: 2,
    text: "Following the path, you come upon a gentle river. Do you try to cross the river or follow along its bank?",
    options: [
      { text: "Cross the river", nextId: 4 },
      { text: "Follow the bank", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "Deep in the forest, you stumble upon a hidden glade bathed in an eerie glow. Do you investigate the glade or return to the path?",
    options: [
      { text: "Investigate the glade", nextId: 6 },
      { text: "Return to the path", nextId: 2 },
    ],
  },
  {
    id: 4,
    text: "You bravely cross the river and discover a quaint cabin. The friendly inhabitants commend your courage.",
    options: [{ text: "Proceed to the crossroads", nextId: 7 }],
    diamondReward: 20,
  },
  {
    id: 5,
    text: "Following the river bank, you meet a wandering merchant who gifts you a handful of diamonds for your kindness.",
    options: [{ text: "Proceed to the crossroads", nextId: 7 }],
    diamondReward: 10,
  },
  {
    id: 6,
    text: "In the hidden glade, a surge of energy flows through you, dramatically boosting your vitality.",
    options: [{ text: "Proceed to the crossroads", nextId: 7 }],
    statBonus: { stat: "health", bonus: 20 },
  },
  {
    id: 7,
    text: "You reach a grand crossroads in Crash Land that offers many paths forward.",
    options: [
      { text: "Explore the bustling marketplace", nextId: 8 },
      { text: "Enter the abandoned castle", nextId: 9 },
      { text: "Head toward the rugged mountains", nextId: 10 },
      { text: "Return to the forest", nextId: 1 },
    ],
  },
  {
    id: 8,
    text: "At the marketplace, vibrant stalls and curious locals surround you. A merchant looks troubled and in need of help.",
    options: [
      { text: "Help the merchant deliver goods", nextId: 11 },
      { text: "Browse the stalls and return", nextId: 7 },
    ],
  },
  {
    id: 9,
    text: "The abandoned castle looms ominously. Its empty halls whisper secrets of the past.",
    options: [
      { text: "Confront the spectral guardian", nextId: 12 },
      { text: "Retreat for safety", nextId: 7 },
    ],
  },
  {
    id: 10,
    text: "The rugged mountains challenge your resolve. Ahead lies a steep and treacherous climb.",
    options: [
      { text: "Brave the steep slopes", nextId: 13 },
      { text: "Search for alternate routes", nextId: 14 },
    ],
  },
  {
    id: 11,
    text: "You assist the merchant in safely delivering his goods through dangerous paths. Grateful, he rewards you generously.",
    options: [{ text: "Return to the marketplace", nextId: 8 }],
    diamondReward: 15,
  },
  {
    id: 12,
    text: "You confront the spectral guardian in a fierce battle. Emerging victorious, you feel stronger from the trial.",
    options: [{ text: "Proceed to the castle courtyard", nextId: 15 }],
    statBonus: { stat: "strength", bonus: 5 },
  },
  {
    id: 13,
    text: "Your determined climb reveals a hidden cave filled with ancient treasures.",
    options: [
      { text: "Explore the cave", nextId: 16 },
      { text: "Return to the mountain base", nextId: 10 },
    ],
    diamondReward: 25,
  },
  {
    id: 14,
    text: "Taking an alternate, safer path, you avoid danger but also bypass potential rewards.",
    options: [{ text: "Return to the mountain base", nextId: 10 }],
  },
  {
    id: 15,
    text: "In the castle courtyard, you discover relics that enhance your mystical powers.",
    options: [{ text: "Head back to the crossroads", nextId: 7 }],
    diamondReward: 10,
    statBonus: { stat: "mana", bonus: 10 },
  },
  {
    id: 16,
    text: "Inside the hidden cave, you find a sparkling stream of diamonds alongside enchanted runes that boost your agility.",
    options: [{ text: "Fill your pouch and return to the mountain trails", nextId: 10 }],
    diamondReward: 30,
    statBonus: { stat: "agility", bonus: 5 },
  },
];

const Adventure: React.FC = () => {
  const { updateDiamonds, updateStat } = useContext(GameContext);
  const [currentId, setCurrentId] = useState<number>(1);
  // Track visited segments so rewards (diamondReward/statBonus) happen only once per segment
  const [visitedSegments, setVisitedSegments] = useState<number[]>([]);

  const currentSegment = storyData.find(segment => segment.id === currentId);
  if (!currentSegment) return <div>Story not found</div>;

  // Award rewards only on first visit
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
