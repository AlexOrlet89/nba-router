import React, { useEffect, useState } from 'react';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/`);
      const results = await res.json();
      setCharacters(results.results);
      setLoading(false);
    };
    fetchCharacters();
  }, []);
  console.log(characters);

  return (
    <>
      <div>CharacterList</div>
      {loading ? (
        <label>Loading...</label>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
