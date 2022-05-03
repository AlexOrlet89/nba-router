import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const results = await res.json();
      setCharacter(results);
    };
    fetchCharacter();
    // console.log(character);
  }, []);

  // console.log(params);

  return (
    <>
      <div>CharacterDetail</div>
      <img src={character.image}></img>
    </>
  );
}
