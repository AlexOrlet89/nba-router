import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('1');
  const array = Array.from(Array(42), (_, x) => x + 1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const results = await res.json();
      setCharacters(results.results);
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);
  // console.log(characters);

  const handlePage = (select) => {
    setPage(select);
  };

  return (
    <>
      <h2>Rick and Morty Characters</h2>
      <select onChange={(e) => handlePage(e.target.value)}>
        {array.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
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
