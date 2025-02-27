import React from 'react';
import { useCharacters } from '../hooks/useCharacters';

const CharactersDashboard: React.FC = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) return <div className="page-container"><p>Loading characters...</p></div>;
  if (error) return <div className="page-container"><p>{error}</p></div>;

  return (
    <div className="page-container">
      <h2>Characters Dashboard</h2>
      <ul>
        {characters.map(character => (
          <li key={character._id}>
            <strong>{character.name}</strong> – {character.class}, Level {character.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersDashboard;
