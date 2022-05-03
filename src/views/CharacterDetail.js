import React, { useEffect, useState } from 'react';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/523`);
      const results = await res.json();
      setCharacter(results);
    };
    fetchCharacter();
  }, []);
  console.log(character);
  return (
    <>
      <div>CharacterDetail</div>
      <img src={character.image}></img>
    </>
  );
}
