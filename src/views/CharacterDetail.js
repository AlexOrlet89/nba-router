import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const results = await res.json();
      setCharacter(results);
    };
    fetchCharacter();
  }, []);

  console.log(character);
  // console.log(params);

  const historyPop = () => history.goBack();

  return (
    <>
      {/* <Link to="">Back to list</Link> */}
      <button onClick={() => historyPop()}>Back</button>
      <h2>{character.name}</h2>
      <h4>
        {character.status} {character.species}
      </h4>

      <img src={character.image}></img>
    </>
  );
}
