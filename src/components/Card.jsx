import React, { useEffect, useState } from "react";

const getLoadingCompontent = ()=>{
  return (
    <div className="loading-container">
    </div>
  );
}

const getErrorContainer = (message, onRetry)=>{
  return (
    <div className="card">
      <h2>Error!</h2>
      <img src={require('../assets/refresh.png')} alt="" />
      <p>{message}</p>
      <button onClick={onRetry}>Retry!</button>
    </div>
  );
}

export default function Card({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setError] = useState("");
  useEffect(() => {
    if(isLoading){
      fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPokemon(data);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
    }
  }, [id, isLoading]);
  return pokemon !== null ? (
    <div className="card">
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <h3>Type: {pokemon.types[0].type.name}</h3>
    </div>
  ) : isLoading ? (
    getLoadingCompontent()
  ) : (
    getErrorContainer(errorMessage,()=>{setLoading(true)})
  );
}
