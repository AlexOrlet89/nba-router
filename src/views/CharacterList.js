import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  // console.log(characters);

  return (
    <>
      <div>CharacterList</div>
      {loading ? (
        <label>Loading...</label>
      ) : (
        <ul>
          {characters.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <li>{character.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
