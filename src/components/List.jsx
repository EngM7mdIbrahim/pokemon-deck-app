import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function List() {
    const [pokemons,setAllPokemons] = useState(null);
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(response=>response.json())
        .then(data=>setAllPokemons(data));
    },[])
  return (
    <div className="list-container">
        {pokemons!==null ? pokemons.results.map(pokemon=>{
            const urlTokens = pokemon.url.split('/');
            const id = urlTokens[urlTokens.length-2];
            return <Card key={pokemon.url} id={id}/>
        }): <h2>Loading...</h2>}
    </div>
  )
  
}
