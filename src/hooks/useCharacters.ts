import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Character {
  _id: string;
  name: string;
  class: string;
  level: number;
  stats: {
    health: number;
    mana: number;
    strength: number;
    agility: number;
  };
}

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/characters') 
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch characters.');
        setLoading(false);
      });
  }, []);

  return { characters, loading, error };
}
