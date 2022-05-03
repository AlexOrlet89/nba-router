import React, { useEffect, useState } from 'react';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const results = await res.json();
      setCharacters(results.results);
    };
    fetchCharacters();
  }, []);
  console.log(characters);

  return <div>CharacterList</div>;
}
