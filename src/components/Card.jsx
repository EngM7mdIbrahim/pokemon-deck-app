import React, { useEffect, useState } from "react";

export default function Card({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(response=>response.json())
    .then(data=>setPokemon(data));
  }, []);
  return pokemon !== null ? <div className="card">
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h3>Type: {pokemon.types[0].type.name}</h3>
  </div> : <h2>Loading ...</h2>;
}
